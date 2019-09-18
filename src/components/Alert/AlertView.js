import React, { useEffect } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import Paper from "../Paper";
import Text from "../Text";
import Button from "../Button";
import { ReactComponent as SuccessSVG } from "../../assets/success.svg";
import { ReactComponent as InfoSVG } from "../../assets/info.svg";
import { ReactComponent as WarningSVG } from "../../assets/warning.svg";
import { ReactComponent as ErrorSVG } from "../../assets/error.svg";
import { createUseStyles } from "react-jss";
import { CSSTransition } from "react-transition-group";
import { renderStyle, renderClassName } from "../../utils/constants";
import { color } from "../../utils/theme";

const useStyles = createUseStyles({
  root: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    boxSizing: "border-box"
  },
  popupEnter: {
    "& $paper": {
      transform: "scale(1)",
      opacity: 1
    }
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    cursor: "pointer"
  },
  paper: {
    position: "relative",
    zIndex: 100,
    transform: "scale(0)",
    opacity: 0,
    maxWidth: 478,
    padding: 16,
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out"
  },
  image: {
    maxWidth: "80%",
    height: "auto",
    marginBottom: 24
  },
  button: {
    marginTop: 16,
    color: color.secondary,
    alignSelf: "flex-end"
  }
});

const AlertView = props => {
  const {
    show,
    variant,
    title,
    message,
    onClose,
    classNameOptions,
    styleOptions
  } = props;

  const classes = useStyles();

  const renderImage = () => {
    switch (variant) {
      case "success":
        return (
          <SuccessSVG
            className={renderClassName(
              classes.image,
              classNameOptions && classNameOptions.image
            )}
            style={renderStyle(styleOptions && styleOptions.image)}
          />
        );
      case "info":
        return (
          <InfoSVG
            className={renderClassName(
              classes.image,
              classNameOptions && classNameOptions.image
            )}
            style={renderStyle(styleOptions && styleOptions.image)}
          />
        );
      case "warning":
        return (
          <WarningSVG
            className={renderClassName(
              classes.image,
              classNameOptions && classNameOptions.image
            )}
            style={renderStyle(styleOptions && styleOptions.image)}
          />
        );
      case "error":
        return (
          <ErrorSVG
            className={renderClassName(
              classes.image,
              classNameOptions && classNameOptions.image
            )}
            style={renderStyle(styleOptions && styleOptions.image)}
          />
        );
      default:
        return null;
    }
  };

  useEffect(() => {
    document.getElementsByTagName("html")[0].style.overflow = "hidden";
    return () => (document.getElementsByTagName("html")[0].style.overflow = "");
  }, []);

  return ReactDOM.createPortal(
    <CSSTransition
      in={show}
      timeout={300}
      classNames={{
        enterActive: classes.popupEnter,
        enterDone: classes.popupEnter
      }}
      unmountOnExit
    >
      <div className={classes.root}>
        <div className={classes.overlay} onClick={onClose} />

        <Paper
          className={renderClassName(
            classes.paper,
            classNameOptions && classNameOptions.root
          )}
          style={renderStyle(styleOptions && styleOptions.root)}
        >
          {renderImage()}
          <Text
            variant="h3"
            align="center"
            color={color.quaternary}
            className={renderClassName(
              classNameOptions && classNameOptions.title
            )}
            style={renderStyle(styleOptions && styleOptions.title)}
          >
            {title}
          </Text>
          <Text
            variant="paragraph"
            align="center"
            color="gray"
            className={renderClassName(
              classNameOptions && classNameOptions.message
            )}
            style={renderStyle(styleOptions && styleOptions.message)}
          >
            {message}
          </Text>
          <Button
            variant="outlined"
            className={renderClassName(
              classes.button,
              classNameOptions && classNameOptions.button
            )}
            style={renderStyle(styleOptions && styleOptions.button)}
            onClick={onClose}
          >
            Close
          </Button>
        </Paper>
      </div>
    </CSSTransition>,
    document.getElementsByTagName("body")[0]
  );
};

AlertView.defaultProps = {
  show: false,
  variant: "success"
};

AlertView.propTypes = {
  show: PropTypes.bool,
  variant: PropTypes.oneOf(["success", "info", "warning", "error"]),
  title: PropTypes.string,
  message: PropTypes.string,
  onClose: PropTypes.func,
  classNameOptions: PropTypes.shape({
    root: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    message: PropTypes.string,
    button: PropTypes.string
  }),
  styleOptions: PropTypes.shape({
    root: PropTypes.object,
    image: PropTypes.object,
    title: PropTypes.object,
    message: PropTypes.object,
    button: PropTypes.object
  })
};

export default AlertView;
