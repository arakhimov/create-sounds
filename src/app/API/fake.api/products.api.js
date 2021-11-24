import { getRandomId } from "../../utils/getRandomId";
import { categories } from "./categories.api";

const products = [
  {
    _id: getRandomId(),
    name: "Гитара",
    categories: [categories.plucked, categories.stringed],
    cost: 1000,
    amount: 12,
    url: "https://www.bigtv.ru/storage/goodsImages/635/635752/clear_635752_1.jpg"
  },
  {
    _id: getRandomId(),
    name: "Лира",
    categories: [categories.plucked, categories.stringed],
    cost: 1200,
    amount: 4,
    url: "https://pbs.twimg.com/media/EK4q6MWWwAUZhuP.jpg"
  },
  {
    _id: getRandomId(),
    name: "Домра",
    categories: [categories.plucked, categories.stringed],
    cost: 2000,
    amount: 8,
    url: "https://storemusic.ru/images/detailed/165/a57ea21e99a211e693550025220e6b31_17d0b36791e711e7b74cd43d7e56c148.jpg"
  },
  {
    _id: getRandomId(),
    name: "Скрипка",
    categories: [categories.bowed, categories.stringed],
    cost: 800,
    amount: 5,
    url: "http://pngimg.com/uploads/violin/violin_PNG12813.png"
  },
  {
    _id: getRandomId(),
    name: "Виолончель",
    categories: [categories.bowed, categories.stringed],
    cost: 3000,
    amount: 2,
    url: "https://www.bigtv.ru/storage/goodsImages/653/653268/clear_653268_1.png"
  },
  {
    _id: getRandomId(),
    name: "Контрабас",
    categories: [categories.bowed, categories.stringed],
    cost: 4000,
    amount: 1,
    url: "https://muzdom.ru/files/products/antoni-adb05-1-4-double-bass-1-4-bag-p21553-25870_image.800x600w.jpg"
  },
  {
    _id: getRandomId(),
    name: "Валторна",
    categories: [categories.brass, categories.wind],
    cost: 2000,
    amount: 4,
    url: "https://im0-tub-ru.yandex.net/i?id=c959e507496ffacf40192edcc23df11b&n=13&exp=1"
  },
  {
    _id: getRandomId(),
    name: "Тромбон",
    categories: [categories.brass, categories.wind],
    cost: 2500,
    amount: 3,
    url: "https://d1aeri3ty3izns.cloudfront.net/media/9/92789/1200/preview.jpg"
  },
  {
    _id: getRandomId(),
    name: "Труба",
    categories: [categories.brass, categories.wind],
    cost: 1500,
    amount: 6,
    url: "https://www.bigtv.ru/storage/goodsImages/164/164979/1000x1000-164979_1.jpg"
  },
  {
    _id: getRandomId(),
    name: "Туба",
    categories: [categories.brass, categories.wind],
    cost: 1800,
    amount: 7,
    url: "https://muzikant.ua/wa-data/public/shop/products/11/51/45111/images/52086/52086.970.jpg"
  },
  {
    _id: getRandomId(),
    name: "Саксофон",
    categories: [categories.wood, categories.wind, categories.tongue],
    cost: 5000,
    amount: 4,
    url: "https://saxtienda.com/1885-home_default/sml-paris-saxofon-alto-a300.jpg"
  },
  {
    _id: getRandomId(),
    name: "Гобой",
    categories: [categories.wood, categories.wind, categories.tongue],
    cost: 4000,
    amount: 2,
    url: "https://images.ru.prom.st/638224808_w640_h640_yamaha-ycl-255-.jpg"
  },
  {
    _id: getRandomId(),
    name: "Кларнет",
    categories: [categories.wood, categories.wind, categories.tongue],
    cost: 2500,
    amount: 2,
    url: "https://ae01.alicdn.com/kf/HTB1ppwtNMHqK1RjSZJnq6zNLpXaZ/17-Bb.jpg"
  },
  {
    _id: getRandomId(),
    name: "Фагот",
    categories: [categories.wood, categories.wind, categories.tongue],
    cost: 4500,
    amount: 1,
    url: "https://musmag.com/images/stories/virtuemart/product/YFG_812C.jpg"
  },
  {
    _id: getRandomId(),
    name: "Варган",
    categories: [categories.tongue],
    cost: 1000,
    amount: 3,
    url: "https://static-sl.insales.ru/images/products/1/2742/360360630/9066f73f_96b8_11e6_8be4_001e67103b78_9066f745_96b8_11e6_8be4_001e67103b78.jpeg"
  },
  {
    _id: getRandomId(),
    name: "Флейта",
    categories: [categories.wood, categories.wind],
    cost: 2000,
    amount: 10,
    url: "https://gitronik.de/wp-content/uploads/2013/02/JPC1000E_web_original.jpg"
  },
  {
    _id: getRandomId(),
    name: "Барабан",
    categories: [categories.percussion],
    cost: 2000,
    amount: 4,
    url: "https://muzhouse.ru/image/cache/catalog/img_3/888880018894-269-700x700.jpg"
  },
  {
    _id: getRandomId(),
    name: "Литавры",
    categories: [categories.percussion],
    cost: 1500,
    amount: 6,
    url: "https://www.slavyarmarka.ru/image/data/blog/litavry.jpg"
  },
  {
    _id: getRandomId(),
    name: "Кастаньеты",
    categories: [categories.percussion],
    cost: 900,
    amount: 5,
    url: "https://skifmusic.ru/thumbs/ae/1d/500x500_1_normal_17f431e7c7a35173dace3d56a1be.jpg"
  },
  {
    _id: getRandomId(),
    name: "Ксилофон",
    categories: [categories.percussion],
    cost: 2000,
    amount: 3,
    url: "https://images.ru.prom.st/801296754_w640_h640_flight-fx-12-n.jpg"
  },
  {
    _id: getRandomId(),
    name: "Бубен",
    categories: [categories.percussion],
    cost: 1400,
    amount: 2,
    url: "https://a.allegroimg.com/original/0199bf/414c42ec4298aecb257602a7d3fd/Stagg-TAB-208-BK-tamburyn-plastikowy-z-membrana"
  },

  {
    _id: getRandomId(),
    name: "Аккордеон",
    categories: [categories.keyboard],
    cost: 2200,
    amount: 3,
    url: "https://ae01.alicdn.com/kf/U06b9230e31b94850ab0900935a717b688/Saphir-IV-120-41-BK-Saphir-41-120-IV-11-5.jpeg_q50.jpeg"
  },
  {
    _id: getRandomId(),
    name: "Пианино",
    categories: [categories.keyboard, categories.stringed],
    cost: 2400,
    amount: 5,
    url: "https://musicstore.casio.ru/upload/iblock/201/201334acb4a4d1934ca39e3c7bb838e9.jpg"
  },
  {
    _id: getRandomId(),
    name: "Рояль",
    categories: [categories.keyboard, categories.stringed],
    cost: 3200,
    amount: 2,
    url: "https://im0-tub-ru.yandex.net/i?id=635da73825c46bd4f6fd5de3f2973191&n=13&exp=1"
  },
  {
    _id: getRandomId(),
    name: "Орган",
    categories: [categories.keyboard, categories.wind],
    cost: 12000,
    amount: 1,
    url: "https://na-dache.pro/uploads/posts/2021-05/1620173763_18-p-organ-muzikalnii-instrument-vnutri-na-ucha-26.jpg"
  },
  {
    _id: getRandomId(),
    name: "Шарманка",
    categories: [categories.mechanic],
    cost: 1300,
    amount: 12,
    url: "https://yandex-images.clstorage.net/5f5Ei1f03/88a417LHeCe/LE9F3Eix9WOIUNBP8Pko48dgvPiwZd7SF65tkbMKYirItEGXQ5gbCUiPwU-Bs9B8pD3dKkomKwNE_59RXU0wD33NAlpdp_eiiVWHX7c6bf-O6LcxPugB298hNdYyDPBoyqWFwdlDHtxeE5bWwv0XuS01TTSf9LKR3q6DSUUeaNSiEZwJjDj-II2Y2pBydiYwwql097guSVOd4Xwe9k66pQYzwgYQgI9XldxX2II9lfesOo53V_q7V95rAkuDXW9UYVqXA8Q48KqL3dbd_f2vOcysNbVzKsFUXSX1WLnDuyBHN8RE18hM1JQaFpALOBn_aDwA-Fp4_pSR68yBy12tUygflYbDuL9tSlyeWD917TDBqz_7d2WIlRCoNNb_ifAizj_DQh5GRpURGxRZgTaYvu14hLjT-vzd2iJDikgTr9xpEFtEzfizJ0zaVl6ydW07R2Q--3niRtgY6n2Tvkb75Qj1Q0WaDYYbnxfSXQL40X9j_IBw07l3WtzuwIODESFeatSVg0n_t-OJFd-ecHVhOoAlNP856klTHiuyWT8D8K2PcEBO30qHXBBfHpwKtFwzqrlB8hY5e5yZ5ACMgBvnmWIZXIKNtbnmDFJa0LP0KDrIqvt4suWImN_jNVU6w_ktBTiBhdAOTNBXHh1WSXmVtWc2hDYcOTHc12kMAcjUqJcm019LBXQ158Rc0ZIw-ap4xSZ89PKuyxfaKrIbugv0K0k0hYRXBYOZkRyVXga-2_8itsx6nfu1HZzrQsIL2ilf5tvVTEm-eCiAnBaQszQu-otsc3D9KoHT1-L-GXZNMGKNf0fOG08DEJCRG9oLuh_37XSI9Nk0vpWXYcHPA1JlHi6bFUVKMLMqzB8RV_F1aPnN6b34sudOEx4nu532jr8hxXhIhp8KShNUGZKUwnqS_ut-DfNdP7bT0eSCw4MYoN7pGRpJgzkzr40Y3ZV-9qi6Sqt6tP9nxRvbLv0Sfw"
  },
  {
    _id: getRandomId(),
    name: "Механическое пианино",
    categories: [categories.mechanic],
    cost: 2700,
    amount: 2,
    url: "https://img.tttcdn.com/product/xy/2000/2000/p/gu1/I/9/I2399/I2399-1-40f5-nlHF.jpg"
  },
  {
    _id: getRandomId(),
    name: "Колесная лира",
    categories: [categories.mechanic, categories.stringed],
    cost: 2100,
    amount: 3,
    url: "https://images11.popmeh.ru/upload/img_cache/f93/f93194e7575e6af4239dc3ce9a35e22b_cropped_1332x874.jpg"
  },
  {
    _id: getRandomId(),
    name: "Синтезатор",
    categories: [categories.electronic, categories.keyboard],
    cost: 1800,
    amount: 7,
    url: "https://topmuz.ru/wa-data/public/shop/products/53/97/49753/images/64665/64665.970.jpg"
  },
  {
    _id: getRandomId(),
    name: "Электровиолончель",
    categories: [categories.electronic, categories.bowed, categories.stringed],
    cost: 2600,
    amount: 3,
    url: "https://muzhouse.ru/image/cache/catalog/img_1/mi-1261740667-yamaha_sv-130_bl-700x700.jpg"
  },
  {
    _id: getRandomId(),
    name: "Электронная ударная установка",
    categories: [categories.electronic, categories.percussion],
    cost: 3200,
    amount: 2,
    url: "https://pguards.ru/upload/iblock/35c/35cef19a268c850ba2e3e48a72574eca.jpg"
  },
  {
    _id: getRandomId(),
    name: "Электронная гитара",
    categories: [
      categories.electronic,
      categories.plucked,
      categories.stringed
    ],
    cost: 1800,
    amount: 4,
    url: "https://mirm.ru/info/img_400/CNT73003.jpg"
  }
];

const fetchAll = () =>
  new Promise((resolve) => setTimeout(() => resolve(products), 2000));

export default { fetchAll };
