import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
});

class CustomTable extends Component {

  renderTableHead(){
    const { tableHead } = this.props
    return (
      <TableHead>
        <TableRow>
          {tableHead.map(e => 
            <TableCell><b>{e}</b></TableCell>
          )}
        </TableRow>
      </TableHead>
    )
  }
  render(){
    const { rows } = this.props
    return(
      <Table aria-label="simple table">
        {this.renderTableHead()}
        <TableBody>
          {rows.map(row => (
            <TableRow>              
              {row.map(column => 
                  <TableCell >{column}</TableCell>
                )
              }
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
}

export default CustomTable