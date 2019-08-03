var trigger = document.querySelector(".page-header__trigger");
var navList = document.querySelector(".page-header__list");
var navigation = document.querySelector(".page-header__navigation");
var downloadBlock = document.querySelector(".download");
var downloadWrap = document.querySelector(".download__wrap");

navigation.classList.remove("page-header__navigation--full");
trigger.classList.remove("page-header__trigger--nojs");
navList.classList.remove("page-header__list--nojs");

trigger.addEventListener("click", function (e) {
  e.preventDefault();
  trigger.classList.toggle("page-header__trigger--open");
  navList.classList.toggle("page-header__list--open");
  navigation.classList.toggle("page-header__navigation--full");
  downloadBlock.classList.toggle("download--short");
  downloadWrap.classList.toggle("download__wrap--short");
});
