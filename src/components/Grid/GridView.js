import React from "react";
import PropTypes from "prop-types";
import { breakpoints } from "../../utils/theme";
import { createUseStyles } from "react-jss";
import { renderClassName } from "../../utils/constants";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: props => (props.direction ? props.direction : ""),
    padding: props => props.padding * 4,
    justifyContent: props => (props.justifyContent ? props.justifyContent : ""),
    alignItems: props => (props.alignItems ? props.alignItems : "")
  },
  item: {
    boxSizing: "border-box",
    padding: props => props.padding * 4
  },
  xs: props =>
    props.xs
      ? {
          [breakpoints.up("xs")]: {
            flexGrow: 0,
            flexBasis: `${(props.xs / 12) * 100}%`,
            maxWidth: `${(props.xs / 12) * 100}%`
          }
        }
      : null,
  sm: props =>
    props.sm
      ? {
          [breakpoints.up("sm")]: {
            flexGrow: 0,
            flexBasis: `${(props.sm / 12) * 100}%`,
            maxWidth: `${(props.sm / 12) * 100}%`
          }
        }
      : null,
  md: props =>
    props.md
      ? {
          [breakpoints.up("md")]: {
            flexGrow: 0,
            flexBasis: `${(props.md / 12) * 100}%`,
            maxWidth: `${(props.md / 12) * 100}%`
          }
        }
      : null,
  lg: props =>
    props.lg
      ? {
          [breakpoints.up("lg")]: {
            flexGrow: 0,
            flexBasis: `${(props.lg / 12) * 100}%`,
            maxWidth: `${(props.lg / 12) * 100}%`
          }
        }
      : null,
  xl: props =>
    props.xl
      ? {
          [breakpoints.up("xl")]: {
            flexGrow: 0,
            flexBasis: `${(props.xl / 12) * 100}%`,
            maxWidth: `${(props.xl / 12) * 100}%`
          }
        }
      : null
});

const GridView = props => {
  const {
    children,
    type,
    justifyContent,
    alignItems,
    direction,
    xs,
    sm,
    md,
    lg,
    xl,
    padding,
    className,
    style
  } = props;
  const classes = useStyles({
    justifyContent,
    alignItems,
    direction,
    xs,
    sm,
    md,
    lg,
    xl,
    padding
  });

  if (type === "container") {
    return (
      <div
        className={renderClassName(classes.container, className)}
        style={style}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      className={renderClassName(
        classes.item,
        xs > 0 && xs < 13 && classes.xs,
        sm > 0 && sm < 13 && classes.sm,
        md > 0 && md < 13 && classes.md,
        lg > 0 && lg < 13 && classes.lg,
        xl > 0 && xl < 13 && classes.xl,
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};

GridView.defaultProps = {
  padding: 4
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
   * 1. normal
   * 2. flex-start
   * 3. center
   * 4. flex-end
   * 5. space-between
   * 6. space-around
   * 7. space-evenly
   */
  justifyContent: PropTypes.oneOf([
    "normal",
    "flex-start",
    "center",
    "flex-end",
    "space-between",
    "space-around",
    "space-evenly"
  ]),

  /**
   * Type of Align-Items in container:
   * 1. normal
   * 2. flex-start
   * 3. center
   * 4. flex-end
   * 5. baseline
   * 6. stretch
   */
  alignItems: PropTypes.oneOf([
    "normal",
    "flex-start",
    "center",
    "flex-end",
    "baseline",
    "stretch"
  ]),

  /**
   * Direction of the grid:
   * 1. row (default)
   * 2. column
   * 3. row-reverse
   * 4. column-reverse
   */
  direction: PropTypes.oneOf([
    "row",
    "column",
    "row-reverse",
    "column-reverse"
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
   * Grid padding multiply by 4.
   * @defaultValue 4
   */
  padding: PropTypes.number,

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
