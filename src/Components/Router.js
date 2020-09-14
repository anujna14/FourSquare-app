import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import  App from '../App';
import Venue from '../Components/Venue/VenueDetails'


const Router = () =>(
    <BrowserRouter>
        <Switch>
            <Route path = "/" component = { App } exact />
            <Route path = "/venue/:id" component = {Venue} exact/>
            <Route component={() => (<div>404 Not found </div>)} />
        </Switch>
    </BrowserRouter>
    );


export default Router ;