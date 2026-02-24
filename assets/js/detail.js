const mainImage = document.getElementById("main-image");
const thumbnails = document.querySelectorAll(".thumbnail");
const detailCarousel = document.querySelector(".product-detail-carousel");
let currentIndex = 0;
let detailAutoPlayInterval;
const detailAutoPlayDelay = 3000;

function changeDetailImage(index) {
  thumbnails.forEach((t) => t.classList.remove("active"));
  const currentThumb = thumbnails[index];

  currentThumb.classList.add("active");

  const newSrc = currentThumb.querySelector("img").src;

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
}

function handleDetailNext() {
  currentIndex++;
  //chạy đến cuối -> quay về đầu
  if (currentIndex >= thumbnails.length) {
    currentIndex = 0;
  }
  changeDetailImage(currentIndex);
}

function startDetailAutoPlay() {
  clearInterval(detailAutoPlayInterval);
  detailAutoPlayInterval = setInterval(handleDetailNext, detailAutoPlayDelay);
}
function stopDetailAutoPlay() {
  clearInterval(detailAutoPlayInterval);
}

thumbnails.forEach((thumb, index) => {
  thumb.addEventListener("click", () => {
    //click vào ảnh đang xem
    if (currentIndex === index) return;

    //cập nhật
    currentIndex = index;
    changeDetailImage(currentIndex);

    //khởi động lại thời gian
    startDetailAutoPlay();
  });
});
// Tạm dừng auto-play khi rê chuột vào khu vực ảnh
if (detailCarousel) {
  detailCarousel.addEventListener("mouseenter", stopDetailAutoPlay);
  detailCarousel.addEventListener("mouseleave", startDetailAutoPlay);
}
startDetailAutoPlay();

// thumbnails.forEach((thumb) => {
//   thumb.addEventListener("click", function () {

//     thumbnails.forEach((t) => t.classList.remove("active"));
//     this.classList.add("active");
//     const newSrc = this.querySelector("img").src;

//     gsap.to(mainImage, {
//       opacity: 0.2,
//       duration: 0.2,
//       onComplete: () => {
//         mainImage.src = newSrc;
//         gsap.to(mainImage, {
//           opacity: 1,
//           duration: 0.3,
//           ease: "power2.out",
//         });
//       },
//     });
//   });
// });

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
