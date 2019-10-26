import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";
import { renderClassName, renderStyle } from "../../utils/constants";

const useStyles = createUseStyles({
  thumbnail: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    padding: "16px 24px",
    boxSizing: "border-box",
    height: props => props.height,
    backgroundColor: props => props.color,
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
  const { title, classNameOptions, styleOptions, ...otherProps } = props;
  const classes = useStyles(otherProps);
  return (
    <div
      className={renderClassName(
        classes.thumbnail,
        classNameOptions && classNameOptions.root
      )}
      style={renderStyle(
        { backgroundImage: `url(${props.image})` },
        styleOptions && styleOptions.root
      )}
    >
      <h1
        className={renderClassName(
          classes.thumbnailTitle,
          classNameOptions && classNameOptions.title
        )}
        style={renderStyle(styleOptions && styleOptions.title)}
      >
        {title}
      </h1>
    </div>
  );
};

ThumbnailView.defaultProps = {
  color: "transparent",
  position: "right",
  height: 150
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
  classNameOptions: PropTypes.shape({
    root: PropTypes.string,
    title: PropTypes.string
  }),

  /**
   * Override default styles with style
   */
  styleOptions: PropTypes.shape({
    root: PropTypes.object,
    title: PropTypes.object
  })
};

export default ThumbnailView;
