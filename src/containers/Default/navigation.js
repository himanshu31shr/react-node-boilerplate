import React from "react";
import Dashboard from '@material-ui/icons/Dashboard';
import Home from '@material-ui/icons/Home';

const Navigation = [{
    "name": "Home",
    "link": "/",
    "icon": () => <Home/>
}, {
    "name": "Dashboard",
    "link": "/dashboard",
    "icon": () => <Dashboard/>
}];

export default Navigation