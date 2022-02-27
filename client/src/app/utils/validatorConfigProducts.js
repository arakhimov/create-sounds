/* eslint-disable max-len */
const validatorConfig = {
  name: {
    isRequired: { message: "Наименование обязательно для заполнения" },
    isMin: {
      message: "Наименование должно состоять минимум из 3 символов",
      value: 3
    }
  },
  description: {
    isRequired: { message: "Описание обязательно для заполнения" },
    isMin: {
      message: "Описание должно состоять минимум из 3 символов",
      value: 3
    }
  },
  cost: {
    isDigit: { message: "Стоимость должна быть числом" },
    isRequired: { message: "Стоимость обязательна для заполнения" },
    isMin: {
      message: "Стоимость должна состоять минимум из 2 символов",
      value: 2
    }
  },
  amount: {
    isDigit: { message: "Количество должно быть числом" },
    isRequired: { message: "Количество обязательно для заполнения" }
  },
  url: {
    isRequired: {
      message: "Фото обязательно для заполнения"
    },
    isUrl: {
      message: "Фото должно быть ссылкой"
    }
  },
  categories: {
    isRequired: { message: "Выберите категории" }
  }
};

export default validatorConfig;
