import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import Paper from "../Paper";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";
import { CSSTransition } from "react-transition-group";
import { renderStyle, renderClassName, offset } from "../../utils/constants";

const useStyles = createUseStyles({
  root: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 100
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
    height: "100%"
  },
  paper: {
    position: "absolute",
    overflowX: "hidden",
    overflowY: "auto",
    zIndex: 100,
    maxWidth: "calc(100% - 32px)",
    maxHeight: "calc(100% - 32px)",
    transform: "scale(0)",
    opacity: 0,
    transition: "transform 0.2s ease-in-out, opacity 0.2s ease-in-out"
  }
});

const PopupView = props => {
  const {
    children,
    target,
    position,
    transformOrigin,
    onClose,
    className,
    style
  } = props;
  const [element, setElement] = useState(null);
  const [paperElement, setPaperElement] = useState(null);
  const paperRef = useRef(null);
  const popupPosition = renderStyle(
    { vertical: "center", horizontal: "center" },
    position
  );
  const transformPosition = renderStyle(
    { vertical: "center", horizontal: "center" },
    transformOrigin
  );
  const styleProps = {
    top: 0,
    left: 0,
    minWidth: 0,
    transformOrigin: `${transformPosition.horizontal} ${transformPosition.vertical}`
  };

  if (element) {
    styleProps.top = offset(element).top - paperElement.offsetHeight;
    styleProps.left = offset(element).left - paperElement.offsetWidth;
    styleProps.minWidth = offset(element).width;

    if (popupPosition.vertical === "center") {
      styleProps.top = offset(element).top;
    } else if (popupPosition.vertical === "bottom") {
      styleProps.top = offset(element).top + offset(element).height;
    }

    if (popupPosition.horizontal === "center") {
      styleProps.left = offset(element).left;
    } else if (popupPosition.horizontal === "right") {
      styleProps.left = offset(element).left + offset(element).width;
    }

    if (offset(element).top + paperElement.offsetHeight > window.innerHeight) {
      styleProps.top =
        offset(element).top +
        offset(element).height -
        paperElement.offsetHeight;
    }

    if (styleProps.top < 0) {
      styleProps.top = 32;
    }

    if (paperElement.offsetHeight + 32 === window.innerHeight) {
      styleProps.top = 16;
    }
  }

  const classes = useStyles();

  useEffect(() => {
    if (target && paperRef.current) {
      setElement(target);
      setPaperElement(paperRef.current);
      document.getElementsByTagName("html")[0].style.overflow = "hidden";
    }

    return () => (document.getElementsByTagName("html")[0].style.overflow = "");
  }, [target, paperRef]);

  return ReactDOM.createPortal(
    <CSSTransition
      in={Boolean(target)}
      timeout={200}
      classNames={{
        enterActive: classes.popupEnter,
        enterDone: classes.popupEnter
      }}
      unmountOnExit
    >
      <div className={classes.root}>
        <div className={classes.overlay} onClick={onClose} />

        <Paper
          className={renderClassName(classes.paper, className)}
          ref={paperRef}
          style={renderStyle(styleProps, style)}
        >
          {children}
        </Paper>
      </div>
    </CSSTransition>,
    document.getElementsByTagName("body")[0]
  );
};

PopupView.propTypes = {
  children: PropTypes.any.isRequired,
  target: PropTypes.object,
  position: PropTypes.shape({
    vertical: PropTypes.oneOf(["top", "center", "bottom"]),
    horizontal: PropTypes.oneOf(["left", "center", "right"])
  }),
  transformOrigin: PropTypes.shape({
    vertical: PropTypes.oneOf(["top", "center", "bottom"]),
    horizontal: PropTypes.oneOf(["left", "center", "right"])
  }),
  onClose: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object
};

export default PopupView;
