import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  divider: {
    display: "flex"
  },
  fullWidth: {
    width: "100%",
    border: "none",
    height: "1px",
    margin: 0,
    flexShrink: 0,
    backgroundColor: "rgba(0,0,0,0.12)",
    boxSizing: "inherit"
  },
  inset: {
    marginLeft: "72px",
    border: "none",
    height: "1px",
    margin: 0,
    flexShrink: 0,
    backgroundColor: "rgba(0,0,0,0.12)",
    boxSizing: "inherit"
  },
  middle: {
    marginLeft: "16px",
    marginRight: "16px",
    border: "none",
    height: "1px",
    margin: 0,
    flexShrink: 0,
    backgroundColor: "rgba(0,0,0,0.12)",
    boxSizing: "inherit"
  }
});

const DividerView = props => {
  const { className, style, variant } = props;
  const classes = useStyles();
  const defaultStyles = [
    classes.divider,
    variant === "inset" ? classes.inset : classes.fullWidth,
    variant === "middle" ? classes.middle : classes.fullWidth,
    className
  ]
    .filter(value => Boolean(value))
    .join(" ");

  return <div className={defaultStyles} style={style} />;
};

DividerView.defaultProps = {
  variant: "fullWidth"
};

DividerView.propTypes = {
  /**
   * Variant of the Divider:
   * 1. fullWidth
   * 2. inset
   * 3. middle
   */
  variant: PropTypes.oneOf(["fullWidth", "inset", "middle"]),

  /**
   * Override default styles with className
   */
  className: PropTypes.string,

  /**
   * Override default styles with inline style
   */
  style: PropTypes.object
};

export default DividerView;
