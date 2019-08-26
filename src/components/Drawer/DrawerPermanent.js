import React from "react";
// import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";
// import { Link } from "react-router-dom";
import { breakpoints } from "../../utils/styles";

const width = 240;

const useStyles = createUseStyles({
  permanent: {
    width,
    minHeight: "100vh",
    display: "flex",
    outline: 0,
    overflowY: "auto",
    flexDirection: "column",
    boxSizing: "inherit",
    // transform: 'none',
    // transition: "transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms",
    // borderRight: "1px solid rgba(190,190,190, 0.9)",
    zIndex: 1200,
    background: "#fcb813",
    marginRight: 240,
    left: 0,
    left: 0,
    right: "auto",
    position: "fixed",
    [breakpoints.down("sm")]: {
      display: "none"
    }
  }
});

const DrawerPermanent = props => {
  const className = useStyles();
  const { children } = props;
  return <div className={className.permanent}>{children}</div>;
};

export default DrawerPermanent;
