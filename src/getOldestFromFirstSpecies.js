const data = require('../data/zoo_data');

const { species, employees } = data;

const getOldestFromFirstSpecies = (ids) =>
  Object.values(
    species
      .find(
        ({ id }) =>
          id === employees
            .find((elemento) => elemento.id === ids).responsibleFor[0],
      )
      .residents.reduce((acc, curr) => (acc.age > curr.age ? acc : curr)),
  );
module.exports = getOldestFromFirstSpecies;
