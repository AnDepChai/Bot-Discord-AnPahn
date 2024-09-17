
// Animation for features section
gsap.from(".section-title", { duration: 1, y: 50, opacity: 0, ease: "power2.out", delay: 0.5 });
gsap.from(".card", {
    duration: 1,
    opacity: 0,
    scale: 0.9,
    stagger: 0.2,
    ease: "power2.out",
    delay: 1
});
