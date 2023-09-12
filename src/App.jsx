import './App.scss'
import Home from './components/Home'
import { app } from './firebaseConfig'
import { Routes, Route} from 'react-router-dom'
import ProtectedRoute from './utils/ProtectedRoute'
import CreateBlog from './components/CreateBlog'
import { useState } from 'react'
import Display from './components/Display'

// import HomeId from './components/HomeId'



function App() {
  // const {currentUser}=useAuth()
  const id=JSON.parse(localStorage.getItem('blogUser'))?.user.uid
  console.log(id)
  return (
    <>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route  element={<><ProtectedRoute/></>}>
              {/* <Route path={`/${id}`}  element={<HomeId/>} /> */}
              <Route path={`/:user/create-blog`} element={<CreateBlog/>}/>
              <Route path={`/:user/display/:id`} element={<Display />}/>
            </Route>
          </Routes>
    </>
  )
}

export default App
