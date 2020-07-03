import { buildHomePage } from "./home";
import { buildMenuPage } from "./menu";
import { buildContactPage } from "./contact";

buildHomePage();
// buildContactPage();
// buildMenuPage();

const contentDiv = document.querySelector("#content");

const homeTab = document.createElement("button");
homeTab.innerText = "HOME";
const menuTab = document.createElement("button");
menuTab.innerText = "MENU";
const contactTab = document.createElement("button");
contactTab.innerText = "CONTACT";

const tabs = [homeTab, menuTab, contactTab];

tabs.forEach((tab) => contentDiv.appendChild(tab));

homeTab.addEventListener("click", () => {
  //
});

menuTab.addEventListener("click", () => {
  //
});

contactTab.addEventListener("click", () => {
  //
});
