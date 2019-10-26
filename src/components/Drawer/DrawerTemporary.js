import React, { Fragment, useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import Divider from "../Divider";
import Button from "../Button";
import Text from "../Text";
import { createUseStyles } from "react-jss";
import { renderClassName, renderStyle } from "../../utils/constants";
import { CSSTransition } from "react-transition-group";
import { color } from "../../utils/theme";

const useStyles = createUseStyles({
  drawerWrapper: {
    position: "fixed",
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
  activeNavLocator: {
    position: "absolute",
    width: 3,
    left: 0,
    backgroundColor: color.primary,
    transition: "top 0.3s ease-in-out, height 0.3s ease-in-out"
  },
  drawerTopListItem: {
    height: 52,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  drawerNavLink: {
    padding: 12,
    justifyContent: "flex-start"
  },
  drawerNavIcon: {
    marginRight: 24
  },
  drawerDivider: {
    backgroundColor: "rgba(0, 0, 0, 0.22)",
    height: 0.8
  },
  activeNav: {
    color: color.primary
  },
  inactiveNav: {
    color: "rgba(0, 0, 0, 0.56)"
  }
});

const DrawerTemporary = props => {
  const {
    pathname,
    menuList,
    onClose,
    show,
    classNameOptions,
    styleOptions,
    ...otherProps
  } = props;
  const classes = useStyles({ ...otherProps });
  const [elementOffset, setElementOffset] = useState({
    top: 0,
    height: 0
  });
  const navRef = useRef(null);

  useEffect(() => {
    if (navRef.current && pathname) {
      setElementOffset({
        top: navRef.current.offsetTop,
        height: navRef.current.offsetHeight
      });
    }
  }, [navRef, pathname]);

  useEffect(() => {
    document.getElementsByTagName("body")[0].style.overflow = show
      ? "hidden"
      : "";
  }, [show]);

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
            classNameOptions && classNameOptions.root
          )}
          style={renderStyle(styleOptions && styleOptions.root)}
        >
          {pathname ? (
            <div
              className={classes.activeNavLocator}
              style={{ top: elementOffset.top, height: elementOffset.height }}
            />
          ) : null}
          {menuList ? (
            <ul>
              <li>
                <div className={classes.drawerTopListItem}>
                  <Text variant="title" noMargin>
                    Navigation
                  </Text>
                </div>
              </li>
              <Divider className={classes.drawerDivider} />
              {menuList.map((nav, index) => (
                <Fragment key={`nav-${nav.label}-${index}`}>
                  <li
                    className={renderClassName(
                      classNameOptions && classNameOptions.listItem
                    )}
                    style={renderStyle(styleOptions && styleOptions.listItem)}
                    ref={nav.to === pathname ? navRef : null}
                  >
                    <Button
                      component={nav.to ? "a" : "button"}
                      href={nav.to}
                      className={renderClassName(
                        classes.drawerNavLink,
                        nav.to === pathname
                          ? classes.activeNav
                          : classes.inactiveNav,
                        classNameOptions && classNameOptions.link
                      )}
                      style={renderStyle(styleOptions && styleOptions.link)}
                      rounded={false}
                    >
                      <div
                        className={renderClassName(
                          classes.drawerNavIcon,
                          classNameOptions && classNameOptions.icon
                        )}
                        style={renderStyle(styleOptions && styleOptions.icon)}
                      >
                        {nav.icon}
                      </div>
                      <Text variant="paragraph" noMargin>
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
  width: 240
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
   * Pathname from the router props
   */
  pathname: PropTypes.string,

  /**
   * Override default styles with className
   */
  classNameOptions: PropTypes.shape({
    root: PropTypes.string,
    listItem: PropTypes.string,
    link: PropTypes.string,
    icon: PropTypes.string
  }),

  /**
   * Override default styles with style
   */
  styleOptions: PropTypes.shape({
    root: PropTypes.object,
    listItem: PropTypes.object,
    link: PropTypes.object,
    icon: PropTypes.object
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
