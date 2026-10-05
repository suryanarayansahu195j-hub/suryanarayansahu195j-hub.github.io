/* =========================================================
   SURYA NARAYAN SAHU — PORTFOLIO JAVASCRIPT
========================================================= */


/* ================= PRELOADER ================= */

window.addEventListener("load", () => {

    const preloader =
        document.getElementById("preloader");

    setTimeout(() => {

        preloader.classList.add("hide");

    }, 700);

});


/* ================= MOBILE MENU ================= */

const menuButton =
    document.getElementById("menuButton");

const navLinks =
    document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("open");

});


/* Close mobile menu after clicking */

document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("open");

        });

    });


/* ================= NAVBAR SCROLL ================= */

const navbar =
    document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* ================= ACTIVE NAV LINK ================= */

const sections =
    document.querySelectorAll("section[id]");

const navigationLinks =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 180;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
                sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navigationLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

});


/* ================= SCROLL REVEAL ================= */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* ================= SCROLL TOP ================= */

const scrollTopButton =
    document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollTopButton.classList.add("show");

    } else {

        scrollTopButton.classList.remove("show");

    }

});


scrollTopButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* ================= CERTIFICATE MODAL ================= */

const certificateModal =
    document.getElementById(
        "certificateModal"
    );

const certificateTitle =
    document.getElementById(
        "certificateTitle"
    );


function showCertificate(title) {

    certificateTitle.textContent =
        title;

    certificateModal.classList.add(
        "show"
    );

}


function closeCertificate() {

    certificateModal.classList.remove(
        "show"
    );

}


/* Close modal when clicking outside */

certificateModal.addEventListener(
    "click",
    (event) => {

        if (
            event.target ===
            certificateModal
        ) {

            closeCertificate();

        }

    }
);


/* Close modal with Escape */

document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Escape") {

            closeCertificate();

        }

    }
);


/* ================= HERO MOUSE EFFECT ================= */

const heroVisual =
    document.querySelector(".hero-visual");

if (heroVisual) {

    heroVisual.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                heroVisual.getBoundingClientRect();

            const x =
                (event.clientX - rect.left) /
                rect.width;

            const y =
                (event.clientY - rect.top) /
                rect.height;

            const moveX =
                (x - 0.5) * 15;

            const moveY =
                (y - 0.5) * 15;

            heroVisual.style.transform =
                `translate(${moveX}px, ${moveY}px)`;

        }
    );


    heroVisual.addEventListener(
        "mouseleave",
        () => {

            heroVisual.style.transform =
                "translate(0, 0)";

        }
    );

}


/* ================= CONSOLE ================= */

console.log(
    "%cWelcome to Surya Narayan Sahu's Portfolio 🚀",
    "color:#8f63ff;font-size:16px;font-weight:bold;"
);

console.log(
    "AI/ML Developer • CSE Student"
);