const slides = document.querySelectorAll(".item-slide");
const track = document.querySelector(".carousel-list");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slideCount = slides.length; // Tổng số slide gốc (ví dụ: 4)

// 1. TẠO BẢN SAO (CLONE) CHO VÒNG LẶP VÔ HẠN
// Copy slide đầu tiên và thêm vào cuối danh sách
const firstClone = slides[0].cloneNode(true);
console.log(firstClone);
track.appendChild(firstClone);

let currentIndex = 0;
let autoPlayInterval;
const autoPlayDelay = 3000; // Thời gian tự chạy (3000ms = 3 giây)
// Hàm di chuyển slide
function runCarousel(index) {
  // Di chuyển track
  gsap.to(track, {
    xPercent: -100 * index,
    duration: 0.5,
    ease: "power2.out",
    onComplete: () => {
      // LOGIC VÒNG LẶP VÔ HẠN:
      // Nếu đang ở slide bản sao (vị trí cuối cùng)
      if (index === slideCount) {
        currentIndex = 0; // Reset biến đếm về 0
        gsap.set(track, { xPercent: 0 }); // Nhảy tức thì về slide đầu thật sự
      }
    },
  });
}
// Hàm xử lý khi nhấn Next hoặc Auto-play chạy
function handleNext() {
  currentIndex++;
  runCarousel(currentIndex);

  // Nếu click quá nhanh đến bản sao, ta cần xử lý logic reset ngay
  if (currentIndex > slideCount) {
    currentIndex = 1;
    gsap.set(track, { xPercent: 0 }); // Reset về đầu
    runCarousel(currentIndex); // Chạy tiếp đến slide 1
  }
}
// Hàm xử lý khi nhấn Prev
function handlePrev() {
  if (currentIndex === 0) {
    // Nếu đang ở đầu mà nhấn lùi -> Nhảy tức thì xuống cuối (bản sao) rồi trượt ngược lại
    currentIndex = slideCount;
    gsap.set(track, { xPercent: -100 * slideCount }); // Nhảy đến bản sao

    // Dùng setTimeout nhỏ để browser kịp render vị trí mới trước khi animation
    setTimeout(() => {
      currentIndex--;
      runCarousel(currentIndex);
    }, 10);
  } else {
    currentIndex--;
    runCarousel(currentIndex);
  }
}

// 2. CẤU HÌNH AUTO-PLAY
function startAutoPlay() {
  // Xóa timer cũ để tránh chạy chồng chéo
  clearInterval(autoPlayInterval);
  autoPlayInterval = setInterval(handleNext, autoPlayDelay);
}

function stopAutoPlay() {
  clearInterval(autoPlayInterval);
}

// 3. GẮN SỰ KIỆN
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

// Bắt đầu chạy ngay khi tải trang
startAutoPlay();
