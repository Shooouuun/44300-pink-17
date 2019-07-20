var toggle__nav = document.querySelector(".page-header__trigger"),
    nav = document.querySelector(".page-header__list");
    header = document.querySelector(".page-header__navigation");
    introHeader = document.querySelector(".intro__header");


    header.classList.remove("page-header__navigation--full");
    toggle__nav.classList.remove("page-header__trigger--nojs");
    nav.classList.remove("page-header__list--nojs");

    toggle__nav.addEventListener("click", function (e) {
      e.preventDefault();
      nav.classList.toggle("page-header__list--open");
      toggle__nav.classList.toggle("page-header__trigger--close");
      header.classList.toggle("page-header__navigation--full");
      introHeader.classList.toggle("intro__header--short");
    });
