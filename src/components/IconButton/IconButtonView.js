import React from "react";
import PropTypes from "prop-types";
import Ripple from "../Ripple";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";

const useStyles = createUseStyles({
  iconButton: {
    display: "inline-flex",
    flex: "0 0 auto",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    padding: 12,
    color: "currentColor",
    borderRadius: "50%",
    cursor: "pointer",
    overflow: "hidden",
    backgroundColor: "transparent",
    "-webkit-tap-highlight-color": "transparent",
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
  const {
    children,
    component,
    className,
    href,
    style,
    onClick,
    disable,
    disableRipple
  } = props;
  const classes = useStyles();
  const defaultStyles = [
    classes.iconButton,
    className,
    disable ? classes.disabled : null
  ]
    .filter(value => Boolean(value))
    .join(" ");

  return component === "a" ? (
    <Link
      to={href}
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
    </Link>
  ) : (
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
   * Component used by IconButton:
   * 1. button
   * 2. a
   */
  component: PropTypes.oneOf(["button", "a"]),

  /**
   * Override default styles with className
   */
  className: PropTypes.string,

  /**
   * Hyperlink, only work when component props set to a
   */
  href: PropTypes.string,

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
