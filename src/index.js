import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route} from "react-router-dom";
import Header from './Home';
import App from './App';
import 'tachyons';
import News from './News';
ReactDOM.render(
    <BrowserRouter>
        <Header>
            <Route path="/" exact component={App}/>
            <Route path="/home" component={App}/>
            <Route path="/weather" component={App}/>
            <Route path="/news" component={News}/>
        </Header>
    </BrowserRouter>

        ,
        document.getElementById('root')
        );

        // If you want your app to work offline and load faster, you can change
        // unregister() to register() below. Note this comes with some pitfalls.
        // Learn more about service workers: https://bit.ly/CRA-PWA
        serviceWorker.unregister();
