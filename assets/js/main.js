"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".hamburger");
  const menu = document.querySelector(".sp-menu");

  if (!btn || !menu) return;

  const openMenu = () => {
    btn.classList.add("is-open");
    menu.classList.add("is-open");
    btn.setAttribute("aria-expanded", "true");
    menu.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-menu-open");
    btn.setAttribute("aria-label", "メニューを閉じる");
  };

  const closeMenu = () => {
    btn.classList.remove("is-open");
    menu.classList.remove("is-open");
    btn.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-menu-open");
    btn.setAttribute("aria-label", "メニューを開く");
  };

  // ハンバーガークリックで開閉
  btn.addEventListener("click", () => {
    const isOpen = btn.classList.contains("is-open");
    if (isOpen) closeMenu();
    else openMenu();
  });

  // メニュー内リンク押下で閉じる（#works等）
  menu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      closeMenu();
    });
  });

  // Escで閉じる（任意だけど便利）
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && btn.classList.contains("is-open")) {
      closeMenu();
    }
  });
});
