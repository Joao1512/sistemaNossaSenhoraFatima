import React from 'react';
import Menu from './../../Components/menu';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import './styles.css';


const columns = [
    { id: 'data', label: 'Data', minWidth: 170 },
    { id: 'codigo', label: 'Codigo', minWidth: 100 },
    {
      id: 'funcionario',
      label: 'Funcionario',
      minWidth: 170,
      format: value => value.toLocaleString(),
    },
    {
      id: 'cliente',
      label: 'Cliente',
      format: value => value.toLocaleString(),
    },
    {
      id: 'itens',
      label: 'itens',
      minWidth: 170,
    },
  ];
  
  function createData(data, codigo, funcionario, cliente,itens) {
    return { data, codigo, funcionario, cliente,itens };
  }
  
  const rows = [
    createData('09/11/2019', '654','Jose', 'Pedro','Mesa, Cadeira, Armario',),
    createData('09/11/2019', '654','Jose', 'Pedro','Mesa, Cadeira, Armario',),
    createData('09/11/2019', '654','Jose', 'Pedro','Mesa, Cadeira, Armario',),
    createData('09/11/2019', '654','Jose', 'Pedro','Mesa, Cadeira, Armario',),
    createData('09/11/2019', '654','Jose', 'Pedro','Mesa, Cadeira, Armario',),
    createData('09/11/2019', '654','Jose', 'Pedro','Mesa, Cadeira, Armario',),
    createData('09/11/2019', '654','Jose', 'Pedro','Mesa, Cadeira, Armario',),
    createData('09/11/2019', '654','Jose', 'Pedro','Mesa, Cadeira, Armario',),
    createData('09/11/2019', '654','Jose', 'Pedro','Mesa, Cadeira, Armario',),
    createData('09/11/2019', '654','Jose', 'Pedro','Mesa, Cadeira, Armario',),
    createData('09/11/2019', '654','Jose', 'Pedro','Mesa, Cadeira, Armario',),
    createData('09/11/2019', '654','Jose', 'Pedro','Mesa, Cadeira, Armario',),
    createData('09/11/2019', '654','Jose', 'Pedro','Mesa, Cadeira, Armario',),
    createData('09/11/2019', '654','Jose', 'Pedro','Mesa, Cadeira, Armario',),
    createData('09/11/2019', '654','Jose', 'Pedro','Mesa, Cadeira, Armario',),
    createData('09/11/2019', '654','Jose', 'Pedro','Mesa, Cadeira, Armario',),
    createData('09/11/2019', '654','Jose', 'Pedro','Mesa, Cadeira, Armario',),
    createData('09/11/2019', '654','Jose', 'Pedro','Mesa, Cadeira, Armario',),
    createData('09/11/2019', '654','Jose', 'Pedro','Mesa, Cadeira, Armario',),
    createData('09/11/2019', '654','Jose', 'Pedro','Mesa, Cadeira, Armario',),
    createData('09/11/2019', '654','Jose', 'Pedro','Mesa, Cadeira, Armario',),
    createData('09/11/2019', '654','Jose', 'Pedro','Mesa, Cadeira, Armario',),
    createData('09/11/2019', '654','Jose', 'Pedro','Mesa, Cadeira, Armario',),
    createData('09/11/2019', '654','Jose', 'Pedro','Mesa, Cadeira, Armario',),
    createData('09/11/2019', '654','Jose', 'Pedro','Mesa, Cadeira, Armario',),
    createData('09/11/2019', '654','Jose', 'Pedro','Mesa, Cadeira, Armario',),
    createData('09/11/2019', '654','Jose', 'Pedro','Mesa, Cadeira, Armario',),
    createData('09/11/2019', '654','Jose', 'Pedro','Mesa, Cadeira, Armario',),
    createData('09/11/2019', '654','Jose', 'Pedro','Mesa, Cadeira, Armario',),
    createData('09/11/2019', '654','Jose', 'Pedro','Mesa, Cadeira, Armario',),
    createData('09/11/2019', '654','Jose', 'Pedro','Mesa, Cadeira, Armario',),
    createData('09/11/2019', '654','Jose', 'Pedro','Mesa, Cadeira, Armario',),
    createData('09/11/2019', '654','Jose', 'Pedro','Mesa, Cadeira, Armario',),
    createData('09/11/2019', '654','Jose', 'Pedro','Mesa, Cadeira, Armario',),
    createData('09/11/2019', '654','Jose', 'Pedro','Mesa, Cadeira, Armario',),
    createData('09/11/2019', '654','Jose', 'Pedro','Mesa, Cadeira, Armario',),
    createData('09/11/2019', '654','Jose', 'Pedro','Mesa, Cadeira, Armario',),
    createData('09/11/2019', '654','Jose', 'Pedro','Mesa, Cadeira, Armario',),

  ];
  
  const useStyles = makeStyles({
    root: {
      width: '100%',
    },
    tableWrapper: {
      maxHeight: 600,
      overflow: 'auto',
    },
  });
  

export default function LoanList() {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
    
    const handleChangeRowsPerPage = event => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
  
    return (
        <>
      <Menu />
      <div className="titleList">
          Lista de Emprestimos
      </div>
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map(column => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map(column => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number' ? column.format(value) : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      </>
    );
}