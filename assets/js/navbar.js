let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e) => {
    let arrowParent = e.target.parentElement.parentElement; //selecting main parent of arrow
    arrowParent.classList.toggle("showMenu");
  });
}

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebar-menu-toggle");
sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

let toggleButton = document.querySelector(".menu-link-wrapper ");

toggleButton.addEventListener("click", function () {
  document
    .querySelector(".menu-link-wrapper .menu-link")
    .classList.toggle("menu-trigger-open");
});
