import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import Text from "../Text";
import { CSSTransition } from "react-transition-group";
import { createUseStyles } from "react-jss";
import { colors } from "../../utils/styles";

const useStyles = createUseStyles({
  "@keyframes rotate": {
    from: {
      transform: "rotate(0deg)"
    },
    to: {
      transform: "rotate(360deg)"
    }
  },
  "@keyframes dash": {
    "0%": {
      strokeDasharray: "1,200",
      strokeDashoffset: 0
    },
    "50%": {
      strokeDasharray: "89,200",
      strokeDashoffset: -35
    },
    "100%": {
      strokeDasharray: "89,200",
      strokeDashoffset: -124
    }
  },
  root: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    cursor: "pointer"
  },
  loadingWrapper: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  circular: {
    height: size => size,
    width: size => size,
    position: "relative",
    animation: "$rotate 2s linear infinite"
  },
  circularPath: {
    strokeDasharray: "1,200",
    strokeDashoffset: 0,
    animation: "$dash 1.5s ease-in-out infinite",
    strokeLinecap: "round",
    transition: "stroke 0.3s ease-in-out"
  }
});

const LoadingDefault = props => {
  const { show, random, overlay, label, color, size } = props;
  const classes = useStyles(size);
  const [stroke, setStroke] = useState(color);

  useEffect(() => {
    let randomColors = 0;

    if (random) {
      const colorsArray = Object.values(colors);
      randomColors = window.setInterval(() => {
        setStroke(colorsArray[Math.floor(Math.random() * colorsArray.length)]);
      }, 3000);
    }

    return () => {
      window.clearInterval(randomColors);
    };
  }, [random]);

  if (show) {
    if (overlay) {
      return ReactDOM.createPortal(
        <CSSTransition in={show} timeout={300} unmountOnExit>
          <div className={classes.root}>
            <div className={classes.overlay} />

            <div className={classes.loadingWrapper}>
              <svg className={classes.circular}>
                <circle
                  className={classes.circularPath}
                  cx="40"
                  cy="40"
                  r="20"
                  fill="none"
                  stroke={stroke}
                  strokeWidth="3"
                  strokeMiterlimit="10"
                />
              </svg>

              {label ? (
                <Text variant="h6" color="white" noMargin>
                  {label}
                </Text>
              ) : null}
            </div>
          </div>
        </CSSTransition>,
        document.getElementsByTagName("body")[0]
      );
    }
    return (
      <svg className={classes.circular}>
        <circle
          className={classes.circularPath}
          cx="40"
          cy="40"
          r="20"
          fill="none"
          stroke={stroke}
          strokeWidth="3"
          strokeMiterlimit="10"
        />
      </svg>
    );
  }

  return null;
};

LoadingDefault.defaultProps = {
  show: false,
  random: true,
  overlay: false,
  color: "currentColor",
  size: 80
};

LoadingDefault.propTypes = {
  /**
   * Show the loading.
   * @defaultValue false.
   */
  show: PropTypes.bool,

  /**
   * Random the loading color.
   * @defaultValue true.
   */
  random: PropTypes.bool,

  /**
   * Text below the Loading
   */
  label: PropTypes.string,

  /**
   * Color of the loading
   */
  color: PropTypes.string,

  /**
   * Size of the loading
   */
  size: PropTypes.number,

  /**
   * Display loading with overlay
   * @defaultValue false
   */
  overlay: PropTypes.bool
};

export default LoadingDefault;
