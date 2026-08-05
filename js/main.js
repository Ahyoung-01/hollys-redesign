var swiper = new Swiper(".mySwiper", {
            cssMode: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
            },
            mousewheel: true,
            keyboard: true,
        });


const storyData = [
  {
    title: "COFFEE STORY",
    image: "../img/coffee01.jpg"
  },
  {
    title: "COFFEE STORY",
    image: "../img/coffee02.jpg"
  },
  {
    title: "COFFEE STORY",
    image: "../img/coffee03.jpg"
  },
  {
    title: "COFFEE STORY",
    image: "../img/coffee01.jpg"
  },
  {
    title: "COFFEE STORY",
    image: "../img/coffee01.jpg"
  },
  {
    title: "DESSERT STORY",
    image: "../img/coffee01.jpg"
  },
  {
    title: "CAKE STORY",
    image: "../img/coffee01.jpg"
  }
];

var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

const storyTabs = document.querySelectorAll(".story-tab");
const storySlider = document.getElementById("storySlider");

storyData.forEach((item, index) => {
  const slide = document.createElement("div");
  slide.className = "story-card swiper-slide";
  slide.dataset.index = index;

  slide.innerHTML = `
    <div class="story-image" style="background-image: url('${item.image}')"></div>
    <div class="story-action">
      <span>${item.title}</span>
      <span>→</span>
    </div>
  `;

  storySlider.appendChild(slide);
});

const storySwiper = new Swiper(".storySwiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
  speed: 700,
  centeredSlides: false,
  slideToClickedSlide: true,
  watchSlidesProgress: true,
  observer: true,
  observeParents: true,
  on: {
    init: function () {
      updateStoryTabs(this.activeIndex);
    },
    slideChange: function () {
      updateStoryTabs(this.activeIndex);
    }
  }
});

function updateStoryTabs(activeIndex) {
  storyTabs.forEach(tab => tab.classList.remove("active"));
  if (storyTabs[activeIndex]) {
    storyTabs[activeIndex].classList.add("active");
  }
}

storyTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    storySwiper.slideTo(index);
  });
});


const gnb = document.querySelector(".gnb");
const navBg = document.querySelector(".nav-bg");
const depth2Menus = document.querySelectorAll(".depth2");

gnb.addEventListener("mouseenter", () => {
  navBg.style.height = "280px";
  navBg.style.opacity = "1";
  navBg.style.visibility = "visible";

  depth2Menus.forEach((menu) => {
    menu.style.opacity = "1";
    menu.style.visibility = "visible";
  });
});

gnb.addEventListener("mouseleave", () => {
  navBg.style.height = "0";
  navBg.style.opacity = "0";
  navBg.style.visibility = "hidden";

  depth2Menus.forEach((menu) => {
    menu.style.opacity = "0";
    menu.style.visibility = "hidden";
  });
});