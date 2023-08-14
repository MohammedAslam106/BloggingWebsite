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
  const [copy,setCopy]=useState(false)
  return (
    <>
          <Routes>
            <Route path='/' element={<Home copy={copy} setCopy={setCopy} />}/>
            <Route  element={<><ProtectedRoute/></>}>
              {/* <Route path={`/${id}`}  element={<HomeId/>} /> */}
              <Route path={`/${id}/create-blog`} element={<CreateBlog/>}/>
              <Route path={`/${id}/display`} element={<Display />}/>
            </Route>
          </Routes>
    </>
  )
}

export default App
