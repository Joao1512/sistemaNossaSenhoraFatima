import React from 'react';
import FormLogin from '../../Components/formLogin';
import './styles.css';


export default function Login(){
    return(
        <div className="containerWrapper">
            <header>
                <span>
                Igreja Nossa Senhora de Fatima
                </span>
            </header>
            <div className="contentWrapper">
                <FormLogin />
            </div>
        </div>
    )
}