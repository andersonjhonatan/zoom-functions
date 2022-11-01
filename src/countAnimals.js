const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  if (animal === undefined) {
    const novoObjeto = {};
    species.forEach((especie) => {
      novoObjeto[especie.name] = especie.residents.length;
    });
    return novoObjeto;
  }

  if (Object.keys(animal).length === 1) {
    return species.find((specie) => specie.name === animal.specie).residents
      .length;
  }

  return species
    .find((specie) => specie.name === animal.specie)
    .residents.filter((elemento) => elemento.sex === animal.sex).length;
}
module.exports = countAnimals;
