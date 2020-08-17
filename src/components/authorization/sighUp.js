import React from "react";
import {
  makeStyles,
  Container,
  CssBaseline,
  Avatar,
  Typography,
  Grid,
  Button,
  Paper,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Formik, Field } from "formik";
import { Link, useHistory } from "react-router-dom";
import { FieldText } from "..";
import { useDispatch } from "react-redux";
import { postUser } from "../../redux/auth/actions";

const useStyle = makeStyles((theme) => ({
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "15px 25px",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignUp = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const history = useHistory();

  const validation = (values) => {
    const errors = {};

    if (values.login.length === 0) {
      errors.login = "Обязательное поле";
    }
    if (values.password.length === 0) {
      errors.password = "Обязательное поле";
    }
    if (values.confirmPassword.length === 0) {
      errors.confirmPassword = "Обязательное поле";
    }
    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Пароли не совпадают";
    }

    return errors;
  };

  const submit = (values) => {
    const formData = new FormData();
    formData.append("username", values.login);
    formData.append("password", values.password);
    dispatch(postUser(formData));
    history.push("/auth/authorization");
  };

  return (
    <Container maxWidth="xs">
      <Paper className={classes.paper}>
        <CssBaseline>
          <div className={classes.header}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h6">
              Регистрация
            </Typography>
          </div>
          <Formik
            initialValues={{
              login: "",
              password: "",
              confirmPassword: "",
            }}
            validate={(values) => validation(values)}
            onSubmit={(values) => submit(values)}
          >
            {({ values, submitForm }) => (
              <form className={classes.form}>
                <Field
                  component={FieldText}
                  name="login"
                  label="Login"
                  value={values.login}
                />
                <Grid container>
                  <Grid item xs={5}>
                    <Field
                      component={FieldText}
                      name="password"
                      label="Password"
                      value={values.password}
                    />
                  </Grid>
                  <Grid item xs={2} />
                  <Grid item xs={5}>
                    <Field
                      component={FieldText}
                      name="confirmPassword"
                      label="Repeat password"
                      value={values.repeatPassword}
                    />
                  </Grid>
                </Grid>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={submitForm}
                >
                  Зарегистрироваться
                </Button>
                <Link to="/auth/authorization">Авторизоваться</Link>
              </form>
            )}
          </Formik>
        </CssBaseline>
      </Paper>
    </Container>
  );
};

export default SignUp;
