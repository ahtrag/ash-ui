/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect } from "react";
import { createUseStyles } from "react-jss";
import { offset } from "../../utils/constants";

const useStyles = createUseStyles({
  "@keyframes ripple": {
    "100%": {
      opacity: 0,
      transform: "scale(2)"
    }
  },
  root: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    "&:after": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      height: "100%",
      width: "100%",
      backgroundColor: "transparent",
      transition: "background-color 0.3s ease-in-out",
      opacity: 0.2
    },
    "&:hover": {
      "&:after": {
        backgroundColor: "currentColor"
      }
    }
  },
  ripple: {
    position: "absolute",
    transform: "scale(0)",
    animation: "$ripple 0.8s",
    "&:after": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      height: "100%",
      width: "100%",
      borderRadius: "50%",
      backgroundColor: "currentColor",
      opacity: 0.4
    }
  }
});

const RippleView = props => {
  const classes = useStyles();
  const rippleRootRef = useRef(null);
  const [rippleChild, setRippleChild] = useState([]);
  const rippleChildRef = useRef(rippleChild);
  let i = 0;

  const createRipple = e => {
    const { height, width, top, left } = offset(
      rippleRootRef.current.offsetParent
    );

    const posX = e.clientX - left;
    const posY = e.clientY - top;
    const size = width <= height ? height : width;

    const ripple = (
      <span
        key={`ripple-${i++}`}
        className={classes.ripple}
        style={{
          width: size,
          height: size,
          top: posY - size * 0.5,
          left: posX - size * 0.5
        }}
        onAnimationEnd={e => {
          const index = Array.from(e.target.parentNode.children).indexOf(
            e.target
          );
          const tempArray = [...rippleChildRef.current];
          tempArray.splice(index, 1);
          rippleChildRef.current = tempArray;
          setRippleChild(tempArray);
        }}
      ></span>
    );
    const tempArray = [...rippleChildRef.current];
    tempArray.push(ripple);
    rippleChildRef.current = tempArray;
    setRippleChild(tempArray);
  };

  useEffect(() => {
    if (rippleRootRef.current) {
      const parent = rippleRootRef.current.offsetParent;
      parent.addEventListener("mousedown", createRipple);

      return () => parent.removeEventListener("mousedown", createRipple);
    }
  }, [rippleRootRef]);

  return (
    <div ref={rippleRootRef} className={classes.root}>
      {rippleChild}
    </div>
  );
};

RippleView.propTypes = {};

export default RippleView;
