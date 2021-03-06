const sections = document.querySelectorAll(".container");
const sectionBtn = document.querySelectorAll(".controls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelectorAll(".main-content");
const themeBtn = document.querySelector(".theme-btn");
const contactForm = document.querySelector(".contact-form");

function activateCurrentButton() {
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener("click", function () {
      let currentBtn = document.querySelectorAll(".active-btn");
      currentBtn[0].className = currentBtn[0].className.replace(
        "active-btn",
        ""
      );
      this.className += "active-btn";
    });
  }

  for (let j = 0; j < allSections.length; j++) {
    allSections[j].addEventListener("click", (e) => {
      const id = e.target.dataset.id;
      if (id) {
        sectionBtn.forEach((btn) => {
          btn.classList.remove("active");
        });

        //hide other sections
        sections.forEach((section) => {
          section.classList.remove("active");
        });

        const element = document.getElementById(id);
        element.classList.add("active");
      }
    });
  }
}

function themeChange() {
  themeBtn.addEventListener("click", () => {
    let element = document.body;
    element.classList.toggle("light-mode");
  });
}

activateCurrentButton();
themeChange();

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let subject = document.querySelector(".subject").value;
  let feedback = document.querySelector(".feedback").value;

  console.log(name);
});
