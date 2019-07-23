import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  modalWrapper: {
    position: "fixed",
    height: "100%",
    width: "100%",
    top: 0,
    left: 0,
    zIndex: 100,
    opacity: 0,
    visibility: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: " opacity 0.8s ease-in-out, visibility 0.8s ease-in-out"
  },
  show: {
    opacity: 1,
    visibility: "visible",
    "& $modal": {
      transform: "translateY(0)"
    }
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.4)"
  },
  modal: {
    position: "relative",
    backgroundColor: "whitesmoke",
    transform: "translateY(-100vh)",
    transition: "transform 0.5s ease-in-out",
    width: "50%"
  },
  modalHeader: {
    background: "#263238",
    height: "40px",
    lineHeight: "40px",
    padding: "5px 20px",
    textAlign: "right",

    "& h3": {
      color: "white",
      float: "left",
      margin: 0,
      padding: 0
    }
  },
  headerText: {
    color: "white",
    float: "left",
    margin: 0,
    padding: 0
  },
  modalBody: {
    padding: "10px 15px",
    textAlign: "center",
    overflowY: "auto",
    height: "300px"
  },
  modalFooter: {
    background: "#263238",
    height: "35px",
    padding: "15px"
  },
  buttonCancel: {
    backgroundColor: "#b71c1c",
    float: "left",
    border: "none",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
    outline: "none",
    padding: "10px"
  },
  buttonSubmit: {
    backgroundColor: "seagreen",
    float: "right",
    border: "none",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
    outline: "none",
    padding: "10px"
  },
  closeModalButton: {
    color: "white",
    cursor: "pointer",
    float: "right",
    fontSize: "30px",
    margin: 0,

    "&:hover": {
      color: "black"
    }
  }
});

const ModalView = props => {
  const classes = useStyles();
  return (
    <div
      className={`${classes.modalWrapper} ${props.show ? classes.show : ""}`}
    >
      <div className={classes.overlay} />
      <div className={classes.modal}>
        <div className={classes.modalHeader}>
          <h3 className={classes.headerText}>Add Notes</h3>
          <span className={classes.closeModalButton} onClick={props.close}>
            ×
          </span>
        </div>
        <div className={classes.modalBody}>
          <div>{props.children}</div>
        </div>
        <div className={classes.modalFooter}>
          <button className={classes.buttonCancel} onClick={props.close}>
            Close
          </button>
          <button className={classes.buttonSubmit} onClick={props.submit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalView;
