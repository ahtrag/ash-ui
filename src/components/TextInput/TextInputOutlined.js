import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";
import { renderClassName } from "../../utils/constants";

const useStyles = createUseStyles({
  textInputWrapper: {
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
    transform: "scale(1) translate(8px, 10px)",
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
  input: {
    color: "currentColor",
    position: "relative",
    backgroundColor: "transparent",
    minHeight: 40,
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

const TextInputOutlined = props => {
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
  const [labelWidth, setLabelWidth] = useState(0);
  const labelRef = useRef(null);
  const classes = useStyles({ color });

  useEffect(() => {
    if (labelRef.current) {
      setLabelWidth(labelRef.current.getBoundingClientRect().width + 8);
    }
  }, [labelRef]);

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
          ref={labelRef}
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
                label && (focus || value || (extra && extra.start))
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
        <input
          type={type}
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
        {extra && extra.end && <div className={classes.extra}>{extra.end}</div>}
      </div>
    </div>
  );
};

TextInputOutlined.propTypes = {
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

export default TextInputOutlined;
