// Highlight active nav link
const currentPage = window.location.pathname.split("/").pop().replace(".html", "") || "index";

document.querySelectorAll(".nav-link").forEach(link => {
  const linkHref = link.getAttribute("href").replace(".html", "").replace("/", "");
  if (linkHref === currentPage) {
    link.classList.add("active");
  }
});

// Handle contact form submission without redirection
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");

  if (form) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();

      const formData = new FormData(form);

      try {
        const response = await fetch("https://formspree.io/f/xgvzoeqa", {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json"
          }
        });

        const statusMessage = document.createElement("p");
        statusMessage.style.fontSize = "16px";
        statusMessage.style.marginTop = "10px";
        statusMessage.style.textAlign = "center";

        if (response.ok) {
          statusMessage.textContent = "✅ Message sent successfully!";
          statusMessage.style.color = "#7cf03d";
          form.reset();
        } else {
          statusMessage.textContent = "❌ Error! Please try again.";
          statusMessage.style.color = "red";
        }

        // Remove existing message if any and show new one
        const existingStatus = form.querySelector(".form-status");
        if (existingStatus) existingStatus.remove();

        statusMessage.classList.add("form-status");
        form.appendChild(statusMessage);

        // Auto-hide message after 5 seconds
        setTimeout(() => {
          statusMessage.remove();
        }, 5000);
      } catch (error) {
        const errorMessage = document.createElement("p");
        errorMessage.textContent =
          "⚠️ Submission failed. Please check your connection.";
        errorMessage.style.color = "orange";
        errorMessage.style.marginTop = "10px";
        errorMessage.style.textAlign = "center";
        errorMessage.classList.add("form-status");

        const existingStatus = form.querySelector(".form-status");
        if (existingStatus) existingStatus.remove();

        form.appendChild(errorMessage);

        setTimeout(() => {
          errorMessage.remove();
        }, 5000);
      }
    });
  }
});

function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('show');
}