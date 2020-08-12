import React, { useEffect } from "react";
import { Paper, makeStyles, Button } from "@material-ui/core";
import { Spinner, FieldText, FieldImage, Ingredients } from "..";
import { useDispatch, useSelector } from "react-redux";
import {
  getDishById,
  getDishNew,
  postDish,
  putDishById,
  deleteDishById,
} from "../../redux/dishesEdit/actions";
import { useParams, useHistory } from "react-router-dom";
import { Formik, Form, Field } from "formik";

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

const EditDishes = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const history = useHistory();

  const { idDish, idPlace } = useParams();

  const { dish, dishLoading } = useSelector((state) => state.dishesEditReducer);

  useEffect(() => {
    idDish === "new" ? dispatch(getDishNew()) : dispatch(getDishById(idDish));
  }, [dispatch, idDish]);

  const { name, ingredients, photo, calories, price } = dish;

  const redirectToPlace = (idPlace) => history.push(`/owner/places/${idPlace}`);

  const submitForm = (values, setSubmitting) => {
    setSubmitting(true);
    const formData = new FormData();

    formData.append("name", values.name);
    formData.append("ingredients", ingredients);
    formData.append("photo", values.file);
    formData.append("price", values.price);
    formData.append("calories", values.calories);
    formData.append("place", idPlace);

    if (idDish === "new") {
      dispatch(postDish(formData));
    } else {
      dispatch(putDishById(idDish, formData));
    }

    setSubmitting(false);
    redirectToPlace(idPlace);
  };

  const handleDelte = (idDish) => {
    dispatch(deleteDishById(idDish));
    console.log(idPlace);
    redirectToPlace(idPlace);
  };

  return (
    <>
      <Paper elevation={3} className={classes.paperContainer}>
        {dishLoading ? (
          <Spinner />
        ) : (
          <Formik
            enableReinitialize
            initialValues={{
              name,
              photo,
              price,
              ingredients,
              calories,
              file: null,
            }}
            onSubmit={(values, { setSubmitting }) =>
              submitForm(values, setSubmitting)
            }
          >
            {({ values, submitForm, isSubmitting }) => (
              <Form className={classes.formBlock}>
                <Field
                  component={FieldText}
                  name="name"
                  label="Название блюда"
                  value={values.name}
                />
                <Field component={FieldImage} name="photo" />
                <Field
                  component={FieldText}
                  name="price"
                  label="Цена"
                  value={values.price}
                />
                <Field
                  component={Ingredients}
                  ingredients={values.ingredients}
                  name="ingredients"
                  label="Ингредиенты"
                />
                <div className={classes.buttonBlock}>
                  <Button
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting}
                    onClick={submitForm}
                  >
                    {idDish === "new" ? "Добавить блюдо" : "Внести изменения"}
                  </Button>

                  {idDish !== "new" && (
                    <Button
                      disabled={isSubmitting}
                      onClick={() => handleDelte(idDish)}
                    >
                      Удалить блюдо
                    </Button>
                  )}
                </div>
              </Form>
            )}
          </Formik>
        )}
      </Paper>
    </>
  );
};

export default EditDishes;
