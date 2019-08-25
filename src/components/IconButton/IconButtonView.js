import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";
import { createRipple } from "../../utils/constants";

const useStyles = createUseStyles({
  iconButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    height: 24,
    width: 24,
    padding: 12,
    boxSizing: "content-box",
    borderRadius: "50%",
    cursor: "pointer",
    overflow: "hidden",
    backgroundColor: "transparent",
    transition: "background-color 0.3s ease-in-out",
    "&:focus": {
      outline: "none"
    },
    "&:hover": {
      "& $rippleRoot": {
        backgroundColor: "rgba(0, 0, 0, 0.1)"
      }
    }
  },
  rippleRoot: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%"
  },
  disabled: {
    color: "rgba(0, 0, 0, 0.3) !important",
    cursor: "default !important"
  }
});

const IconButtonView = props => {
  const { children, className, style, onClick, disable, disableRipple } = props;
  const classes = useStyles();
  const defaultStyles = [
    classes.iconButton,
    className,
    disable ? classes.disabled : null
  ]
    .filter(value => Boolean(value))
    .join(" ");

  return (
    <button
      className={defaultStyles}
      style={style}
      onClick={
        !disable
          ? e => {
              !disableRipple && createRipple(e);
              Boolean(onClick) && onClick(e);
            }
          : null
      }
    >
      {disable || disableRipple ? null : (
        <span className={classes.rippleRoot} />
      )}
      {children}
    </button>
  );
};

IconButtonView.defaultProps = {
  disable: false,
  disableRipple: false
};

IconButtonView.propTypes = {
  /**
   * Icon component
   * See https://github.com/levrik/mdi-react
   */
  children: PropTypes.element.isRequired,

  /**
   * Override default styles with className
   */
  className: PropTypes.string,

  /**
   * Override default styles with inline style
   */
  style: PropTypes.object,

  /**
   * Function that will triggered when Button is clicked
   */
  onClick: PropTypes.func,

  /**
   * Disable icon button
   */
  disable: PropTypes.bool,

  /**
   * Disable ripple effect when clicked
   */
  disableRipple: PropTypes.bool
};

export default IconButtonView;
