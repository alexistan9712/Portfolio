console.log("scroll.js ready ! 👍");

/* ScrollTrigger
========== */ 

gsap.registerPlugin(ScrollTrigger);

gsap.to(".work-text.first-item", {
    scrollTrigger: {
        trigger: ".work-text.first-item",
        start: "top bottom",
        toggleActions: "restart pause reverse pause",
        scrub: 1,
    },
    x: 2000,
    duration: 1
})

gsap.to(".carousel-slider.first-item", {
    scrollTrigger: {
        trigger: ".carousel-slider.second-item",
        start: "top bottom",
        toggleActions: "restart pause reverse pause",
        scrub: 2,
        markers: true,
    },
    x: -2000
})

gsap.to(".carousel-slider.second-item", {
    scrollTrigger: {
        trigger: ".carousel-slider.second-item",
        start: "top bottom",
        end: "bottom",
        toggleActions: "restart pause reverse pause",
        scrub: 2,
    },
    x: 2000,
    duration: 1
})

gsap.to(".work-text.second-item", {
    scrollTrigger: {
        trigger: ".work-text.second-item",
        start: "top bottom",
        toggleActions: "reverse reverse reverse reverse",
        scrub: 1,
    },
    x: -2000,
    ease: "none",
    duration: 3
})

/* ScrollEvent
========== */

gsap.to(".livetest-grid .card-description", {
    scrollTrigger: {
        trigger: ".livetest-grid .card-description",
        start: "top bottom",
<<<<<<< HEAD
        end: "top center",
        toggleActions: "reverse reverse reverse reverse",
        scrub: 1,
        markers: true,
=======
        end: "top bottom",
        toggleActions: "reverse reverse reverse reverse",
        scrub: 1,
>>>>>>> master
    },
    y: 200,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
<<<<<<< HEAD
=======
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
>>>>>>> master
    ease: "none",
    duration: 2
});

gsap.to(".livetest-grid .learn-more", {
    scrollTrigger: {
        trigger: ".livetest-grid .learn-more",
        start: "top bottom",
        toggleActions: "reverse reverse reverse reverse",
        scrub: 1,
    },
    y: 900,
    ease: "none",
    duration: 3
});


/* ScrollTrigger - Cards
========== */

gsap.to(".card.item-a", {
    scrollTrigger: {
        trigger: ".card.item-a",
        start: "top bottom",
        end: "top top",
        toggleActions: "reverse reverse reverse reverse",
        scrub: true,
    },
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    y: -100,
    ease: "none",
    duration: 3
})

gsap.to(".card.item-b", {
    scrollTrigger: {
        trigger: ".card.item-b",
        start: "top bottom",
        end: "top top",
        toggleActions: "reverse reverse reverse reverse",
        scrub: true,
    },
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    y: -100,
    ease: "none",
    duration: 3
})

gsap.to(".card.item-c", {
    scrollTrigger: {
        trigger: ".card.item-c",
        start: "top bottom",
        end: "top top",
        toggleActions: "reverse reverse reverse reverse",
        scrub: true,
    },
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    y: -100,
    ease: "none",
    duration: 3
})

/* ScrollTo
========== */ 

document.querySelector('#nav .desktop-menu ul li a').addEventListener("click", e => {
    gsap.to(window, {
        duration: 2,
        scrollTo: "#work"
    });
    console.log(document.querySelector('#nav .desktop-menu ul'))
})

document.querySelector('#nav .mobile-menu ul li a').addEventListener("click", e => {
    gsap.to(window, {
        duration: 2,
        scrollTo: "#work"
    });
    console.log(document.querySelector('#nav .desktop-menu ul'))
})


