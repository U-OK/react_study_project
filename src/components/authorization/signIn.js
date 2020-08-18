import React from "react";
import {
  makeStyles,
  Container,
  CssBaseline,
  Avatar,
  Typography,
  Button,
  Paper,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Formik, Field } from "formik";
import { Link, useHistory } from "react-router-dom";
import { FieldText } from "..";
import { useDispatch } from "react-redux";
import { postAuth } from "../../redux/auth/actions";

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

const SignIn = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const history = useHistory();

  const submit = (values, actions) => {
    const formData = new FormData();
    formData.append("username", values.login);
    formData.append("password", values.password);
    dispatch(postAuth(formData));
    history.push("/");
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
              Авторизация
            </Typography>
          </div>
          <Formik
            initialValues={{
              login: "",
              password: "",
            }}
            onSubmit={(values) => {
              submit(values);
            }}
          >
            {({ values, submitForm, errors }) => (
              <form className={classes.form}>
                <Field
                  component={FieldText}
                  name="login"
                  label="Login"
                  value={values.login}
                />
                <Field
                  component={FieldText}
                  name="password"
                  label="Password"
                  value={values.password}
                />
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={submitForm}
                >
                  Авторизоваться
                </Button>
                <Link to="/auth/registration">Зарегистрироваться</Link>
              </form>
            )}
          </Formik>
        </CssBaseline>
      </Paper>
    </Container>
  );
};

export default SignIn;
