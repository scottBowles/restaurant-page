!function(e){var t={};function n(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(o,c,function(t){return e[t]}.bind(null,c));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function o(){const e=document.querySelector("#content"),t=document.createElement("img");t.src="../src/assets/background.jpg",t.style="width: 800px",e.appendChild(t);const n=document.createElement("h1");n.textContent="Corcovado",e.appendChild(n);const o=document.createElement("p");o.textContent="Brazilian warmth. Ethically sourced coffee. A whole lotta bossa.",e.appendChild(o)}n.r(t);const c=(e,t)=>({name:e,price:t}),r={brewedCoffee:c("Brewed Coffee","1.95"),soloEspresso:c("Solo Espresso","1.25"),doubleEspresso:c("Double Espresso","1.80"),americano:c("Americano","2.05"),latte:c("Cafe Latte","3.15"),mocha:c("Cafe Mocha","3.95"),earlGrey:c("Earl Grey Tea","1.75"),yerbaMate:c("Yerba Mate","1.75")};o();const a=document.querySelector("#content"),d=document.querySelector("#nav"),u=document.createElement("button");u.textContent="HOME";const l=document.createElement("button");l.textContent="MENU";const s=document.createElement("button");s.textContent="CONTACT";[u,l,s].forEach(e=>d.appendChild(e));const i=()=>{a.innerHTML=""};u.addEventListener("click",()=>{i(),o()}),l.addEventListener("click",()=>{i(),function(){const e=document.querySelector("#content"),t=document.createElement("table");e.appendChild(t);const n=document.createElement("tr");t.appendChild(n);const o=document.createElement("th");o.textContent="Name",n.appendChild(o);const c=document.createElement("th");c.textContent="Price",n.appendChild(c),Object.keys(r).forEach(e=>{const{name:n,price:o}=r[e],c=document.createElement("tr");t.append(c);const a=document.createElement("td");a.textContent=n;const d=document.createElement("td");d.textContent=o,c.appendChild(a),c.appendChild(d)})}()}),s.addEventListener("click",()=>{i(),function(){const e=document.querySelector("#content"),t=document.createElement("h1");t.textContent="Contact Us",e.append(t);const n=document.createElement("p");n.textContent="555-555-5555",e.append(n);const o=document.createElement("p");o.textContent="1323 NW 21st Boulevard\nPittsburgh, PA 15212",e.append(o)}()})}]);