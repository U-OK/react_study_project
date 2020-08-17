import React from "react";
import { Portal } from "../";
import { makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    position: "fixed",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 10000,
  },
  window: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    minHeight: "200px",
    width: "500px",
    zIndex: 10000,
  },
  header: {
    minHeight: "40px",
    borderBottom: "1px solid rgba(0,0,0,0.2)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 10px",
  },
  title: {
    fontWeight: "bold",
  },
  close: {
    color: "red",
  },
  content: {
    padding: "15px 10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
}));

const Modal = ({ title, isOpen, onClose, component: Component }) => {
  const classes = useStyles();

  return (
    <>
      {isOpen && (
        <Portal>
          <div className={classes.overlay} onClick={onClose}>
            <div
              className={classes.window}
              onClick={(event) => {
                event.stopPropagation();
              }}
            >
              <div className={classes.header}>
                <div className={classes.title}>{title}</div>
                <Button onClick={onClose} color="secondary">
                  Закрыть
                </Button>
              </div>
              <div className={classes.content}>
                <Component onClose={onClose} />
              </div>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
};

export default Modal;
