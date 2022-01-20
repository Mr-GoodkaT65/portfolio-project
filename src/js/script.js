// "use strict";
import $ from "jquery";

$(() => {
  $(".title").on("click", (e) => {
    console.log(this);
    $(".title").animate({ "margin-left": "20px" }, 500);
  });
});

const title = document.querySelector(".title");
title.addEventListener("click", function (e) {
  this.classList.add("title1");
});
