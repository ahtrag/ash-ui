import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { globalStyles } from "../../utils/styles";
import { createUseStyles } from "react-jss";

const useGlobalStyles = createUseStyles(globalStyles);

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
    const defaultStyles = [
      styles.disFlex,
      styles.fwWrap,
      styles.smPadAll,
      styles[`jc${_.startCase(_.lowerCase(justifyContent))}`],
      styles[`ai${_.startCase(_.lowerCase(alignItems))}`],
      className
    ]
      .filter(value => Boolean(value))
      .join(" ");

    return (
      <div className={defaultStyles} style={style}>
        {children}
      </div>
    );
  }

  const defaultStyles = [
    styles.smPadAll,
    styles.disInlineFlex,
    xs > 0 && xs < 13 ? styles[`xs${xs}`] : "",
    sm > 0 && sm < 13 ? styles[`sm${sm}`] : "",
    md > 0 && md < 13 ? styles[`md${md}`] : "",
    lg > 0 && lg < 13 ? styles[`lg${lg}`] : "",
    xl > 0 && xl < 13 ? styles[`xl${xl}`] : "",
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

  /**
   * Type of Grid:
   * 1. container => Parent of Grid type item
   * 2. item => Child of Grid type container
   */
  type: PropTypes.oneOf(["container", "item"]),

  /**
   * Type of Justify-Content in container:
   * 1. normal => normal
   * 2. start => flex-start
   * 3. center => center
   * 4. end => flex-end
   * 5. between => space-between
   * 6. around => space-around
   * 7. evenly => space-evenly
   */
  justifyContent: PropTypes.oneOf([
    "normal",
    "start",
    "center",
    "end",
    "between",
    "around",
    "evenly"
  ]),

  /**
   * Type of Align-Items in container:
   * 1. normal => normal
   * 2. start => flex-start
   * 3. center => center
   * 4. end => flex-end
   * 5. baseline => baseline
   * 6. stretch => stretch
   */
  alignItems: PropTypes.oneOf([
    "normal",
    "start",
    "center",
    "end",
    "baseline",
    "stretch"
  ]),

  /**
   * Grid width in extra small devices.
   * Value in range of 1 to 12
   */
  xs: PropTypes.number,

  /**
   * Grid width in small devices.
   * Value in range of 1 to 12
   */
  sm: PropTypes.number,

  /**
   * Grid width in medium devices.
   * Value in range of 1 to 12
   */
  md: PropTypes.number,

  /**
   * Grid width in large devices.
   * Value in range of 1 to 12
   */
  lg: PropTypes.number,

  /**
   * Grid width in extra large devices.
   * Value in range of 1 to 12
   */
  xl: PropTypes.number,

  /**
   * Override default styles with className
   */
  className: PropTypes.string,

  /**
   * Override default styles with inline style
   */
  style: PropTypes.object
};

export default GridView;
