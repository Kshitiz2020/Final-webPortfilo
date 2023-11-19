// responsive menu

const mobMenu = document.querySelector(".for-mobile");
const navbar = document.querySelector(".navbar ul");
const navItems = document.querySelectorAll(".navbar ul li a");

function responsiveMenu() {
  for (const item of navItems) {
    item.addEventListener("click", responsiveMenu);
  }
  if (navbar.classList.contains("responsive")) {
    navbar.classList.remove("responsive");
  } else {
    navbar.classList.add("responsive");
  }
}

mobMenu.addEventListener("click", responsiveMenu);

// To-top button functionality
const toTopButton = document.getElementById("btn-back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    toTopButton.style.display = "block";
  } else {
    toTopButton.style.display = "none";
  }
});

toTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
