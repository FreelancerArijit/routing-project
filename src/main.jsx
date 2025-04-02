import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import { RouterProvider } from 'react-router'
import { createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/home/Home.jsx'
import About from './pages/About/About.jsx'
import Contact from './pages/Contact/Contact.jsx'
import Github from './pages/Github/Github.jsx'
import Project from './pages/Project/Project.jsx'

const router  = createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/" element = {<Layout />} >
      <Route path="" element = {<Home />}/>
      <Route path="about" element = {<About />} />
      <Route path="contact" element = {<Contact />} />
      <Route path="github" element = {<Github />} />
      <Route path='project' element={<Project />} />
          </Route>


  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router = {router} />
  </StrictMode>,
)
