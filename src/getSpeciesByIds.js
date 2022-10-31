const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => data.species.filter((element) => ids.includes(element.id));

module.exports = getSpeciesByIds;
