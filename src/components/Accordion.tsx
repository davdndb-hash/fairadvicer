"use client";

import { useState } from "react";
import type { Faq } from "@/content/types";

export default function Accordion({ items, light = false }: { items: Faq[]; light?: boolean }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className={`divide-y ${light ? "divide-white/12" : "divide-line"}`}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className={`flex w-full items-start justify-between gap-6 py-5 text-left font-sans text-[1.02rem] font-semibold tracking-[-0.01em] transition-colors ${
                  light ? "text-white hover:text-amber-400" : "text-ink hover:text-teal-700"
                }`}
              >
                <span className="pretty">{item.q}</span>
                <span
                  className={`relative mt-1 block h-4 w-4 shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                  aria-hidden="true"
                >
                  <span className={`absolute left-0 top-1/2 h-[1.5px] w-4 -translate-y-1/2 ${light ? "bg-amber-400" : "bg-teal-600"}`} />
                  <span className={`absolute left-1/2 top-0 h-4 w-[1.5px] -translate-x-1/2 ${light ? "bg-amber-400" : "bg-teal-600"}`} />
                </span>
              </button>
            </h3>
            <div
              className="grid transition-all duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p
                  className={`max-w-2xl pb-6 text-[0.95rem] leading-relaxed pretty ${
                    light ? "text-teal-100/85" : "text-ink-soft"
                  }`}
                >
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
