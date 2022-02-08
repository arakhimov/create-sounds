/* eslint-disable indent */
export const getRandomId = () => {
  return Math.floor(Math.random() * 1e8)
    .toString()
    .padEnd(8, "0");
};
