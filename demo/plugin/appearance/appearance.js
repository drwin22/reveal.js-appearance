/*****************************************************************
 *
 * Appearance for Reveal.js 
 * Version 1.3.4
 * 
 * @author: Martijn De Jongh (Martino), martijn.de.jongh@gmail.com
 * https://github.com/martinomagnifico
 *
 * @license 
 * MIT licensed
 * 
 * Copyright (C) 2023 Martijn De Jongh (Martino)
 *
 ******************************************************************/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).Appearance=t()}(this,(function(){"use strict";var e="undefined"!=typeof document?document.currentScript:null;const t=e=>e&&"object"==typeof e&&!Array.isArray(e),a=(e,...n)=>{if(!n.length)return e;const s=n.shift();if(t(e)&&t(s))for(const n in s)t(s[n])?(e[n]||Object.assign(e,{[n]:{}}),a(e[n],s[n])):Object.assign(e,{[n]:s[n]});return a(e,...n)},n=e=>{let t="";return"string"==typeof e&&(e=e.replace(/[“”]/g,'"').replace(/[‘’]/g,"'")),t=(e=>{try{return JSON.parse(e)&&!!e}catch(e){return!1}})(e)?e:"object"==typeof e?JSON.stringify(e,null,2):"{"===e.trim().replace(/'/g,'"').charAt(0)?e.trim().replace(/'/g,'"'):`{${e.trim().replace(/'/g,'"')}}`,t},s=(e,t,a)=>{let n,s=document.querySelector("head"),r=!1;if(document.querySelector(`link[href="${e}"]`)?r=!0:(n=document.createElement("link"),n.rel="stylesheet",n.href=e),!r){const e=()=>{"function"==typeof a&&(a.call(),a=null)};n.onload=e,n.onreadystatechange=function(){"loaded"===this.readyState&&e()},s.appendChild(n)}},r=(e,t)=>{e.debug&&console.log(t)},i=(t,a)=>{let n=(t=>{let a,n=document.querySelector(`script[src$="${t}"]`);return a=n?n.getAttribute("src").slice(0,-1*t.length):("undefined"==typeof document&&"undefined"==typeof location?require("url").pathToFileURL(__filename).href:"undefined"==typeof document?location.href:e&&"SCRIPT"===e.tagName.toUpperCase()&&e.src||new URL("appearance.js",document.baseURI).href).slice(0,("undefined"==typeof document&&"undefined"==typeof location?require("url").pathToFileURL(__filename).href:"undefined"==typeof document?location.href:e&&"SCRIPT"===e.tagName.toUpperCase()&&e.src||new URL("appearance.js",document.baseURI).href).lastIndexOf("/")+1),a})(a),r=a.replace(/\.[^/.]+$/,"");if(t.cssautoload){let e=t.csspath.appearance?t.csspath.appearance:`${n}${r}.css`||`plugin/${r}/${r}.css`,a=t.compatibility?t.animatecsspath.compat:t.animatecsspath.link;t.debug&&(console.log("Paths:"),console.log(`  - Plugin path = ${n}`),console.log(`  - Appearance CSS path = ${e}`),console.log(`  - AnimateCSS CSS path = ${a}`)),s(a,0,(function(){s(e)}))}},o=(e,t)=>{let a=e.parentNode;if(a){for(const t of a.children)if(t!==e&&t.dataset.appearParent)return;a.classList=e.classList,(({attributes:e},t,a)=>{[...e].filter((({nodeName:e})=>e.includes("data"))).forEach((({nodeName:e,nodeValue:n})=>{e===a&&a||t.setAttribute(e,n)}))})(e,a,"data-appear-parent"),a.innerHTML=e.innerHTML,a.classList.add(t)}},l=(e,t,a)=>Array.from(a.querySelectorAll(`.${e}`)).filter((e=>!e.closest(`.${t}`))),d=(e,t,a)=>{const n=[l(t,a,e),...Array.from(e.querySelectorAll(`.${a}`)).map((e=>((e,t,a)=>Array.from(a.querySelectorAll(`.${e}`)).filter((e=>e.closest(`.${t}`)===a)))(t,a,e)))];return!!n.some((e=>e.length>0))&&n},c=(e,t)=>{t.hideagain&&e.from&&e.from.dataset.appearanceCanStart&&e.from.removeAttribute("data-appearance-can-start")},p=(e,t,a)=>{if(t.hideagain&&e&&e.from){let t=e.from.querySelectorAll(a.animatecss);t&&t.forEach((e=>{e.classList.remove("animationended")}));let n=e.from.querySelectorAll(".fragment.visible");n&&n.forEach((e=>{e.classList.remove("visible")}))}};return()=>{const e={names:{}};let t={};const s=(e,t,a)=>{r(e,"-------------   Preloading   -------------");let s=t.names;i(e,s.es5Filename),e.compatibility&&(s.animatecss=".backInDown, .backInLeft, .backInRight, .backInUp, .bounceIn, .bounceInDown, .bounceInLeft, .bounceInRight, .bounceInUp, .fadeIn, .fadeInDown, .fadeInDownBig, .fadeInLeft, .fadeInLeftBig, .fadeInRight, .fadeInRightBig, .fadeInUp, .fadeInUpBig, .fadeInTopLeft, .fadeInTopRight, .fadeInBottomLeft, .fadeInBottomRight, .flipInX, .flipInY, .lightSpeedInRight, .lightSpeedInLeft, .rotateIn, .rotateInDownLeft, .rotateInDownRight, .rotateInUpLeft, .rotateInUpRight, .jackInTheBox, .rollIn, .zoomIn, .zoomInDown, .zoomInLeft, .zoomInRight, .zoomInUp, .slideInDown, .slideInLeft, .slideInRight, .slideInUp, .skidLeft, .skidLeftBig, .skidRight, .skidRightBig, .shrinkIn, .shrinkInBlur",s.baseclass=e.compatibilitybaseclass),t.appearances=Array.from(t.slides.querySelectorAll(s.animatecss)),t.regularSections.forEach((a=>((e,t,a)=>{let s=null;if(e.hasAttribute("data-autoappear")){let a=e.dataset.autoappear;s="auto"==a||""==a||a.length<1||"true"==a?t.autoelements?t.autoelements:null:a}else t.autoappear&&t.autoelements&&(s=t.autoelements);if(s){let t=JSON.parse(n(s));Object.entries(t).forEach((([t,n])=>{let s=Array.from(e.querySelectorAll(t)).filter((e=>!a.appearances.includes(e)));s.length&&s.forEach((e=>{a.appearances.push(e);let t=[],s=null,r=!1,i=null,o=null;Array.isArray(n)?(t=n[0].split(/[ ,]+/),s=n[1]):"string"==typeof n?t=n.split(/[ ,]+/):n.constructor===Object&&((n.class||n.animation)&&(t=(n.animation?n.animation:n.class).split(/[ ,]+/)),n.speed&&(r=String(n.speed),r.includes("animate__")||(r=`animate__${r}`)),n.delay&&(s=String(n.delay)),n.split&&(i=String(n.split)),n["container-delay"]&&(o=String(n["container-delay"]))),e.classList.add(...t),r&&e.classList.add(r),s&&(e.dataset.delay||(e.dataset.delay=s)),i&&(e.dataset.split=i),o&&(e.dataset.containerDelay=o)}))}))}})(a,e,t))),t.appearances.forEach(((t,a)=>{((e,t,a)=>{let n=a.baseclass;e.hasAttribute("data-appear-parent")&&o(e,n),t.appearparents&&e.parentNode&&e.parentNode.tagName&&"SPAN"==e.tagName&&"LI"==e.parentNode.tagName&&String(e.outerHTML).length==String(e.parentNode.innerHTML).length&&o(e)})(t,e,s),((e,t)=>{e.classList.contains(t.baseclass)||e.classList.add(t.baseclass),e.classList.contains(t.fragmentClass)&&e.classList.add("custom")})(t,s),t.hasAttribute("data-split")&&((e,t)=>{let a=!1,n=" ";if("words"==t?a=e.textContent.trim().split(/\s+/):"letters"==t&&(a=e.textContent.trim().split(""),n=""),a){const t=Array.from(e.classList).filter((e=>e.startsWith("animate__"))),s=a.map(((t,a)=>{const n=document.createElement("span");return n.textContent=t," "==t&&(n.textContent=" "),e.dataset.delay&&0!==a&&(n.dataset.delay=e.dataset.delay),e.dataset.containerDelay&&0===a&&(n.dataset.delay=e.dataset.containerDelay),e.classList.add("wordchargroup"),e.classList.forEach((e=>e.startsWith("animate__")&&n.classList.add(e))),n.outerHTML})).join(n);t.forEach((t=>e.classList.remove(t))),e.removeAttribute("data-delay"),e.removeAttribute("data-split"),e.removeAttribute("data-container-delay"),e.innerHTML=s}})(t,t.dataset.split)})),t.regularSections.forEach(((t,a)=>{let n=d(t,s.baseclass,s.fragmentClass);n&&n.forEach((t=>{((e,t,a)=>{let n=0;e.forEach(((e,a)=>{if(0==a&&e.dataset.delay||0!=a){let a=t.delay;e.dataset&&e.dataset.delay&&(a=parseInt(e.dataset.delay)),n+=a,e.style.setProperty("animation-delay",n+"ms"),e.removeAttribute("data-delay")}}))})(t,e)}))})),(e=>{setTimeout(e,0)})(a)},l=(t,a,n)=>{let i=e.names;return i.baseclass=a.baseclass,i.compatibilitybaseclass=a.compatibilitybaseclass,i.fragmentSelector=".fragment",i.fragmentClass="fragment",i.speedClasses=["slower","slow","fast","faster"],i.speedClasses.push(...i.speedClasses.map((e=>`animate__${e}`))),i.animatecss='[class^="animate__"],[class*=" animate__"]',i.es5Filename=n,i.eventnames=["ready","slidechanged","slidetransitionend","autoanimate","overviewhidden"],e.deck=t,e.dom=t.getRevealElement(),e.viewport=t.getViewportElement(),e.slides=t.getSlidesElement(),e.sections=e.slides.querySelectorAll("section"),e.fragments=e.slides.querySelectorAll(i.fragmentSelector),e.regularSections=Array.from(e.sections).filter((e=>!(({childNodes:e})=>{let t=!1;for(let a=0;a<e.length;a++)if("SECTION"==e[a].tagName){t=!0;break}return t})(e))),/receiver/i.test(window.location.search)&&e.viewport.classList.add("sv"),i.eventnames.forEach((n=>t.on(n,(t=>{((e,t,a,n)=>{n.deck.getConfig().view;let s=n.viewport.classList.contains("reveal-scroll"),r=e.type,i=(e=>{let t={};return t.from=e.fromSlide||e.previousSlide||null,t.to=e.toSlide||e.currentSlide||null,t})(e);if(i.to){"ready"==r&&(i.to.dataset.appearanceCanStart=!0);let n=((e,t)=>(e.dataset.appearevent&&"auto"===e.dataset.appearevent&&(e.dataset.appearevent="autoanimate"),"auto"==t.appearevent&&(t.appearevent="autoanimate"),e.dataset.appearevent?e.dataset.appearevent:t.appearevent))(i.to,t);(r==n||"slidetransitionend"==r&&"autoanimate"==n)&&(i.to.dataset.appearanceCanStart=!0),s&&"slidechanged"==r&&(c(i,t),p(i,t,a),setTimeout((()=>{i.to.dataset.appearanceCanStart=!0}),t.delay)),"slidetransitionend"==r&&(c(i,t),p(i,t,a)),"slidechanged"==r&&document.body.dataset.exitoverview?(c(i,t),i.to.dataset.appearanceCanStart=!0):"overviewhidden"==r&&(document.body.dataset.exitoverview=!0,setTimeout((()=>{document.body.removeAttribute("data-exitoverview")}),500),e.currentSlide&&(c(i,t),i.to.dataset.appearanceCanStart=!0))}})(t,a,i,e)})))),e.viewport.addEventListener("animationend",(e=>{e.target.classList.add("animationended")})),e.viewport.addEventListener("fragmenthidden",(e=>{e.fragment.classList.remove("animationended"),e.fragment.querySelectorAll(".animationended").forEach((e=>{e.classList.remove("animationended")}))})),new Promise((t=>{s(a,e,t),r(a,"----------   Done preloading   ----------")}))};return{id:"appearance",init:e=>(t=a({baseclass:"animate__animated",hideagain:!0,delay:300,debug:!1,appearevent:"slidetransitionend",autoappear:!1,autoelements:!1,appearparents:!1,cssautoload:!0,csspath:"",animatecsspath:{link:"https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",compat:"https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.compat.css"},compatibility:!1,compatibilitybaseclass:"animated"},e.getConfig().appearance||{}),l(e,t,"appearance.js"))}}}));
//# sourceMappingURL=appearance.js.map
