import React from 'react';
import { Table } from 'antd';
import PropTypes from 'prop-types';


const DataTable = ({
  data,
  columns,
  message,
  loading,
  expandedRowRender,
  extraColumns = [],
  rowKey = 'key'
}) => {
  if (data.length === 0 && columns.length === 0) {
    return (<h2>{message}</h2>);
  }
  const finalColumns = [...columns, ...extraColumns];
  return (
    <Table
      rowKey={rowKey}
      columns={finalColumns}
      dataSource={data}
      loading={loading}
      pagination={false}
      expandedRowRender={expandedRowRender}
    />
  );
};

DataTable.defaultProps = {
  extraColumns: [],
  rowKey: 'key',
  loading: false,
  expandedRowRender: null
};

DataTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  message: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  rowKey: PropTypes.string,
  expandedRowRender: PropTypes.func,
  extraColumns: PropTypes.arrayOf(PropTypes.object)
};

export default DataTable;
