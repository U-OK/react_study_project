import React, { useRef } from "react";
import { Button, makeStyles } from "@material-ui/core";
import { ImagePreview } from "..";

const useStyle = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
  },
  button: {
    width: "50%",
    height: "30%",
    margin: "auto",
  },
  error: {
    paddingLeft: "10px",
    color: "red",
  },
}));

const FieldImage = ({
  field,
  form: { touched, errors, setFieldValue, values },
  ...props
}) => {
  const classes = useStyle();
  const ref = useRef();

  const inputClick = () => {
    ref.current.click();
  };

  const setImage = (event) => {
    const file = event.currentTarget.files[0];
    setFieldValue("file", file);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => setFieldValue(field.name, reader.result);
  };

  return (
    <div className={classes.wrapper}>
      <input
        id={field.name}
        name={field.name}
        ref={ref}
        type="file"
        hidden
        onChange={(event) => setImage(event)}
      />
      <div>
        <ImagePreview src={values[field.name]} />
        {touched && errors && <div>{errors[field.name]}</div>}
      </div>
      <Button
        variant="contained"
        color="primary"
        onClick={inputClick}
        className={classes.button}
      >
        Добавить/изменить фотографию
      </Button>
    </div>
  );
};

export default FieldImage;
