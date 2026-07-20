"use client";

import { useEffect } from "react";

export default function Interactions() {
  useEffect(() => {
    const nav = document.getElementById("nav");
    const toggle = document.getElementById("navToggle");
    const links = document.getElementById("navLinks");
    const form = document.getElementById("leadForm") as HTMLFormElement | null;
    const status = document.getElementById("formStatus");
    const btn = document.getElementById("submitBtn") as HTMLButtonElement | null;

    // Nav scroll state
    const onScroll = () =>
      nav?.classList.toggle("scrolled", window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Mobile menu
    const onToggle = () => {
      const open = links?.classList.toggle("open");
      toggle?.setAttribute("aria-expanded", String(!!open));
    };
    toggle?.addEventListener("click", onToggle);
    const linkEls = links ? Array.from(links.querySelectorAll("a")) : [];
    const closeMenu = () => links?.classList.remove("open");
    linkEls.forEach((a) => a.addEventListener("click", closeMenu));

    // Scroll reveal
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.14 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    // FORM SUBMIT — posts to /api/contact.
    const ENDPOINT = "/api/contact";
    const CONTACT_EMAIL = "matt@phoenixqbtraining.com";
    const onSubmit = async (e: Event) => {
      e.preventDefault();
      if (!form || !status || !btn) return;
      status.className = "form-status";
      status.textContent = "";
      const name = (
        form.elements.namedItem("name") as HTMLInputElement
      ).value.trim();
      const email = (
        form.elements.namedItem("email") as HTMLInputElement
      ).value.trim();
      if (!name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        status.className = "form-status err";
        status.textContent =
          "Please add your name and a valid email so Matt can reply.";
        return;
      }
      const data = Object.fromEntries(new FormData(form).entries());
      const arrow = btn.querySelector(".arrow");
      btn.disabled = true;
      btn.style.opacity = "0.6";
      if (arrow) arrow.textContent = "…";
      try {
        const res = await fetch(ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error("bad status");
        form.reset();
        status.className = "form-status ok";
        status.textContent =
          "Sent. Matt will get back to you shortly — thanks.";
      } catch (err) {
        status.className = "form-status err";
        status.innerHTML =
          'Couldn\'t send that just yet. Email Matt directly at <a href="mailto:' +
          CONTACT_EMAIL +
          '" style="color:var(--gold)">' +
          CONTACT_EMAIL +
          "</a> and he'll get right back to you.";
      } finally {
        btn.disabled = false;
        btn.style.opacity = "1";
        if (arrow) arrow.textContent = "→";
      }
    };
    form?.addEventListener("submit", onSubmit);

    return () => {
      window.removeEventListener("scroll", onScroll);
      toggle?.removeEventListener("click", onToggle);
      linkEls.forEach((a) => a.removeEventListener("click", closeMenu));
      io.disconnect();
      form?.removeEventListener("submit", onSubmit);
    };
  }, []);

  return null;
}
