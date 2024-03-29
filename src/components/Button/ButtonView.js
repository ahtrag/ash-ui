import React from "react";
import PropTypes from "prop-types";
import Ripple from "../Ripple";
import Text from "../Text";
import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";
import { renderClassName } from "../../utils/constants";

const useStyles = createUseStyles({
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    padding: "12px 24px",
    cursor: "pointer",
    overflow: "hidden",
    "-webkit-tap-highlight-color": "transparent",
    "&:focus": {
      outline: "none"
    }
  },
  outline: {
    border: "1px solid currentColor"
  },
  clWhite: {
    color: "white"
  },
  clBlack: {
    color: "black"
  },
  shadowLower: {
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
  },
  gradAsh: {
    background: "linear-gradient(to right, #3f4c6b, #606c88)"
  },
  bgTransparent: {
    backgroundColor: "transparent"
  },
  rounded: {
    borderRadius: 4
  },
  fullWidth: {
    width: "100%"
  },
  disabled: {
    color: "rgba(0, 0, 0, 0.3)",
    cursor: "default !important"
  }
});

const ButtonView = props => {
  const {
    children,
    type,
    variant,
    component,
    value,
    href,
    fullWidth,
    rounded,
    className,
    disable,
    disableRipple,
    style,
    onClick
  } = props;
  const classes = useStyles();

  const defaultStyles = renderClassName(
    classes.button,
    variant === "outlined" ? classes.outline : "",
    variant === "contained" ? classes.clWhite : classes.clBlack,
    variant === "contained" ? classes.shadowLower : "",
    variant === "contained" ? classes.gradAsh : classes.bgTransparent,
    fullWidth && component === "button" && classes.fullWidth,
    rounded && classes.rounded,
    className,
    disable ? classes.disabled : null
  );

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
      {typeof children === "string" ? (
        <Text variant="button" color="currentColor" noMargin>
          {children}
        </Text>
      ) : (
        children
      )}
    </Link>
  ) : (
    <button
      type={type}
      className={defaultStyles}
      style={style}
      value={value}
      onClick={
        !disable
          ? e => {
              Boolean(onClick) && onClick(e);
            }
          : null
      }
    >
      {disable || disableRipple ? null : <Ripple />}
      {typeof children === "string" ? (
        <Text variant="button" color="currentColor" noMargin>
          {children}
        </Text>
      ) : (
        children
      )}
    </button>
  );
};

ButtonView.defaultProps = {
  type: "button",
  variant: "text",
  component: "button",
  fullWidth: false,
  rounded: true
};

ButtonView.propTypes = {
  children: PropTypes.any.isRequired,

  /**
   * Type of the Button:
   * 1. button
   * 2. submit
   * 3. reset
   */
  type: PropTypes.oneOf(["button", "submit", "reset"]),

  /**
   * Variant of the Button:
   * 1. contained
   * 2. outlined
   * 3. text
   */
  variant: PropTypes.oneOf(["contained", "outlined", "text"]),

  /**
   * Component used by Button:
   * 1. button
   * 2. a
   */
  component: PropTypes.oneOf(["button", "a"]),

  /**
   * Value of the Button
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Override default styles with className
   */
  className: PropTypes.string,

  /**
   * Hyperlink, only work when component props set to a
   */
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

  /**
   * If set to true, the Button will have 100% width
   */
  fullWidth: PropTypes.bool,

  /**
   * If set to true, the Button will have border-radius
   */
  rounded: PropTypes.bool,

  /**
   * Disable button
   */
  disable: PropTypes.bool,

  /**
   * Disable ripple effect when clicked
   */
  disableRipple: PropTypes.bool,

  /**
   * Override default styles with inline style
   */
  style: PropTypes.object,

  /**
   * Function that will triggered when Button is clicked
   */
  onClick: PropTypes.func
};

export default ButtonView;
