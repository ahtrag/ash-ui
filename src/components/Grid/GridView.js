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
  xs1: {
    [breakpoints.up("xs")]: {
      flexGrow: 0,
      flexBasis: `${(1 / 12) * 100}%`,
      maxWidth: `${(1 / 12) * 100}%`
    }
  },
  xs2: {
    [breakpoints.up("xs")]: {
      flexGrow: 0,
      flexBasis: `${(2 / 12) * 100}%`,
      maxWidth: `${(2 / 12) * 100}%`
    }
  },
  xs3: {
    [breakpoints.up("xs")]: {
      flexGrow: 0,
      flexBasis: `${(3 / 12) * 100}%`,
      maxWidth: `${(3 / 12) * 100}%`
    }
  },
  xs4: {
    [breakpoints.up("xs")]: {
      flexGrow: 0,
      flexBasis: `${(4 / 12) * 100}%`,
      maxWidth: `${(4 / 12) * 100}%`
    }
  },
  xs5: {
    [breakpoints.up("xs")]: {
      flexGrow: 0,
      flexBasis: `${(5 / 12) * 100}%`,
      maxWidth: `${(5 / 12) * 100}%`
    }
  },
  xs6: {
    [breakpoints.up("xs")]: {
      flexGrow: 0,
      flexBasis: `${(6 / 12) * 100}%`,
      maxWidth: `${(6 / 12) * 100}%`
    }
  },
  xs7: {
    [breakpoints.up("xs")]: {
      flexGrow: 0,
      flexBasis: `${(7 / 12) * 100}%`,
      maxWidth: `${(7 / 12) * 100}%`
    }
  },
  xs8: {
    [breakpoints.up("xs")]: {
      flexGrow: 0,
      flexBasis: `${(8 / 12) * 100}%`,
      maxWidth: `${(8 / 12) * 100}%`
    }
  },
  xs9: {
    [breakpoints.up("xs")]: {
      flexGrow: 0,
      flexBasis: `${(9 / 12) * 100}%`,
      maxWidth: `${(9 / 12) * 100}%`
    }
  },
  xs10: {
    [breakpoints.up("xs")]: {
      flexGrow: 0,
      flexBasis: `${(10 / 12) * 100}%`,
      maxWidth: `${(10 / 12) * 100}%`
    }
  },
  xs11: {
    [breakpoints.up("xs")]: {
      flexGrow: 0,
      flexBasis: `${(11 / 12) * 100}%`,
      maxWidth: `${(11 / 12) * 100}%`
    }
  },
  xs12: {
    [breakpoints.up("xs")]: {
      flexGrow: 0,
      flexBasis: `${(12 / 12) * 100}%`,
      maxWidth: `${(12 / 12) * 100}%`
    }
  },
  sm1: {
    [breakpoints.up("sm")]: {
      flexGrow: 0,
      flexBasis: `${(1 / 12) * 100}%`,
      maxWidth: `${(1 / 12) * 100}%`
    }
  },
  sm2: {
    [breakpoints.up("sm")]: {
      flexGrow: 0,
      flexBasis: `${(2 / 12) * 100}%`,
      maxWidth: `${(2 / 12) * 100}%`
    }
  },
  sm3: {
    [breakpoints.up("sm")]: {
      flexGrow: 0,
      flexBasis: `${(3 / 12) * 100}%`,
      maxWidth: `${(3 / 12) * 100}%`
    }
  },
  sm4: {
    [breakpoints.up("sm")]: {
      flexGrow: 0,
      flexBasis: `${(4 / 12) * 100}%`,
      maxWidth: `${(4 / 12) * 100}%`
    }
  },
  sm5: {
    [breakpoints.up("sm")]: {
      flexGrow: 0,
      flexBasis: `${(5 / 12) * 100}%`,
      maxWidth: `${(5 / 12) * 100}%`
    }
  },
  sm6: {
    [breakpoints.up("sm")]: {
      flexGrow: 0,
      flexBasis: `${(6 / 12) * 100}%`,
      maxWidth: `${(6 / 12) * 100}%`
    }
  },
  sm7: {
    [breakpoints.up("sm")]: {
      flexGrow: 0,
      flexBasis: `${(7 / 12) * 100}%`,
      maxWidth: `${(7 / 12) * 100}%`
    }
  },
  sm8: {
    [breakpoints.up("sm")]: {
      flexGrow: 0,
      flexBasis: `${(8 / 12) * 100}%`,
      maxWidth: `${(8 / 12) * 100}%`
    }
  },
  sm9: {
    [breakpoints.up("sm")]: {
      flexGrow: 0,
      flexBasis: `${(9 / 12) * 100}%`,
      maxWidth: `${(9 / 12) * 100}%`
    }
  },
  sm10: {
    [breakpoints.up("sm")]: {
      flexGrow: 0,
      flexBasis: `${(10 / 12) * 100}%`,
      maxWidth: `${(10 / 12) * 100}%`
    }
  },
  sm11: {
    [breakpoints.up("sm")]: {
      flexGrow: 0,
      flexBasis: `${(11 / 12) * 100}%`,
      maxWidth: `${(11 / 12) * 100}%`
    }
  },
  sm12: {
    [breakpoints.up("sm")]: {
      flexGrow: 0,
      flexBasis: `${(12 / 12) * 100}%`,
      maxWidth: `${(12 / 12) * 100}%`
    }
  },
  md1: {
    [breakpoints.up("md")]: {
      flexGrow: 0,
      flexBasis: `${(1 / 12) * 100}%`,
      maxWidth: `${(1 / 12) * 100}%`
    }
  },
  md2: {
    [breakpoints.up("md")]: {
      flexGrow: 0,
      flexBasis: `${(2 / 12) * 100}%`,
      maxWidth: `${(2 / 12) * 100}%`
    }
  },
  md3: {
    [breakpoints.up("md")]: {
      flexGrow: 0,
      flexBasis: `${(3 / 12) * 100}%`,
      maxWidth: `${(3 / 12) * 100}%`
    }
  },
  md4: {
    [breakpoints.up("md")]: {
      flexGrow: 0,
      flexBasis: `${(4 / 12) * 100}%`,
      maxWidth: `${(4 / 12) * 100}%`
    }
  },
  md5: {
    [breakpoints.up("md")]: {
      flexGrow: 0,
      flexBasis: `${(5 / 12) * 100}%`,
      maxWidth: `${(5 / 12) * 100}%`
    }
  },
  md6: {
    [breakpoints.up("md")]: {
      flexGrow: 0,
      flexBasis: `${(6 / 12) * 100}%`,
      maxWidth: `${(6 / 12) * 100}%`
    }
  },
  md7: {
    [breakpoints.up("md")]: {
      flexGrow: 0,
      flexBasis: `${(7 / 12) * 100}%`,
      maxWidth: `${(7 / 12) * 100}%`
    }
  },
  md8: {
    [breakpoints.up("md")]: {
      flexGrow: 0,
      flexBasis: `${(8 / 12) * 100}%`,
      maxWidth: `${(8 / 12) * 100}%`
    }
  },
  md9: {
    [breakpoints.up("md")]: {
      flexGrow: 0,
      flexBasis: `${(9 / 12) * 100}%`,
      maxWidth: `${(9 / 12) * 100}%`
    }
  },
  md10: {
    [breakpoints.up("md")]: {
      flexGrow: 0,
      flexBasis: `${(10 / 12) * 100}%`,
      maxWidth: `${(10 / 12) * 100}%`
    }
  },
  md11: {
    [breakpoints.up("md")]: {
      flexGrow: 0,
      flexBasis: `${(11 / 12) * 100}%`,
      maxWidth: `${(11 / 12) * 100}%`
    }
  },
  md12: {
    [breakpoints.up("md")]: {
      flexGrow: 0,
      flexBasis: `${(12 / 12) * 100}%`,
      maxWidth: `${(12 / 12) * 100}%`
    }
  },
  lg1: {
    [breakpoints.up("lg")]: {
      flexGrow: 0,
      flexBasis: `${(1 / 12) * 100}%`,
      maxWidth: `${(1 / 12) * 100}%`
    }
  },
  lg2: {
    [breakpoints.up("lg")]: {
      flexGrow: 0,
      flexBasis: `${(2 / 12) * 100}%`,
      maxWidth: `${(2 / 12) * 100}%`
    }
  },
  lg3: {
    [breakpoints.up("lg")]: {
      flexGrow: 0,
      flexBasis: `${(3 / 12) * 100}%`,
      maxWidth: `${(3 / 12) * 100}%`
    }
  },
  lg4: {
    [breakpoints.up("lg")]: {
      flexGrow: 0,
      flexBasis: `${(4 / 12) * 100}%`,
      maxWidth: `${(4 / 12) * 100}%`
    }
  },
  lg5: {
    [breakpoints.up("lg")]: {
      flexGrow: 0,
      flexBasis: `${(5 / 12) * 100}%`,
      maxWidth: `${(5 / 12) * 100}%`
    }
  },
  lg6: {
    [breakpoints.up("lg")]: {
      flexGrow: 0,
      flexBasis: `${(6 / 12) * 100}%`,
      maxWidth: `${(6 / 12) * 100}%`
    }
  },
  lg7: {
    [breakpoints.up("lg")]: {
      flexGrow: 0,
      flexBasis: `${(7 / 12) * 100}%`,
      maxWidth: `${(7 / 12) * 100}%`
    }
  },
  lg8: {
    [breakpoints.up("lg")]: {
      flexGrow: 0,
      flexBasis: `${(8 / 12) * 100}%`,
      maxWidth: `${(8 / 12) * 100}%`
    }
  },
  lg9: {
    [breakpoints.up("lg")]: {
      flexGrow: 0,
      flexBasis: `${(9 / 12) * 100}%`,
      maxWidth: `${(9 / 12) * 100}%`
    }
  },
  lg10: {
    [breakpoints.up("lg")]: {
      flexGrow: 0,
      flexBasis: `${(10 / 12) * 100}%`,
      maxWidth: `${(10 / 12) * 100}%`
    }
  },
  lg11: {
    [breakpoints.up("lg")]: {
      flexGrow: 0,
      flexBasis: `${(11 / 12) * 100}%`,
      maxWidth: `${(11 / 12) * 100}%`
    }
  },
  lg12: {
    [breakpoints.up("lg")]: {
      flexGrow: 0,
      flexBasis: `${(12 / 12) * 100}%`,
      maxWidth: `${(12 / 12) * 100}%`
    }
  },
  xl1: {
    [breakpoints.up("xl")]: {
      flexGrow: 0,
      flexBasis: `${(1 / 12) * 100}%`,
      maxWidth: `${(1 / 12) * 100}%`
    }
  },
  xl2: {
    [breakpoints.up("xl")]: {
      flexGrow: 0,
      flexBasis: `${(2 / 12) * 100}%`,
      maxWidth: `${(2 / 12) * 100}%`
    }
  },
  xl3: {
    [breakpoints.up("xl")]: {
      flexGrow: 0,
      flexBasis: `${(3 / 12) * 100}%`,
      maxWidth: `${(3 / 12) * 100}%`
    }
  },
  xl4: {
    [breakpoints.up("xl")]: {
      flexGrow: 0,
      flexBasis: `${(4 / 12) * 100}%`,
      maxWidth: `${(4 / 12) * 100}%`
    }
  },
  xl5: {
    [breakpoints.up("xl")]: {
      flexGrow: 0,
      flexBasis: `${(5 / 12) * 100}%`,
      maxWidth: `${(5 / 12) * 100}%`
    }
  },
  xl6: {
    [breakpoints.up("xl")]: {
      flexGrow: 0,
      flexBasis: `${(6 / 12) * 100}%`,
      maxWidth: `${(6 / 12) * 100}%`
    }
  },
  xl7: {
    [breakpoints.up("xl")]: {
      flexGrow: 0,
      flexBasis: `${(7 / 12) * 100}%`,
      maxWidth: `${(7 / 12) * 100}%`
    }
  },
  xl8: {
    [breakpoints.up("xl")]: {
      flexGrow: 0,
      flexBasis: `${(8 / 12) * 100}%`,
      maxWidth: `${(8 / 12) * 100}%`
    }
  },
  xl9: {
    [breakpoints.up("xl")]: {
      flexGrow: 0,
      flexBasis: `${(9 / 12) * 100}%`,
      maxWidth: `${(9 / 12) * 100}%`
    }
  },
  xl10: {
    [breakpoints.up("xl")]: {
      flexGrow: 0,
      flexBasis: `${(10 / 12) * 100}%`,
      maxWidth: `${(10 / 12) * 100}%`
    }
  },
  xl11: {
    [breakpoints.up("xl")]: {
      flexGrow: 0,
      flexBasis: `${(11 / 12) * 100}%`,
      maxWidth: `${(11 / 12) * 100}%`
    }
  },
  xl12: {
    [breakpoints.up("xl")]: {
      flexGrow: 0,
      flexBasis: `${(12 / 12) * 100}%`,
      maxWidth: `${(12 / 12) * 100}%`
    }
  }
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
        xs > 0 && xs < 13 && classes[`xs${xs}`],
        sm > 0 && sm < 13 && classes[`sm${sm}`],
        md > 0 && md < 13 && classes[`md${md}`],
        lg > 0 && lg < 13 && classes[`lg${lg}`],
        xl > 0 && xl < 13 && classes[`xl${xl}`],
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
