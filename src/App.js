import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Nav from './components/Navbar.js';
import Home from './views/Home';
import Work from './views/Work';
import Me from './views/Me';

import React, {Component} from "react";

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="app">
                    <Nav/>
                    <Route render={({location}) => {
                        return (
                            <Switch>
                                <Route exact path="/" component={Home}/>
                                <Route path="/work" component={Work}/>
                                <Route path="/me" component={Me}/>
                            </Switch>
                        )
                    }}/>
                </div>
            </BrowserRouter>
        );
    }
}