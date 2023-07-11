import React from 'react';
import "./App.css";
import Header from './containers/layout/header';
import Dashboard from './containers/dashboard/dashboardComponent';
const App = () => {
    return(
        <div className='app-container' data-testid="app">
            <div className='header-container' data-testid="header">
                <Header />
            </div>
            <div className='body-container' data-testid="body">
                <Dashboard/>
            </div>

        </div>
    )
}

export default App;

