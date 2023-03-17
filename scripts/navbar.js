function showAndHideNavbar() {
  const navbar = document.querySelector("nav");

  navbar.classList.toggle("active");
};

function getButtonClick() {
  const button = document.querySelector(".ph-list");
  
  button.addEventListener("click", showAndHideNavbar);
};

getButtonClick();