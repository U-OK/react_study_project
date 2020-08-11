import React, { useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { Button, Paper, makeStyles } from "@material-ui/core";
import { Dishes, FieldTime, FieldText, FieldImage, Spinner } from "..";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { placeSchema } from "../validation";
import {
  getPlaceById,
  putPlaceById,
  deletePlaceById,
  postPlace,
} from "../../redux/placeEdit/actions";

const useStyle = makeStyles((theme) => ({
  paperContainer: {
    margin: "auto",
    width: "60%",
    padding: "15px 25px",
  },
  formBlock: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  buttonBlock: {
    display: "flex",
    justifyContent: "space-between",
    padding: "5px 0",
  },
}));

const EditPlaces = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const classes = useStyle();

  const { currentPlace, isLoading } = useSelector(
    (state) => state.placeEditReducer
  );

  useEffect(() => {
    if (id !== "new") {
      dispatch(getPlaceById(id));
    }
  }, [dispatch, id]);

  const { name, image, from_hour, to_hour, address } = currentPlace;

  const handleDelte = (id) => {
    console.log(id);
    dispatch(deletePlaceById(id));
  };

  if (isLoading) return <Spinner />;

  return (
    <>
      <Paper elevation={3} className={classes.paperContainer}>
        <Formik
          enableReinitialize
          initialValues={{
            name,
            image,
            from_hour,
            to_hour,
            address,
            file: null,
          }}
          validate={(values) => placeSchema(values)}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            const formData = new FormData();

            formData.append("name", values.name);
            formData.append("image", values.file);
            formData.append("from_hour", values.from_hour);
            formData.append("to_hour", values.to_hour);
            formData.append("address", values.address);

            console.log(values);

            if (id === "new") {
              dispatch(postPlace(formData));
            } else {
              dispatch(putPlaceById(id, formData));
            }
            setSubmitting(false);
          }}
        >
          {({ values, submitForm, isSubmitting }) => (
            <Form className={classes.formBlock}>
              <Field
                component={FieldText}
                name="name"
                label="Название заведения"
                value={values.name}
              />
              <Field component={FieldImage} name="image" />
              <Field
                component={FieldText}
                name="address"
                label="Адрес заведения"
                value={values.address}
              />
              <Field
                component={FieldTime}
                name="from_hour"
                label="Время начала работы"
                value={values.from_hour}
              />
              <Field
                component={FieldTime}
                name="to_hour"
                label="Время окончания работы"
                value={values.to_hour}
              />
              <Field component={Dishes} name="dishes" label="Блюда" />
              <div className={classes.buttonBlock}>
                <Button
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                  onClick={submitForm}
                >
                  {id === "new" ? "Добавить заведение" : "Внести изменения"}
                </Button>

                {id !== "new" && (
                  <Button
                    disabled={isSubmitting}
                    onClick={() => handleDelte(id)}
                  >
                    Удалить заведение
                  </Button>
                )}
              </div>
            </Form>
          )}
        </Formik>
      </Paper>
      )
    </>
  );
};

export default EditPlaces;
