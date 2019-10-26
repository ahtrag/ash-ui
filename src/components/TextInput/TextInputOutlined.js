import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import IconButton from "../IconButton";
import Text from "../Text";
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
  input: {
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
  },
  fileInput: {
    display: "none"
  },
  fileInputLabel: {
    display: "flex",
    alignItems: "center"
  }
});

const TextInputOutlined = props => {
  const {
    label,
    value,
    id,
    name,
    accept,
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
  const [labelWidth, setLabelWidth] = useState(0);
  const labelRef = useRef(null);
  const classes = useStyles({ color });

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (labelRef.current) {
      setLabelWidth(
        extra && extra.start
          ? labelRef.current.getBoundingClientRect().width + 8
          : labelRef.current.getBoundingClientRect().width * 0.75 + 8
      );
    }
  }, [labelRef, extra]);

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
        {type === "file" ? (
          <label
            className={renderClassName(
              classes.input,
              classes.fileInputLabel,
              className
            )}
            style={style}
          >
            <Text variant="caption" noMargin>
              {value ? value : "Choose File"}
            </Text>
            <input
              type={type}
              id={id}
              name={name}
              accept={accept}
              className={classes.fileInput}
              onChange={e =>
                onChange({
                  ...e,
                  currentTarget: {
                    ...e.currentTarget,
                    value: e.currentTarget.value.split("\\")[
                      e.currentTarget.value.split("\\").length - 1
                    ]
                  },
                  target: {
                    ...e.target,
                    value: e.target.value.split("\\")[
                      e.target.value.split("\\").length - 1
                    ]
                  }
                })
              }
            />
          </label>
        ) : (
          <input
            type={type === "password" && showPassword ? "text" : type}
            placeholder={!label ? placeholder : focus ? placeholder : ""}
            value={value}
            id={id}
            name={name}
            className={renderClassName(classes.input, className)}
            style={style}
            // onChange={
            //   type === "number"
            //     ? e =>
            //         onChange({
            //           ...e,
            //           currentTarget: {
            //             ...e.currentTarget,
            //             value: e.currentTarget.value
            //               ? parseInt(e.currentTarget.value)
            //               : e.currentTarget.value
            //           },
            //           target: {
            //             ...e.target,
            //             value: e.target.value
            //               ? parseInt(e.target.value)
            //               : e.target.value
            //           }
            //         })
            //     : onChange
            // }
            onChange={onChange}
            onFocus={e => {
              setFocus(true);
              return Boolean(onFocus) ? onFocus(e) : null;
            }}
            onBlur={() => setFocus(false)}
          />
        )}
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

TextInputOutlined.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  id: PropTypes.string,
  name: PropTypes.string,
  accept: PropTypes.string,
  color: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf([
    "text",
    "email",
    "password",
    "number",
    "tel",
    "date",
    "file"
  ]),
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
