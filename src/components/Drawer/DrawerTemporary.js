import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Divider from "../Divider";
import Button from "../Button";
import Text from "../Text";
import { createUseStyles } from "react-jss";
import { renderClassName, renderStyle } from "../../utils/constants";
import { CSSTransition } from "react-transition-group";

const useStyles = createUseStyles({
  drawerWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 100
  },
  drawerEnterActive: {
    "& $overlay": {
      opacity: 1,
      visibility: "visible"
    },
    "& $drawer": {
      transform: "translateX(0)"
    }
  },
  drawerEnterDone: {
    "& $overlay": {
      opacity: 1,
      visibility: "visible"
    },
    "& $drawer": {
      transform: "translateX(0)"
    }
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    opacity: 0,
    visibility: "hidden",
    transition: "opacity 0.3s ease-in-out, visibility 0.3s ease-in-out"
  },
  drawer: {
    height: "100%",
    width: props => props.width,
    transform: props => `translateX(${-props.width}px)`,
    transition: "transform 0.3s ease-in-out",
    backgroundColor: "#FFFFFF",
    position: "relative",
    boxShadow: "2px 0px 7px -2px rgba(0, 0, 0, 0.4)",
    overflowY: "auto"
  },
  drawerNavLink: {
    padding: 12,
    justifyContent: "flex-start"
  },
  drawerNavLinkText: {
    paddingLeft: 8
  },
  drawerDivider: {
    backgroundColor: "rgba(0, 0, 0, 0.22)"
  }
});

const DrawerTemporary = props => {
  const { menuList, onClose, show, className, style, ...otherProps } = props;
  const classes = useStyles(otherProps);
  return (
    <CSSTransition
      in={show}
      timeout={300}
      unmountOnExit
      classNames={{
        enterDone: classes.drawerEnterDone,
        enterActive: classes.drawerEnterActive
      }}
    >
      <div className={classes.drawerWrapper}>
        <div className={renderClassName(classes.overlay)} onClick={onClose} />

        <div
          className={renderClassName(
            classes.drawer,
            className && className.root
          )}
          style={renderStyle(style && style.root)}
        >
          {menuList ? (
            <ul>
              {menuList.map(nav => (
                <Fragment key={nav.label}>
                  <li
                    className={renderClassName(className && className.listItem)}
                    style={renderStyle(style && style.listItem)}
                  >
                    <Button
                      component={nav.to ? "a" : "button"}
                      href={nav.to}
                      className={renderClassName(
                        classes.drawerNavLink,
                        className && className.link
                      )}
                      style={renderStyle(style && style.link)}
                      rounded={false}
                    >
                      {nav.icon}
                      <Text
                        variant="paragraph"
                        className={classes.drawerNavLinkText}
                        noMargin
                      >
                        {nav.label}
                      </Text>
                    </Button>
                  </li>
                  {nav.divider ? (
                    <Divider className={classes.drawerDivider} />
                  ) : null}
                </Fragment>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </CSSTransition>
  );
};

DrawerTemporary.defaultProps = {
  width: 200
};

DrawerTemporary.propTypes = {
  /**
   * Toggle Drawer open
   */
  show: PropTypes.bool.isRequired,

  /**
   * Width of the Drawer
   */
  width: PropTypes.number,

  /**
   * Override default styles with className
   */
  className: PropTypes.shape({
    root: PropTypes.string,
    listItem: PropTypes.string,
    link: PropTypes.string
  }),

  /**
   * Override default styles with style
   */
  style: PropTypes.shape({
    root: PropTypes.object,
    listItem: PropTypes.object,
    link: PropTypes.object
  }),

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
  menuList: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.element,
      to: PropTypes.string,
      divider: PropTypes.bool
    })
  ).isRequired
};

export default DrawerTemporary;
