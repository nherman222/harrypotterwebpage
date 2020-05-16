const wandBtn = document.querySelector(".intro input");

// when wand is clicked
wandBtn.addEventListener("click", () => {
  // hide the intro screen
  document.querySelector(".intro").style.visibility = "hidden";
  // show the preloader
  document.querySelector(".preload").style.visibility = "visible";
  // wait before going to about page
  setTimeout("location.href = 'about.html';", 2500);
});
