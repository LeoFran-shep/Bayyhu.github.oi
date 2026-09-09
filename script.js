// ============================================
// DARK / LIGHT MODE DENGAN LOCALSTORAGE
// ============================================
const darkModeBtn = document.getElementById("darkMode");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light");
    darkModeBtn.innerHTML = "🌙";
} else {
    darkModeBtn.innerHTML = "☀";
}

darkModeBtn.addEventListener("click", function () {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        darkModeBtn.innerHTML = "🌙";
        localStorage.setItem("theme", "light");
    } else {
        darkModeBtn.innerHTML = "☀";
        localStorage.setItem("theme", "dark");
    }
});

// ============================================
// MENU HAMBURGER MOBILE
// ============================================
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-menu a");

hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});

// Tutup menu saat tautan navigasi diklik
navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
    });
});

// ============================================
// EFEK MOUSE PADA PROJECT CARD
// ============================================
const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(function (card) {
    card.addEventListener("mousemove", function (event) {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 25;
        const rotateY = (centerX - x) / 25;

        card.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener("mouseleave", function () {
        card.style.transform = "";
    });
});

console.log("🚀 Website Bayu berhasil dijalankan!");
console.log("⚡ Electronics • Technology • Creativity");
