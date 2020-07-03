function buildContactPage() {
  const contentDiv = document.querySelector("#content");

  const heading = document.createElement("h1");
  heading.innerText = "Contact Us";
  contentDiv.append(heading);

  const phone = document.createElement("p");
  phone.innerText = "555-555-5555";
  contentDiv.append(phone);

  const address = document.createElement("p");
  address.innerText = "1323 NW 21st Boulevard\nPittsburgh, PA 15212";
  contentDiv.append(address);
}

export { buildContactPage };
