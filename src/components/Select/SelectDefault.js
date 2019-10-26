/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useState, useEffect } from "react";
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
    alignItems: "center",
    borderBottom: "1px solid #8D8A8A",
    transition: "border-bottom 0.3s ease-in-out"
  },
  focusInputWrapper: {
    borderBottom: props => `2px solid ${props.color}`
  },
  select: {
    color: "currentColor",
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
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
    zIndex: 1
  },
  extraLeft: {
    left: 0
  },
  extraRight: {
    right: 0
  },
  noMargin: {
    margin: 0
  },
  normal: {
    justifyContent: "flex-start",
    textAlign: "left"
  },
  selectedMenu: {
    "&:after": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      height: "100%",
      width: "100%",
      backgroundColor: "currentColor",
      opacity: 0.2
    }
  },
  selectedText: {
    fontWeight: 500
  }
});

const SelectDefault = props => {
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
  const [selectValue, setSelectValue] = useState(multiple ? [] : "");
  const [selectLabel, setSelectLabel] = useState(multiple ? [] : "");

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
                  ? renderValue(selectValue)
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
            className={renderClassName(
              classes.normal,
              multiple
                ? selectValue.indexOf(option.value) !== -1 &&
                    classes.selectedMenu
                : selectValue === option.value && classes.selectedMenu
            )}
            rounded={false}
            fullWidth
          >
            {multiple && checkbox ? (
              <Checkbox
                checked={selectValue.indexOf(option.value) !== -1}
                component="span"
              />
            ) : null}
            <Text
              className={renderClassName(
                multiple
                  ? selectValue.indexOf(option.value) !== -1 &&
                      classes.selectedText
                  : selectValue === option.value && classes.selectedText
              )}
              noMargin
            >
              {option.label}
            </Text>
          </Button>
        ))}
      </Popup>
    </Fragment>
  );
};

SelectDefault.propTypes = {
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

export default SelectDefault;
