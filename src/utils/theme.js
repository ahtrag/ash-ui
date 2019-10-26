import { createUseStyles } from "react-jss";

const normalize = createUseStyles({
  "@global": {
    "*": {
      margin: 0,
      padding: 0,
      border: "none",
      fontFamily: "'Roboto', sans-serif",
      listStyle: "none",
      textDecoration: "none"
    }
  }
});

const color = {
  primary: "#fcb813",
  secondary: "#117b9d",
  tertiary: "#4c1dac",
  quaternary: "#cb9000"
};

const viewport = {
  xs: {
    minWidth: "0px",
    maxWidth: "599px"
  },
  sm: {
    minWidth: "600px",
    maxWidth: "959px"
  },
  md: {
    minWidth: "960px",
    maxWidth: "1279px"
  },
  lg: {
    minWidth: "1280px",
    maxWidth: "1919px"
  },
  xl: {
    minWidth: "1920px"
  }
};

const breakpoints = {
  up: key => `@media (min-width: ${viewport[key].minWidth})`,
  down: key => {
    if (key === "xl") {
      return "@media (min-width: 0px)";
    } else {
      return `@media (max-width: ${viewport[key].maxWidth})`;
    }
  },
  only: key => {
    if (key === "xl") {
      return `@media (min-width: ${viewport[key].minWidth})`;
    } else {
      return `@media (min-width: ${viewport[key].minWidth}) 
        and (max-width: ${viewport[key].maxWidth})`;
    }
  },
  between: (start, end) => {
    if (end === "xl") {
      return `@media (min-width: ${viewport[start].minWidth})`;
    } else {
      return `@media (min-width: ${viewport[start].minWidth}) 
        and @media (max-width: ${viewport[end].minWidth})`;
    }
  }
};

export { normalize, color, breakpoints };
