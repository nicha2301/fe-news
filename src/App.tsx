import { RouterProvider } from 'react-router-dom'
import './App.css'
import { AuthProvider } from './Auth/AuthContext'
import router from './router/routes'

function App() {

  return (
    <>
      {/* <Button onClick={() => alert("Hi there!")}>Click me</Button> */}
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  )
}

export default App
