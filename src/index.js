import home from "./home";

const contentDiv = document.querySelector("#content");

const homeTab = document.createElement("button");
homeTab.innerText = "HOME";
const menuTab = document.createElement("button");
menuTab.innerText = "MENU";
const contactTab = document.createElement("button");
contactTab.innerText = "CONTACT";

const tabs = [homeTab, menuTab, contactTab];

tabs.forEach((tab) => contentDiv.appendChild(tab));
