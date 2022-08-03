import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    const data = [
      {
        state: 'State 1',
        status: 'Warning',
      },
      {
        state: 'State 2',
        status: 'Error',
      },
    ];

    const columns = [
      {
        Header: 'State Name',
        accessor: 'state',
      },
      {
        Header: 'Status',
        accessor: 'status',
        Cell: (row) => {
          row.styles['color'] = '#fff';
          row.styles['backgroundColor'] =
            row.value == 'Warning' ? 'grey' : 'red';
          return row.value.toUpperCase();
        },
      },
    ];

    return (
      <ReactTable
        data={data}
        columns={columns}
        defaultPageSize={5}
        className="-striped -highlight"
      />
    );
  }
}

render(<App />, document.getElementById('root'));
