import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  tooltip: {
    position: "absolute",
    width: "auto",
    height: "auto",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.65)",
    zIndex: 100,
    padding: 8,
    color: "white",
    transform: "scale(0)",
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
  },
  showTooltip: {
    transform: "scale(1)"
  },
  tooltipText: {
    fontSize: 12,
    textAlign: "center",
    wordBreak: "break-word"
  }
});

const TooltipView = props => {
  const { label, children, maxWidth } = props;
  const classes = useStyles();
  const [tooltip, setTooltip] = useState({
    show: false,
    wrapper: {
      top: 0,
      left: 0,
      height: 0,
      width: 0
    },
    width: 0
  });
  const tooltipWrapperRef = useRef(null);
  const tooltipRef = useRef(null);

  const handleMouseEnter = () => {
    setTooltip({
      show: true,
      wrapper: {
        top: tooltipWrapperRef.current.offsetTop,
        left: tooltipWrapperRef.current.offsetLeft,
        height: tooltipWrapperRef.current.offsetHeight,
        width: tooltipWrapperRef.current.offsetWidth
      },
      width: tooltipRef.current.offsetWidth
    });
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setTooltip({ ...tooltip, show: false })}
      ref={tooltipWrapperRef}
    >
      <div
        ref={tooltipRef}
        className={`${classes.tooltip}${
          tooltip.show ? ` ${classes.showTooltip}` : ""
        }`}
        style={{
          top: tooltip.wrapper.top + tooltip.wrapper.height + 16,
          left:
            tooltip.wrapper.left - tooltip.wrapper.width / 2 < 0
              ? tooltip.wrapper.left
              : tooltip.wrapper.left + tooltip.width > window.innerWidth
              ? tooltip.wrapper.left -
                (window.innerWidth -
                  (tooltip.wrapper.left + tooltip.wrapper.width))
              : tooltip.wrapper.left +
                tooltip.wrapper.width / 2 -
                tooltip.width / 2,
          maxWidth,
          width:
            tooltip.wrapper.left - tooltip.wrapper.width / 2 < 0
              ? tooltip.wrapper.width - 16
              : "auto"
        }}
      >
        <p className={classes.tooltipText}>{label}</p>
      </div>
      {children}
    </div>
  );
};

TooltipView.defaultProps = {
  position: "bottom",
  maxWidth: 300
};

TooltipView.propTypes = {
  /**
   * Label of Tooltip
   */
  label: PropTypes.string.isRequired,

  /**
   * Children of Tooltip
   */
  children: PropTypes.element.isRequired,

  /**
   * Maxwidth of Tooltip
   */
  maxWidth: PropTypes.number
};

export default TooltipView;
