import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  "@global": {
    "*": {
      margin: 0,
      padding: 0,
      border: "none",
      fontFamily: "'Roboto', sans-serif",
      listStyle: "none",
      textDecoration: "none"
    },
    body: {
      backgroundColor: "#F5F5F5"
    }
  }
});

const CssBaseline = () => {
  useStyles();
  return null;
};

export default CssBaseline;
