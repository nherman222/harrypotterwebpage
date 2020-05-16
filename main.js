const wandBtn = document.querySelector(".intro input");
const introScreen = document.querySelector(".intro");
const match = document.querySelector(".match");

wandBtn.addEventListener("click", () => {
  document.querySelector(".intro").style.visibility = "hidden";
  document.querySelector(".preload").style.visibility = "visible";
  setTimeout("location.href = 'about.html';", 2500);
});
