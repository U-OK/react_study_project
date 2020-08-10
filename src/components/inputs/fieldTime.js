import React from "react";
import { TextField, makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    padding: "10px 0",
  },
  field: {
    width: "200px",
    margin: "auto",
  },
  error: {
    paddingLeft: "10px",
    color: "red",
  },
}));

const FieldTime = ({ field, form: { touched, errors }, ...props }) => {
  const classes = useStyle();
  const error = errors[field.name];

  return (
    <div className={classes.wrapper}>
      <TextField
        className={classes.field}
        onChange={field.onChange}
        name={field.name}
        id={field.name}
        type="time"
        error={Boolean(error)}
        InputLabelProps={{
          shrink: true,
        }}
        {...props}
      />
      {touched && errors && <div className={classes.error}>{error}</div>}
    </div>
  );
};

export default FieldTime;
