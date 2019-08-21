import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    backgroundColor: "white",
    borderRadius: 8
  },
  shadowLower: {
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
  },
  shadowLow: {
    boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"
  },
  shadowMid: {
    boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"
  },
  shadowTop: {
    boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"
  },
  shadowUpper: {
    boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"
  }
});

const PaperView = props => {
  const { children, className, style, elevation } = props;
  const classes = useStyles();
  const defaultStyles = [
    classes.root,
    classes[`shadow${_.startCase(_.lowerCase(elevation))}`],
    className
  ]
    .filter(value => Boolean(value))
    .join(" ");

  return (
    <div className={defaultStyles} style={style}>
      {children}
    </div>
  );
};

PaperView.defaultProps = {
  elevation: "mid",
  className: ""
};

PaperView.propTypes = {
  /**
   * Children of Paper
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired,

  /**
   * Override default styles with className
   */
  className: PropTypes.string,

  /**
   * Override default styles with inline style
   */
  style: PropTypes.object,

  /**
   * Type of Paper Elevation:
   * 1. lower
   * 2. low
   * 3. mid
   * 4. top
   * 5. upper
   */
  elevation: PropTypes.oneOf(["lower", "low", "mid", "top", "upper"])
};

export default PaperView;
