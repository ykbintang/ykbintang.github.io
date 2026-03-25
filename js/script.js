// Sticky Navbar
let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  navbar.classList.toggle("active");
  menu.classList.toggle("fa-bars");
  menu.classList.toggle("fa-xmark");
};

// Tutup menu saat salah satu link diklik
document.querySelectorAll(".navbar a").forEach((link) => {
  link.onclick = () => {
    navbar.classList.remove("active");
    menu.classList.replace("fa-xmark", "fa-bars");
  };
});

window.onscroll = () => {
  navbar.classList.remove("active");
  menu.classList.replace("fa-xmark", "fa-bars");
};

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

const observerOptions = {
  threshold: 0.2, // Box akan muncul jika 20% bagiannya sudah terlihat di layar
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, observerOptions);

// Memberitahu observer untuk mengawasi semua experience-box
const experienceBoxes = document.querySelectorAll(".experience-box");
experienceBoxes.forEach((box) => observer.observe(box));

// Dark Mode
const darkModeIcon = document.querySelector("#darkmode-icon");

darkModeIcon.onclick = () => {
  // 1. Ubah ikon saat diklik
  darkModeIcon.classList.toggle("bx-sun");

  // 2. Tambah/Hapus class dark-mode pada body
  document.body.classList.toggle("dark-mode");

  // 3. Simpan pilihan user ke Local Storage
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
};

// Cek saat halaman dimuat (agar tema tidak reset)
const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
  document.body.classList.add("dark-mode");
  darkModeIcon.classList.add("bx-sun");
}
