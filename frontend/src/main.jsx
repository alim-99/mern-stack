import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter} from 'react-router-dom';

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
    <ChakraProvider>
      <App />
    </ChakraProvider>
      </BrowserRouter>
  </StrictMode>,
)
