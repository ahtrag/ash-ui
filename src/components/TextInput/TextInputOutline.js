import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  inputWrapper: {
    marginTop: 16,
    marginBottom: 4,
    display: "inline-flex",
    position: "relative"
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
    top: 0,
    left: 0,
    zIndex: 5,
    transform: "translate(7px, 15px) scale(1)",
    cursor: "pointer",
    padding: 8,
    transition: "transform 0.3s ease-in-out"
  },
  focusInputLabel: {
    transform: "translate(5px, -14px) scale(0.8)"
  },
  input: {
    position: "relative",
    backgroundColor: "transparent",
    minWidth: 125,
    width: "100%",
    marginTop: 8,
    padding: "16px 8px",
    border: 0,
    "&:focus": {
      outline: "none"
    }
  },
  fullWidth: {
    width: "100%"
  }
});

const TextInputOutline = props => {
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
  const [focus, setFocus] = useState(false);
  const [labelWidth, setLabelWidth] = useState(0);
  const labelRef = useRef(null);
  const classes = useStyles();
  const defaultStyles = [classes.input, classes.fullWidth, className]
    .filter(value => Boolean(value))
    .join(" ");

  useEffect(() => {
    if (labelRef.current) {
      setLabelWidth(labelRef.current.getBoundingClientRect().width);
    }
  }, [labelRef]);

  return (
    <div
      className={`${classes.inputWrapper}${
        fullWidth ? ` ${classes.fullWidth}` : ""
      }`}
    >
      <fieldset className={classes.inputField}>
        <legend
          className={classes.inputLegend}
          style={{ width: label && (focus || value) ? labelWidth : "" }}
        >
          &#8203;
        </legend>
      </fieldset>

      <label
        ref={labelRef}
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
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
    </div>
  );
};

TextInputOutline.defaultProps = {
  type: "text",
  className: "",
  fullWidth: false
};

TextInputOutline.propTypes = {
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

export default TextInputOutline;
