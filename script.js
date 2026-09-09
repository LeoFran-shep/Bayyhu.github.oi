```javascript
// ========================================
// DARK MODE
// ========================================

const darkModeButton = document.getElementById("darkMode");

darkModeButton.addEventListener("click", function () {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {

        darkModeButton.innerHTML = "☀️";

    } else {

        darkModeButton.innerHTML = "🌙";

    }

});


// ========================================
// ANIMASI SAAT SCROLL
// ========================================

const cards = document.querySelectorAll(
    ".skill-card, .project-card, .journal-card"
);

const observer = new IntersectionObserver(
    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


cards.forEach(function(card) {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "0.6s";

    observer.observe(card);

});


// ========================================
// CONSOLE
// ========================================

console.log("Website Bayu berhasil dijalankan 🚀");
console.log("Selamat datang di profil pribadi Bayu!");
```
