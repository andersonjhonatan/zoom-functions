const data = require('../data/zoo_data');

const { species, hours } = data;

const getElemento = (elementos) => {
  const getAnimal = species.filter(({ availability }) =>
    availability.includes(elementos));
  const getHours = hours[elementos];
  const getObjeto = {
    [elementos]: {
      officeHour: `Open from ${getHours.open}am until ${getHours.close}pm`,
      exhibition: getAnimal.map(({ name }) => name),
    },
  };
  return getObjeto;
};

const getElemento2 = (day) => {
  const days = hours[day];
  return `Open from ${days.open}am until ${days.close}pm`;
};

const generateAnimals = (generate) => {
  const animalValidacao = species.filter((id) =>
    id.availability.includes(generate));
  return animalValidacao.map(({ name }) => name);
};

const mondays = {
  officeHour: 'CLOSED',
  exhibition: 'The zoo will be closed!',
};

const zoolo = () => {
  const myDay = {
    Tuesday: null,
    Wednesday: null,
    Thursday: null,
    Friday: null,
    Saturday: null,
    Sunday: null,
    Monday: mondays,
  };
  species.forEach(({ availability }) => {
    availability.forEach((day) => {
      myDay[day] = {
        officeHour: getElemento2(day),
        exhibition: generateAnimals(day),
      };
    });
  });
  return myDay;
};

function dayCode(days) {
  const day = Object.keys(hours);
  return day.some((key) => key !== 'Monday' && key === days);
}

function getSchedule(target) {
  if (target === 'Monday') {
    return { Monday: mondays };
  }
  if (dayCode(target)) {
    return getElemento(target);
  }
  if (species.some(({ name }) => name === target)) {
    return species.find(({ name }) => name === target).availability;
  }
  return zoolo();
}

module.exports = getSchedule;
