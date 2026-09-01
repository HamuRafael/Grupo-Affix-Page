"use client";

import Link from "next/link";
import { useCallback, useSyncExternalStore } from "react";

export function CookieConsent({ enabled }: { enabled: boolean }) {
  const subscribe = useCallback((onStoreChange: () => void) => {
    window.addEventListener("storage", onStoreChange);
    window.addEventListener("affix:cookie-consent", onStoreChange);
    return () => {
      window.removeEventListener("storage", onStoreChange);
      window.removeEventListener("affix:cookie-consent", onStoreChange);
    };
  }, []);

  const preference = useSyncExternalStore(
    subscribe,
    () => window.localStorage.getItem("affix-cookie-consent") ?? "",
    () => "server",
  );

  if (!enabled || preference !== "") return null;

  function save(preference: "essential" | "all") {
    window.localStorage.setItem("affix-cookie-consent", preference);
    window.dispatchEvent(new CustomEvent("affix:cookie-consent", { detail: preference }));
  }

  return (
    <aside className="cookie-consent" aria-label="Preferências de privacidade">
      <div>
        <strong>Sua privacidade importa</strong>
        <p>
          Usamos cookies essenciais e, com sua autorização, dados de navegação para melhorar sua experiência. Leia a nossa <Link href="/privacidade">Política de Privacidade</Link>.
        </p>
      </div>
      <div className="cookie-actions">
        <button className="button button-ghost button-small" type="button" onClick={() => save("essential")}>
          Somente essenciais
        </button>
        <button className="button button-gold button-small" type="button" onClick={() => save("all")}>
          Aceitar todos
        </button>
      </div>
    </aside>
  );
}
