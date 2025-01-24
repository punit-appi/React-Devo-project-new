import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import Adminlogin from './Components/Adminlogin'
import Userlogin from './Components/Userlogin'
import Adminsignup from './Components/Adminsignup'
import Usersignup from './Components/Usersignup'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Adminhomepage from './Components/Adminhomepage'
import Userhomepage from './Components/Userhomepage'
import Forgetpassword from './Components/Forgetpassword'

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Adminlogin' element={<Adminlogin/>}/>
        <Route path='/Userlogin' element={<Userlogin/>}/>
         <Route path='/Adminsignup' element={<Adminsignup/>}/>
        <Route path='/Usersignup' element={<Usersignup/>}/>
        <Route path='/Adminhomepage' element={<Adminhomepage/>}/>
        <Route path='/Adminhomepage/*' element={<Adminhomepage/>}/>
        <Route path='/Userhomepage' element={<Userhomepage/>}/>
        <Route path='/Userhomepage/*' element={<Userhomepage/>}/>
        <Route path='/Forgetpassword' element={<Forgetpassword/>}/>
      </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </div>
  )
}

export default App
