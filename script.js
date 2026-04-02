gsap.registerPlugin(ScrollTrigger);

const car = document.querySelector(".car-img");
const trail = document.querySelector(".road-trail");
const valueAdd = document.querySelector(".hero-text");

/* Auto split WELCOME into letters */
const text = "WELCOME";
valueAdd.innerHTML = text.split("").map(letter => `<span class="value-letter">${letter}</span>`).join("");

const letters = gsap.utils.toArray(".value-letter");
const letterOffsets = letters.map(letter => letter.offsetLeft);

const roadWidth = window.innerWidth;
const carWidth = 300;
const endX = roadWidth - carWidth;

/* Car scroll animation */
gsap.to(car, {
    scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: ".hero-track"
    },
    x: endX,
    ease: "none",
    onUpdate: function () {
        const carX = gsap.getProperty(car, "x") + carWidth / 2;
        letters.forEach((letter, i) => {
            letter.style.opacity = carX >= letterOffsets[i] ? 1 : 0;
        });
        gsap.set(trail, { width: carX + "px" });
    }
});

/* Info card animations */
gsap.to("#box1", { 
    scrollTrigger: { trigger: ".hero-section", start: "top+=400 top", end: "top+=600 top", scrub: true }, 
    opacity: 1 
});
gsap.to("#box2", { 
    scrollTrigger: { trigger: ".hero-section", start: "top+=600 top", end: "top+=800 top", scrub: true }, 
    opacity: 1 
});
gsap.to("#box3", { 
    scrollTrigger: { trigger: ".hero-section", start: "top+=800 top", end: "top+=1000 top", scrub: true }, 
    opacity: 1 
});
gsap.to("#box4", {
     scrollTrigger: { trigger: ".hero-section", start: "top+=1000 top", end: "top+=1200 top", scrub: true }, 
     opacity: 1 
    });
