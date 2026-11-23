"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { profile } from "@/data/portfolio";

export function CopyEmail() {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timeout.current) clearTimeout(timeout.current);
    },
    [],
  );

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
    if (timeout.current) clearTimeout(timeout.current);
    timeout.current = setTimeout(() => setStatus("idle"), 4000);
  }

  return (
    <div className="copy-email-wrap">
      <button
        type="button"
        className="button button-outline"
        onClick={copyEmail}
      >
        {status === "copied" ? <Check size={16} /> : <Copy size={16} />}
        {status === "copied" ? "Email copied" : "Copy email"}
      </button>
      <span className="copy-status" role="status">
        {status === "copied"
          ? "Copied to clipboard."
          : status === "error"
            ? `Please copy manually: ${profile.email}`
            : ""}
      </span>
    </div>
  );
}
