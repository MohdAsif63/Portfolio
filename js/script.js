   var typed = new Typed("#element", {
    strings: ["Programmer...", "Web Developer...", "Engineer..."],
    typeSpeed: 50,
    loop: true,
    backSpeed: 30,
    backDelay: 1000,
  });
  

const currentPath = window.location.pathname;
const currentPage =
  currentPath === "/" || currentPath.endsWith("index.html")
    ? "index.html"
    : currentPath.split("/").pop();

document.querySelectorAll(".nav-link").forEach((link) => {
  const linkHref = link.getAttribute("href");
  if (linkHref === currentPage) {
    link.classList.add("active");
  }
});





