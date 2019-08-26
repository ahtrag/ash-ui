import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  thumbnail: {
    width: "100%",
    height: 150,
    backgroundColor: props => props.color,
    backgroundImage: props => `url(${props.image})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 10px center"
  },
  thumbnailTitle: {
    color: "#FFFFFF",
    fontSize: "1.5rem"
  }
});

const ThumbnailView = props => {
  const { title } = props;
  const classes = useStyles(props);
  return (
    <div className={classes.thumbnail}>
      <h1 className={classes.thumbnailTitle}>{title}</h1>
    </div>
  );
};

ThumbnailView.defaultProps = {
  color: "transparent"
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
  image: PropTypes.string
};

export default ThumbnailView;
