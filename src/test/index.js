import React from "react";
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
    </div>
  );
};

export default Test;
