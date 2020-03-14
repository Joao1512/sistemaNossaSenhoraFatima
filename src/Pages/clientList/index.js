import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Menu from './../../Components/menu';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import './styles.css';

const columns = [
  { id: 'nome', label: 'Nome', minWidth: 170 },
  { id: 'cpf', label: 'CPF', minWidth: 100 },
  {
    id: 'telefone',
    label: 'Telefone',
    minWidth: 170,
    format: value => value.toLocaleString(),
  },
  {
    id: 'email',
    label: 'email',
 
    format: value => value.toLocaleString(),
  },
  {
    id: 'rua',
    label: 'Rua',
    minWidth: 170,
    format: value => value.toFixed(2),
  },
  {
    id: 'numero',
    label: 'Numero',
    minWidth: 170,
    format: value => value.toFixed(2),
  },
  {
    id: 'complemento',
    label: 'Complemento',
    minWidth: 170,
    format: value => value.toFixed(2),
  },
  {
    id: 'cidade',
    label: 'Cidade',
    minWidth: 170,
    format: value => value.toFixed(2),
  },
  {
    id: 'cep',
    label: 'Cep',
    minWidth: 170,
    format: value => value.toFixed(2),
  },
];

function createData(nome, cpf, telefone, email,rua,numero,complemento,cidade,cep) {
  return { nome, cpf, telefone, email, rua, numero, complemento, cidade, cep };
}

const rows = [
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),
  createData('India', '1324171354','89457989', 'asld@hotmail.com','Rua teste','908','no centro','Caçapava','987979967'),

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

export default function ClientList({history}) {
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
        Lista de Clientes
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
