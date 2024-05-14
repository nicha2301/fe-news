import './App.css'
import {RouterProvider} from 'react-router-dom'
import router from './router/routes'

function App() {

  return (
    <>
      {/* <Button onClick={() => alert("Hi there!")}>Click me</Button> */}
      <RouterProvider router={router}/>
    </>
  )
}

export default App
