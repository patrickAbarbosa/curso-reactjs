import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

/*
 * Importa os components necessário para fazer a mudança
 * de página sem recarrgar ou solicitar página ao servidor
 */
import { Route, BrowserRouter as Router, Switch}from 'react-router-dom';

// Pages
import Home from './pages/Home';
import About from './pages/About';

ReactDOM.render(
    <Router>
        <Switch>
            <Route path={'/'} exact component={Home} />
            <Route path={'/sobre'} component={About} />
        </Switch>
    </Router>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
