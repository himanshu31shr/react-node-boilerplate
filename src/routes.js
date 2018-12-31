import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard')),
    Home = React.lazy(() => import('./views/Home'));

const Routes = [
    {
        path: '/',
        component: Home,
        auth: false,
        name: 'home',
        exact: true
    }, {
        path: '/dashboard',
        component: Dashboard,
        auth: true,
        name: 'dashboard',
        exact: true
    }
];

export default Routes;
