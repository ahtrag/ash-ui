import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import { breakpoints } from "../../utils/styles";
import { renderClassName } from "../../utils/constants";
import { CSSTransition } from "react-transition-group";
import Divider from "../Divider";

const width = 240;

const useStyles = createUseStyles({
  "@global": {
    "*": {
      margin: 0,
      padding: 0,
      border: 0,
      textDecoration: "none",
      fontFamily: "'Roboto', sans-serif"
    }
  },
  [breakpoints.down("xs")]: {
    "@global": {
      html: {
        fontSize: 12
      }
    }
  },
  root: {
    flex: 1
  },
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
    width,
    transform: "translateX(-175px)",
    transition: "transform 0.3s ease-in-out",
    backgroundColor: "#FFFFFF",
    position: "relative",
    boxShadow: "2px 0px 7px -2px rgba(0, 0, 0, 0.4)",
    overflowY: "auto"
  },
  drawerNav: {
    display: "flex",
    alignItems: "center",
    padding: 12
  },
  drawerNavLink: {
    marginLeft: 8,
    color: "#000000",
    fontSize: "1.1rem"
  },
  drawerDivider: {
    backgroundColor: "rgba(0, 0, 0, 0.22)"
  }
});

const DrawerTemporary = props => {
  const classes = useStyles();
  const { menuList, onClose, isOpen } = props;
  return (
    <div>
      <CSSTransition
        in={isOpen}
        timeout={300}
        unmountOnExit
        classNames={{
          enterDone: classes.drawerEnterDone,
          enterActive: classes.drawerEnterActive
        }}
      >
        <div className={classes.drawerWrapper}>
          <div
            className={renderClassName(classes.overlay)}
            onClick={e => {
              Boolean(onClose) && onClose(e);
            }}
          />

          <div className={classes.drawer}>
            {menuList ? (
              <ul>
                {menuList.data.map(nav => (
                  <Fragment key={nav.label}>
                    <li
                      className={renderClassName(
                        classes.drawerNav,
                        menuList.className
                      )}
                    >
                      {nav.icon}
                      <Link to={nav.url} className={classes.drawerNavLink}>
                        {nav.label}
                      </Link>
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
    </div>
  );
};

DrawerTemporary.propTypes = {
  /**
   * Event handler onClick overlay
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

export default DrawerTemporary;
