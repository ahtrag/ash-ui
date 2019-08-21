import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  avatar: {
    height: size => size,
    width: size => size,
    borderRadius: "50%",
    backgroundColor: "#DBDBDB",
    color: "#000000",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  avatarImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    textAlign: "center"
  }
});

const AvatarView = props => {
  const { src, alt, size, children, className, style } = props;
  const styles = useStyles(size);

  const defaultStyles = [styles.avatar, className]
    .filter(value => Boolean(value))
    .join(" ");

  return (
    <div className={defaultStyles} style={style}>
      {Boolean(src) ? (
        <img src={src} alt={alt} className={styles.avatarImg} />
      ) : typeof children === "string" ? (
        `${children.split(" ")[0][0]}${
          children.split(" ").length > 1
            ? children.split(" ")[children.split(" ").length - 1][0]
            : ""
        }`
      ) : (
        children
      )}
    </div>
  );
};

AvatarView.defaultProps = {
  size: 40
};

AvatarView.propTypes = {
  /**
   * URL of the image.
   */
  src: PropTypes.string,

  /**
   * Alternate text for the image.
   */
  alt: PropTypes.string,

  /**
   * Size of the Avatar.
   */
  size: PropTypes.number,

  /**
   * Use children if not using src props.
   * children accept string or icon.
   */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  /**
   * Override default styles with className
   */
  className: PropTypes.string,

  /**
   * Override default styles with inline style
   */
  style: PropTypes.object
};

export default AvatarView;
