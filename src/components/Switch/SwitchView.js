import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    display: "flex",
    alignItems: "center"
  },
  switch: {
    margin: "0 16px",
    position: "relative",
    height: 30,
    width: 70,
    borderRadius: 200
  },
  switchButton: {
    position: "absolute",
    height: 30,
    width: 30,
    borderRadius: "50%",
    zIndex: 5,
    backgroundColor: "#B4BABF",
    cursor: "pointer",
    transition: "left 0.3s ease-in-out",
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    "&:focus": {
      outline: "none"
    }
  },
  switchButtonLeft: {
    left: 0
  },
  switchButtonRight: {
    left: "calc(100% - 30px)"
  },
  gradAsh: {
    background: "linear-gradient(to right, #3f4c6b, #606c88)"
  },
  clDeepSkyBlue: {
    color: "#00a1ff"
  },
  clGrey2: {
    color: "#838383"
  },
  txtCenter: {
    textAlign: "center"
  }
});

const SwitchView = props => {
  const { switchValues, active, onSwitch, noLabel, className, style } = props;
  const activeIndex = switchValues.indexOf(active);
  const classes = useStyles();
  const defaultStyles = [classes.switch, classes.gradAsh, className]
    .filter(value => Boolean(value))
    .join(" ");

  return (
    <div className={classes.root}>
      {noLabel ? null : (
        <h4
          className={`${
            activeIndex === 0 ? classes.clDeepSkyBlue : classes.clGrey2
          } ${classes.txtCenter}`}
        >
          {_.startCase(_.lowerCase(switchValues[0]))}
        </h4>
      )}

      <div className={defaultStyles} style={style}>
        <button
          className={`${classes.switchButton} ${
            activeIndex === 0
              ? classes.switchButtonLeft
              : classes.switchButtonRight
          }`}
          onClick={() =>
            onSwitch(activeIndex === 0 ? switchValues[1] : switchValues[0])
          }
        />
      </div>

      {noLabel ? null : (
        <h4
          className={`${
            activeIndex === 1 ? classes.clDeepSkyBlue : classes.clGrey2
          } ${classes.txtCenter}`}
        >
          {_.startCase(_.lowerCase(switchValues[1]))}
        </h4>
      )}
    </div>
  );
};

SwitchView.defaultProps = {
  noLabel: false,
  className: ""
};

SwitchView.propTypes = {
  /**
   * Values of the Switch.
   * Array of two strings.
   */
  switchValues: PropTypes.arrayOf(PropTypes.string).isRequired,

  /**
   * Active value of the Switch.
   * One of the switchValues property.
   */
  active: PropTypes.string.isRequired,

  /**
   * Function that triggered when Switch Button pressed.
   * @return String of active value
   */
  onSwitch: PropTypes.func.isRequired,

  /**
   * Show Switch without label if true.
   * Default value is false.
   */
  noLabel: PropTypes.bool,

  /**
   * Override default styles with className
   */
  className: PropTypes.string,

  /**
   * Override default styles with inline style
   */
  style: PropTypes.object
};

export default SwitchView;
