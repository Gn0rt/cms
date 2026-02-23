const mainImage = document.getElementById("main-image");
const thumbnails = document.querySelectorAll(".thumbnail");
thumbnails.forEach((thumb) => {
  thumb.addEventListener("click", function () {
    // Xóa class 'active' khỏi tất cả thumbnails
    thumbnails.forEach((t) => t.classList.remove("active"));
    // Thêm class 'active' cho thumbnail được click
    this.classList.add("active");
    // Lấy đường dẫn ảnh từ thumbnail vừa click
    const newSrc = this.querySelector("img").src;

    gsap.to(mainImage, {
      opacity: 0.2,
      duration: 0.2,
      onComplete: () => {
        mainImage.src = newSrc;
        gsap.to(mainImage, {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      },
    });
  });
});
