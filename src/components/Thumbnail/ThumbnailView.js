import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  thumbnail: {
    width: "100%",
    height: props => props.height,
    backgroundColor: props => props.color,
    backgroundImage: props => `url(${props.image})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: props =>
      props.position === "center" ? "center" : `${props.position} 10px center`
  },
  thumbnailTitle: {
    color: "#FFFFFF",
    fontSize: "1.5rem"
  }
});

const ThumbnailView = props => {
  const { title, className, style, ...otherProps } = props;
  const classes = useStyles(otherProps);
  return (
    <div className={classes.thumbnail}>
      <h1 className={classes.thumbnailTitle}>{title}</h1>
    </div>
  );
};

ThumbnailView.defaultProps = {
  color: "transparent",
  position: "right"
};

ThumbnailView.propTypes = {
  /**
   * Title of Thumbnail
   */
  title: PropTypes.string,

  /**
   * Color of Thumbnail
   */
  color: PropTypes.string,

  /**
   * URL of Thumbnail
   */
  image: PropTypes.string.isRequired,

  /**
   * Position of the image
   */
  position: PropTypes.oneOf(["left", "center", "right"]),

  /**
   * Height of Thumbnail
   */
  height: PropTypes.number.isRequired,

  /**
   * Override default styles with className
   */
  className: PropTypes.shape({
    root: PropTypes.string,
    title: PropTypes.string
  }),

  /**
   * Override default styles with style
   */
  style: PropTypes.shape({
    root: PropTypes.object,
    title: PropTypes.object
  })
};

export default ThumbnailView;
