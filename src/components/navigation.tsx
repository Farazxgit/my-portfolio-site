"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navigation, profile } from "@/data/portfolio";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-15% 0px -55% 0px", threshold: 0 },
    );
    for (const item of navigation) {
      const section = document.querySelector(item.href);
      if (section) observer.observe(section);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function onEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        document.getElementById("menu-toggle")?.focus();
      }
    }
    if (open) document.addEventListener("keydown", onEscape);
    return () => document.removeEventListener("keydown", onEscape);
  }, [open]);

  return (
    <header className="site-header">
      <div className="container nav-inner">
        <a
          href="#"
          className="wordmark"
          aria-label="Faraz — back to top"
          onClick={() => setOpen(false)}
        >
          faraz<span className="accent">.</span>
          <span className="wordmark-slash">/</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={active === item.href ? "location" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <a
            className="button button-small button-outline"
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
          >
            Resume <ArrowUpRight size={15} />
          </a>
          <button
            id="menu-toggle"
            className="icon-button menu-toggle"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>
      <nav
        id="mobile-navigation"
        className="mobile-nav"
        aria-label="Mobile navigation"
        hidden={!open}
      >
        {navigation.map((item) => (
          <a
            key={item.href}
            href={item.href}
            aria-current={active === item.href ? "location" : undefined}
            onClick={() => setOpen(false)}
          >
            {item.label}
            <ArrowUpRight size={16} />
          </a>
        ))}
      </nav>
    </header>
  );
}
