const menuItemFactory = (name, price) => {
  return { name, price };
};

const menuItems = {
  brewedCoffee: menuItemFactory("Brewed Coffee", "1.95"),
  soloEspresso: menuItemFactory("Solo Espresso", "1.25"),
  doubleEspresso: menuItemFactory("Double Espresso", "1.80"),
  americano: menuItemFactory("Americano", "2.05"),
  latte: menuItemFactory("Cafe Latte", "3.15"),
  mocha: menuItemFactory("Cafe Mocha", "3.95"),
  earlGrey: menuItemFactory("Earl Grey Tea", "1.75"),
  yerbaMate: menuItemFactory("Yerba Mate", "1.75"),
};

function buildMenuPage() {
  const contentDiv = document.querySelector("#content");

  const menuTable = document.createElement("table");
  contentDiv.appendChild(menuTable);
  const headingRow = document.createElement("tr");
  menuTable.appendChild(headingRow);
  const nameHeading = document.createElement("th");
  nameHeading.textContent = "Name";
  headingRow.appendChild(nameHeading);
  const priceHeading = document.createElement("th");
  priceHeading.textContent = "Price";
  headingRow.appendChild(priceHeading);

  Object.keys(menuItems).forEach((menuItem) => {
    const { name, price } = menuItems[menuItem];
    const row = document.createElement("tr");
    menuTable.append(row);
    const nameCell = document.createElement("td");
    nameCell.textContent = name;
    const priceCell = document.createElement("td");
    priceCell.textContent = price;
    row.appendChild(nameCell);
    row.appendChild(priceCell);
  });
}

export { buildMenuPage };
