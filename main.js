// main.js
const hamburgerMenu = document.getElementById("hamburger-menu");
const navbarNav = document.querySelector(".navbar-nav");

hamburgerMenu.addEventListener("click", e => {
    navbarNav.classList.toggle("active");
    e.preventDefault();
});

const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = e => {
    searchForm.classList.toggle("active");
    searchBox.focus();
    e.preventDefault();
};

const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = e => {
    shoppingCart.classList.toggle("active");
    e.preventDefault();
};

const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
 const sc = document.querySelector("#shopping-cart-button");
document.addEventListener("click", function (event) {
    if (!hm.contains(event.target) && !navbarNav.contains(event.target)) {
        navbarNav.classList.remove("active");
    }
    if (!sb.contains(event.target) && !searchForm.contains(event.target)) {
        searchForm.classList.remove("active");
    }
    if (!sc.contains(event.target) && !shoppingCart.contains(event.target)) {
        shoppingCart.classList.remove("active");
    }
});
gsap.utils.toArray("h2").forEach(element => {
    gsap.from(element, {
        opacity: 0,
        scale: 0.8,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "top center",
            scrub: 1
        }
    });
});
gsap.utils.toArray(".about .content").forEach(element => {
    gsap.from(element, {
        opacity: 0,
        scale: 0.5,
        y: 50,
        duration: 0.5,
        scrollTrigger: {
            trigger: element,
            start: "top 100%",
            end: "top center",
            scrub: 1
        }
    });
});

gsap.utils.toArray("#malik").forEach(element => {
    gsap.from(element, {
        opacity: 0,
        scale: 0.5,
        y: 50,
        duration: 0.5,
        scrollTrigger: {
            trigger: element,
            start: "top 100%",
            end: "top center",
            scrub: 1
        }
    });
});
gsap.utils.toArray(".about-image").forEach(element => {
    gsap.from(element, {
        opacity: 0,
        scale: 0.8,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "top center",
            scrub: 1
        }
    });
});
gsap.utils.toArray(".map").forEach(element => {
    const direction = element.classList.contains("fade-left")
        ? "left"
        : "right";

    gsap.from(element, {
        opacity: 0,
        x: direction === "right" ? -50 : 50,
        duration: 1,
        scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "top center",
            scrub: 1
        }
    });
});
gsap.utils.toArray("#form-mail").forEach(element => {
    const direction = element.classList.contains("fade-left")
        ? "left"
        : "right";

    gsap.from(element, {
        opacity: 0,
        x: direction === "left" ? -50 : 50,
        duration: 1,
        scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "top center",
            scrub: 1
        }
    });
});
gsap.utils.toArray("#card1").forEach(element => {
    const direction = element.classList.contains("fade-left")
        ? "left"
        : "right";

    gsap.from(element, {
        opacity: 0,
        x: direction === "right" ? -50 : 50,
        duration: 1,
        scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "top center",
            scrub: 1
        }
    });
});


// const itemDetailModal = document.querySelector('#item-detail-modal');
// const itemDetailButton = document.querySelector('.item-detail-button');

// // Tampilkan modal ketika tombol diklik
// itemDetailButton.onclick = (e) => {
//   itemDetailModal.style.display = 'flex';
//   e.preventDefault();
// };

// // Sembunyikan modal ketika tombol close diklik
// document.querySelector('.modal .close-icon').onclick = (e) => {
//   itemDetailModal.style.display = 'none';
//   e.preventDefault();
// };

// // Sembunyikan modal ketika diklik di luar area modal
// window.addEventListener('click', (event) => {
//   if (event.target === itemDetailModal) {
//     itemDetailModal.style.display = 'none';
//   }
// });