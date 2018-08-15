const fetch = require('node-fetch')
const id = 2;

module.exports = function () {
  return fetch("http://www.dnd5eapi.co/api/monsters/").then((response) => {
    if (response.status === 200) {
      return response.json();
    }
    console.log(response);
    throw new Error('Network response was not ok.');
  })
}