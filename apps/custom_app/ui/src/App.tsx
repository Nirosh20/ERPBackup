import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { FrappeProvider } from 'frappe-react-sdk'
import { Ui } from './Pages/Ui'

function App() {
  
  return (
    <FrappeProvider socketPort={import.meta.env.VITE_SOCKET_PORT ?? ''}>
      <BrowserRouter basename={import.meta.env.VITE_BASE_PATH}>
        <Routes>
          <Route path="/login" element={<h1>Login</h1>} />
          <Route path="/" element={<Ui/>} />
        </Routes>
      </BrowserRouter> 
    </FrappeProvider>
  )
}

export default App
