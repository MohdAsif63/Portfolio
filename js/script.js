   var typed = new Typed("#element", {
    strings: ["Programmer...", "Web Developer...", "Engineer..."],
    typeSpeed: 50,
    loop: true,
    backSpeed: 30,
    backDelay: 1000,
  });
 const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });