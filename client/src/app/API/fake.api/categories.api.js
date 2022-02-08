/* eslint-disable linebreak-style */
export const categories = {
  plucked: { _id: "67rdca3eeb7f6fgeed471818", name: "Щипковые" },
  bowed: { _id: "67rdca3eeb7f6fgeed471820", name: "Смычковые" },
  stringed: { _id: "67rdca3eeb7f6fgeed471814", name: "Струнные" },
  brass: { _id: "67rdca3eeb7f6fgeed471822", name: "Медные" },
  wood: { _id: "67rdca3eeb7f6fgeed471824", name: "Деревянные" },
  wind: { _id: "67rdca3eeb7f6fgeed471829", name: "Духовые" },
  tongue: { _id: "67rdpa3eeb7f6fgeed471821", name: "Язычковые" },
  percussion: { _id: "17rdpa4eeb7f6fgeed471827", name: "Ударные" },
  keyboard: { _id: "27rdpа4eeb7f6fgeed471829", name: "Клавишные" },
  mechanic: { _id: "47rdpаdeeb7f6fgeed471823", name: "Механические" },
  electronic: { _id: "67rdpfdeeb7f6fgeed474983", name: "Электронные" }
};

const fetchAll = () =>
  new Promise((resolve) => setTimeout(() => resolve(categories), 200));

export default { fetchAll };
