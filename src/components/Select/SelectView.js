import React, { useState } from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  inputWrapper: {
    marginTop: 16,
    marginBottom: 4,
    width: "100%",
    position: "relative"
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
    transform: "translate(5px, -8px) scale(0.9)",
    backgroundColor: "#FFF"
  },
  switch: {
    marginTop: 8,
    padding: "16px 8px",
    border: "1px solid #A7A7A7",
    boxSizing: "border-box",
    "&:focus": {
      outline: "none"
    }
  },
  fullWidth: {
    width: "100%"
  }
});

const SelectView = props => {
  const {
    children,
    value,
    onChange,
    fullWidth,
    label,
    id,
    name,
    className,
    style
  } = props;
  const classes = useStyles();
  const defaultStyles = [
    classes.switch,
    fullWidth ? classes.fullWidth : "",
    className
  ]
    .filter(value => Boolean(value))
    .join(" ");
  const [focus, setFocus] = useState(false);

  return (
    <div className={classes.inputWrapper}>
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
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      >
        {children}
      </select>
    </div>
  );
};

SelectView.defaultProps = {
  fullWidth: false
};

SelectView.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  fullWidth: PropTypes.bool,
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object
};

export default SelectView;
