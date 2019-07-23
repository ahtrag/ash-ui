import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { useGlobalStyles } from "../../utils/styles";

const GridView = props => {
  const {
    children,
    type,
    justifyContent,
    alignItems,
    xs,
    sm,
    md,
    lg,
    xl,
    className,
    style
  } = props;
  const styles = useGlobalStyles();

  if (type === "container") {
    return (
      <div
        className={`
        ${styles.disFlex}
        ${styles.fwWrap}
        ${styles.smPadAll}
        ${styles[`jc${_.startCase(_.lowerCase(justifyContent))}`]} 
        ${styles[`ai${_.startCase(_.lowerCase(alignItems))}`]}
        ${className}
        `}
        style={style}
      >
        {children}
      </div>
    );
  }
  return (
    <div
      className={`
        ${styles.smPadAll}
        ${xs > 0 && xs < 13 ? styles[`xs${xs}`] : ""}
        ${sm > 0 && sm < 13 ? styles[`sm${sm}`] : ""}
        ${md > 0 && md < 13 ? styles[`md${md}`] : ""}
        ${lg > 0 && lg < 13 ? styles[`lg${lg}`] : ""}
        ${xl > 0 && xl < 13 ? styles[`xl${xl}`] : ""}
        ${className}
        `}
      style={style}
    >
      {children}
    </div>
  );
};

GridView.defaultProps = {
  type: "container",
  justifyContent: "normal",
  alignItems: "normal",
  className: ""
};

GridView.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired,
  type: PropTypes.oneOf(["container", "item"]),
  justifyContent: PropTypes.oneOf([
    "normal",
    "start",
    "center",
    "end",
    "between",
    "around",
    "evenly"
  ]),
  alignItems: PropTypes.oneOf([
    "normal",
    "start",
    "center",
    "end",
    "baseline",
    "stretch"
  ]),
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.object
};

export default GridView;
