import React, { useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { Button, Paper, makeStyles } from "@material-ui/core";
import { Dishes, FieldTime, FieldText, FieldImage, Spinner } from "..";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { placeSchema } from "../validation";
import {
  getPlaceById,
  putPlaceById,
  deletePlaceById,
  postPlace,
  getPlaceNew,
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
  timeWrapper: {
    display: "flex",
    justifyContent: "space-between",
  },
  buttonBlock: {
    display: "flex",
    justifyContent: "space-between",
    padding: "5px 0",
  },
}));

const EditPlaces = () => {
  const { idPlace } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyle();

  const {
    currentPlace: { name, image, from_hour, to_hour, address },
    placeLoading,
  } = useSelector((state) => state.placeEditReducer);

  const isNewPlace = idPlace === "new";

  useEffect(() => {
    isNewPlace ? dispatch(getPlaceNew()) : dispatch(getPlaceById(idPlace));
  }, [dispatch, idPlace, isNewPlace]);

  const redirectToPlaces = () => history.push("/owner/places");

  const submitForm = (values, setSubmitting) => {
    setSubmitting(true);
    const formData = new FormData();

    formData.append("name", values.name);
    formData.append("image", values.file);
    formData.append("from_hour", values.from_hour);
    formData.append("to_hour", values.to_hour);
    formData.append("address", values.address);

    if (isNewPlace) {
      dispatch(postPlace(formData));
    } else {
      dispatch(putPlaceById(idPlace, formData));
    }
    setSubmitting(false);
    redirectToPlaces();
  };

  const handleDelte = (idPlace) => {
    dispatch(deletePlaceById(idPlace));
    redirectToPlaces();
  };

  if (placeLoading)
    return (
      <Paper elevation={3} className={classes.paperContainer}>
        <Spinner />
      </Paper>
    );

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
          onSubmit={(values, { setSubmitting }) =>
            submitForm(values, setSubmitting)
          }
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
              <div className={classes.timeWrapper}>
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
              </div>
              <Field
                component={Dishes}
                idPlace={idPlace}
                name="dishes"
                label="Блюда"
              />
              <div className={classes.buttonBlock}>
                <Button
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                  onClick={submitForm}
                >
                  {isNewPlace ? "Добавить заведение" : "Внести изменения"}
                </Button>

                {isNewPlace && (
                  <Button
                    disabled={isSubmitting}
                    onClick={() => handleDelte(idPlace)}
                  >
                    Удалить заведение
                  </Button>
                )}
              </div>
            </Form>
          )}
        </Formik>
      </Paper>
    </>
  );
};

export default EditPlaces;
