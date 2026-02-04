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
); // Chạy cùng lúc với ảnh
