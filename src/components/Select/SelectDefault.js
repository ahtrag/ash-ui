import React, { useState } from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  inputWrapper: {
    marginTop: 16,
    marginBottom: 4,
    display: "inline-flex",
    position: "relative",
    borderBottom: "1px solid #8D8A8A"
  },
  inputLabel: {
    position: "absolute",
    top: 16,
    left: 8,
    zIndex: 5,
    transform: "scale(1)",
    cursor: "pointer",
    transition:
      "transform 0.3s ease-in-out, top 0.3s ease-in-out, left 0.3s ease-in-out"
  },
  focusInputLabel: {
    transform: "scale(0.8)",
    top: -10,
    left: -8
  },
  select: {
    position: "relative",
    backgroundColor: "transparent",
    minWidth: 125,
    minHeight: 50,
    width: "100%",
    padding: 8,
    boxSizing: "border-box",
    border: 0,
    "&:focus": {
      outline: "none"
    }
  },
  extraStart: {
    display: "flex",
    marginRight: 16,
    alignItems: "center",
    justifyContent: "center"
  },
  extraEnd: {
    display: "flex",
    marginLeft: 16,
    alignItems: "center",
    justifyContent: "center"
  },
  fullWidth: {
    width: "100%"
  },
  noMargin: {
    margin: 0
  }
});

const SelectDefault = props => {
  const {
    children,
    value,
    extra,
    fullWidth,
    label,
    id,
    name,
    onChange,
    className,
    style,
    noMargin
  } = props;
  const classes = useStyles();
  const defaultStyles = [classes.select, classes.fullWidth, className]
    .filter(value => Boolean(value))
    .join(" ");
  const [focus, setFocus] = useState(extra && extra.start ? true : false);

  return (
    <div
      className={`${classes.inputWrapper}${
        fullWidth ? ` ${classes.fullWidth}` : ""
      }${noMargin ? ` ${classes.noMargin}` : ""}`}
    >
      {extra && extra.start && (
        <div className={classes.extraStart}>{extra.start}</div>
      )}
      <label
        htmlFor={id}
        className={`${classes.inputLabel} ${
          focus || value ? classes.focusInputLabel : ""
        }`}
      >
        {label}
      </label>
      <select
        className={defaultStyles}
        id={id}
        name={name}
        style={style}
        onChange={onChange}
        value={value}
        onFocus={() => (extra && extra.start ? null : setFocus(true))}
        onBlur={() => (extra && extra.start ? null : setFocus(false))}
      >
        {children}
      </select>
      {extra && extra.end && (
        <div className={classes.extraEnd}>{extra.end}</div>
      )}
    </div>
  );
};

SelectDefault.propTypes = {
  children: PropTypes.any,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  extra: PropTypes.shape({
    start: PropTypes.element,
    end: PropTypes.element
  }),
  fullWidth: PropTypes.bool,
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  noMargin: PropTypes.bool
};

export default SelectDefault;
