import React from "react";
import { Formik, Form, Field } from "formik";
import { FieldText } from "..";
import { Button } from "@material-ui/core";
import {
  postIngredients,
  getIngredients,
} from "../../redux/ingredients/actions";
import { useDispatch } from "react-redux";

const IngredientNew = ({ onClose }) => {
  const dispatch = useDispatch();

  const submitForm = (values, onClose) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("calories", values.calories);
    dispatch(postIngredients(formData));
    dispatch(getIngredients());
    onClose();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        calories: "",
      }}
      onSubmit={(values) => submitForm(values, onClose)}
    >
      {({ values, submitForm }) => (
        <Form>
          <Field component={FieldText} name="name" label="Название" />
          <Field component={FieldText} name="calories" label="Калорийность" />
          <Button variant="contained" color="primary" onClick={submitForm}>
            ОК
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default IngredientNew;
