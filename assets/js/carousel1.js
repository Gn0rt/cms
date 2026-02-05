const slides = document.querySelectorAll(".item-slide");
const track = document.querySelector(".carousel-list");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slideCount = slides.length;

let currentIndex = 0;
let autoPlayInterval;
const autoPlayDelay = 3000;
let isAnimating = false;

let touchStartX = 0;
let touchEndX = 0;
const minSwipeDistance = 30;

function runCarousel(index) {
  if (isAnimating) return;
  isAnimating = true;
  // Di chuyển track
  gsap.to(track, {
    xPercent: -100 * index,
    duration: 0.5,
    ease: "power2.out",
    onComplete: () => {
      isAnimating = false;
    },
  });
}
function handleNext() {
  currentIndex++;
  if (currentIndex >= slideCount) {
    // Khi đến cuối → quay về đầu
    currentIndex = 0;
  }
  runCarousel(currentIndex);
}

function handlePrev() {
  currentIndex--;
  if (currentIndex < 0) {
    // Khi ở đầu → quay về cuối
    currentIndex = slideCount - 1;
  }
  runCarousel(currentIndex);
}

function startAutoPlay() {
  // Xóa timer cũ để tránh chạy chồng chéo
  clearInterval(autoPlayInterval);
  autoPlayInterval = setInterval(handleNext, autoPlayDelay);
}

function stopAutoPlay() {
  clearInterval(autoPlayInterval);
}

nextBtn.addEventListener("click", () => {
  handleNext();
  startAutoPlay(); // Reset lại thời gian chờ khi người dùng click
});

prevBtn.addEventListener("click", () => {
  handlePrev();
  startAutoPlay(); // Reset lại thời gian chờ
});
// Tạm dừng khi di chuột vào carousel (UX tốt hơn)
const carouselContainer = document.querySelector(".carousel-container");
carouselContainer.addEventListener("mouseenter", stopAutoPlay);
carouselContainer.addEventListener("mouseleave", startAutoPlay);

carouselContainer.addEventListener(
  "touchstart",
  (e) => {
    // Lấy tọa độ ngang (X) của điểm chạm đầu tiên
    touchStartX = e.touches[0].clientX;
    stopAutoPlay();
  },
  { passive: false },
);

carouselContainer.addEventListener(
  "touchmove",
  (e) => {
    touchEndX = e.touches[0].clientX;
  },
  { passive: false },
);

carouselContainer.addEventListener(
  "touchend",
  () => {
    const distance = touchEndX - touchStartX;

    if (Math.abs(distance) > minSwipeDistance) {
      if (distance < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }

    startAutoPlay();
  },
  { passive: false },
);

// Bắt đầu chạy ngay khi tải trang
startAutoPlay();
