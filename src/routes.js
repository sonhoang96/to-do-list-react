import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import * as page from "./pages/index"
const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={page.HomePage}/>
            <Route path="/to-do-list" component={page.ListPage}/>
        </Switch>
    </BrowserRouter>
)
export default Routes;