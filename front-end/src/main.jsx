import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import { store , persistor} from './redux/store/store.jsx'
import {PersistGate} from 'redux-persist/integration/react'
import {HelmetProvider} from 'react-helmet-async'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </HelmetProvider>
  </StrictMode>,
)
