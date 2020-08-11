const placeSchema = (
  values,
  props /* only available when using withFormik */
) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Обязательное поле для заполнения";
  } else if (values.name.length >= 20) {
    errors.name = "Название должно быть меньше либо равно 20 символам";
  }
  if (values.file && values.file.size >= 1048576) {
    errors.image = "Размер файл должен быть менее 1мб";
  }
  if (!checkTimeValidate(values.from_hour, values.to_hour)) {
    errors.to_hour = "Закрытие назначено раньше открытия";
  }
  return errors;
};

const checkTimeValidate = (from_hour, to_hour) => {
  const result =
    Number(to_hour.slice(0, 2)) * 60 +
    Number(to_hour.slice(3, 5)) -
    Number(from_hour.slice(0, 2)) * 60 -
    Number(from_hour.slice(3, 5));

  if (result > 0) {
    return true;
  } else {
    return false;
  }
};

export default placeSchema;
