import React from "react";
<<<<<<< HEAD
import Paper from "../components/Paper";
import TextInput from "../components/TextInput";
import Icon from "../components/Icon";
import { createUseStyles } from "react-jss";
import { globalStyles } from "../utils/styles";

const useStyles = createUseStyles({
  tableHead: {
    display: "flex",
    padding: 16
  }
});

const useGlobalStyles = createUseStyles(globalStyles);

const Test = props => {
  const classes = useStyles();
  const styles = useGlobalStyles();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: styles.bgBabyBlue
      }}
    >
      <Icon color="pink">shield-account</Icon>
      {/* <Paper style={{ width: 876, borderRadius: 4 }}>
        <div className={classes.tableHead}>
          <h1 style={{ flex: 1 }}>Ini Table Head</h1>
          <TextInput
            placeholder="Search"
            label="Search"
            extra={{ start: <SearchIcon />, end }}
          />
        </div>
      </Paper> */}
=======
import AppBar from "../components/AppBar";
import { globalStyles } from "../utils/styles";
import { createUseStyles } from "react-jss";

const useGlobalStyles = createUseStyles(globalStyles);

const Test = props => {
  const styles = useGlobalStyles();
  return (
    <div>
      <AppBar title="Title" profile="Profile" showMenu />
>>>>>>> 90c30db1588ce1fd009e5e9c242b9f8d6404021b
    </div>
  );
};

export default Test;
