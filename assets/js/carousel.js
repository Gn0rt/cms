const slides = document.querySelectorAll(".item-slide");
const track = document.querySelector(".carousel-list");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
let currentIndex = 0;
const totalSlides = slides.length;

function updateCarousel() {
  // Dùng GSAP để di chuyển danh sách
  // xPercent: -100 * currentIndex nghĩa là dịch sang trái 0%, 100%, 200%...
  gsap.to(track, {
    xPercent: -100 * currentIndex,
    duration: 0.5,
    ease: "power2.out", // Hiệu ứng trượt mượt mà
  });
}
// Sự kiện nút Next
nextBtn.addEventListener("click", () => {
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
    updateCarousel();
  } else {
    // (Tùy chọn) Nếu muốn quay về đầu:
    // currentIndex = 0; updateCarousel();

    // Hiệu ứng "rung" báo hiệu hết trang
    gsap.to(track, { x: "-=10", yoyo: true, repeat: 1, duration: 0.1 });
  }
});
// Sự kiện nút Prev
prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  } else {
    // Hiệu ứng "rung" báo hiệu hết trang
    gsap.to(track, { x: "+=10", yoyo: true, repeat: 1, duration: 0.1 });
  }
});
