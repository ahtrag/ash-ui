import React from "react";
import PropTypes from "prop-types";
import LoadingDefault from "./LoadingDefault";
import LoadingWave from "./LoadingWave";

const LoadingView = props => {
  const { variant, ...loadingProps } = props;

  switch (variant) {
    case "default":
      return <LoadingDefault {...loadingProps} />;
    case "wave":
      return <LoadingWave {...loadingProps} />;
    default:
      return <LoadingDefault {...loadingProps} />;
  }
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
  color: PropTypes.string,

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

export default LoadingView;
