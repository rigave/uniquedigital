const navLinks = document.querySelectorAll(".nav__list .nav__link");
const menuBar = document.getElementById("menu-bar");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuBar.checked = false;
  });
});

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const href = link.getAttribute("href");

    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    if (link.classList.contains("nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  grabCursor: true,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    767: {
      slidesPerView: 1,
    },
  },

  // // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
});

const counters = document.querySelectorAll(".numbers-grid span");
const container = document.querySelector(".numbers-grid");

let activated = false;

window.addEventListener("scroll", () => {
  if (
    pageYOffset > container.offsetTop - container.offsetHeight - 200 &&
    activated === false
  ) {
    counters.forEach((counter) => {
      counter.innerText = 0;
      let count = 0;

      function updateCount() {
        const target = parseInt(counter.dataset.count);
        if (count < target) {
          count++;

          counter.innerText = count;

          setTimeout(updateCount, 10);
        } else {
          counter.innerText = target;
        }
      }

      updateCount();
      activated = true;
    });
  } else if (
    pageYOffset < container.offsetTop - container.offsetHeight - 500 ||
    (pageOffset === 0 && activated === true)
  ) {
    counters.forEach((counter) => {
      counter.innerText = 0;
    });

    activated = false;
  }
});
