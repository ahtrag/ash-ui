import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    margin: 0,
    padding: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: props => props.background
  },
  loader: {
    position: "relative",
    display: "flex",
    "& span": {
      width: props => props.width,
      height: props => props.height,
      margin: "0 20px",
      background: props => props.background,
      animation: "$animate 1.4s linear infinite"
    },
    "& span:nth-child(1)": {
      animationDelay: "0s"
    },
    "& span:nth-child(2)": {
      animationDelay: "0.2s"
    },
    "& span:nth-child(3)": {
      animationDelay: "0.4s"
    },
    "& span:nth-child(4)": {
      animationDelay: "0.6s"
    },
    "& span:nth-child(5)": {
      animationDelay: "0.8s"
    },
    "& span:nth-child(6)": {
      animationDelay: "1s"
    },
    "& span:nth-child(7)": {
      animationDelay: "1.2s"
    },
    "& span:nth-child(8)": {
      animationDelay: "1.4s"
    },
    "& span:nth-child(9)": {
      animationDelay: "1.6s"
    }
  },
  "@keyframes animate": {
    "0%": {
      boxShadow: "0 0 0 rgba(0,0,0,0.5)",
      opacity: 0,
      transform: "translateX(-50px) scale(1)"
    },
    "50%": {
      boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
      opacity: 1,
      transform: "translateX(-50px) scale(1.2 )"
    },
    "100%": {
      boxShadow: "0 0 0 rgba(0,0,0,0.5)",
      opacity: 0,
      transform: "translateX(50px) scale(1)"
    }
  }
});

const LoadingWave = props => {
  const { ...loadingProps } = props;
  const classes = useStyles(loadingProps);
  return (
    <div className={classes.root}>
      <div className={classes.loader}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};
LoadingWave.defaultProps = {
  width: "50px",
  height: "300px",
  background: "white"
};

LoadingWave.propTypes = {
  /**
   * LoadingWave Props width of bars.
   * Default 50px.
   */
  width: PropTypes.string,

  /**
   * LoadingWave Props height of bars.
   * Default 300px.
   */
  height: PropTypes.string,

  /**
   * LoadingWave Props backgriund of bars and pages.
   * Default white.
   */
  background: PropTypes.string
};

export default LoadingWave;
