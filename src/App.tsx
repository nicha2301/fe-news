import { RouterProvider } from 'react-router-dom'
import './App.css'
import { AuthProvider } from './Auth/AuthContext'
import router from './router/routes'
import { useEffect } from 'react'
import { Button } from './components/ui/button'

function App() {

  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
      <Button onClick={()=>window.scrollTo({top: 0, behavior: 'smooth'})} className='fixed bottom-2 right-2 w-10 h-10 flex items-center justify-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 flex-shrink-0">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
</svg>
</Button>
    </>
  )
}

export default App
