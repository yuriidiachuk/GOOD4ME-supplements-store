
// Mobile navigation(menu open and close) 
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btnNavEl.addEventListener('click', function () {
    headerEl.classList.toggle('nav-open')
});

// Sticky navigation
const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false)
        document.querySelector('.header').classList.add("sticky");
},
    {
        root: null,
        threshold: 0
    });
obs.observe(sectionHeroEl)

