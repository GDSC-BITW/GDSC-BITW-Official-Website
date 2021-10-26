import {Grid} from '@material-ui/core/';
import React from 'react';
import {useEffect} from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import data from '../data/data.json';

const columns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    {
      id: 'date',
      label: 'Completion Status (T-1)',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'date2',
        label: 'Completion Status (T-2)',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
      },
    {
      id: 'link',
      label: 'Qwiklabs Link',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
  ];
  
  function createData(name, date, link,date2) {
    return { name, date, link,date2};
  }
  

  


const LeaderBoard = (props) => { 

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [json, setJson] = React.useState(data);
    const rows = [];

    json.Sheet1.map((dat)=>
        rows.push(createData(dat["Name "],dat['Track 1'],dat[" Qwiklabs public profile url"], dat['Track 2']))
    )

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    console.log(data);
    
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const renderButton = (column,value)=>{
        if(column.label!='Qwiklabs Link'){
          return <TableCell key={column.id} align={column.align}>
                    {column.format && typeof value === 'number'
                      ? column.format(value)
                      : value}
                  </TableCell>
        } else{
          return <TableCell key={column.id} align={column.align}>
                      <a href={column.format && typeof value === 'number'
                          ? column.format(value)
                          : value}>
                        Qwiklabs
                      </a>
                  </TableCell>
        }
    }

    return(
     <div>
        <Grid container className="leader-section" justifyContent="center" alignItems="center">
            <Grid item style={{ textAlign:"center"}}>
                <strong className="heading blue">HALL OF FAME</strong> <br/>
                <strong className="heading-2">30 Days of Google Cloud</strong> <br/>
                <p style={{padding:"20px 20vh"}} >30 Days of Google Cloud program will provide you an opportunity to kickstart your career in cloud and get hands-on practice on Google Cloud Platform - the tool that powers apps like Google Search, Gmail and YouTube.</p>
            </Grid>
        </Grid>
        <Grid container  justifyContent="center" alignItems="center">
            <Paper sx={{ width: '76vw', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 840 }}>
                    <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                        {columns.map((column) => (
                            <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth }}
                            >
                            <strong> {column.label} </strong>

                            </TableCell>
                        ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row) => {
                            return (
                            <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                {columns.map((column) => {
                                const value = row[column.id];
                                return (
                                    renderButton(column,value)
                                );
                                })}
                            </TableRow>
                            );
                        })}
                    </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Grid>
     </div>
    )
}
export default LeaderBoard;