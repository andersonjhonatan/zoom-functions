const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const nomes = {};
  const child = entrants.filter(({ age }) => age < 18);
  const adult = entrants.filter(({ age }) => age >= 18 && age < 50);
  const senior = entrants.filter(({ age }) => age >= 50);
  nomes.child = child.length;
  nomes.adult = adult.length;
  nomes.senior = senior.length;
  return nomes;
}
function calculateEntry(entrants) {
  if (entrants === undefined || Object.values(entrants).length === 0) {
    return 0;
  }
  const pricesChild = countEntrants(entrants).child * data.prices.child;
  const pricesAdults = countEntrants(entrants).adult * data.prices.adult;
  const priceSenior = countEntrants(entrants).senior * data.prices.senior;
  const total = pricesChild + priceSenior + pricesAdults;
  return total;
}

module.exports = { calculateEntry, countEntrants };
