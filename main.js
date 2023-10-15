let navMenu = document.getElementById("nav-menu");
let navMenuActive = false;

function nav() {
  if (navMenuActive) {
    navMenu.classList.remove("active");
  } else {
    navMenu.classList.add("active");
  }
  navMenuActive = !navMenuActive
}

// reset if page changed
window.addEventListener('popstate', function (event) {
  navMenu.classList.remove("active");
  navMenu = document.getElementById("nav-menu");
	navMenuActive = false;
});