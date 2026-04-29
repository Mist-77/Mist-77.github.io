const heroBg = document.querySelector(".hero-parallax");
const schoolBg = document.querySelector(".parallax-bg");

window.addEventListener("scroll", () => {
  const y = window.scrollY;

  if (heroBg) {
    heroBg.style.transform = `translateY(${y * 0.35}px)`;
  }

  if (schoolBg) {
    schoolBg.style.transform = `translateY(${y * 0.25}px)`;
  }
});