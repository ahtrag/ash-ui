import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";
import { useGlobalStyles } from "../../utils/styles";

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

const SwitchView = props => {
  const { dataLabels, active, onSwitch } = props;
  const activeIndex = dataLabels.indexOf(active);
  const classes = useStyles();
  const styles = useGlobalStyles();

  return (
    <div className={`${styles.disFlex} ${styles.aiCenter}`}>
      <h4
        className={`${
          activeIndex === 0 ? styles.clDeepSkyBlue : styles.clGrey2
        } ${styles.txtCenter}`}
      >
        Login
      </h4>

      <div className={`${classes.switch} ${styles.gradAsh}`}>
        <button
          className={`${classes.switchButton} ${
            activeIndex === 0
              ? classes.switchButtonLeft
              : classes.switchButtonRight
          } ${styles.shadowLower}`}
          onClick={() =>
            onSwitch(activeIndex === 0 ? dataLabels[1] : dataLabels[0])
          }
        />
      </div>

      <h4
        className={`${
          activeIndex === 1 ? styles.clDeepSkyBlue : styles.clGrey2
        } ${styles.txtCenter}`}
      >
        Register
      </h4>
    </div>
  );
};

SwitchView.propTypes = {
  dataLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
  active: PropTypes.string.isRequired,
  onSwitch: PropTypes.func.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
};

export default SwitchView;
