import { gsap } from "gsap";
import Swiper from "swiper";
const menuToggleContainer = document.getElementById('menu-toggle-container');
    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const mobileMenu = document.getElementById('mobile-menu');

    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.remove('translate-x-full');
      mobileMenu.classList.add('translate-x-0');
      menuToggleContainer.classList.add('hidden');
    });

    menuClose.addEventListener('click', () => {
      mobileMenu.classList.add('translate-x-full');
      mobileMenu.classList.remove('translate-x-0');
      menuToggleContainer.classList.remove('hidden');
    });
document.addEventListener('DOMContentLoaded', () => {

gsap.from('.about-image', {
    duration: 1.5,
    x: -100,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.5
});
gsap.from('.about-text h2', {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.8
});

gsap.from('.about-text p, .about-text button', {
    duration: 1,
    y: 30,
    opacity: 0,
    ease: 'power3.out',
    stagger: 0.3,
    delay: 1
});

gsap.to('.about-image img', {
    yPercent: 20,
    ease: 'none',
    scrollTrigger: {
        trigger: '#about',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
    }
});
});