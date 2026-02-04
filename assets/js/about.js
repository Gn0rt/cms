// Đăng ký Plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);
gsap.from(".banner-text h1", {
  y: 50, // Dịch từ dưới lên 50px
  opacity: 0, // Mờ dần ra
  duration: 1.5, // Thời gian chạy 1.5 giây
  ease: "power3.out", // Hiệu ứng trượt mượt mà
});

gsap.from(".logo-company img", {
  scrollTrigger: {
    trigger: ".logo-company",
    start: "top 80%", // Bắt đầu khi logo vào 80% màn hình
    toggleActions: "play none none reverse",
  },
  scale: 0.5, // Phóng to từ nhỏ (0.5) lên bình thường (1)
  opacity: 0,
  duration: 1,
  ease: "back.out(1.7)", // Hiệu ứng nảy nhẹ (bouncy)
});

gsap.from(".des-content p", {
  scrollTrigger: {
    trigger: ".des-content",
    start: "top 85%",
    toggleActions: "play none none reverse",
  },
  y: 30,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2, // QUAN TRỌNG: Mỗi đoạn văn hiện cách nhau 0.2 giây
});

gsap.from(".picture-des img", {
  scrollTrigger: {
    trigger: ".picture-des",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
});

gsap.from(".reason", {
  scrollTrigger: {
    trigger: ".list-reason",
    start: "top 85%",
    toggleActions: "play none none reverse",
  },
  x: -50, // Trượt từ trái sang 50px
  opacity: 0,
  duration: 0.8,
  stagger: 0.3, // Hiện từng lý do một, tạo nhịp điệu
});
gsap.from(".contact", {
  scrollTrigger: {
    trigger: "#contact", // Kích hoạt khi cuộn đến vùng Contact
    start: "top 90%",
    toggleActions: "play none none reverse",
  },
  y: 30,
  opacity: 0,
  duration: 0.6,
  stagger: 0.2, // Các dòng địa chỉ, email... hiện nối đuôi nhau
});
