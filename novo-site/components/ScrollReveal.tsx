"use client";

import { useEffect } from "react";

const revealSelector = [
  ".section",
  ".investor-section",
  ".contact-section",
].join(",");

function isInViewport(element: HTMLElement) {
  const rect = element.getBoundingClientRect();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  return rect.top < viewportHeight * 0.9 && rect.bottom > viewportHeight * 0.12;
}

function revealHashTarget() {
  const id = window.location.hash.slice(1);

  if (!id) {
    return;
  }

  const target = document.getElementById(decodeURIComponent(id));
  const section = target?.closest<HTMLElement>(revealSelector);
  section?.setAttribute("data-scroll-visible", "true");
}

export function ScrollReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let animationFrame = 0;

    if (!elements.length) {
      return;
    }

    function syncVisibleSections() {
      elements.forEach((element) => {
        if (isInViewport(element)) {
          element.dataset.scrollVisible = "true";
        }
      });
      revealHashTarget();
    }

    function scheduleSync() {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(syncVisibleSections);
    }

    elements.forEach((element) => {
      element.dataset.scrollReveal = "true";
      element.dataset.scrollDirection = "down";

      if (reduceMotion || isInViewport(element)) {
        element.dataset.scrollVisible = "true";
      }
    });
    revealHashTarget();

    document.body.classList.add("scroll-reveal-ready");

    if (reduceMotion) {
      return () => {
        document.body.classList.remove("scroll-reveal-ready");
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;

          if (entry.isIntersecting) {
            target.dataset.scrollVisible = "true";
            return;
          }

          target.dataset.scrollDirection = entry.boundingClientRect.top < 0 ? "up" : "down";
          delete target.dataset.scrollVisible;
        });
      },
      {
        root: null,
        rootMargin: "-10% 0px -12% 0px",
        threshold: 0.08,
      },
    );

    elements.forEach((element) => observer.observe(element));
    window.addEventListener("scroll", scheduleSync, { passive: true });
    window.addEventListener("resize", scheduleSync);
    window.addEventListener("hashchange", scheduleSync);
    const firstSync = window.setTimeout(syncVisibleSections, 120);
    const secondSync = window.setTimeout(syncVisibleSections, 420);

    return () => {
      window.clearTimeout(firstSync);
      window.clearTimeout(secondSync);
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", scheduleSync);
      window.removeEventListener("resize", scheduleSync);
      window.removeEventListener("hashchange", scheduleSync);
      observer.disconnect();
      document.body.classList.remove("scroll-reveal-ready");
      elements.forEach((element) => {
        delete element.dataset.scrollReveal;
        delete element.dataset.scrollDirection;
        delete element.dataset.scrollVisible;
      });
    };
  }, []);

  return null;
}
