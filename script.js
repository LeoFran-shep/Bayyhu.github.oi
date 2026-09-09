```javascript
// ============================================
// ANIMASI SCROLL
// ============================================

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        function(entries) {

            entries.forEach(function(entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(function(element) {

    revealObserver.observe(element);

});


// ============================================
// DARK / LIGHT MODE
// ============================================

const darkMode =
    document.getElementById("darkMode");


darkMode.addEventListener("click", function() {

    document.body.classList.toggle("light");


    if (
        document.body.classList.contains("light")
    ) {

        darkMode.innerHTML = "🌙";

    } else {

        darkMode.innerHTML = "☀";

    }

});


// ============================================
// EFEK MOUSE PADA PROJECT
// ============================================

const projectCards =
    document.querySelectorAll(".project-card");


projectCards.forEach(function(card) {

    card.addEventListener(
        "mousemove",
        function(event) {

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateX =
                (y - centerY) / 25;

            const rotateY =
                (centerX - x) / 25;


            card.style.transform =
                `perspective(700px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-8px)`;

        }
    );


    card.addEventListener(
        "mouseleave",
        function() {

            card.style.transform = "";

        }
    );

});


// ============================================
// CONSOLE
// ============================================

console.log(
    "🚀 Website Bayu berhasil dijalankan!"
);

console.log(
    "⚡ Electronics • Technology • Creativity"
);
```
