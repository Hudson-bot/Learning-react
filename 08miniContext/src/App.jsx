import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './componenets/Login'
import Profile from './componenets/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>React Video for Context APi</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
