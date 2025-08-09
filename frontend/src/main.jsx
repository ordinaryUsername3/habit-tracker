import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './app/store.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import {ColorModeProvider} from './components/ui/color-mode.jsx'
import {system} from './components/app/Theme.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ChakraProvider value={system}>
        <ColorModeProvider>
        <Provider store={store}>
          <App />
        </Provider>
        </ColorModeProvider>
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>,
)
