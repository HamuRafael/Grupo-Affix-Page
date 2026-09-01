"use client";

import { useEffect } from "react";

const TILT_SELECTOR = ".benefit-card, .solution-card, .detail-card, .article-card, .fidc-steps li";
const MAX_TILT = 5;
const MAGNET_RANGE = 7;

export function Interactions() {
  useEffect(() => {
    document.body.classList.add("interactions-ready");

    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Scroll storytelling: os passos do processo acendem conforme entram na tela.
    const steps = Array.from(document.querySelectorAll<HTMLElement>(".process-steps li"));
    let observer: IntersectionObserver | undefined;
    if (steps.length) {
      if (reducedMotion || !("IntersectionObserver" in window)) {
        steps.forEach((step) => step.classList.add("is-active"));
      } else {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("is-active");
                observer?.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.55 },
        );
        steps.forEach((step) => observer?.observe(step));
      }
    }

    if (!finePointer || reducedMotion) {
      return () => {
        observer?.disconnect();
        document.body.classList.remove("interactions-ready");
      };
    }

    // Tilt 3D nos cards e magnetismo nos botões.
    let tiltedCard: HTMLElement | null = null;
    let magnetButton: HTMLElement | null = null;

    function resetTilt() {
      if (tiltedCard) {
        tiltedCard.style.transform = "";
        tiltedCard = null;
      }
    }

    function resetMagnet() {
      if (magnetButton) {
        magnetButton.style.transform = "";
        magnetButton = null;
      }
    }

    function onPointerMove(event: PointerEvent) {
      const origin = event.target instanceof Element ? event.target : null;

      const button = origin?.closest<HTMLElement>(".button") ?? null;
      if (button !== magnetButton) resetMagnet();
      if (button) {
        const rect = button.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width - 0.5) * MAGNET_RANGE;
        const y = ((event.clientY - rect.top) / rect.height - 0.5) * MAGNET_RANGE;
        button.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`;
        magnetButton = button;
        resetTilt();
        return;
      }

      const card = origin?.closest<HTMLElement>(TILT_SELECTOR) ?? null;
      if (card !== tiltedCard) resetTilt();
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(900px) rotateX(${(-py * MAX_TILT).toFixed(2)}deg) rotateY(${(px * MAX_TILT).toFixed(2)}deg) translateY(-6px)`;
      tiltedCard = card;
    }

    function onPointerLeave() {
      resetTilt();
      resetMagnet();
    }

    document.addEventListener("pointermove", onPointerMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onPointerLeave);

    return () => {
      observer?.disconnect();
      document.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("pointerleave", onPointerLeave);
      resetTilt();
      resetMagnet();
      document.body.classList.remove("interactions-ready");
    };
  }, []);

  return null;
}
