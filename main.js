const playBtn = document.querySelector(".intro input");
const introScreen = document.querySelector(".intro");
const match = document.querySelector(".match");

playBtn.addEventListener("click", () => {
  document.querySelector("html").style.background = "#06061c";
  location.href = "about.html";
});
