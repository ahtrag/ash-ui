import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { createUseStyles } from "react-jss";
import { globalStyles } from "../../utils/styles";

const useStyles = createUseStyles({
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
    "&:focus": {
      outline: "none"
    }
  },
  switchButtonLeft: {
    left: 0
  },
  switchButtonRight: {
    left: "calc(100% - 30px)"
  }
});

const useGlobalStyles = createUseStyles(globalStyles);

const SwitchView = props => {
  const { switchValues, active, onSwitch, noLabel, className, style } = props;
  const activeIndex = switchValues.indexOf(active);
  const classes = useStyles();
  const styles = useGlobalStyles();

  const defaultStyles = [classes.switch, styles.gradAsh, className]
    .filter(value => Boolean(value))
    .join(" ");

  return (
    <div className={`${styles.disFlex} ${styles.aiCenter}`}>
      {noLabel ? null : (
        <h4
          className={`${
            activeIndex === 0 ? styles.clDeepSkyBlue : styles.clGrey2
          } ${styles.txtCenter}`}
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
          } ${styles.shadowLower}`}
          onClick={() =>
            onSwitch(activeIndex === 0 ? switchValues[1] : switchValues[0])
          }
        />
      </div>

      {noLabel ? null : (
        <h4
          className={`${
            activeIndex === 1 ? styles.clDeepSkyBlue : styles.clGrey2
          } ${styles.txtCenter}`}
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
