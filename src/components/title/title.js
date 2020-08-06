import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    padding: "8px",
  },
  titleBackground: {
    padding: "8px",
    backgroundColor: "#3f51b5",
    color: "white",
  },
}));

const Title = ({ children, withBack }) => {
  const classes = useStyles();
  let classFor;

  withBack ? (classFor = classes.titleBackground) : (classFor = classes.title);

  return (
    <Typography variant="h4" component="h1" className={classFor}>
      {children}
    </Typography>
  );
};

export default Title;
