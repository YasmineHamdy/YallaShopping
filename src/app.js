import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'

import './styles/main.css'
import store from './store/storeConfg'
import AppRouter from './routers/appRouter'

ReactDOM.render(<Provider store={store}>
                    <AppRouter/>
                </Provider>,
                document.getElementById("app"))