/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import TableHeader from "./TableHeader";
import TableHead from "./TableHead";
import TableFilter from "./TableFilter";
import TableFooter from "./TableFooter";
import TableEmptyRow from "./TableEmptyRow";
import TableRow from "./TableRow";
import format from "date-fns/format";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    display: "flex",
    flexDirection: "column"
  },
  body: {
    overflowX: "auto"
  },
  table: {
    borderSpacing: 0,
    borderCollapse: "collapse",
    width: "100%"
  },
  noData: {
    padding: "16px 40px 16px 16px",
    textAlign: "center",
    fontSize: 14
  }
});

const TableView = props => {
  const {
    data,
    columns,
    actions,
    header,
    tableHead,
    tableFilter,
    tableAction,
    tableRow,
    footer,
    disableEmptyRows,
    disableSort,
    disablePagination,
    disableFilter,
    title,
    defaultSort,
    editable
  } = props;
  const classes = useStyles();
  const [tableData, setTableData] = useState([]);
  const [dataWithId, setDataWithId] = useState([]);
  const [visibleData, setVisibleData] = useState(10);
  const [page, setPage] = useState(0);
  const [activeRow, setActiveRow] = useState("");

  const handleSort = (type, column) => {
    if (
      tableData.length > 0 &&
      columns.findIndex(value => value.key === column) !== -1
    ) {
      if (typeof tableData[0][column] === "number") {
        if (type === "descending") {
          setTableData(prevTableData =>
            JSON.parse(JSON.stringify(prevTableData)).sort(
              (a, b) => b[column] - a[column]
            )
          );
        } else {
          setTableData(prevTableData =>
            JSON.parse(JSON.stringify(prevTableData)).sort(
              (a, b) => a[column] - b[column]
            )
          );
        }
      } else {
        if (type === "descending") {
          setTableData(prevTableData =>
            JSON.parse(JSON.stringify(prevTableData))
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
            JSON.parse(JSON.stringify(prevTableData)).sort((a, b) =>
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
  };

  const handleSearch = value => {
    setPage(0);

    if (dataWithId.length > 0) {
      const regexp = new RegExp(
        value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
        "mi"
      );
      const filteredItems = dataWithId.filter(item => {
        let tempItem = { ...item };
        delete tempItem.tableData;
        return regexp.test(Object.values(tempItem).join(""));
      });
      setTableData(JSON.parse(JSON.stringify(filteredItems)));
    }
  };

  const handleFilter = filterValue => {
    if (dataWithId.length > 0) {
      const filteredItems = dataWithId.filter(item => {
        return Object.entries(filterValue).every(value => {
          const column = columns.find(column => column.key === value[0]);

          if (column.type === "select") {
            return value[1].some(option =>
              new RegExp(`^${option}$`, "mi").test(item[value[0]])
            );
          }

          let regexpString = "";

          if (column.type === "numeric") {
            regexpString = `^${value[1]}$`;
          } else {
            regexpString = `${value[1].replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`;
          }

          const regexp = new RegExp(regexpString, "mi");

          return item[value[0]]
            ? regexp.test(
                column.type === "date"
                  ? format(
                      new Date(item[value[0]]),
                      column.format ? column.format : "dd MMMM yyyy"
                    )
                  : item[value[0]]
              )
            : false;
        });
      });

      setTableData(JSON.parse(JSON.stringify(filteredItems)));
    }
  };

  useEffect(() => {
    if (columns && data) {
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
    }
  }, [data, columns]);

  return (
    <div className={classes.root}>
      <TableHeader
        {...header}
        title={title}
        showAdd={Boolean(editable.onAdd)}
        disableAdd={Boolean(activeRow) && activeRow !== "new"}
        onShowAdd={setActiveRow}
        onSearch={handleSearch}
      />
      <div className={classes.body}>
        <table className={classes.table}>
          <TableHead
            {...tableHead}
            columns={columns}
            actionColumn={Boolean(
              editable && (editable.onUpdate || editable.onDelete)
            )}
            disableSort={disableSort}
            defaultSort={defaultSort}
            onSort={handleSort}
          />
          <tbody>
            <TableFilter
              {...tableFilter}
              columns={columns}
              actionColumn={Boolean(
                editable && (editable.onUpdate || editable.onDelete)
              )}
              disableFilter={disableFilter}
              onFilter={handleFilter}
            />
            {tableData
              .slice(
                !disablePagination ? 0 + visibleData * page : undefined,
                !disablePagination ? visibleData * (page + 1) : undefined
              )
              .map(row => (
                <TableRow
                  {...tableRow}
                  tableAction={tableAction}
                  key={row.tableData}
                  row={row}
                  columns={columns}
                  actions={actions}
                  editable={editable}
                  activeRow={activeRow}
                  onAction={setActiveRow}
                />
              ))}
            <TableRow
              {...tableRow}
              tableAction={tableAction}
              columns={columns}
              activeRow={activeRow}
              editable={{ onAdd: editable.onAdd }}
              onAction={setActiveRow}
            />
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
            <TableEmptyRow
              totalData={
                tableData.slice(
                  0 + visibleData * page,
                  visibleData * (page + 1)
                ).length
              }
              visibleData={visibleData}
              disableEmptyRows={disableEmptyRows}
            />
          </tbody>
        </table>
      </div>
      <TableFooter
        {...footer}
        page={page}
        visibleData={visibleData}
        totalData={tableData.length}
        disablePagination={disablePagination}
        onChangePage={setPage}
        onChangeVisibleData={setVisibleData}
      />
    </div>
  );
};

TableView.defaultProps = {
  disableEmptyRows: false,
  disableSearch: false,
  disableSort: false,
  disablePagination: false,
  disableFilter: false
};

TableView.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
      type: PropTypes.oneOf(["numeric", "select", "date"]),
      option: PropTypes.object,
      format: PropTypes.string,
      styleOptions: PropTypes.shape({
        head: PropTypes.object,
        cell: PropTypes.object
      })
    })
  ),
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      component: PropTypes.oneOf(["Button", "IconButton"]),
      variant: PropTypes.oneOf(["contained", "outlined", "text"]),
      href: PropTypes.string,
      icon: PropTypes.element,
      label: PropTypes.any,
      onClick: PropTypes.func
    })
  ),
  header: PropTypes.shape({
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
    })
  }),
  tableHead: PropTypes.shape({
    classNameOptions: PropTypes.shape({
      root: PropTypes.string,
      text: PropTypes.string,
      icon: PropTypes.string
    }),
    styleOptions: PropTypes.shape({
      root: PropTypes.object,
      text: PropTypes.object,
      icon: PropTypes.object
    })
  }),
  tableFilter: PropTypes.shape({
    classNameOptions: PropTypes.shape({
      root: PropTypes.string,
      input: PropTypes.string
    }),
    styleOptions: PropTypes.shape({
      root: PropTypes.object,
      input: PropTypes.object
    })
  }),
  tableAction: PropTypes.shape({
    classNameOptions: PropTypes.shape({
      root: PropTypes.string,
      action: PropTypes.string
    }),
    styleOptions: PropTypes.shape({
      root: PropTypes.object,
      action: PropTypes.object
    })
  }),
  tableRow: PropTypes.shape({
    classNameOptions: PropTypes.shape({
      root: PropTypes.string,
      input: PropTypes.string
    }),
    styleOptions: PropTypes.shape({
      root: PropTypes.object,
      input: PropTypes.object
    })
  }),
  footer: PropTypes.shape({
    classNameOptions: PropTypes.shape({
      root: PropTypes.string,
      input: PropTypes.string,
      action: PropTypes.string
    }),
    styleOptions: PropTypes.shape({
      root: PropTypes.object,
      input: PropTypes.object,
      action: PropTypes.object
    })
  }),
  disableEmptyRows: PropTypes.bool,
  disableSearch: PropTypes.bool,
  disableSort: PropTypes.bool,
  disablePagination: PropTypes.bool,
  disableFilter: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
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
