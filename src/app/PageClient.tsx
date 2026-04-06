"use client";

import { useEffect, useRef } from "react";
import { bodyHtml, clientScript } from "./content";

export default function PageClient() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Execute all client-side scripts after mount
    const fn = new Function(clientScript);
    try {
      fn();
    } catch (e) {
      console.error("Client script error:", e);
    }

    // Cleanup cursor elements on unmount (StrictMode double-mount)
    return () => {
      document.body.classList.remove("cursor-hover", "cursor-clicking");
    };
  }, []);

  return (
    <div
      ref={containerRef}
      dangerouslySetInnerHTML={{ __html: bodyHtml }}
    />
  );
}
