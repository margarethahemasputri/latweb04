// Navbar scroll effect
window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("fade-in");
    });
  });
  
  document.querySelectorAll(".section").forEach(sec => observer.observe(sec));
  
  const style = document.createElement("style");
  style.innerHTML = `
  .fade-in {
    opacity: 1 !important;
    transform: translateY(0) !important;
    transition: all 1s ease;
  }
  .section {
    opacity: 0;
    transform: translateY(40px);
  }
  .navbar.scrolled {
    background-color: #0a1933;
    box-shadow: 0 3px 10px rgba(0,0,0,0.3);
  }
  `;
  document.head.appendChild(style);
  
  // Hero text animation
const heroText = document.getElementById("hero-text");
window.addEventListener("load", () => {
  heroText.classList.add("slide-in");
});

// biar scroll nya gak kebablasan
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      const offset = 80; // tinggi navbar
      window.scrollTo({
        top: target.offsetTop - offset,
        behavior: 'smooth'
      });
    });
  });
  