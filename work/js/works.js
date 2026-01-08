"use strict";

/* =========================================================
   sectionSS tabs (SP only)
========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  const bp = 992;

  const root = document.querySelector('[data-tabs="sectionSS"]');
  if (!root) return;

  const tabs = Array.from(root.querySelectorAll("[data-tab]"));
  const panels = Array.from(root.querySelectorAll("[data-tab-content]"));

  const setActive = (name) => {
    tabs.forEach((btn) => {
      const isActive = btn.getAttribute("data-tab") === name;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-selected", String(isActive));
      btn.tabIndex = isActive ? 0 : -1;
    });

    panels.forEach((panel) => {
      const isActive = panel.getAttribute("data-tab-content") === name;
      panel.classList.toggle("is-active", isActive);

      // hidden 制御（HTML仕様どおり）
      if (isActive) {
        panel.removeAttribute("hidden");
      } else {
        panel.setAttribute("hidden", "");
      }
    });
  };

  const onClick = (e) => {
    const btn = e.target.closest("[data-tab]");
    if (!btn) return;
    e.preventDefault();

    // SPのときだけ切り替える
    if (window.innerWidth > bp) return;

    const name = btn.getAttribute("data-tab");
    setActive(name);
  };

  root.addEventListener("click", onClick);

  // 初期状態：HTMLで is-active が付いているタブを優先
  const defaultActive =
    tabs.find((b) => b.classList.contains("is-active"))?.getAttribute("data-tab") ||
    tabs[0]?.getAttribute("data-tab");

  if (defaultActive) setActive(defaultActive);

  // 画面幅が変わった時（PCに戻ったらhidden解除しておく：安全策）
  window.addEventListener("resize", () => {
    if (window.innerWidth > bp) {
      // SP用タブは見えないが、hidden のままだと困るケースに備えて解除
      panels.forEach((p) => p.removeAttribute("hidden"));
    } else {
      // SPに戻ったら現在アクティブを反映
      const active = tabs.find((b) => b.classList.contains("is-active"))?.getAttribute("data-tab");
      if (active) setActive(active);
    }
  });
});

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
