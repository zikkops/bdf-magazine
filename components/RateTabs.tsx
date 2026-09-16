"use client";

import { useEffect, useState, type ReactNode } from "react";

const STORAGE_KEY = "bdfkit-tab";

const TABS = [
  { id: "tab-std", panel: "panel-std", label: "Standard placements" },
  { id: "tab-spo", panel: "panel-spo", label: "Sponsored editorial" },
  { id: "tab-add", panel: "panel-add", label: "Add-ons" },
] as const;

type TabId = (typeof TABS)[number]["id"];

export default function RateTabs({
  standard,
  sponsored,
  addOns,
}: {
  standard: ReactNode;
  sponsored: ReactNode;
  addOns: ReactNode;
}) {
  const [active, setActive] = useState<TabId>("tab-std");
  const panels: Record<TabId, ReactNode> = { "tab-std": standard, "tab-spo": sponsored, "tab-add": addOns };

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && TABS.some((t) => t.id === saved)) setActive(saved as TabId);
    } catch {}
  }, []);

  function show(id: TabId) {
    setActive(id);
    try {
      localStorage.setItem(STORAGE_KEY, id);
    } catch {}
  }

  return (
    <>
      <div className="tabs" role="tablist">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            id={t.id}
            aria-selected={active === t.id}
            aria-controls={t.panel}
            onClick={() => show(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {TABS.map((t) => (
        <div
          key={t.panel}
          id={t.panel}
          role="tabpanel"
          aria-labelledby={t.id}
          className="tablewrap"
          hidden={active !== t.id}
        >
          {panels[t.id]}
        </div>
      ))}
    </>
  );
}
