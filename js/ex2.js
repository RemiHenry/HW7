/*
   Exercise 2 JavaScript code
*/

// Character list. Each house has a name and a code
const houses = [
  {
    code: "ST",
    name: "Stark"
  },
  {
    code: "LA",
    name: "Lannister"
  },
  {
    code: "BA",
    name: "Baratheon"
  },
  {
    code: "TA",
    name: "Targaryen"
  }
];
// Return an array of characters belonging to a house
const getCharacters = houseCode => {
  switch (houseCode) {
    case "ST":
      return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
      return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
      return ["Robert", "Stannis", "Renly"];
    case "TA":
      return ["Aerys", "Daenerys", "Viserys"];
    default:
      return []; // Empty array
  }
};

const displayHouses = () => {
  let select = document.getElementById("house");
  for (const house of houses) {
    let option = document.createElement("option");
    option.value = house.code;
    option.innerHTML = house.name;
    select.appendChild(option);
  }
}

const displayCharacters = () => {
  // update the list when the selection changes
  let select = document.getElementById("house");
  select.onchange = () => {
    let characters = getCharacters(select.value);
    let list = document.getElementById("characters");
    list.innerHTML = "";
    for (const character of characters) {
      let li = document.createElement("li");
      li.innerHTML = character;
      list.appendChild(li);
    }
  }
}

window.onload = () => {
  displayHouses();
  displayCharacters();
}