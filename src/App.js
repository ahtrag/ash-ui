import React, { useState } from "react";
import PropTypes from "prop-types";
import Select from "./components/Select";
import TextInput from "./components/TextInput";
import { createUseStyles } from "react-jss";
import { globalStyles } from "./utils/styles";

const useStyles = createUseStyles({
  "@global": {
    body: {
      backgroundColor: "gainsboro"
    }
  }
});

const useGlobalStyles = createUseStyles(globalStyles);

const App = props => {
  const [select, setSelect] = useState("game");
  const classes = useStyles();
  const styles = useGlobalStyles();

  return (
    <div>
      <Select
        value={select}
        onChange={e => setSelect(e.target.value)}
        fullWidth
      >
        <option value="">None</option>
        <option value="game">Game</option>
        <option value="movie">Movie</option>
      </Select>

      <TextInput placeholder="Name" label="Name" id="name" />
    </div>
  );
};

App.propTypes = {};

export default App;
