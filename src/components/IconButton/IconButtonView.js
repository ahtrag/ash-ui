import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";
import Ripple from "../Ripple";

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
    "&:focus": {
      outline: "none"
    }
  },
  disabled: {
    color: "rgba(0, 0, 0, 0.3)",
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
              Boolean(onClick) && onClick(e);
            }
          : null
      }
    >
      {disable || disableRipple ? null : <Ripple />}
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
