import{initHeroSection}from './hero.js';import{initAboutSection}from './about.js';import{initFeaturesSection}from './features.js';import{initHowItWorksSection}from './how-it-works.js';import{initContactSection}from './contact.js';let lastScrollY=window.scrollY;let ticking=!1;function initGlobalEffects(){const cursor=document.createElement("div");cursor.className="cursor-follower";cursor.style.cssText=`
        position: fixed;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, rgba(168, 85, 247, 0.3), transparent);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease, background 0.2s ease;
        transform: translate(-50%, -50%);
    `;const progressBar=document.createElement('div');progressBar.style.cssText=`
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #667eea, #764ba2);
        z-index: 10000;
        transition: width 0.1s ease;
    `;document.body.appendChild(progressBar);function handleScroll(){const scrollY=window.scrollY;const scrollDirection=scrollY>lastScrollY?"down":"up";const scrollTop=window.pageYOffset;const docHeight=document.documentElement.scrollHeight-window.innerHeight;const scrollPercent=(scrollTop/docHeight)*100;progressBar.style.width=scrollPercent+'%';const navbar=document.querySelector(".navbar");if(navbar){if(scrollY>50){navbar.classList.add("scrolled");if(scrollDirection==="down"&&scrollY>200){navbar.style.transform="translateY(-100%)"}else if(scrollDirection==="up"){navbar.style.transform="translateY(0)"}}else{navbar.classList.remove("scrolled");navbar.style.transform="translateY(0)"}}
const parallaxElements=document.querySelectorAll(".hero-background");parallaxElements.forEach((element)=>{const speed=0.5;element.style.transform=`translateY(${scrollY * speed}px)`});const scrollIndicator=document.querySelector(".scroll-indicator");if(scrollIndicator){scrollIndicator.style.opacity=scrollY>100?"0":"1"}
lastScrollY=scrollY;ticking=!1}
window.addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(handleScroll);ticking=!0}})}
document.addEventListener('DOMContentLoaded',()=>{console.log("Document loaded. Initializing scripts.");initGlobalEffects();if(document.querySelector('.hero-section')){console.log("Hero section found. Initializing...");initHeroSection()}
if(document.querySelector('.about-section')){console.log("About section found. Initializing...");initAboutSection()}
if(document.querySelector('.features-features-section')){console.log("Features section found. Initializing...");initFeaturesSection()}
if(document.querySelector('.how-it-works')){console.log("How It Works section found. Initializing...");initHowItWorksSection()}
if(document.querySelector('.contact-section')){console.log("Contact section found. Initializing...");initContactSection()}})
