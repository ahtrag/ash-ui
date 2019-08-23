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
  input: {
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
    marginRight: 8,
    alignItems: "center",
    justifyContent: "center"
  },
  extraEnd: {
    display: "flex",
    marginLeft: 8,
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

const TextInputDefault = props => {
  const {
    label,
    value,
    id,
    name,
    placeholder,
    type,
    extra,
    className,
    style,
    onChange,
    fullWidth,
    noMargin
  } = props;
  const [focus, setFocus] = useState(extra && extra.start ? true : false);
  const classes = useStyles();
  const defaultStyles = [classes.input, classes.fullWidth, className]
    .filter(value => Boolean(value))
    .join(" ");

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
      <input
        type={type}
        placeholder={!label ? placeholder : focus ? placeholder : ""}
        value={value}
        id={id}
        name={name}
        className={defaultStyles}
        style={style}
        onChange={onChange}
        onFocus={() => (extra && extra.start ? null : setFocus(true))}
        onBlur={() => (extra && extra.start ? null : setFocus(false))}
      />
      {extra && extra.end && (
        <div className={classes.extraEnd}>{extra.end}</div>
      )}
    </div>
  );
};

TextInputDefault.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(["text", "email", "password", "number", "tel"]),
  extra: PropTypes.shape({
    start: PropTypes.element,
    end: PropTypes.element
  }),
  className: PropTypes.string,
  style: PropTypes.object,
  onChange: PropTypes.func,
  fullWidth: PropTypes.bool,
  noMargin: PropTypes.bool
};

export default TextInputDefault;
