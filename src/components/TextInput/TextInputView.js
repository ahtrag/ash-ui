import React, { useState } from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";
import { useGlobalStyles } from "../../utils/styles";

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
  input: {
    marginTop: 8,
    padding: "16px 8px",
    border: "1px solid #A7A7A7",
    boxSizing: "border-box",
    "&:focus": {
      outline: "none"
    }
  }
});

const TextInputView = props => {
  const {
    label,
    value,
    id,
    name,
    placeholder,
    type,
    className,
    style,
    onChange,
    fullWidth
  } = props;
  const classes = useStyles();
  const styles = useGlobalStyles();
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
      <input
        type={type}
        placeholder={focus ? placeholder : ""}
        value={value}
        id={id}
        name={name}
        className={`
            ${classes.input}
            ${fullWidth ? styles.fullWidth : ""} 
            ${className}
        `}
        style={style}
        onChange={onChange}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
    </div>
  );
};

TextInputView.defaultProps = {
  type: "text",
  className: "",
  fullWidth: false
};

TextInputView.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(["text", "email", "password"]),
  className: PropTypes.string,
  style: PropTypes.object,
  onChange: PropTypes.func,
  fullWidth: PropTypes.bool
};

export default TextInputView;
