import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  {
    id: 'date',
    label: 'Date',
    minWidth: 170,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'venue',
    label: 'Venue',
    minWidth: 170,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'see_more',
    label: 'See More',
    minWidth: 70,
    align: 'left',
    format: (value) => value.toFixed('en-US'),
  },
];

function createData(name, date, venue, see_more) {
  return { name, date, venue, see_more};
}

const rows = [
  createData('Winter of Code 2.0 - Introductory Session', 'Sun, Nov 7, 4:00 PM (IST)', 'Online', 'https://www.youtube.com/watch?v=_IyFdrIV_r0'),
  createData('Road to Google Cloud Certifications', 'Oct 28, 2021 - 11:00 AM (IST)', 'Online', 'https://www.youtube.com/watch?v=_IyFdrIV_r0'),
  createData('Info Session: Winter of Code 2.0', 'Oct 14, 2021 - 4:00 PM (IST)', 'Online', 'https://www.youtube.com/watch?v=_LZ2K-NgPOg'),
  createData('Getting Started with Open Source', 'Oct 10, 2021 - 3:00 PM (IST)', 'Online', 'https://www.youtube.com/watch?v=G-js1YDEbIo'),
  createData('How to optimize your LinkedIN profile', 'Sep 30, 2021 - 5:00 PM (IST)', 'Online', 'https://www.youtube.com/watch?v=KRUA1eOVyZg&t=17s'),
  createData('Webinar: Investment for Students', 'Sep 26, 2021 - 4:00 PM (IST', 'Online', 'https://www.youtube.com/watch?v=kBfRF0tDQfk&feature=youtu.be'),
  createData('Info Session : 30 Days of Google Cloud', 'Sep 21, 2021 - 5:00 PM (IST)', 'Online', 'https://www.youtube.com/watch?v=JsV_5eqWggQ'),
  createData('Introductory Session: Know your GDSC BITW!', 'Aug 25, 2021 - 4:15 PM (IST)', 'Online', 'https://www.youtube.com/watch?v=XjW7HyyIDzE&t=661s'),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  
  const renderButton = (column,value)=>{
    if(column.label!='See More'){
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
                    See More
                  </a>
              </TableCell>
    }
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 470 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  <strong>{column.label}</strong>

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

                        // <TableCell key={column.id} align={column.align}>
                        //   {column.format && typeof value === 'number'
                        //     ? column.format(value)
                        //     : value}
                        // </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}