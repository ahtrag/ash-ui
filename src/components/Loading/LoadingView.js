import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
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
  circular: {
    height: 80,
    width: 80,
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

const LoadingView = props => {
  const { random, color } = props;
  const classes = useStyles();
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
};

LoadingView.defaultProps = {
  random: true,
  color: "black"
};

LoadingView.propTypes = {
  /**
   * Random the loading color.
   * Default to true.
   */
  random: PropTypes.bool,

  /**
   * Color of the loading
   */
  color: PropTypes.string
};

export default LoadingView;
