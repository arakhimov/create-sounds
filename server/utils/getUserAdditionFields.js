const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

module.exports = getUserAdditionFields = () => {
  return {
    rate: getRandomInt(1, 5),
    image: `https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1)
      .toString(36)
      .substring(7)}.svg`,
    completedMeetings: getRandomInt(0, 200)
  };
};
