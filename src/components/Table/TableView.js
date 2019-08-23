/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import SortAscendingIcon from "mdi-react/SortAscendingIcon";
import SearchIcon from "mdi-react/SearchIcon";
import PageFirstIcon from "mdi-react/PageFirstIcon";
import PageLastIcon from "mdi-react/PageLastIcon";
import ChevronLeftIcon from "mdi-react/ChevronLeftIcon";
import ChevronRightIcon from "mdi-react/ChevronRightIcon";
import EditIcon from "mdi-react/EditIcon";
import CheckIcon from "mdi-react/CheckIcon";
import CloseIcon from "mdi-react/CloseIcon";
import DeleteIcon from "mdi-react/DeleteIcon";
import PlusCircleIcon from "mdi-react/PlusCircleIcon";
import TextInput from "../TextInput";
import Select from "../Select";
import IconButton from "../IconButton";
import Tooltip from "../Tooltip";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    display: "flex",
    flexDirection: "column"
  },
  header: {
    display: "flex",
    alignItems: "center",
    padding: 16
  },
  headerTitle: {
    fontSize: 21,
    letterSpacing: 0.5,
    fontWeight: 500,
    flex: 1
  },
  body: {
    overflowX: "auto"
  },
  tableHeadColumn: {
    display: "inline-flex",
    alignItems: "center",
    cursor: "pointer",
    "&:hover": {
      "& $tableHeadColumnIcon": {
        opacity: 1,
        visibility: "visible"
      },
      "& $tableHeadColumnLabel": {
        color: "black"
      }
    }
  },
  tableHeadColumnLabel: {
    fontWeight: 400,
    fontSize: 15,
    color: "gray"
  },
  tableHeadColumnIcon: {
    opacity: 0,
    visibility: "hidden",
    transform: "rotate(0deg)",
    transition:
      "opacity 0.2s ease-in-out, visibility 0.2s ease-in-out, transform 0.2s ease-in-out"
  },
  table: {
    borderSpacing: 0,
    borderCollapse: "collapse",
    width: "100%"
  },
  tableCell: {
    padding: "16px 40px 16px 16px",
    borderBottom: "1px solid #DDDDDD",
    textAlign: "left",
    fontSize: 14
  },
  tableActionCell: {
    padding: 4,
    textAlign: "center"
  },
  actionButton: {
    color: "rgba(0, 0, 0, 0.56)"
  },
  numeric: {
    textAlign: "right"
  },
  activeIcon: {
    opacity: 1,
    visibility: "visible"
  },
  activeColumn: {
    color: "black"
  },
  inactiveColumn: {
    color: "rgba(0, 0, 0, 0.4)",
    cursor: "default"
  },
  descending: {
    transform: "rotate(180deg)"
  },
  noData: {
    padding: "16px 40px 16px 16px",
    textAlign: "center",
    fontSize: 14
  },
  footer: {
    padding: 16,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  footerRowsText: {
    fontWeight: 400,
    marginRight: 12
  },
  footerRowsSelect: {
    minWidth: 50,
    minHeight: 30
  }
});

const TableView = props => {
  const {
    data,
    columns,
    title,
    disabledEmptyRows,
    onAdd,
    onUpdate,
    onDelete
  } = props;
  const dataWithId = data.slice();
  const classes = useStyles();
  const [tableData, setTableData] = useState([]);
  const [visibleData, setVisibleData] = useState(10);
  const [sortType, setSortType] = useState("");
  const [sortColumn, setSortColumn] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(0);
  const [activeColumn, setActiveColumn] = useState(null);
  const [actionType, setActionType] = useState(null);
  const [inputValue, setInputValue] = useState({});
  const [showAdd, setShowAdd] = useState(false);

  useEffect(() => {
    data.map((item, index) => {
      item.tableData = `table-data-${index}`;
      return dataWithId.push(item);
    });
  }, []);

  useEffect(() => {
    setTableData(
      dataWithId.slice(0 + visibleData * page, visibleData * (page + 1))
    );
  }, [visibleData, page]);

  const handleSort = (type, column) => {
    if (tableData.length > 0) {
      if (typeof tableData[0][column] === "number") {
        if (type === "descending") {
          setTableData(prevTableData =>
            prevTableData.slice().sort((a, b) => b[column] - a[column])
          );
        } else {
          setTableData(prevTableData =>
            prevTableData.slice().sort((a, b) => a[column] - b[column])
          );
        }
      } else {
        if (type === "descending") {
          setTableData(prevTableData =>
            prevTableData
              .slice()
              .sort((a, b) =>
                a[column].toUpperCase() < b[column].toUpperCase()
                  ? -1
                  : a[column].toUpperCase() > b[column].toUpperCase()
                  ? 1
                  : 0
              )
              .reverse()
          );
        } else {
          setTableData(prevTableData =>
            prevTableData
              .slice()
              .sort((a, b) =>
                a[column].toUpperCase() < b[column].toUpperCase()
                  ? -1
                  : a[column].toUpperCase() > b[column].toUpperCase()
                  ? 1
                  : 0
              )
          );
        }
      }
    }

    setSortType(type);
    setSortColumn(column);
  };

  const handleSearch = e => {
    const value = e.target.value;
    const regexp = new RegExp(
      value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
      "mi"
    );
    const filteredItems = dataWithId.filter(item => {
      let tempItem = { ...item };
      delete tempItem.tableData;
      return regexp.test(Object.values(tempItem).join(""));
    });
    setTableData(
      filteredItems.slice(0 + visibleData * page, visibleData * (page + 1))
    );
    setSearchValue(value);
  };

  const handleAction = (column, type) => {
    setActiveColumn(column);
    setActionType(type);
  };

  const handleSaveAction = (column = null) => {
    if (column) {
      const oldData = { ...column };
      delete oldData.tableData;

      switch (actionType) {
        case "edit":
          onUpdate(oldData, { ...oldData, ...inputValue });
          break;
        case "delete":
          onDelete(oldData);
          break;
        default:
          break;
      }

      return handleCancelAction();
    }

    onAdd(inputValue);
    return handleCancelAction();
  };

  const handleCancelAction = () => {
    setInputValue({});
    setActiveColumn(null);
    setActionType(null);
    setShowAdd(false);
  };

  const handleChangeText = (key, value) => {
    setInputValue({
      ...inputValue,
      [key]: value
    });
  };

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <h3 className={classes.headerTitle}>{title}</h3>
        <TextInput
          placeholder="Search"
          extra={{ start: <SearchIcon /> }}
          value={searchValue}
          onChange={handleSearch}
          noMargin
        />
        <Tooltip label="Add">
          <IconButton onClick={() => setShowAdd(prevShow => !prevShow)}>
            <PlusCircleIcon />
          </IconButton>
        </Tooltip>
      </div>
      <div className={classes.body}>
        <table className={classes.table}>
          <thead>
            <tr>
              <th className={`${classes.tableCell} ${classes.tableActionCell}`}>
                <div className={classes.tableHeadColumn}>
                  <h4 className={classes.tableHeadColumnLabel}>Actions</h4>
                </div>
              </th>
              {columns.map(column => (
                <th
                  key={column.key}
                  className={`${classes.tableCell}${
                    column.type === "numeric" ? ` ${classes.numeric}` : ""
                  }`}
                >
                  <div
                    className={classes.tableHeadColumn}
                    onClick={() => {
                      handleSort(
                        sortType === "ascending" ? "descending" : "ascending",
                        column.key
                      );
                    }}
                  >
                    {column.type === "numeric" ? (
                      <SortAscendingIcon
                        className={`${classes.tableHeadColumnIcon}${
                          column.key === sortColumn
                            ? ` ${classes.activeIcon}`
                            : ""
                        }${
                          (column.key !== sortColumn &&
                            sortType === "ascending") ||
                          (column.key === sortColumn &&
                            sortType === "descending")
                            ? ` ${classes.descending}`
                            : ""
                        }`}
                        style={{ marginRight: 16 }}
                      />
                    ) : null}
                    <h4
                      className={`${classes.tableHeadColumnLabel}${
                        column.key === sortColumn
                          ? ` ${classes.activeColumn}`
                          : ""
                      }`}
                    >
                      {column.label}
                    </h4>
                    {column.type === "numeric" ? null : (
                      <SortAscendingIcon
                        className={`${classes.tableHeadColumnIcon}${
                          column.key === sortColumn
                            ? ` ${classes.activeIcon}`
                            : ""
                        }${
                          (column.key !== sortColumn &&
                            sortType === "ascending") ||
                          (column.key === sortColumn &&
                            sortType === "descending")
                            ? ` ${classes.descending}`
                            : ""
                        }`}
                        style={{ marginLeft: 16 }}
                      />
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={row.tableData}>
                <td
                  className={`${classes.tableCell} ${classes.tableActionCell}`}
                  style={{ width: 96 }}
                >
                  <div style={{ display: "flex" }}>
                    <Tooltip
                      label={row.tableData === activeColumn ? "Save" : "Edit"}
                    >
                      <IconButton
                        onClick={() =>
                          row.tableData === activeColumn
                            ? handleSaveAction(row)
                            : handleAction(row.tableData, "edit")
                        }
                        className={classes.actionButton}
                        disable={
                          (activeColumn !== null &&
                            row.tableData !== activeColumn) ||
                          showAdd
                        }
                      >
                        {row.tableData === activeColumn ? (
                          <CheckIcon />
                        ) : (
                          <EditIcon />
                        )}
                      </IconButton>
                    </Tooltip>
                    <Tooltip
                      label={
                        row.tableData === activeColumn ? "Cancel" : "Delete"
                      }
                    >
                      <IconButton
                        onClick={() =>
                          row.tableData === activeColumn
                            ? handleCancelAction()
                            : handleAction(row.tableData, "delete")
                        }
                        className={classes.actionButton}
                        disable={
                          (activeColumn !== null &&
                            row.tableData !== activeColumn) ||
                          showAdd
                        }
                      >
                        {row.tableData === activeColumn ? (
                          <CloseIcon />
                        ) : (
                          <DeleteIcon />
                        )}
                      </IconButton>
                    </Tooltip>
                  </div>
                </td>
                {row.tableData === activeColumn ? (
                  actionType === "edit" ? (
                    columns.map(column => (
                      <td
                        key={`${row.tableData}${column.key}`}
                        className={`${classes.tableCell}${
                          column.type === "numeric" ? ` ${classes.numeric}` : ""
                        }`}
                      >
                        <TextInput
                          placeholder={column.label}
                          type={column.type === "numeric" ? "number" : "text"}
                          value={
                            inputValue[column.key]
                              ? inputValue[column.key].toString()
                              : inputValue[column.key] === ""
                              ? ""
                              : row[column.key].toString()
                          }
                          onChange={e =>
                            handleChangeText(
                              column.key,
                              column.type === "numeric"
                                ? parseInt(e.target.value)
                                : e.target.value
                            )
                          }
                          noMargin
                        />
                      </td>
                    ))
                  ) : (
                    <td className={classes.tableCell} colSpan={columns.length}>
                      Are you sure want to delete this data?
                    </td>
                  )
                ) : (
                  columns.map(column => (
                    <td
                      key={`${row.tableData}${column.key}`}
                      className={`${classes.tableCell}${
                        column.type === "numeric" ? ` ${classes.numeric}` : ""
                      }${
                        (activeColumn !== null &&
                          row.tableData !== activeColumn) ||
                        showAdd
                          ? ` ${classes.inactiveColumn}`
                          : ""
                      }`}
                    >
                      {row[column.key]}
                    </td>
                  ))
                )}
              </tr>
            ))}
            {showAdd ? (
              <tr>
                <td
                  className={`${classes.tableCell} ${classes.tableActionCell}`}
                  style={{ width: 96 }}
                >
                  <div style={{ display: "flex" }}>
                    <Tooltip label="Save">
                      <IconButton
                        onClick={() => handleSaveAction()}
                        className={classes.actionButton}
                      >
                        <CheckIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip label="Cancel">
                      <IconButton
                        onClick={() => handleCancelAction()}
                        className={classes.actionButton}
                      >
                        <CloseIcon />
                      </IconButton>
                    </Tooltip>
                  </div>
                </td>
                {columns.map(column => (
                  <td
                    key={`new${column.key}`}
                    className={`${classes.tableCell}${
                      column.type === "numeric" ? ` ${classes.numeric}` : ""
                    }`}
                  >
                    <TextInput
                      placeholder={column.label}
                      type={column.type === "numeric" ? "number" : "text"}
                      value={
                        inputValue[column.key] ? inputValue[column.key] : ""
                      }
                      onChange={e =>
                        handleChangeText(column.key, e.target.value)
                      }
                      noMargin
                    />
                  </td>
                ))}
              </tr>
            ) : null}
            {tableData.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length + 1}
                  rowSpan={
                    disabledEmptyRows ? tableData.length + 1 : visibleData + 1
                  }
                  className={classes.noData}
                >
                  No data to display
                </td>
              </tr>
            ) : null}
            {!disabledEmptyRows && tableData.length < visibleData
              ? [...Array(visibleData - tableData.length)].map(
                  (value, index) => (
                    <tr
                      key={`empty${index}`}
                      style={{
                        height: 56.8
                      }}
                    />
                  )
                )
              : null}
          </tbody>
        </table>
      </div>
      <div className={classes.footer}>
        <h5 className={classes.footerRowsText}>Rows</h5>
        <Select
          value={visibleData}
          onChange={e => setVisibleData(parseInt(e.target.value))}
          className={classes.footerRowsSelect}
          noMargin
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </Select>
        <Tooltip label="First Page">
          <IconButton onClick={() => setPage(0)} disable={page === 0}>
            <PageFirstIcon />
          </IconButton>
        </Tooltip>
        <Tooltip label="Previous Page">
          <IconButton
            onClick={() => setPage(prevPage => prevPage - 1)}
            disable={page === 0}
          >
            <ChevronLeftIcon />
          </IconButton>
        </Tooltip>
        <h5 className={classes.footerRowsText}>
          {dataWithId.length > visibleData * (page + 1)
            ? `${visibleData * page + 1}-${visibleData} of ${dataWithId.length}`
            : `${visibleData * page + 1}-${dataWithId.length} of ${
                dataWithId.length
              }`}
        </h5>
        <Tooltip label="Next Page">
          <IconButton
            onClick={() => setPage(prevPage => prevPage + 1)}
            disable={page === Math.floor(dataWithId.length / visibleData)}
          >
            <ChevronRightIcon />
          </IconButton>
        </Tooltip>
        <Tooltip label="Last Page">
          <IconButton
            onClick={() => setPage(Math.floor(dataWithId.length / visibleData))}
            disable={page === Math.floor(dataWithId.length / visibleData)}
          >
            <PageLastIcon />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
};

TableView.defaultProps = {
  disabledEmptyRows: false
};

TableView.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
      type: PropTypes.oneOf(["numeric"])
    })
  ).isRequired,
  disabledEmptyRows: PropTypes.bool,
  title: PropTypes.string,
  onAdd: PropTypes.func,
  onUpdate: PropTypes.func,
  onDelete: PropTypes.func
};

export default TableView;
