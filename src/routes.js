import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Login from './Pages/Login';
import newEmployee from './Pages/newEmployee';
import ClientList from './Pages/clientList';
import LoanList from './Pages/LoanList';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/newemployee" exact component={newEmployee} />
                <Route path="/clients" component={ClientList} />
                <Route path="/loan" component={LoanList} />
            </Switch>
        </BrowserRouter>
    )
}