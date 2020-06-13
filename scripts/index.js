const modal = document.querySelector("#modal");
const buttonSearch = document.querySelector("#page-home main a");
const buttonClose = document.querySelector("#modal .header a");

buttonSearch.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

buttonClose.addEventListener("click", () => {
  modal.classList.add("hidden");
});
