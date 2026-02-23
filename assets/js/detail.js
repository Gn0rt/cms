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

const listsInfo = document.querySelectorAll(".list-info li");
const infoContents = document.querySelectorAll(
  ".infomation-product .info-content",
);

listsInfo.forEach((item, index) => {
  item.addEventListener("click", () => {
    listsInfo.forEach((item) => item.classList.remove("active"));
    infoContents.forEach((content) => content.classList.remove("active"));

    item.classList.add("active");
    infoContents[index].classList.add("active");
  });
});
