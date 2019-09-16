import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";
import { renderClassName } from "../../utils/constants";

const useStyles = createUseStyles({
  root: {
    margin: 0,
    color: props => props.color,
    width: "inherit"
  },
  marginBottom: {
    marginBottom: "0.4em"
  },
  align: {
    textAlign: props => props.align
  },
  display: {
    display: props => (props.display ? props.display : "")
  },
  noWrap: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  h1: {
    fontWeight: 300,
    fontSize: "3.25rem",
    lineHeight: 1.1,
    letterSpacing: -1
  },
  h2: {
    fontWeight: 300,
    fontSize: "2.75rem",
    lineHeight: 1.15,
    letterSpacing: -1
  },
  h3: {
    fontWeight: 400,
    fontSize: "2.25rem",
    lineHeight: 1.15
  },
  h4: {
    fontWeight: 400,
    fontSize: "1.75rem",
    lineHeight: 1.15,
    letterSpacing: 0.5
  },
  h5: {
    fontWeight: 400,
    fontSize: "1.5rem",
    lineHeight: 1.15,
    letterSpacing: 0.5
  },
  h6: {
    fontWeight: 500,
    fontSize: "1.25rem",
    lineHeight: 1.15,
    letterSpacing: 0.5
  },
  title: {
    fontWeight: 400,
    fontSize: "1rem",
    lineHeight: 1.75,
    letterSpacing: 0.2
  },
  subtitle: {
    fontWeight: 500,
    fontSize: "0.875rem",
    lineHeight: 1.65,
    letterSpacing: 0.15
  },
  body: {
    fontWeight: 400,
    fontSize: "1rem",
    lineHeight: 1.5,
    letterSpacing: 0.1
  },
  paragraph: {
    fontWeight: 400,
    fontSize: "0.875rem",
    lineHeight: 1.5,
    letterSpacing: 0.15
  },
  button: {
    fontWeight: 500,
    fontSize: "0.875rem",
    lineHeight: 1.5,
    letterSpacing: 0.4,
    textTransform: "uppercase"
  },
  caption: {
    fontWeight: 400,
    fontSize: "0.8rem",
    lineHeight: 1.5,
    letterSpacing: 0.1
  }
});

const TextView = props => {
  const {
    variant,
    align,
    display,
    color,
    noMargin,
    noWrap,
    className,
    style,
    children
  } = props;
  const classes = useStyles({ align, display, color });
  const classNames = renderClassName(
    classes.root,
    classes.align,
    classes.display,
    classes[variant],
    !noMargin && classes.marginBottom,
    noWrap && classes.noWrap,
    className
  );

  switch (variant) {
    case "h1":
      return (
        <h1 className={classNames} style={style}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 className={classNames} style={style}>
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 className={classNames} style={style}>
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4 className={classNames} style={style}>
          {children}
        </h4>
      );
    case "h5":
      return (
        <h5 className={classNames} style={style}>
          {children}
        </h5>
      );
    case "h6":
    case "title":
    case "subtitle":
      return (
        <h6 className={classNames} style={style}>
          {children}
        </h6>
      );
    case "body":
    case "paragraph":
      return (
        <p className={classNames} style={style}>
          {children}
        </p>
      );
    case "button":
    case "caption":
      return (
        <span className={classNames} style={style}>
          {children}
        </span>
      );

    default:
      return (
        <p className={classNames} style={style}>
          {children}
        </p>
      );
  }
};

TextView.defaultProps = {
  variant: "body",
  color: "currentColor",
  align: "left",
  noMargin: false,
  noWrap: false
};

TextView.propTypes = {
  variant: PropTypes.oneOf([
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "title",
    "subtitle",
    "body",
    "paragraph",
    "button",
    "caption"
  ]),
  align: PropTypes.oneOf(["left", "center", "right", "justify"]),
  display: PropTypes.oneOf(["block", "inline", "inline-block"]),
  color: PropTypes.string,
  noMargin: PropTypes.bool,
  noWrap: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object
};

export default TextView;
