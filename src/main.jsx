import { CssBaseline } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './redux/store'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider>
            <HelmetProvider>
                <CssBaseline />
                <div onContextMenu={(e) => e.preventDefault()}>
                    <App />
                </div>
            </HelmetProvider>
        </Provider>
    </React.StrictMode>,
)
