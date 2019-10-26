import React, { useState, useRef, useEffect } from "react";
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
  inputField: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    paddingLeft: 8,
    margin: 0,
    border: "1px solid #A7A7A7",
    borderRadius: 2,
    boxSizing: "border-box",
    transition: "padding-left 0.3s ease-in-out, border 0.15s ease-in-out"
  },
  focusInputField: {
    border: props => `2px solid ${props.color}`
  },
  inputLegend: {
    padding: 0,
    margin: 0,
    width: 0.1,
    lineHeight: 0,
    transition: "width 0.3s ease-in-out"
  },
  inputLabel: {
    position: "absolute",
    transform: "scale(1) translate(8px, 14px)",
    transformOrigin: "top left",
    cursor: "pointer",
    transition: "transform 0.3s ease-in-out"
  },
  focusInputLabel: {
    transform: "scale(0.75) translate(16px, -10px)"
  },
  inputWrapper: {
    position: "relative",
    display: "inline-flex"
  },
  select: {
    color: "currentColor",
    position: "relative",
    backgroundColor: "transparent",
    minHeight: 48,
    width: "100%",
    padding: 8,
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
    marginLeft: 8
  },
  fullWidth: {
    width: "100%"
  },
  noMargin: {
    margin: 0
  }
});

const NativeSelectOutlined = props => {
  const {
    options,
    label,
    value,
    id,
    name,
    extra,
    className,
    color,
    style,
    onChange,
    fullWidth,
    noMargin
  } = props;
  const [focus, setFocus] = useState(false);
  const [labelWidth, setLabelWidth] = useState(0);
  const labelRef = useRef(null);
  const classes = useStyles({ color });
  const isExists =
    options.findIndex(option => option.value === value) === -1 ? false : true;

  useEffect(() => {
    if (labelRef.current) {
      setLabelWidth(labelRef.current.getBoundingClientRect().width + 8);
    }
  }, [labelRef]);

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
          ref={labelRef}
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

      <div className={classes.inputWrapper}>
        <fieldset
          className={renderClassName(
            classes.inputField,
            focus && classes.focusInputField
          )}
        >
          <legend
            className={classes.inputLegend}
            style={{
              width:
                label && (focus || value || !isExists || (extra && extra.start))
                  ? labelWidth
                  : 0
            }}
          >
            &#8203;
          </legend>
        </fieldset>

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
        {extra && extra.end && <div className={classes.extra}>{extra.end}</div>}
      </div>
    </div>
  );
};

NativeSelectOutlined.propTypes = {
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

export default NativeSelectOutlined;
