/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Popup from "../Popup";
import Button from "../Button";
import Checkbox from "../Checkbox";
import Text from "../Text";
import MenuDownIcon from "mdi-react/MenuDownIcon";
import { createUseStyles } from "react-jss";
import { renderClassName } from "../../utils/constants";

const useStyles = createUseStyles({
  selectWrapper: {
    marginTop: 16,
    marginBottom: 4,
    minWidth: props =>
      props.width ? props.width : props.fullWidth ? "100%" : 120,
    width: props =>
      props.multiple ? (props.width ? props.width : 120) : "auto",
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
    display: "inline-flex",
    alignItems: "center"
  },
  select: {
    color: "currentColor",
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    paddingLeft: 8,
    backgroundColor: "transparent",
    cursor: "pointer",
    minHeight: 48,
    width: "100%",
    boxSizing: "border-box",
    border: 0,
    "&:focus": {
      outline: "none"
    }
  },
  selectExtraLeft: {
    paddingLeft: 40
  },
  selectExtraRight: {
    paddingRight: 40
  },
  extra: {
    position: "absolute",
    display: "flex",
    zIndex: -1
  },
  extraLeft: {
    left: 8
  },
  extraRight: {
    right: 8
  },
  fullWidth: {
    width: "100%"
  },
  noMargin: {
    margin: 0
  },
  normal: {
    justifyContent: "flex-start",
    textAlign: "left"
  }
});

const SelectOutlined = props => {
  const {
    options,
    value,
    extra,
    fullWidth,
    label,
    id,
    name,
    color,
    placeholder,
    onChange,
    renderValue,
    className,
    style,
    noMargin,
    multiple,
    checkbox,
    width
  } = props;
  const classes = useStyles({ color, multiple, width, fullWidth });
  const [focus, setFocus] = useState(false);
  const [target, setTarget] = useState(null);
  const [labelWidth, setLabelWidth] = useState(0);
  const [selectValue, setSelectValue] = useState(multiple ? [] : "");
  const [selectLabel, setSelectLabel] = useState(multiple ? [] : "");
  const labelRef = useRef(null);

  const handleClick = e => {
    setFocus(true);
    setTarget(e.currentTarget);
  };

  const handleClose = () => {
    setFocus(false);
    setTarget(null);
  };

  const handleSelect = (e, option) => {
    let tempSelectValue = option.value;
    let tempSelectLabel = option.label;

    if (multiple) {
      const index = selectValue.indexOf(tempSelectValue);

      if (index === -1) {
        const tempValue = [...selectValue];
        tempValue.push(tempSelectValue);
        setSelectValue(tempValue);

        const tempLabel = [...selectLabel];
        tempLabel.push(tempSelectLabel);
        setSelectLabel(tempLabel);

        tempSelectValue = [...tempValue];
        tempSelectLabel = [...tempLabel];
      } else {
        const tempValue = [...selectValue];
        tempValue.splice(index, 1);
        setSelectValue(tempValue);

        const tempLabel = [...selectLabel];
        tempLabel.splice(index, 1);
        setSelectLabel(tempLabel);

        tempSelectValue = [...tempValue];
        tempSelectLabel = [...tempLabel];
      }
    } else {
      setSelectValue(tempSelectValue);
      setSelectLabel(tempSelectLabel);
      handleClose();
    }

    const tempEvent = Object.assign({}, e, {
      currentTarget: { value: tempSelectValue, label: tempSelectLabel },
      target: { value: tempSelectValue, label: tempSelectLabel }
    });

    onChange(tempEvent);
  };

  useEffect(() => {
    if (value) {
      if (!multiple) {
        if (selectValue !== value) {
          const index = options.findIndex(option => option.value === value);
          setSelectValue(options[index].value);
          setSelectLabel(options[index].label);
        }
      }
    }
  }, [value, multiple, options]);

  useEffect(() => {
    if (labelRef.current) {
      setLabelWidth(labelRef.current.getBoundingClientRect().width + 8);
    }
  }, [labelRef]);

  return (
    <Fragment>
      <div
        className={renderClassName(
          classes.selectWrapper,
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

          <div
            className={renderClassName(
              classes.select,
              extra && extra.start && classes.selectExtraLeft,
              classes.selectExtraRight,
              className
            )}
            style={style}
            onClick={handleClick}
          >
            <Text variant="caption" noWrap noMargin>
              {multiple
                ? selectLabel.length > 0
                  ? renderValue(selectLabel)
                  : placeholder
                : selectLabel
                ? selectLabel
                : placeholder}
            </Text>
          </div>
          <input type="hidden" value={value} name={name} />

          <div className={renderClassName(classes.extra, classes.extraRight)}>
            {extra && extra.end ? extra.end : <MenuDownIcon />}
          </div>
        </div>
      </div>

      <Popup target={target} onClose={handleClose}>
        {options.map((option, index) => (
          <Button
            key={`menu-${option.label}-${index}`}
            onClick={e => handleSelect(e, option)}
            className={classes.normal}
            rounded={false}
            fullWidth
          >
            {multiple && checkbox ? (
              <Checkbox
                checked={selectValue.indexOf(option.value) !== -1}
                component="span"
              />
            ) : null}
            <Text noMargin>{option.label}</Text>
          </Button>
        ))}
      </Popup>
    </Fragment>
  );
};

SelectOutlined.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any.isRequired,
      label: PropTypes.any
    })
  ).isRequired,
  value: PropTypes.any,
  extra: PropTypes.shape({
    start: PropTypes.element,
    end: PropTypes.element
  }),
  fullWidth: PropTypes.bool,
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  color: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  renderValue: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  noMargin: PropTypes.bool,
  multiple: PropTypes.bool,
  checkbox: PropTypes.bool,
  width: PropTypes.number
};

export default SelectOutlined;
