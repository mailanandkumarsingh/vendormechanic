import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Login from "./components/Login";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(<BrowserRouter>
    <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/load' exact component={App} />
    </Switch>
</BrowserRouter>,
    document.querySelector("#root"));
//ReactDOM.render(<App />, document.querySelector("#root"));
