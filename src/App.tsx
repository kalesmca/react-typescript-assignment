import React from 'react';
import "./App.css";
import Header from './containers/layout/header';
import DashboardComponent from './containers/dashboard/dashboardComponent';
import SpinnerComponent from './common-components/spinner/spinnerComponents';
import ToastComponent from './common-components/toast/toastComponent';
import { AppConfig } from './config/interfaceList';
import { useTypedSelector } from './customHooks/useTypedSelector';
const App: React.FC = () => {
    const appConfigState: AppConfig = useTypedSelector((State) => State.appConfig)
    return (
        <div className='app-container' data-testid="app">

            <div className='header-container' data-testid="header">
                <Header />
            </div>
            <ToastComponent />
            {
                appConfigState.showSpinner && (<div className='spinner-container'>

                    <SpinnerComponent />
                </div>)
            }


            <div className={appConfigState.showSpinner? 'body-container loading' : 'body-container' } data-testid="body" style={{  }}>
                <DashboardComponent />
            </div>


        </div>
    )
}

export default App;


