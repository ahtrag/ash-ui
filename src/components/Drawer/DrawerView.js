import React from "react";
import PropTypes from "prop-types";
import DrawerDefault from "./DrawerDefault";
import DrawerTemporary from "./DrawerTemporary";

const DrawerView = props => {
  const { variant, ...drawerProps } = props;

  switch (variant) {
    case "default":
      return <DrawerDefault {...drawerProps} />;
    case "temporary":
      return <DrawerTemporary {...drawerProps} />;
    default:
      return <DrawerTemporary {...drawerProps} />;
  }
};

DrawerView.propTypes = {
  /**
   * Override default styles with className
   */
  className: PropTypes.string,

  /**
   * Override default styles with style
   */
  style: PropTypes.object,

  /**
   * Event handler onClick at back button
   */
  onClose: PropTypes.func,

  /**
   * MenuList for navigation require array of object and className of string :
   * 1. icon    : element of icon
   * 2. label   : string of navigation label
   * 3. to      : string of route
   * 4. divider : boolean of divider
   */
  menuList: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.object),
    className: PropTypes.string
  })
};

export default DrawerView;
