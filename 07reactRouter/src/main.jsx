import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Header/Home/Home.jsx'
import About from './components/Header/About/About.jsx'
import User from './components/Header/User/User.jsx'
import Github ,{githubInfoLoader} from './components/Github/Github.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element={<Layout/>}>
        <Route path = '' element={<Home/>} />
        <Route path = "about/" element={<About/>} />
        <Route path = "user/" element={<User/>} >
        <Route path = ":userid" element={<User/>} />
        </Route>
        <Route path = "github" 
        loader={githubInfoLoader}
        element={<Github/>} ></Route>
        
        <Route path = "*" element={<div>Not Found</div>} /> 
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
//to load the layout.jsx in the app.jsx we need to create route path and add element.srs
//to load the layout.jsx in the app.jsx we need to create route path and add element.srs