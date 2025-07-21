const buttons = document.querySelectorAll('.tab-button');
const sections = document.querySelectorAll('.tab-section');
const heading = document.getElementById('tab-heading');



// Create a new subtext element just below the heading
const subText = document.createElement('p');
subText.classList.add('tab-subtext');
heading.insertAdjacentElement('afterend', subText);




// Define headings and subtitles
const headings = {
  education: {
    title: "My Education",
    subtitle: "Solid academic foundation in Computer Science 🖥️ with strong theoretical knowledge 📘 and hands-on programming experience 👨‍💻."
  },
  certificates: {
    title: "My Certificates",
    subtitle: "Certified in full stack development 💻, cloud technologies ☁️, and ReactJS ⚛️ to validate my technical skills and learning achievements 🎓"
  },
  coding: {
    title: "My Coding Profiles",
    subtitle: "Active coder on platforms like LeetCode 🔢, GitHub 🧠, and GeeksforGeeks ⚙️ showcasing problem-solving and project contributions 🌟."
  },
  learning: {
    title: "My Learning",
    subtitle: "Continuously exploring new tech 📚, frameworks 🧱, and development trends 🔧 to upgrade skills and stay ahead in the tech world 🌐."
  },
  aboutme: {
    title: "About Me",
    subtitle: "Passionate full-stack developer 💼, team player 🤝, and tech enthusiast 🚀 with a drive to create meaningful digital experiences 📱"
  }
};



// Format heading with neon span
function formatHeading(title) {
  const words = title.split(" ");
  if (words.length > 1) {
    return `${words[0]} <span class="neon">${words[1]}</span> ${words.slice(2).join(" ")}`;
  }
  return `<span class="neon">${title}</span>`;
}



// Default load for active section (usually education)
const defaultTab = document.querySelector('.tab-button.active')?.dataset.target || 'education';
heading.innerHTML = formatHeading(headings[defaultTab].title);
subText.textContent = headings[defaultTab].subtitle;





// Add event listeners to buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Update button state
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');



    // Update tab section
    const target = button.dataset.target;
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(target).classList.add('active');




    // Update heading and subtitle
    heading.innerHTML = formatHeading(headings[target].title);
    subText.textContent = headings[target].subtitle;
  });
});




// Highlight current nav link
const currentPage = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});
