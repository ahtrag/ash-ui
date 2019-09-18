import React, { useState } from "react";
import PropTypes from "prop-types";
import IconButton from "../IconButton";
import EyeIcon from "mdi-react/EyeIcon";
import EyeOffIcon from "mdi-react/EyeOffIcon";
import { createUseStyles } from "react-jss";
import { renderClassName } from "../../utils/constants";

const useStyles = createUseStyles({
  textInputWrapper: {
    marginTop: 16,
    marginBottom: 8,
    display: "inline-flex",
    flexDirection: "column",
    position: "relative"
  },
  inputLabel: {
    position: "absolute",
    transform: "scale(1) translate(8px, 14px)",
    transformOrigin: "top left",
    cursor: "pointer",
    transition: "transform 0.3s ease-in-out"
  },
  focusInputLabel: {
    transform: "scale(0.75) translate(0px, -10px)"
  },
  inputWrapper: {
    position: "relative",
    display: "inline-flex",
    borderBottom: "1px solid #8D8A8A",
    transition: "border-bottom 0.3s ease-in-out"
  },
  focusInputWrapper: {
    borderBottom: props => `2px solid ${props.color}`
  },
  input: {
    color: "currentColor",
    position: "relative",
    backgroundColor: "transparent",
    minHeight: 48,
    width: "100%",
    boxSizing: "border-box",
    border: 0,
    "&:focus": {
      outline: "none"
    }
  },
  extra: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  extraLeft: {
    marginRight: 8
  },
  extraRight: {
    marginLeft: 8
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
    color,
    placeholder,
    type,
    extra,
    className,
    style,
    onChange,
    onFocus,
    fullWidth,
    noMargin
  } = props;
  const [focus, setFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const classes = useStyles({ color });

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className={renderClassName(
        classes.textInputWrapper,
        fullWidth && classes.fullWidth,
        noMargin && classes.noMargin
      )}
    >
      {label ? (
        <label
          htmlFor={id}
          className={renderClassName(
            classes.inputLabel,
            (focus || value || (extra && extra.start)) &&
              classes.focusInputLabel
          )}
        >
          {label}
        </label>
      ) : null}

      <div
        className={renderClassName(
          classes.inputWrapper,
          focus && classes.focusInputWrapper
        )}
      >
        {extra && extra.start && (
          <div className={renderClassName(classes.extra, classes.extraLeft)}>
            {extra.start}
          </div>
        )}
        <input
          type={type === "password" && showPassword ? "text" : type}
          placeholder={!label ? placeholder : focus ? placeholder : ""}
          value={value}
          id={id}
          name={name}
          className={renderClassName(classes.input, className)}
          style={style}
          onChange={onChange}
          onFocus={e => {
            setFocus(true);
            return Boolean(onFocus) ? onFocus(e) : null;
          }}
          onBlur={() => setFocus(false)}
        />
        {extra && extra.end ? (
          <div className={classes.extra}>{extra.end}</div>
        ) : type === "password" ? (
          <IconButton onClick={handleShowPassword}>
            {showPassword ? <EyeOffIcon /> : <EyeIcon />}
          </IconButton>
        ) : null}
      </div>
    </div>
  );
};

TextInputDefault.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  color: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(["text", "email", "password", "number", "tel"]),
  extra: PropTypes.shape({
    start: PropTypes.element,
    end: PropTypes.element
  }),
  className: PropTypes.string,
  style: PropTypes.object,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  fullWidth: PropTypes.bool,
  noMargin: PropTypes.bool
};

export default TextInputDefault;
