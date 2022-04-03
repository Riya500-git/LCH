var swiper = new Swiper(".swiper", {
  spaceBetween: 10,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  /*   breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  }, */
});

var swiper = new Swiper(".swiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

let obj = {
  drugAddiction: ["yCjJyiqpAuU", "yCjJyiqpAuU", "yCjJyiqpAuU", "yCjJyiqpAuU"],
  selfMutilation: ["1dttq5p0xUM", "1dttq5p0xUM", "1dttq5p0xUM", "1dttq5p0xUM"],
  gangViolence: ["pUu0FWlMpgk", "pUu0FWlMpgk", "pUu0FWlMpgk", "pUu0FWlMpgk"],
  troubledYouth: ["ygcN65SlLFg", "ygcN65SlLFg", "ygcN65SlLFg", "ygcN65SlLFg"],
  brokenHomes: ["1AjLFPraVAg", "1AjLFPraVAg", "1AjLFPraVAg", "1AjLFPraVAg"],
  alcoholism: ["F4tHL8reNCs", "F4tHL8reNCs", "F4tHL8reNCs", "F4tHL8reNCs"],
  depression: ["hq3yfQnllfQ", "hq3yfQnllfQ", "hq3yfQnllfQ", "hq3yfQnllfQ"],
};

let arr = Object.values(obj);

let themes = [
  "Drug Addiction",
  "Self Mutilation",
  "Gang Violence",
  "Troubled Youth",
  "Broken Homes",
  "Alcoholism",
  "Depression",
  "Others",
];

document.querySelectorAll(".documentary .theme a").forEach((btn) => {
  btn.onclick = () => {
    let ind = Number(btn.getAttribute("data-src"));

    document.getElementById("heading").innerText = themes[ind - 1];
    if (ind === 8) return;

    let x = 0;
    document.querySelectorAll("iframe").forEach((frame) => {
      frame.src =
        "https://www.youtube.com/embed/" + arr[ind - 1][x++] + "?controls=0";
    });
  };
});
