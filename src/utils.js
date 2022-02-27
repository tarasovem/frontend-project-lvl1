const getRandomInt = (max) => Math.floor(Math.random() * (max + 1));

const getProgression = (firstElem, delta, amountOfElements) => {
  const progression = [];

  for (let i = 0; i < amountOfElements; i += 1) {
    progression.push(firstElem + delta * i);
  }

  return progression;
};

export default {
  getRandomInt,
  getProgression,
};
