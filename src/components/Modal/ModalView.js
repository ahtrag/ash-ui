import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    display: "flex"
  },
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
    transition: "opacity 0.8s ease-in-out, visibility 0.8s ease-in-out"
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
    width: "50%",
    boxShadow: "10px 5px 35px 0px rgba(0,0,0, 0.43)",
    borderRadius: "8px"
  },
  modalHeader: {
    flex: "0 0 auto",
    margin: 0,
    padding: "16px 24px",
    boxSizing: "inherit",
    display: "flex",
    color: "rgba(0,0,0,0.87)"
  },
  modalBody: {
    flex: "1 1 auto",
    padding: "8px 24px",
    overflow: "auto",
    boxSizing: "inherit",
    display: "flex"
  },
  modalFooter: {
    flex: "0 0 auto",
    display: "flex",
    padding: "8px",
    alignItems: "center",
    justifyContent: "flex-end",
    boxSizing: "inherit"
  }
});

const ModalView = props => {
  const { className, style, show, close, children, header, footer } = props;
  const classes = useStyles();

  const defaultStyles = [classes.root, className]
    .filter(value => Boolean(value))
    .join(" ");

  return (
    <div className={defaultStyles}>
      <div
        className={`${classes.modalWrapper}${show ? ` ${classes.show}` : ""}`}
      >
        <div className={classes.overlay} onClick={close} />
        <div className={classes.modal} style={style}>
          <div className={classes.modalHeader}>{header}</div>
          <div className={classes.modalBody}>
            <div>{children}</div>
          </div>
          <div className={classes.modalFooter}>{footer}</div>
        </div>
      </div>
    </div>
  );
};

ModalView.defaultStyles = {};

ModalView.propTypes = {
  /**
   * Header of Modal
   */
  header: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]),

  /**
   * Content of Modal
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired,

  /**
   * Footer of Modal
   */
  footer: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]),

  /**
   * Flag of showing modal
   */
  show: PropTypes.bool,

  /**
   * Function close modal onClick overlay
   */
  close: PropTypes.func,

  /**
   * Override default styles with className
   */
  className: PropTypes.string,

  /**
   * Override default styles with inline style
   */
  style: PropTypes.object
};

export default ModalView;
