import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Pagina1 from '../components/Pagina1';
import Pagina2 from '../components/Pagina2';
import Pagina3 from '../components/Pagina3';



export default () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={ Pagina1 } /> 
            <Route path="/pagina2" exact component={ Pagina2 } /> 
            <Route path="/pagina3" exact component={ Pagina3 } />
            <Redirect from="*" to="/"></Redirect>
        </Switch>
    </BrowserRouter>
)
