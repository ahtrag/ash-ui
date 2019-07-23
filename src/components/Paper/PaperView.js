import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { useGlobalStyles } from "../../utils/styles";

const PaperView = props => {
  const { children, className, style, elevation } = props;
  const styles = useGlobalStyles();

  return (
    <div
      className={`${styles.bgWhite} ${styles.rounded} ${
        styles[`shadow${_.startCase(_.lowerCase(elevation))}`]
      } ${className}`}
      style={style}
    >
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
  className: PropTypes.string,
  style: PropTypes.object,
  elevation: PropTypes.oneOf(["lower", "low", "mid", "top", "upper"])
};

export default PaperView;
