/* eslint-disable indent */
/* eslint-disable guard-for-in */
export function validator(data, config) {
  const errors = {};

  function validate(validateMethod, data, config) {
    let validateStatus = false;
    switch (validateMethod) {
      case "isRequired": {
        if (typeof data === "boolean") {
          validateStatus = !data;
        } else if (typeof data === "object") {
          validateStatus = data.length === 0;
        } else {
          validateStatus = String(data).trim() === "";
        }
        break;
      }
      case "isMin": {
        validateStatus = data.length < config.value;
        break;
      }
      case "isDigit": {
        validateStatus = /\D/.test(Number(data));
        break;
      }
      case "isUrl": {
        validateStatus = !/https?:\/\/.+/.test(data);
        break;
      }
      case "isEmail": {
        validateStatus = !/\w{2,}@\w{2,}\.\w{2,}/.test(data);
        break;
      }
      case "isPhone": {
        validateStatus = !/\+7|8\d{10}/.test(data);
        break;
      }
      default:
        break;
    }
    if (validateStatus) return config.message;
  }

  for (const fieldName in data) {
    for (const validateMethod in config[fieldName]) {
      const error = validate(
        validateMethod,
        data[fieldName],
        config[fieldName][validateMethod]
      );
      if (error && !errors[fieldName]) {
        errors[fieldName] = error;
      }
    }
  }

  return errors;
}
