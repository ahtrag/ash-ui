import React from "react";
import PropTypes from "prop-types";

const TableEmptyRow = props => {
  const { totalData, visibleData, disableEmptyRows } = props;

  return totalData < visibleData && !disableEmptyRows
    ? [...Array(visibleData - totalData)].map((value, index) => (
        <tr
          key={`empty${index}`}
          style={{
            height: 56.8
          }}
        />
      ))
    : null;
};

TableEmptyRow.defaultProps = {
  disableEmptyRows: false
};

TableEmptyRow.propTypes = {
  totalData: PropTypes.number,
  visibleData: PropTypes.number,
  disableEmptyRows: PropTypes.bool
};

export default TableEmptyRow;
