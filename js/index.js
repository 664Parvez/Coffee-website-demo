var tl = gsap.timeline()

tl
    .from("#hero_section h5", {
        opacity: 0,
        duration: 1,
        x: 100
    })
    .from("#hero_section h1", {
        opacity: 0,
        duration: 1,
        scale: 1.5
    })
    .from("#hero_section h3", {
        opacity: 0,
        duration: 1,
        y: 100
    })
    .from("#hero_section p", {
        opacity: 0,
        duration: 1,
        y: 100
    })
    .from("#hero_section .btn", {
        opacity: 0,
        duration: 1,
        y: 100
    })
    .from("#hero_section .hero_small_img .small_img_one", {
        opacity: 0,
        duration: .5,
        y: 100,
        delay: .5
    })
    .from("#hero_section .hero_small_img .small_img_two", {
        opacity: 0,
        duration: .75,
        y: 100,
        delay: .75
    })
    .from("#hero_section .hero_small_img .small_img_three", {
        opacity: 0,
        duration: 1,
        y: 100,
        delay: 1
    })

tl
    .from("#section_two", {
        scrollTrigger: {
            trigger: "#section_two",
            scroller: "body",
            markers: false,
            start: "top 70%",
            end: "bottom 40%",
            scrub: 5
        },
        opacity: 0,
        duration: 1,
        x: 100
    })

tl
    .from ("#section_three .three_subtitle", {
        scrollTrigger: {
            trigger: "#section_three .three_subtitle",
            scroller: "body",
            markers: false,
            start: "top 70%",
            end: "bottom 40%",
            scrub: 5
        },
        opacity: 0,
        duration: 1,
        x: 100
    })
    .from("#section_three h3", {
        scrollTrigger: {
            trigger: "#section_three h3",
            scroller: "body",
            markers: false,
            start: "top 70%",
            end: "bottom 40%",
            scrub: 5
        },
        opacity: 0,
        duration: 1,
        y: 50
    })
    .from("#section_three p", {
        scrollTrigger: {
            trigger: "#section_three p",
            scroller: "body",
            markers: false,
            start: "top 60%",
            end: "bottom 80%",
            scrub: 5
        },
        opacity: 0,
        duration: .5,
        y: 50
    })
    .from("#section_three h2", {
        scrollTrigger: {
            trigger: "#section_three h3",
            scroller: "body",
            markers: false,
            start: "top 60%",
            end: "bottom 80%",
            scrub: 5
        },
        opacity: 0,
        duration: .5,
        y: 50
    })
    .from("#section_three .our_achevement", {
        scrollTrigger: {
            trigger: "#section_three h3",
            scroller: "body",
            markers: false,
            start: "top 60%",
            end: "bottom 80%",
            scrub: 5
        },
        opacity: 0,
        duration: .5,
        y: 50
    })
    .from("#section_three #three_btn", {
        scrollTrigger: {
            trigger: "#section_three h3",
            scroller: "body",
            markers: false,
            start: "top 60%",
            end: "bottom 30%",
            scrub: 5
        },
        opacity: 0,
        duration: .5,
        y: 100
    })
    .from("#section_three img", {
        scrollTrigger: {
            trigger: "#section_three h5",
            scroller: "body",
            markers: false,
            start: "top 60%",
            end: "bottom 30%",
            scrub: 5
        },
        opacity: 0,
        duration: .5,
        scale: 1.2
    })

tl
    .from ("#section_four .four_subtitle", {
        scrollTrigger: {
            trigger: "#section_four h5",
            scroller: "body",
            markers: false,
            start: "top 40%",
            end: "bottom 30%",
            scrub: 5
        },
        opacity: 0,
        duration: 1,
        y: -100
    })
    .from ("#section_four h3", {
        scrollTrigger: {
            trigger: "#section_four h5",
            scroller: "body",
            markers: false,
            start: "top 40%",
            end: "bottom 30%",
            scrub: 5
        },
        opacity: 0,
        duration: .25,
        y: 100
    })
    .from ("#section_four .price_div_one", {
        scrollTrigger: {
            trigger: "#section_four h5",
            scroller: "body",
            markers: false,
            start: "top 40%",
            end: "bottom 30%",
            scrub: 5
        },
        opacity: 0,
        duration: .25,
        delay: 1,
        x: -50
    })
    .from ("#section_four .price_div_two", {
        scrollTrigger: {
            trigger: "#section_four h5",
            scroller: "body",
            markers: false,
            start: "top 40%",
            end: "bottom 30%",
            scrub: 5
        },
        opacity: 0,
        duration: .25,
        delay: 1.5,
        y: -50
    })
    .from ("#section_four .price_div_three", {
        scrollTrigger: {
            trigger: "#section_four h5",
            scroller: "body",
            markers: false,
            start: "top 40%",
            end: "bottom 30%",
            scrub: 5
        },
        opacity: 0,
        duration: .25,
        delay: 1.5,
        y: -50
    })
    .from ("#section_four .price_div_four", {
        scrollTrigger: {
            trigger: "#section_four h5",
            scroller: "body",
            markers: false,
            start: "top 40%",
            end: "bottom 30%",
            scrub: 5
        },
        opacity: 0,
        duration: .25,
        delay: 1.5,
        x: -50
    })
    .from ("#section_four .btn", {
        scrollTrigger: {
            trigger: "#section_four .price_div_one",
            scroller: "body",
            markers: false,
            start: "top 40%",
            end: "bottom 70%",
            scrub: 5
        },
        opacity: 0,
        duration: .25,
        delay: 1.5,
        y: 100
    })
    
tl
    .from ("#section_five h5", {
        scrollTrigger: {
            trigger: "#section_five h5",
            scroller: "body",
            markers: false,
            start: "top 40%",
            end: "bottom 50%",
            scrub: 5
        },
        opacity: 0,
        duration: .25,
        x: 100
    })
    .from ("#section_five h3", {
        scrollTrigger: {
            trigger: "#section_five h5",
            scroller: "body",
            markers: false,
            start: "top 40%",
            end: "bottom 50%",
            scrub: 5
        },
        opacity: 0,
        duration: .25,
        delay: 1,
        y: 50
    })
    .from ("#section_five p", {
        scrollTrigger: {
            trigger: "#section_five h5",
            scroller: "body",
            markers: false,
            start: "top 40%",
            end: "bottom 50%",
            scrub: 5
        },
        opacity: 0,
        duration: .25,
        delay: 1.5,
        y: 100
    })

tl
    .from ("#section_six h5", {
        scrollTrigger: {
            trigger: "#section_six h5",
            scroller: "body",
            markers: false,
            start: "top 60%",
            end: "bottom 70%",
            scrub: 5
        },
        opacity: 0,
        duration: .25,
        delay: 1.5,
        y: 50
    })
    .from ("#section_six h3", {
        scrollTrigger: {
            trigger: "#section_six h5",
            scroller: "body",
            markers: false,
            start: "top 60%",
            end: "bottom 70%",
            scrub: 5
        },
        opacity: 0,
        duration: .25,
        delay: 1.5,
        y: 100
    })
    .from ("#section_six p", {
        scrollTrigger: {
            trigger: "#section_six h5",
            scroller: "body",
            markers: false,
            start: "top 60%",
            end: "bottom 70%",
            scrub: 5
        },
        opacity: 0,
        duration: .25,
        delay: 1.5,
        y: 120
    })



let bar = document.querySelector('.hambar_icon');
bar.addEventListener('click', function() {
    let sideBar = document.querySelector('.responsive_menu');
    sideBar.style.marginLeft = '0px';
})
let cross = document.querySelector('.close_icon');
cross.addEventListener('click', function(e) {
    let sideBar = document.querySelector('.responsive_menu');
    sideBar.style.marginLeft = '100%';

    e.preventDefault();
})