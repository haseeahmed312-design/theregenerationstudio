/* ==========================================
THE REGENERATION STUDIO
JavaScript
Version 1.0
========================================== */



/* ==========================================
SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});



/* ==========================================
STICKY HEADER SHADOW
========================================== */

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>60){

header.style.boxShadow="0 15px 35px rgba(0,0,0,.12)";

}

else{

header.style.boxShadow="0 10px 30px rgba(0,0,0,.08)";

}

});



/* ==========================================
BUTTON HOVER EFFECT
========================================== */

const buttons=document.querySelectorAll(".btn");

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-6px)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0px)";

});

});



/* ==========================================
SCROLL REVEAL
========================================== */

const revealElements=document.querySelectorAll(

".service-card,.feature-box,.info-card,.qr-box,.about-content"

);

const revealOnScroll=()=>{

const trigger=window.innerHeight*0.85;

revealElements.forEach(el=>{

const top=el.getBoundingClientRect().top;

if(top<trigger){

el.classList.add("show");

}

});

};

window.addEventListener("scroll",revealOnScroll);

revealOnScroll();

/* ==========================================
ACTIVE NAVIGATION
========================================== */

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(item => item.classList.remove("active"));

        this.classList.add("active");

    });

});



/* ==========================================
BACK TO TOP BUTTON
========================================== */

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "30px";
topButton.style.right = "30px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#555";
topButton.style.color = "#fff";
topButton.style.fontSize = "22px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.transition = ".3s";
topButton.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});



/* ==========================================
IMAGE HOVER EFFECT
========================================== */

const images = document.querySelectorAll("img");

images.forEach(img => {

    img.addEventListener("mouseenter", () => {

        img.style.transform = "scale(1.03)";

        img.style.transition = ".4s";

    });

    img.addEventListener("mouseleave", () => {

        img.style.transform = "scale(1)";

    });

});



/* ==========================================
LOADING ANIMATION
========================================== */

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});

document.body.style.opacity = "0";

document.body.style.transition = ".5s";

/* ==========================================
FADE-IN ANIMATION ON SCROLL
========================================== */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.20
});

document.querySelectorAll(
".service-card,.feature-box,.info-card,.qr-box,.about-content,.footer"
).forEach(el=>{

    observer.observe(el);

});



/* ==========================================
CURRENT YEAR IN COPYRIGHT
========================================== */

const copyright=document.querySelector(".copyright p");

if(copyright){

    copyright.innerHTML=

    `© ${new Date().getFullYear()} The Regeneration Studio - Gynae & Skin Care. All Rights Reserved.`;

}



/* ==========================================
CONSOLE MESSAGE
========================================== */

console.log(
"%cThe Regeneration Studio",
"color:#555;font-size:22px;font-weight:bold;"
);

console.log(
"%cWebsite Developed Successfully.",
"color:#888;font-size:14px;"
);



/* ==========================================
WEBSITE READY
========================================== */

document.addEventListener("DOMContentLoaded",()=>{

    console.log("Website Loaded Successfully.");

});