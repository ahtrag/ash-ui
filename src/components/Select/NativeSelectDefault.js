import React, { useState } from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";
import { renderClassName } from "../../utils/constants";

const useStyles = createUseStyles({
  selectWrapper: {
    marginTop: 16,
    marginBottom: 4,
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
  select: {
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

const NativeSelectDefault = props => {
  const {
    options,
    value,
    extra,
    fullWidth,
    label,
    id,
    name,
    color,
    onChange,
    className,
    style,
    noMargin
  } = props;
  const classes = useStyles({ color });
  const isExists =
    options.findIndex(option => option.value === value) === -1 ? false : true;
  const [focus, setFocus] = useState(false);

  return (
    <div
      className={renderClassName(
        classes.selectWrapper,
        fullWidth && classes.fullWidth,
        noMargin && classes.noMargin
      )}
    >
      {label ? (
        <label
          htmlFor={id}
          className={renderClassName(
            classes.inputLabel,
            (focus || value || !isExists || (extra && extra.start)) &&
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
        <select
          className={renderClassName(classes.select, className)}
          id={id}
          name={name}
          style={style}
          onChange={onChange}
          value={value}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        >
          {options &&
            options.map((option, index) => (
              <option
                key={`option-${index}-${option.value}`}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
        </select>
        {extra && extra.end && (
          <div className={renderClassName(classes.extra, classes.extraRight)}>
            {extra.end}
          </div>
        )}
      </div>
    </div>
  );
};

NativeSelectDefault.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      label: PropTypes.any
    })
  ).isRequired,
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

export default NativeSelectDefault;
