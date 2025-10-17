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
  

  // Menu active otomatis saat scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(sec => {
    const sectionTop = sec.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = sec.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});


// === CHART JS ===
const ctx = document.getElementById("aboutChart");

if (ctx) {
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["IoT", "System Design", "Automation Control"],
      datasets: [{
        label: "Skill Level (%)",
        data: [90, 85, 80],
        backgroundColor: [
          "#c9a45c", // gold
          "#8c7853", // beige gold
          "#0a1933"  // dark navy
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: "My Technical Skills and Competencies",
          align: "center",
          color: "#001f3f",
          font: {
            size: 20,
            weight: "bold"
          },
          padding: {
            top: 10,
            bottom: 30   // <--- tambah jarak bawah antara judul dan chart
          }
        },
        legend: { display: false }
      },
      
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          ticks: {
            stepSize: 10,
            color: "#001f3f",
            font: { size: 12 }
          },
          grid: {
            color: "rgba(0,0,0,0.1)"
          }
        },
        x: {
          ticks: {
            color: "#001f3f",
            font: { size: 12 }
          },
          grid: { display: false }
        }
      }
    }
  });
}

