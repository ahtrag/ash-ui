/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import Menu from "../Menu";
import Text from "../Text";
import MenuDownIcon from "mdi-react/MenuDownIcon";
import { createUseStyles } from "react-jss";
import { renderClassName } from "../../utils/constants";

const useStyles = createUseStyles({
  selectWrapper: {
    marginTop: 16,
    marginBottom: 4,
    minWidth: props => (props.multiple ? "auto" : 120),
    width: props =>
      props.multiple ? (props.width ? props.width : 120) : "auto",
    display: "inline-flex",
    flexDirection: "column",
    position: "relative"
  },
  inputLabel: {
    position: "absolute",
    transform: "scale(1) translate(8px, 10px)",
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
    minHeight: 40,
    width: "100%",
    boxSizing: "border-box",
    border: 0,
    "&:focus": {
      outline: "none"
    }
  },
  selectExtraLeft: {
    paddingLeft: 24
  },
  selectExtraRight: {
    paddingRight: 24
  },
  extra: {
    position: "absolute",
    display: "flex",
    zIndex: -1
  },
  extraLeft: {
    left: 0
  },
  extraRight: {
    right: 0
  },
  fullWidth: {
    width: "100%"
  },
  noMargin: {
    margin: 0
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
    onChange,
    renderValue,
    className,
    style,
    noMargin,
    multiple,
    width
  } = props;
  const classes = useStyles({ color, multiple, width });
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

  const handleSelect = e => {
    let tempSelectValue = e.currentTarget.value;
    let tempSelectLabel = e.label;

    delete e.label;

    if (multiple) {
      const tempValue = [...selectValue];
      tempValue.push(tempSelectValue);
      setSelectValue(value);

      const tempLabel = [...selectLabel];
      tempLabel.push(e.label);
      setSelectLabel(tempLabel);

      tempSelectValue = [...tempValue];
      tempSelectLabel = [...tempLabel];
    } else {
      setSelectValue(tempSelectValue);
      setSelectLabel(tempSelectLabel);
    }

    const tempEvent = Object.assign({}, e, {
      currentTarget: { value: tempSelectValue, label: tempSelectLabel },
      target: { value: tempSelectValue, label: tempSelectLabel }
    });
    onChange(tempEvent);
  };

  useEffect(() => {
    if (multiple) {
      const isExists = selectValue.find(item => item === value);

      if (!isExists) {
        const index = options.findIndex(option => option.value === value);
        setSelectValue([...selectValue].push(options[index].value));
        setSelectLabel([...selectLabel].push(options[index].label));
      }
    } else {
      if (selectValue !== value) {
        const index = options.findIndex(option => option.value === value);
        setSelectValue(options[index].value);
        setSelectLabel(options[index].label);
      }
    }
  }, [value, multiple, options]);

  return (
    <Fragment>
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
            <Text variant="paragraph" noWrap noMargin>
              {multiple ? renderValue(selectLabel) : selectLabel}
            </Text>
          </div>
          <input type="hidden" value={value} name={name} />

          <div className={renderClassName(classes.extra, classes.extraRight)}>
            {extra && extra.end ? extra.end : <MenuDownIcon />}
          </div>
        </div>
      </div>
      <Menu
        items={options}
        target={target}
        onClose={handleClose}
        onSelect={handleSelect}
        multiple={multiple}
      />
    </Fragment>
  );
};

SelectDefault.propTypes = {
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
  color: PropTypes.string,
  onChange: PropTypes.func,
  renderValue: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  noMargin: PropTypes.bool,
  multiple: PropTypes.bool,
  width: PropTypes.number
};

export default SelectDefault;
