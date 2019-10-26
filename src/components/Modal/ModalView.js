import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Text from "../Text";
import { createUseStyles } from "react-jss";
import { CSSTransition } from "react-transition-group";
import { renderClassName, renderStyle } from "../../utils/constants";

const useStyles = createUseStyles({
  root: {
    position: "fixed",
    height: "100%",
    width: "100%",
    top: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    boxSizing: "border-box",
    zIndex: 100
  },
  modalEnterActive: {
    "& $overlay": {
      opacity: 1,
      visibility: "visible"
    },
    "& $modal": {
      transform: "translateY(0)"
    }
  },
  modalEnterDone: {
    "& $overlay": {
      opacity: 1,
      visibility: "visible"
    },
    "& $modal": {
      transform: "translateY(0)"
    }
  },
  overlay: {
    opacity: 0,
    visibility: "hidden",
    transition: "opacity 0.8s ease-in-out, visibility 0.8s ease-in-out",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.4)"
  },
  modal: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    backgroundColor: "whitesmoke",
    transform: "translateY(-100vh)",
    transition: "transform 0.5s ease-in-out",
    maxWidth: 600,
    maxHeight: "calc(100% - 96px)",
    width: "100%",
    boxShadow: "10px 5px 35px 0px rgba(0,0,0, 0.43)",
    borderRadius: "8px",
    overflowY: "auto"
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
    paddingLeft: 24,
    paddingRight: 24,
    marginTop: 16,
    marginBottom: 16,
    overflowY: "auto",
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
  const {
    classNameOptions,
    styleOptions,
    show,
    onClose,
    children,
    header,
    footer
  } = props;
  const classes = useStyles();

  return ReactDOM.createPortal(
    <CSSTransition
      in={show}
      timeout={300}
      classNames={{
        enterDone: classes.modalEnterDone,
        enterActive: classes.modalEnterActive
      }}
      unmountOnExit
    >
      <div className={classes.root}>
        <div className={classes.overlay} onClick={onClose} />
        <div
          className={renderClassName(
            classes.modal,
            classNameOptions && classNameOptions.root
          )}
          style={renderStyle(styleOptions && styleOptions.root)}
        >
          <div
            className={renderClassName(
              classes.modalHeader,
              classNameOptions && classNameOptions.header
            )}
            style={renderStyle(styleOptions && styleOptions.header)}
          >
            {typeof header === "string" ? (
              <Text variant="h6">{header}</Text>
            ) : (
              header
            )}
          </div>
          <div
            className={renderClassName(
              classes.modalBody,
              classNameOptions && classNameOptions.body
            )}
            style={renderStyle(styleOptions && styleOptions.body)}
          >
            {children}
          </div>
          <div
            className={renderClassName(
              classes.modalFooter,
              classNameOptions && classNameOptions.footer
            )}
            style={renderStyle(styleOptions && styleOptions.footer)}
          >
            {footer}
          </div>
        </div>
      </div>
    </CSSTransition>,
    document.getElementsByTagName("body")[0]
  );
};

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
   * Toggle of showing modal
   */
  show: PropTypes.bool,

  /**
   * Function close modal onClick overlay
   */
  onClose: PropTypes.func,

  /**
   * Override default styles with className
   */
  classNameOptions: PropTypes.shape({
    root: PropTypes.string,
    header: PropTypes.string,
    body: PropTypes.string,
    footer: PropTypes.string
  }),

  /**
   * Override default styles with inline style
   */
  styleOptions: PropTypes.shape({
    root: PropTypes.object,
    header: PropTypes.object,
    body: PropTypes.object,
    footer: PropTypes.object
  })
};

export default ModalView;
