import { buildHomePage } from "./home";
import { buildMenuPage } from "./menu";
import { buildContactPage } from "./contact";

buildHomePage();
// buildContactPage();
// buildMenuPage();

const contentDiv = document.querySelector("#content");
const nav = document.querySelector("#nav");

const homeTab = document.createElement("button");
homeTab.textContent = "HOME";
const menuTab = document.createElement("button");
menuTab.textContent = "MENU";
const contactTab = document.createElement("button");
contactTab.textContent = "CONTACT";

const tabs = [homeTab, menuTab, contactTab];

tabs.forEach((tab) => nav.appendChild(tab));

const clearContent = () => {
  contentDiv.innerHTML = "";
};

homeTab.addEventListener("click", () => {
  clearContent();
  buildHomePage();
});

menuTab.addEventListener("click", () => {
  clearContent();
  buildMenuPage();
});

contactTab.addEventListener("click", () => {
  clearContent();
  buildContactPage();
});
