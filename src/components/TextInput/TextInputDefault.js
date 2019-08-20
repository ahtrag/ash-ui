import React, { useState } from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  inputWrapper: {
    marginTop: 16,
    marginBottom: 4,
    padding: 8,
    display: "inline-flex",
    position: "relative",
    borderBottom: "1px solid #ddd"
  },
  inputField: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    padding: "0 8px",
    margin: 0,
    border: "1px solid #A7A7A7",
    boxSizing: "border-box"
  },
  inputLegend: {
    padding: 0,
    margin: 0,
    width: 0.1,
    lineHeight: "10px",
    transition: "width 0.3s ease-in-out"
  },
  inputLabel: {
    position: "absolute",
    top: 8,
    left: 8,
    zIndex: 5,
    transform: "scale(1)",
    cursor: "pointer",
    transition:
      "transform 0.3s ease-in-out, top 0.3s ease-in-out, left 0.3s ease-in-out"
  },
  focusInputLabel: {
    transform: "scale(0.8)",
    top: -15,
    left: 2
  },
  input: {
    position: "relative",
    backgroundColor: "transparent",
    minWidth: 125,
    width: "100%",
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
  fullWidth: {
    width: "100%"
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
    fullWidth
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
      }`}
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
    </div>
  );
};

TextInputDefault.defaultProps = {
  type: "text",
  className: "",
  fullWidth: false
};

TextInputDefault.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(["text", "email", "password"]),
  extra: PropTypes.shape({
    start: PropTypes.element,
    end: PropTypes.element
  }),
  className: PropTypes.string,
  style: PropTypes.object,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  fullWidth: PropTypes.bool
};

export default TextInputDefault;
