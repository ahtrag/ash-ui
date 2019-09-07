import React from "react";
import PropTypes from "prop-types";
import Popup from "../Popup";
import Button from "../Button";
import Text from "../Text";
import { createUseStyles } from "react-jss";
import { renderClassName, renderStyle } from "../../utils/constants";

const useStyles = createUseStyles({
  normal: {
    justifyContent: "flex-start"
  },
  reverse: {
    flexDirection: "row-reverse",
    justifyContent: "flex-end"
  },
  leftIcon: {
    marginLeft: 16
  },
  rightIcon: {
    marginRight: 16
  },
  menuText: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  }
});

const MenuView = props => {
  const {
    items,
    target,
    position,
    transformOrigin,
    onClose,
    onSelect,
    className,
    style,
    classNameOptions,
    styleOptions,
    multiple
  } = props;
  const classes = useStyles();

  const handleClick = (e, item) => {
    if (onSelect) {
      onSelect({ ...e, label: item.label });
    }

    if (!multiple) {
      onClose();
    }
  };

  return (
    <Popup
      target={target}
      position={position}
      transformOrigin={transformOrigin}
      onClose={onClose}
      className={renderClassName(classNameOptions && classNameOptions.paper)}
      style={renderStyle(styleOptions && styleOptions.paper)}
    >
      {items.map((item, index) => (
        <Button
          key={`menu-${item.label}-${index}`}
          onClick={e => handleClick(e, item)}
          component={item.href ? "a" : "button"}
          href={item.href}
          value={item.value}
          rounded={false}
          className={renderClassName(
            classes.normal,
            item.icon && item.iconPosition === "right" && classes.reverse,
            className
          )}
          style={style}
          fullWidth
        >
          {item.icon}
          <div
            className={renderClassName(
              classes.menuText,
              item.icon && item.iconPosition === "right"
                ? classes.rightIcon
                : item.icon && classes.leftIcon
            )}
          >
            <Text noMargin>{item.label}</Text>
            <Text variant="paragraph" color="gray" noMargin>
              {item.helper}
            </Text>
          </div>
        </Button>
      ))}
    </Popup>
  );
};

MenuView.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.element,
      iconPosition: PropTypes.oneOf(["left", "right"]),
      label: PropTypes.string,
      helper: PropTypes.string,
      href: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })
  ).isRequired,
  target: PropTypes.object.isRequired,
  position: PropTypes.shape({
    vertical: PropTypes.oneOf(["top", "center", "bottom"]),
    horizontal: PropTypes.oneOf(["left", "center", "right"])
  }),
  transformOrigin: PropTypes.shape({
    vertical: PropTypes.oneOf(["top", "center", "bottom"]),
    horizontal: PropTypes.oneOf(["left", "center", "right"])
  }),
  onClose: PropTypes.func,
  onSelect: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  classNameOptions: PropTypes.shape({
    paper: PropTypes.string
  }),
  styleOptions: PropTypes.shape({
    paper: PropTypes.object
  }),
  multiple: PropTypes.bool
};

export default MenuView;
