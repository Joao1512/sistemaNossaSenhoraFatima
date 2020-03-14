import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import ClassIcon from '@material-ui/icons/Class';

import {Link} from 'react-router-dom';

import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import './styles.css';
const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  });
  
  export default function TemporaryDrawer({history}) {
    const classes = useStyles();
    const [state, setState] = React.useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
    });

    const toggleDrawer = (side, open) => event => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [side]: open });
    };
  
    const sideList = side => (
      <div
        className={classes.list}
        role="presentation"
        onClick={toggleDrawer(side, false)}
        onKeyDown={toggleDrawer(side, false)}
      >
        <List>
            <div className="containerMenuTop">
            <div className="titleMenu">
                <div>
                    <AccountCircleIcon className="titleIcon" />
                </div>
                <p>João Victor</p>  
            </div>
            <div className="bold">
                Menu
            </div>
            </div>
            <Divider />
            <div className="cadastro">
                Cadastrar
            </div>


            <Link style={{textDecoration: 'none', color: 'rgb(0,0,0,0.87)'}} to="/newemployee"><ListItem button key="Novo Funcionário">
              <ListItemIcon><PersonAddIcon /></ListItemIcon>
              <ListItemText primary="Novo Funcionário" />
            </ListItem></Link>

            <ListItem button key="Novo Cliente">
              <ListItemIcon><PersonAddIcon /></ListItemIcon>
              <ListItemText primary="Novo Cliente" />
            </ListItem>

            <ListItem button key="Novo Item">
              <ListItemIcon><FileCopyIcon /></ListItemIcon>
              <ListItemText primary="Novo Item" />
            </ListItem>

            <div className="cadastro">
                Emprestimo
            </div>


            <ListItem button key="Novo Funcionário">
              <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
              <ListItemText primary="Gerar Emprestimo" />
            </ListItem>

            <div className="cadastro">
                Tabelas
            </div>

            <Link style={{textDecoration: 'none', color: 'rgb(0,0,0,0.87)'}} to="/clients"><ListItem button key="Clientes">
            <ListItemIcon><EmojiPeopleIcon /></ListItemIcon>
              <ListItemText primary="Clientes" />
            </ListItem></Link>


            <Link style={{textDecoration: 'none', color: 'rgb(0,0,0,0.87)'}} to="/loan"><ListItem button key="Emprestimos"><Link/>>
              <ListItemIcon><ClassIcon /></ListItemIcon>
              <ListItemText primary="Emprestimos" />
            </ListItem></Link>
            
        </List>
      </div>
    );
  
    return(
            <div>
                <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                    {sideList('left')}
                </Drawer>
                <header>
                    <div className="item">
                        <MenuIcon className="menuIcon" onClick={toggleDrawer('left', true)} />
                    </div>
                    <span>Igreja Nossa Senhora de Fatima</span>

                </header>
         </div>


        
    )

}