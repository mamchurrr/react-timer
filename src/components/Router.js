import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Timer from './pages/Timer';
import Contacts from './pages/Contacts';


export default function () {
    return (
        <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/timer' component={ Timer } />
            <Route path='/contacts' component={ Contacts } />
        </Switch>
    )
}