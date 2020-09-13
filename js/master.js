
const  menuToggel = document.querySelector(".toggel");
const  navigation = document.querySelector(".navigation");



menuToggel.onclick = function toggelMenu() {
  menuToggel.classList.toggle("active");
  navigation.classList.toggle("active");
}

function vidoToggel() {
  const trailer = document.querySelector(".trailer");
  const video = document.querySelector("video");
  trailer.classList.toggle("active");
  video.currentTime = 0;
  video.pause();
}


