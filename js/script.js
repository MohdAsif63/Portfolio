   var typed = new Typed("#element", {
    strings: ["Programmer...", "Web Developer...", "Engineer..."],
    typeSpeed: 50,
    loop: true,
    backSpeed: 30,
    backDelay: 1000,
  });
  
const currentPage = window.location.pathname.split("/").pop().replace(".html", "") || "index";

document.querySelectorAll(".nav-link").forEach(link => {
  const linkHref = link.getAttribute("href").replace(".html", "").replace("/", "");
  if (linkHref === currentPage) {
    link.classList.add("active");
  }
});