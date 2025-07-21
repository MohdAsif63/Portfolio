const projectCards = document.querySelectorAll(".project-card");
const nextButtons = document.querySelectorAll(".next");
const prevButtons = document.querySelectorAll(".prev");

let currentIndex = 0;

function showProject(index) {
  projectCards.forEach((card, i) => {
    card.classList.toggle("active", i === index);
  });
}

nextButtons.forEach(button => {
  button.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % projectCards.length;
    showProject(currentIndex);
  });
});

prevButtons.forEach(button => {
  button.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + projectCards.length) % projectCards.length;
    showProject(currentIndex);
  });
});



// Initialize
showProject(currentIndex);


// Image preview functionality
const previewOverlay = document.getElementById("imgPreviewOverlay");
const previewImage = document.getElementById("imgPreview");
const closePreview = document.getElementById("closePreview");


// When any image is clicked
document.querySelectorAll(".card-img img").forEach((img) => {
  img.addEventListener("click", () => {
    previewImage.src = img.src;
    previewOverlay.style.display = "flex";
  });
});


// Close when clicking on close icon or outside
closePreview.addEventListener("click", () => {
  previewOverlay.style.display = "none";
});

previewOverlay.addEventListener("click", (e) => {
  if (e.target === previewOverlay) {
    previewOverlay.style.display = "none";
  }
});



// Optional: close on ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    previewOverlay.style.display = "none";
  }
});



//  nav active links 

    const currentPage = window.location.pathname.split("/").pop();
      const navLinks = document.querySelectorAll(".nav-link");

      navLinks.forEach((link) => {
        if (link.getAttribute("href") === currentPage) {
          link.classList.add("active");
        }
      });