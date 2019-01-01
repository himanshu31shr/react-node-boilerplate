import React, {Component} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Default from "./containers/Default";
import NotFound from "./views/NotFound";

var WebFont = require('webfontloader');

WebFont.load({
    google: {
        families: ['Roboto']
    }
});

class App extends Component {

    render() {
        return (
            <div className="App">
                <Router>
                    <Switch>
                        <Route path={'/'} component={Default}/>
                        <Route path={'/404'} exact component={NotFound}/>
                        <Redirect to={'/404'}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
