let obj = {
  drugAddiction: [
    "Tb42RG3T1uk",
    "XSS9kYipRLk",
    "S3vO8E2e6G0",
    "8LuxOYIpu-I",
    "y23HyopQxEg",
  ],
  selfMutilation: ["1dttq5p0xUM", "1dttq5p0xUM", "1dttq5p0xUM", "1dttq5p0xUM"],
  gangViolence: ["pUu0FWlMpgk", "pUu0FWlMpgk", "pUu0FWlMpgk", "pUu0FWlMpgk"],
  troubledYouth: ["ygcN65SlLFg", "ygcN65SlLFg", "ygcN65SlLFg", "ygcN65SlLFg"],
  brokenHomes: ["1AjLFPraVAg", "1AjLFPraVAg", "1AjLFPraVAg", "1AjLFPraVAg"],
  alcoholism: [
    "xZgg3y7lJng",
    "Aqn2L6kQQt8",
    "0gWeEk2QjdY",
    "MZC-s2oNLT0",
    "s1UdI8iy4wU",
  ],
  depression: [
    "iLR3gZrU2Xo",
    "yRUAzGQ3nSY",
    "kVS-6k2tQAA",
    "dlLKo-_slWg",
    "n5rh7O4IDc0",
  ],
  heartBreak: [
    "WTw1WGy0WyA",
    "K4xD8ZMdJms",
    "OA9gPtWDiww",
    "BHi-a1n8t7M",
    "yE-f1alkq9I",
  ],
  others: ["_InqQJRqGW4", "aG8KWYko8VY", "aWzlQ2N6qqg", "L6P3nI6VnlY"],
};

let themes = [
  "Drug Addiction",
  "Self Mutilation",
  "Gang Violence",
  "Troubled Youth",
  "Broken Homes",
  "Alcoholism",
  "Depression",
  "Heart Break",
  "Others",
];

let arr = Object.values(obj);

var search = () => {
  let text = document.getElementById("search-box").value;
  let index = themes.indexOf(text);
  navi(index);
};

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

var navi = (ind) => {
  document.getElementById("heading").innerText = themes[ind];

  let frames = document.querySelectorAll("iframe");
  let len = frames.length;

  for (let i = 0; i < len; i++) {
    frames[i].src =
      "https://www.youtube.com/embed/" + arr[ind][i % 4] + "?controls=0";
  }
};

document.querySelectorAll(".documentary .theme a").forEach((btn) => {
  btn.onclick = () => {
    let ind = Number(btn.getAttribute("data-src")) - 1;
    navi(ind);
  };
});
