 const filterButtons = document.querySelectorAll(".filter-btn");
  const skillCards = document.querySelectorAll(".skill-card");

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelector(".filter-btn.active").classList.remove("active");
      btn.classList.add("active");

      const category = btn.dataset.category;

      skillCards.forEach(card => {
        if (category === "all" || card.dataset.category === category) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  
// nav link style active button
  
  const currentPage = window.location.pathname.split("/").pop().replace(".html", "") || "index";

document.querySelectorAll(".nav-link").forEach(link => {
  const linkHref = link.getAttribute("href").replace(".html", "").replace("/", "");
  if (linkHref === currentPage) {
    link.classList.add("active");
  }
});