import React from 'react';
import ReactDom from 'react-dom';
//import {BrowserRouter, Route, Link } from "react-router-dom";
import './index.css';

import App from './App';
import * as serviceWorker from './serviceWorker';

/*
function About(){
    return <h2>About us 111</h2>
}
function Orders(){
    return <h2>Order Page 444</h2>
}

class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <ul>
                    <li>
                        <Link to="/about">About v22</Link>
                    </li>
                    <li>
                        <Link to="/orders">Orders</Link>
                    </li>
                </ul>

                <Route path="/about/" component={About}/>
                <Route path="/orders/" component={Orders}/>
                
                {/*<div>Hello word</div>* /}
            </BrowserRouter>
        )
    }
}
*/
ReactDom.render(<App />, document.getElementById('app'));

serviceWorker.unregister();
