/*
   Exercise 3 JavaScript code
*/

// Country list
const countryList = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua-and-Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Autria",
  "Azerbaïjan"
];

const getMatchingCountries = str => {
  let result = [];
  for (const country of countryList) {
    if (country.toLowerCase().startsWith(str.toLowerCase())) {
      result.push(country);
    }
  }
  return result;
}

const displayMatchingCountries = () => {
  let input = document.getElementById("country");
  let list = document.getElementById("suggestions");
  input.oninput = () => {
    let countries = getMatchingCountries(input.value);
    list.innerHTML = "";
    for (const country of countries) {
      let li = document.createElement("div");
      li.innerHTML = country;
      li.onclick = () => {
        input.value = country;
        list.innerHTML = "";
      }
      list.appendChild(li);
    }
  }
}

displayMatchingCountries();
