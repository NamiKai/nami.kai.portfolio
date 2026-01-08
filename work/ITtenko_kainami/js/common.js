"use strict";

/*(---これより下を消す---)*/


document.addEventListener("DOMContentLoaded", function() {
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-content");
const images = document.querySelectorAll(".modal-img");
const closeBtn = document.querySelector(".close");

modal.style.display = "none";
// 画像クリック → モーダルを表示
images.forEach(img => {
  img.addEventListener("click", () => {
    modalImg.src = img.src;
    modal.style.display = "flex";
    
  });
});

// ×ボタン → 閉じる
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// 背景クリック → 閉じる
modal.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});
  const tabsElems = document.querySelectorAll("[data-tabs]");

  if (tabsElems.length > 0) {
    for (let t = 0; t < tabsElems.length; t++) {
      let tab = tabsElems[t];
      let tabBtnElems = tab.querySelectorAll("[data-tab]");
      let tabContentElems = tab.querySelectorAll("[data-tab-content]");

      for (let j = 0; j < tabBtnElems.length; j++) {
        let tabBtn = tabBtnElems[j];
        let tabContent = tabContentElems[j];

        tabBtn.addEventListener("click", (e) => {
          e.preventDefault();
          for (let k = 0; k < tabBtnElems.length; k++) {
            tabBtnElems[k].classList.remove("active");
            tabContentElems[k].classList.remove("active");
          }
          tabBtn.classList.add("active");
          tabContent.classList.add("active");
        });
      }
    }
  }
});

document.addEventListener("scroll", function() {
  const button = document.querySelector(".hdmenubutton");
  const scrollY = window.scrollY;

  if (scrollY > 790) {
    button.classList.add("change");
  } else {
    button.classList.remove("change");
  }
});

document.addEventListener("scroll", function() {
  const button = document.querySelector(".hdicon1");
  const scrollY = window.scrollY;

  if (scrollY > 696) {
    button.classList.add("change");
  } else {
    button.classList.remove("change");
  }
});

document.addEventListener("scroll", function() {
  const button = document.querySelector(".hdicon2");
  const scrollY = window.scrollY;

  if (scrollY > 696) {
    button.classList.add("change");
  } else {
    button.classList.remove("change");
  }
});

const ham = document.querySelector('#js-hamburger'); //js-hamburgerの要素を取得し、変数hamに格納
const nav = document.querySelector('#js-nav'); //js-navの要素を取得し、変数navに格納

ham.addEventListener('click', function () { //ハンバーガーメニューをクリックしたら
  ham.classList.toggle('active'); // ハンバーガーメニューにactiveクラスを付け外し
  nav.classList.toggle('active'); // ナビゲーションメニューにactiveクラスを付け外し
});


var acc = document.getElementsByClassName('accordion');
var i;
for ( i = 0; i < acc.length; i++ ){
    acc[i].onclick = function() {
    this.classList.toggle('active');
    var panel = this.nextElementSibling;
    if ( panel.style.maxHeight ){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  }
}

let mySwiper = null;

function initSwiper() {
  const width = window.innerWidth;

  if (width <= 992) {
    if (!mySwiper) {
      mySwiper = new Swiper('.swiper', {
        loop: false,
        centeredSlides: true,
        slidesPerView: 1.2,
        spaceBetween: 25,
        navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        }
      });
    }
  } else {
    if (mySwiper) {
      mySwiper.destroy(true, true);
      mySwiper = null;
    }
  }
}

window.addEventListener('load', initSwiper);
window.addEventListener('resize', initSwiper);
