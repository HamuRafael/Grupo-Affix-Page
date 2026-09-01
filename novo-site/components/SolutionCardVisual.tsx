"use client";

import { useEffect, useRef, useState } from "react";

// Fundo do card de solução carregado sob demanda: a imagem só é baixada no
// primeiro mouseenter/focus/toque no card. Sem isto, as 8 imagens de fundo
// entravam no carregamento inicial da home mesmo sem ninguém passar o mouse.
export function SolutionCardVisual({ image }: { image: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [pronta, setPronta] = useState(false);

  useEffect(() => {
    const visual = ref.current;
    const card = visual?.closest(".solution-card");
    if (!card) return;

    let solicitada = false;

    function carregar() {
      if (solicitada) return;
      solicitada = true;
      const img = new window.Image();
      img.onload = () => setPronta(true);
      img.src = image;
    }

    card.addEventListener("mouseenter", carregar, { once: true });
    card.addEventListener("focusin", carregar, { once: true });
    card.addEventListener("touchstart", carregar, { once: true, passive: true });
    return () => {
      card.removeEventListener("mouseenter", carregar);
      card.removeEventListener("focusin", carregar);
      card.removeEventListener("touchstart", carregar);
    };
  }, [image]);

  return (
    <span
      className="solution-card-visual"
      ref={ref}
      style={pronta ? { backgroundImage: `url(${image})` } : undefined}
      aria-hidden="true"
    />
  );
}
