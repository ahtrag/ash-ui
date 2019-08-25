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
// import Tooltip from "../Tooltip";
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
    textAlign: "center",
    width: 48
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
    className,
    style,
    disableEmptyRows,
    disableSearch,
    disableSort,
    disablePagination,
    defaultSort,
    editable
  } = props;
  const classes = useStyles();
  const [tableData, setTableData] = useState([]);
  const [dataWithId, setDataWithId] = useState([]);
  const [visibleData, setVisibleData] = useState(10);
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(0);
  const [activeColumn, setActiveColumn] = useState(null);
  const [actionType, setActionType] = useState(null);
  const [inputValue, setInputValue] = useState({});
  const [showAdd, setShowAdd] = useState(false);
  const [sortType, setSortType] = useState("");
  const [sortColumn, setSortColumn] = useState(null);

  useEffect(() => {
    const tempData = JSON.parse(JSON.stringify(data));

    tempData.map((item, index) => {
      item.tableData = `table-data-${index}`;
      return columns.map(column =>
        column.type === "select"
          ? (item[column.key] = column.option[item[column.key]])
          : null
      );
    });
    setDataWithId(JSON.parse(JSON.stringify(tempData)));
    setTableData(JSON.parse(JSON.stringify(tempData)));
    if (
      defaultSort &&
      (defaultSort.type === "ascending" || defaultSort.type === "descending") &&
      tempData[0][defaultSort.column]
    ) {
      setSortType(defaultSort.type);
      setSortColumn(defaultSort.column);
    }
  }, [data]);

  useEffect(() => {
    if (dataWithId.length > 0) {
      const regexp = new RegExp(
        searchValue.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
        "mi"
      );
      const filteredItems = dataWithId.filter(item => {
        let tempItem = { ...item };
        delete tempItem.tableData;
        return regexp.test(Object.values(tempItem).join(""));
      });
      setTableData(JSON.parse(JSON.stringify(filteredItems)));
    }
  }, [searchValue]);

  useEffect(() => {
    if (tableData.length > 0 && sortType && sortColumn) {
      if (typeof tableData[0][sortColumn] === "number") {
        if (sortType === "descending") {
          setTableData(prevTableData =>
            JSON.parse(JSON.stringify(prevTableData)).sort(
              (a, b) => b[sortColumn] - a[sortColumn]
            )
          );
        } else {
          setTableData(prevTableData =>
            JSON.parse(JSON.stringify(prevTableData)).sort(
              (a, b) => a[sortColumn] - b[sortColumn]
            )
          );
        }
      } else {
        if (sortType === "descending") {
          setTableData(prevTableData =>
            JSON.parse(JSON.stringify(prevTableData))
              .sort((a, b) =>
                a[sortColumn].toUpperCase() < b[sortColumn].toUpperCase()
                  ? -1
                  : a[sortColumn].toUpperCase() > b[sortColumn].toUpperCase()
                  ? 1
                  : 0
              )
              .reverse()
          );
        } else {
          setTableData(prevTableData =>
            JSON.parse(JSON.stringify(prevTableData)).sort((a, b) =>
              a[sortColumn].toUpperCase() < b[sortColumn].toUpperCase()
                ? -1
                : a[sortColumn].toUpperCase() > b[sortColumn].toUpperCase()
                ? 1
                : 0
            )
          );
        }
      }
    }
  }, [sortType, sortColumn]);

  const handleSort = (type, column) => {
    setSortType(type);
    setSortColumn(column);
  };

  const handleChangeSearchValue = e => {
    const value = e.target.value;
    setPage(0);
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

      columns.map(item =>
        item.type === "select"
          ? (oldData[item.key] = JSON.parse(
              Object.keys(item.option).find(
                key => item.option[key] === oldData[item.key]
              )
            ))
          : null
      );

      switch (actionType) {
        case "edit":
          editable.onUpdate(oldData, { ...oldData, ...inputValue });
          break;
        case "delete":
          editable.onDelete(oldData);
          break;
        default:
          break;
      }

      return handleCancelAction();
    }

    editable.onAdd(inputValue);
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

  const handleChangeVisibleData = e => {
    setPage(0);
    setVisibleData(parseInt(e.target.value));
  };

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <h3 className={classes.headerTitle}>{title}</h3>
        {!disableSearch ? (
          <TextInput
            placeholder="Search"
            extra={{ start: <SearchIcon /> }}
            value={searchValue}
            onChange={handleChangeSearchValue}
            noMargin
          />
        ) : null}
        {editable && editable.onAdd ? (
          // <Tooltip label="Add">
          <IconButton
            onClick={() => setShowAdd(prevShow => !prevShow)}
            disable={Boolean(actionType) && Boolean(activeColumn)}
            className={classes.actionButton}
          >
            <PlusCircleIcon />
          </IconButton>
        ) : // </Tooltip>
        null}
      </div>
      <div className={classes.body}>
        <table
          className={`${classes.table}${className ? ` ${className}` : ""}`}
          style={style}
        >
          <thead>
            <tr>
              {editable && (editable.onUpdate || editable.onDelete) ? (
                <th
                  className={`${classes.tableCell} ${classes.tableActionCell}`}
                >
                  <div className={classes.tableHeadColumn}>
                    <h4 className={classes.tableHeadColumnLabel}>Actions</h4>
                  </div>
                </th>
              ) : null}
              {columns.map(column => (
                <th
                  key={column.key}
                  className={`${classes.tableCell}${
                    column.type === "numeric" ? ` ${classes.numeric}` : ""
                  }`}
                >
                  <div
                    className={classes.tableHeadColumn}
                    onClick={
                      !disableSort
                        ? () => {
                            handleSort(
                              sortType === "ascending"
                                ? "descending"
                                : "ascending",
                              column.key
                            );
                          }
                        : null
                    }
                  >
                    {column.type === "numeric" && !disableSort ? (
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
                    {column.type === "numeric" || disableSort ? null : (
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
            {tableData
              .slice(
                !disablePagination ? 0 + visibleData * page : undefined,
                !disablePagination ? visibleData * (page + 1) : undefined
              )
              .map((row, index) => (
                <tr key={row.tableData}>
                  {editable ? (
                    <td
                      className={`${classes.tableCell} ${classes.tableActionCell}`}
                    >
                      <div style={{ display: "flex" }}>
                        {actionType && row.tableData === activeColumn ? (
                          <IconButton
                            onClick={() => handleSaveAction(row)}
                            className={classes.actionButton}
                            disable={showAdd}
                          >
                            <CheckIcon />
                          </IconButton>
                        ) : null}
                        {actionType && row.tableData === activeColumn ? (
                          <IconButton
                            onClick={() => handleCancelAction()}
                            className={classes.actionButton}
                            disable={showAdd}
                          >
                            <CloseIcon />
                          </IconButton>
                        ) : null}
                        {/* <Tooltip
                        label={row.tableData === activeColumn ? "Save" : "Edit"}
                      > */}
                        {editable.onUpdate &&
                        (!actionType || row.tableData !== activeColumn) ? (
                          <IconButton
                            onClick={() => handleAction(row.tableData, "edit")}
                            className={classes.actionButton}
                            disable={
                              (activeColumn !== null &&
                                row.tableData !== activeColumn) ||
                              showAdd
                            }
                          >
                            <EditIcon />
                          </IconButton>
                        ) : null}
                        {/* </Tooltip>
                      <Tooltip
                        label={
                          row.tableData === activeColumn ? "Cancel" : "Delete"
                        }
                      > */}
                        {editable.onDelete &&
                        (!actionType || row.tableData !== activeColumn) ? (
                          <IconButton
                            onClick={() =>
                              handleAction(row.tableData, "delete")
                            }
                            className={classes.actionButton}
                            disable={
                              (activeColumn !== null &&
                                row.tableData !== activeColumn) ||
                              showAdd
                            }
                          >
                            <DeleteIcon />
                          </IconButton>
                        ) : null}
                        {/* </Tooltip> */}
                      </div>
                    </td>
                  ) : null}
                  {row.tableData === activeColumn ? (
                    actionType === "edit" ? (
                      columns.map(column => (
                        <td
                          key={`${row.tableData}${column.key}`}
                          className={`${classes.tableCell}${
                            column.type === "numeric"
                              ? ` ${classes.numeric}`
                              : ""
                          }`}
                        >
                          {column.type === "select" ? (
                            <Select
                              placeholder={column.label}
                              value={
                                JSON.stringify(inputValue[column.key])
                                  ? JSON.stringify(inputValue[column.key])
                                  : JSON.stringify(inputValue[column.key]) ===
                                    ""
                                  ? ""
                                  : Object.keys(column.option).find(
                                      option =>
                                        column.option[option] ===
                                        row[column.key]
                                    )
                              }
                              onChange={e =>
                                handleChangeText(
                                  column.key,
                                  JSON.parse(e.target.value)
                                )
                              }
                              noMargin
                            >
                              {Object.entries(column.option).map(option => (
                                <option key={option[0]} value={option[0]}>
                                  {option[1]}
                                </option>
                              ))}
                            </Select>
                          ) : (
                            <TextInput
                              placeholder={column.label}
                              type={
                                column.type === "numeric" ? "number" : "text"
                              }
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
                          )}
                        </td>
                      ))
                    ) : (
                      <td
                        className={classes.tableCell}
                        colSpan={columns.length}
                      >
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
                >
                  <div style={{ display: "flex" }}>
                    {/* <Tooltip label="Save"> */}
                    <IconButton
                      onClick={() => handleSaveAction()}
                      className={classes.actionButton}
                    >
                      <CheckIcon />
                    </IconButton>
                    {/* </Tooltip> */}
                    {/* <Tooltip label="Cancel"> */}
                    <IconButton
                      onClick={() => handleCancelAction()}
                      className={classes.actionButton}
                    >
                      <CloseIcon />
                    </IconButton>
                    {/* </Tooltip> */}
                  </div>
                </td>
                {columns.map(column => (
                  <td
                    key={`new${column.key}`}
                    className={`${classes.tableCell}${
                      column.type === "numeric" ? ` ${classes.numeric}` : ""
                    }`}
                  >
                    {column.type === "select" ? (
                      <Select
                        placeholder={column.label}
                        value={
                          JSON.stringify(inputValue[column.key])
                            ? JSON.stringify(inputValue[column.key])
                            : ""
                        }
                        onChange={e =>
                          handleChangeText(
                            column.key,
                            JSON.parse(e.target.value)
                          )
                        }
                        noMargin
                      >
                        {Object.entries(column.option).map(option => (
                          <option key={option[0]} value={option[0]}>
                            {option[1]}
                          </option>
                        ))}
                      </Select>
                    ) : (
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
                    )}
                  </td>
                ))}
              </tr>
            ) : null}
            {tableData.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length + 1}
                  rowSpan={
                    disableEmptyRows ? tableData.length + 1 : visibleData + 1
                  }
                  className={classes.noData}
                >
                  No data to display
                </td>
              </tr>
            ) : null}
            {!disableEmptyRows &&
            tableData.slice(0 + visibleData * page, visibleData * (page + 1))
              .length < visibleData
              ? [
                  ...Array(
                    visibleData -
                      tableData.slice(
                        0 + visibleData * page,
                        visibleData * (page + 1)
                      ).length
                  )
                ].map((value, index) => (
                  <tr
                    key={`empty${index}`}
                    style={{
                      height: 56.8
                    }}
                  />
                ))
              : null}
          </tbody>
        </table>
      </div>
      {!disablePagination ? (
        <div className={classes.footer}>
          <h5 className={classes.footerRowsText}>Rows</h5>
          <Select
            value={visibleData}
            onChange={handleChangeVisibleData}
            className={classes.footerRowsSelect}
            noMargin
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </Select>
          {/* <Tooltip label="First Page"> */}
          <IconButton onClick={() => setPage(0)} disable={page === 0}>
            <PageFirstIcon />
          </IconButton>
          {/* </Tooltip>
          <Tooltip label="Previous Page"> */}
          <IconButton
            onClick={() => setPage(prevPage => prevPage - 1)}
            disable={page === 0}
          >
            <ChevronLeftIcon />
          </IconButton>
          {/* </Tooltip> */}
          <h5 className={classes.footerRowsText}>
            {tableData.length > visibleData * (page + 1)
              ? `${visibleData * page + 1}-${visibleData} of ${
                  tableData.length
                }`
              : tableData.length === 0
              ? "0-0 of 0"
              : `${visibleData * page + 1}-${tableData.length} of ${
                  tableData.length
                }`}
          </h5>
          {/* <Tooltip label="Next Page"> */}
          <IconButton
            onClick={() => setPage(prevPage => prevPage + 1)}
            disable={page === Math.floor(tableData.length / visibleData)}
          >
            <ChevronRightIcon />
          </IconButton>
          {/* </Tooltip>
          <Tooltip label="Last Page"> */}
          <IconButton
            onClick={() => setPage(Math.floor(tableData.length / visibleData))}
            disable={page === Math.floor(tableData.length / visibleData)}
          >
            <PageLastIcon />
          </IconButton>
          {/* </Tooltip> */}
        </div>
      ) : null}
    </div>
  );
};

TableView.defaultProps = {
  disableEmptyRows: false,
  disableSearch: false,
  disableSort: false,
  disablePagination: false
};

TableView.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
      type: PropTypes.oneOf(["numeric", "select"]),
      option: PropTypes.object
    })
  ).isRequired,
  disableEmptyRows: PropTypes.bool,
  disableSearch: PropTypes.bool,
  disableSort: PropTypes.bool,
  disablePagination: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  className: PropTypes.string,
  style: PropTypes.object,
  defaultSort: PropTypes.shape({
    type: PropTypes.oneOf(["ascending", "descending"]).isRequired,
    column: PropTypes.string.isRequired
  }),
  editable: PropTypes.shape({
    onAdd: PropTypes.func,
    onUpdate: PropTypes.func,
    onDelete: PropTypes.func
  })
};

export default TableView;
