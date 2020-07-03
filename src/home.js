function buildHomePage() {
  const contentDiv = document.querySelector("#content");

  const mainImage = document.createElement("img");
  mainImage.src = "../src/assets/background.jpg";
  mainImage.style = "width: 800px";
  contentDiv.appendChild(mainImage);

  const header = document.createElement("h1");
  header.innerText = "Corcovado";
  contentDiv.appendChild(header);

  const copytext = document.createElement("p");
  copytext.innerText =
    "Brazilian warmth. Ethically sourced coffee. A whole lotta bossa.";
  contentDiv.appendChild(copytext);
}

export { buildHomePage };
