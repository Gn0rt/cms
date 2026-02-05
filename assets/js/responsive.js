const menuIcon = document.querySelector(".menu-bar");
const mobileMenu = document.querySelector(".list-menu-bar");

if (menuIcon && mobileMenu) {
  menuIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    mobileMenu.classList.toggle("active");
    const icon = menuIcon.querySelector("i");
    if (mobileMenu.classList.contains("active")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark"); // Hoặc fa-times
    } else {
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    }
  });
  window.addEventListener("click", (e) => {
    if (!menuIcon.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.remove("active");

      // Reset icon về 3 gạch
      const icon = menuIcon.querySelector("i");
      if (icon) {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
      }
    }
  });
}
