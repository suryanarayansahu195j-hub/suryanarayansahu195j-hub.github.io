/* =========================================================
   SURYA NARAYAN SAHU — PORTFOLIO JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* ================= PRELOADER ================= */

    const preloader = document.getElementById("preloader");

    const hidePreloader = () => {
        if (preloader) {
            setTimeout(() => {
                preloader.classList.add("hide");
            }, 700);
        }
    };

    if (document.readyState === "complete") {
        hidePreloader();
    } else {
        window.addEventListener("load", hidePreloader, { once: true });
    }


    /* ================= MOBILE MENU ================= */

    const menuButton = document.getElementById("menuButton");
    const navLinks = document.querySelector(".nav-links");

    if (menuButton && navLinks) {

        menuButton.setAttribute("aria-expanded", "false");

        menuButton.addEventListener("click", () => {

            const isOpen = navLinks.classList.toggle("open");

            menuButton.setAttribute("aria-expanded", String(isOpen));

        });

        navLinks.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("open");

                menuButton.setAttribute("aria-expanded", "false");

            });

        });

    }


    /* ================= NAVBAR SCROLL ================= */

    const navbar = document.querySelector(".navbar");

    function updateNavbar() {

        if (navbar) {
            navbar.classList.toggle("scrolled", window.scrollY > 50);
        }

    }

    updateNavbar();

    window.addEventListener("scroll", updateNavbar, {
        passive: true
    });


    /* ================= ACTIVE NAV LINK ================= */

    const sections = document.querySelectorAll("section[id]");

    const navigationLinks = document.querySelectorAll(".nav-links a");

    function updateActiveLink() {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 180;

            const sectionBottom = sectionTop + section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionBottom
            ) {

                currentSection = section.id;

            }

        });

        navigationLinks.forEach(link => {

            const isActive =
                currentSection &&
                link.getAttribute("href") === `#${currentSection}`;

            link.classList.toggle("active", Boolean(isActive));

            if (isActive) {

                link.setAttribute("aria-current", "location");

            } else {

                link.removeAttribute("aria-current");

            }

        });

    }

    updateActiveLink();

    window.addEventListener("scroll", updateActiveLink, {
        passive: true
    });


    /* ================= SCROLL REVEAL ================= */

    const revealElements = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const revealObserver = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);

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

    } else {

        revealElements.forEach(element => {

            element.classList.add("visible");

        });

    }


    /* ================= SCROLL TO TOP ================= */

    const scrollTopButton = document.getElementById("scrollTop");

    function updateScrollTopButton() {

        if (scrollTopButton) {

            scrollTopButton.classList.toggle(
                "show",
                window.scrollY > 500
            );

        }

    }

    updateScrollTopButton();

    window.addEventListener("scroll", updateScrollTopButton, {
        passive: true
    });

    if (scrollTopButton) {

        scrollTopButton.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* ================= CERTIFICATE MODAL ================= */

    const certificateModal =
        document.getElementById("certificateModal");

    const certificateTitle =
        document.getElementById("certificateTitle");


    // Keep these functions global so HTML buttons can call them.
    // Example: onclick="showCertificate('Python Certificate')"

    window.showCertificate = function (title) {

        if (!certificateModal || !certificateTitle) {
            return;
        }

        certificateTitle.textContent = title || "Certificate";

        certificateModal.classList.add("show");

        certificateModal.setAttribute("aria-hidden", "false");

        document.body.classList.add("modal-open");

        const closeButton = certificateModal.querySelector(
            "[data-close-certificate], .close-modal, .modal-close, .close"
        );

        if (closeButton) {
            closeButton.focus();
        }

    };


    window.closeCertificate = function () {

        if (!certificateModal) {
            return;
        }

        certificateModal.classList.remove("show");

        certificateModal.setAttribute("aria-hidden", "true");

        document.body.classList.remove("modal-open");

    };


    // Close modal when clicking outside the content.

    if (certificateModal) {

        certificateModal.addEventListener("click", event => {

            if (event.target === certificateModal) {

                window.closeCertificate();

            }

        });

    }


    // Close modal with Escape key.

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {

            window.closeCertificate();

        }

    });


    /* ================= HERO MOUSE EFFECT ================= */

    const heroVisual = document.querySelector(".hero-visual");

    if (
        heroVisual &&
        window.matchMedia("(pointer: fine)").matches
    ) {

        heroVisual.addEventListener("mousemove", event => {

            const rect = heroVisual.getBoundingClientRect();

            if (!rect.width || !rect.height) {
                return;
            }

            const x = (event.clientX - rect.left) / rect.width;

            const y = (event.clientY - rect.top) / rect.height;

            const moveX = (x - 0.5) * 15;

            const moveY = (y - 0.5) * 15;

            heroVisual.style.transform =
                `translate(${moveX}px, ${moveY}px)`;

        });


        heroVisual.addEventListener("mouseleave", () => {

            heroVisual.style.transform = "translate(0, 0)";

        });

    }


    /* ================= CONSOLE MESSAGE ================= */

    console.log(
        "%cWelcome to Surya Narayan Sahu's Portfolio 🚀",
        "color:#8f63ff;font-size:16px;font-weight:bold;"
    );

    console.log("AI/ML Developer • CSE Student");

});
