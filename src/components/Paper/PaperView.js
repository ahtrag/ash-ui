import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { globalStyles } from "../../utils/styles";
import { createUseStyles } from "react-jss";

const useGlobalStyles = createUseStyles(globalStyles);

const PaperView = props => {
  const { children, className, style, elevation } = props;
  const styles = useGlobalStyles();
  const defaultStyles = [
    styles.bgWhite,
    styles.rounded,
    styles[`shadow${_.startCase(_.lowerCase(elevation))}`],
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
