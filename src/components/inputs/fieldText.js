import React from "react";
import { TextField, makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    padding: "10px 0",
  },
  field: {
    margin: "auto",
  },
  error: {
    color: "red",
  },
}));

const FieldText = ({ field, form: { touched, errors }, ...props }) => {
  const classes = useStyle();
  const error = errors[field.name];

  return (
    <div className={classes.wrapper}>
      <TextField
        onChange={field.onChange}
        name={field.name}
        id={field.name}
        type="text"
        className={classes.field}
        InputLabelProps={{
          shrink: true,
        }}
        error={Boolean(error)}
        {...props}
      />
      {touched && errors && <div className={classes.error}>{error}</div>}
    </div>
  );
};

export default FieldText;
