async function loadPartials() {

    const header = document.getElementById("header");
    const footer = document.getElementById("footer");

    if (header) {
        const res = await fetch("partials/header.html");
        header.innerHTML = await res.text();
    }

    if (footer) {
        const res = await fetch("partials/footer.html");
        footer.innerHTML = await res.text();
    }

    // activate burger AFTER loading header
    const burgers = document.querySelectorAll('.navbar-burger');

    burgers.forEach(el => {
        el.addEventListener('click', () => {
            const target = el.dataset.target;
            const menu = document.getElementById(target);

            el.classList.toggle('is-active');
            menu.classList.toggle('is-active');
        });
    });
}

// highlight active nav link
const path = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".navbar .navbar-item[href]").forEach(link => {
    const href = link.getAttribute("href");
    if (href === path) link.classList.add("is-active");
});


loadPartials();
