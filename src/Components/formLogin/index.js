import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import {Link} from 'react-router-dom';
import './styles.css';


export default function formLogin() {
    return (
        <Card className="formWrapper">
            <div className="title">
                Realizar Login
            </div>
            <span className="spanLogin">Usuario</span>
            <div className="formLogin">
                <input className="form" placeholder="Entre com seu login*"></input>
            </div>
            <span className="spanLogin">Senha</span>
            <div className="formLogin">
                <input type="password" className="form" placeholder="Entre com sua senha*"></input>
            </div>
            <div className="links">
            <Link style={{textDecoration: 'none', color: 'rgb(0,0,0,0.87)'}} to="/clients"><Button variant="contained" className="btn" >Entrar</Button></Link>
                <a href="/"className="linkForget"> Esqueci minha senha</a>
            </div>

        </Card>
    )
}
