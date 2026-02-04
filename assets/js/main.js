gsap.registerPlugin(ScrollTrigger);
// Tạo Timeline để đồng bộ hóa mọi thứ
// scrub: 1 nghĩa là animation sẽ chạy theo thanh cuộn (như bạn kéo chuột trong PowerPoint)
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#general",
    start: "top 90%",
    end: "top 40%",
    scrub: 1, // Mượt mà (smooth)
    // markers: true,
  },
});

// 1. Hiệu ứng cho Ảnh (Bay từ bên trái vào + Xoay 3D)
tl.from(
  ".general-content",
  {
    x: -500, // Dịch sang trái 500px (Ở ngoài màn hình)
    y: 100, // Dịch xuống 100px
    rotationY: -60, // Xoay nghiêng 3D
    rotationZ: -10, // Xoay nghiêng trục Z
    opacity: 0, // Mờ dần
    scale: 0.5, // Nhỏ lại
    duration: 0.5,
  },
  0,
); // Số 0 ở cuối nghĩa là bắt đầu ngay từ đầu timeline

// 2. Hiệu ứng cho Chữ (Bay từ bên phải vào)
tl.from(
  ".general-view",
  {
    x: 500, // Dịch sang phải 500px
    opacity: 0,
    rotationY: 60, // Xoay nghiêng 3D
    rotationZ: 10, // Xoay nghiêng trục Z
    duration: 0.5,
  },
  0,
);

const tlProduct = gsap.timeline({
  scrollTrigger: {
    trigger: "#product",
    start: "top 75%",
    end: "bottom bottom",
    toggleActions: "play none none reverse", // Tự chạy khi vào, tua ngược khi lướt lên
    markers: false,
  },
});
// 1. Hiệu ứng cho Tiêu đề (Hiện rõ dần + Trượt lên)
tlProduct.from(".product-title", {
  y: 50, // Dịch chuyển từ dưới lên 50px
  opacity: 0,
  duration: 1.2,
  ease: "power3.out", // Hiệu ứng trượt nhẹ nhàng
});

// 2. Hiệu ứng cho Khung Carousel (Phóng to + Hiện ra)
tlProduct.from(
  ".carousel-container",
  {
    scale: 0.8,
    y: 100,
    opacity: 0,
    duration: 1.5,
    ease: "back.out(1.7)", // "back.out" tạo hiệu ứng nảy nhẹ (bouncy) rất sinh động
  },
  "-=0.5",
); // "-=0.5" nghĩa là chạy đè lên hiệu ứng trên (bắt đầu sớm hơn 0.5s so với khi tiêu đề kết thúc)

var map = L.map("map").setView([20.93401519194989, 105.78397610888427], 13);
L.tileLayer("http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}", {
  maxZoom: 20,
  subdomains: ["mt0", "mt1", "mt2", "mt3"],
}).addTo(map);

var marker = L.marker([20.93401519194989, 105.78397610888427]).addTo(map);
