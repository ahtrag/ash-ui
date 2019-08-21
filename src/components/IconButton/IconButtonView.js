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
    height: 50,
    width: 50,
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
  }
});

const IconButtonView = props => {
  const { children, className, style, onClick } = props;
  const classes = useStyles();
  const defaultStyles = [classes.iconButton, className]
    .filter(value => Boolean(value))
    .join(" ");

  return (
    <button
      className={defaultStyles}
      style={style}
      onClick={e => {
        createRipple(e);
        Boolean(onClick) && onClick(e);
      }}
    >
      <span className={classes.rippleRoot} />
      {children}
    </button>
  );
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
  onClick: PropTypes.func
};

export default IconButtonView;
