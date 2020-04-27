import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import {applyMiddleware, compose, createStore} from "redux"
import mainReducer from "./store/mainReducer"
import thunk from 'redux-thunk'

// Redux Store Dev Tools

// @ts-ignore
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// const logger = () => (next: (arg0: any) => any) => (action: { type: any }) => {
//     console.log(`[Logger] Dispatching: ${action.type}`, action)
//     const result = next(action)
//     return result
// }

const store = createStore(mainReducer, applyMiddleware(thunk))


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)

serviceWorker.unregister()
