import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import * as page from "./pages/index"
const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/user/:name" component={page.HomePage}/>
            <Route path="/user/login" component={page.LoginPage}/>
        </Switch>
    </BrowserRouter>
)
export default Routes;