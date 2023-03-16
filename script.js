const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
/* Mengaktifkan menu */
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
    } else {
        menu.classList.add("active");
    }
}
/* Event Listener */
toggle.addEventListener("click", toggleMenu, false);

const items = document.querySelectorAll(".nav-list");
/* Mengaktifkan dropdown */
function toggleItem() {
  if (this.classList.contains("dropdown-active")) {
    this.classList.remove("dropdown-active");
  } else if (menu.querySelector(".dropdown-active")) {
    menu.querySelector(".dropdown-active").classList.remove("dropdown-active");
    this.classList.add("dropdown-active");
  } else {
    this.classList.add("dropdown-active");
  }
}
/* Event Listeners */
for (let item of items) {
    if (item.querySelector(".dropdown")) {
      item.addEventListener("click", toggleItem, false);
      item.addEventListener("keypress", toggleItem, false);
    }   
}

/* Tutup Dropdown dengan klik dimana saja */
function closedropdown(e) {
  if (menu.querySelector(".dropdown-active")) {
    let isClickInside = menu
      .querySelector(".dropdown-active")
      .contains(e.target);
    if (!isClickInside && menu.querySelector(".dropdown-active")) {
      menu.querySelector(".dropdown-active").classList.remove("dropdown-active");
    }
  }
}
/* Event listener */
document.addEventListener("click", closedropdown, false);