import React from 'react'
import ReactDOM from 'react-dom'

import {Switch, Router, Route} from 'react-router-dom'
import { createBrowserHistory } from 'history'

// Redux 
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import DashboardLayout from './Layouts/Dashboard'
import * as serviceWorker from './serviceWorker'
import reducers from './reducers'

const history = createBrowserHistory()
const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

ReactDOM.render(
<Provider store={store}>
    <Router history={history}>
        <Switch>
            <Route path="/" component={DashboardLayout} />
        </Switch>
    </Router>
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
