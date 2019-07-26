import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    position: "relative",
    display: "inline-flex",
    "&:hover": {
      "& $tooltip": {
        transform: "scale(1)"
      }
    }
  },
  tooltip: {
    position: "absolute",
    width: "auto",
    height: "auto",
    top: "calc(100% + 15px)",
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.65)",
    zIndex: 100,
    color: "white",
    transform: "scale(0)",
    padding: 8,
    transition: "transform 0.2s ease-in-out",
    borderRadius: 3,
    "&:before": {
      content: "''",
      position: "absolute",
      top: -10,
      left: "calc(50% - 5px)",
      borderWidth: 5,
      borderStyle: "solid",
      borderColor: "transparent transparent rgba(0, 0, 0, 0.65) transparent"
    }
  }
});

const TooltipView = props => {
  const { label, children, position } = props;
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.tooltip}>
        <p>{label}</p>
      </div>

      {children}
    </div>
  );
};

TooltipView.defaultProps = {
  position: "bottom"
};

TooltipView.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  position: PropTypes.oneOf(["top", "right", "bottom", "left"])
};

export default TooltipView;
