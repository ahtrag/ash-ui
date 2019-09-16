import React, { useState } from "react";
import PropTypes from "prop-types";
import TextInput from "../TextInput/TextInputView";
import Text from "../Text/TextView";
import IconButton from "../IconButton/IconButtonView";
import SearchIcon from "mdi-react/SearchIcon";
import PlusCircleIcon from "mdi-react/PlusCircleIcon";
import { createUseStyles } from "react-jss";
import { renderClassName, renderStyle } from "../../utils/constants";

const useStyles = createUseStyles({
  header: {
    display: "flex",
    alignItems: "center",
    padding: 16
  },
  headerTitle: {
    flex: 1
  },
  actionButton: {
    color: "rgba(0, 0, 0, 0.56)"
  }
});

const TableHeader = props => {
  const {
    title,
    classNameOptions,
    styleOptions,
    search,
    disableAdd,
    showAdd,
    onShowAdd,
    onSearch
  } = props;
  const classes = useStyles();
  const [searchValue, setSearchValue] = useState("");

  const handleChange = e => {
    const { value } = e.target;
    setSearchValue(value);
    onSearch(value);
  };

  return (
    <div
      className={renderClassName(
        classes.header,
        classNameOptions && classNameOptions.root
      )}
      style={renderStyle(styleOptions && styleOptions.root)}
    >
      {typeof title === "string" || !title ? (
        <Text
          variant="h4"
          className={renderClassName(
            classes.headerTitle,
            classNameOptions && classNameOptions.title
          )}
          noMargin
        >
          {title}
        </Text>
      ) : (
        title
      )}
      {search ? (
        <TextInput
          placeholder="Search"
          extra={{ start: <SearchIcon /> }}
          value={searchValue}
          onChange={handleChange}
          style={renderStyle(styleOptions && styleOptions.search)}
          className={renderClassName(
            classNameOptions && classNameOptions.search
          )}
          noMargin
        />
      ) : null}
      {showAdd ? (
        // <Tooltip label="Add">
        <IconButton
          onClick={() => onShowAdd("new")}
          disable={disableAdd}
          className={renderClassName(
            classes.actionButton,
            classNameOptions && classNameOptions.action
          )}
          style={renderStyle(styleOptions && styleOptions.action)}
        >
          <PlusCircleIcon />
        </IconButton>
      ) : // </Tooltip>
      null}
    </div>
  );
};

TableHeader.defaultProps = {
  search: true,
  disableAdd: false,
  showAdd: false
};

TableHeader.propTypes = {
  title: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  classNameOptions: PropTypes.shape({
    root: PropTypes.string,
    title: PropTypes.string,
    search: PropTypes.string,
    action: PropTypes.string
  }),
  styleOptions: PropTypes.shape({
    root: PropTypes.object,
    title: PropTypes.object,
    search: PropTypes.object,
    action: PropTypes.object
  }),
  search: PropTypes.bool,
  disableAdd: PropTypes.bool,
  showAdd: PropTypes.bool,
  onShowAdd: PropTypes.func,
  onSearch: PropTypes.func
};

export default TableHeader;
