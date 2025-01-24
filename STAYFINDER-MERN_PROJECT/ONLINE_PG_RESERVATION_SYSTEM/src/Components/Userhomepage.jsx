import Usernavbar from "./Usernavbar"
import '../Styles/Userhomepage.css'
import Particle from './Particle';
import Adminfooter from './Adminfooter'
import { Route, Routes } from "react-router-dom";
import Pglist from "./pglist";
import Myprofile from "./Myprofile";


const Userhomepage = () => {
  return (
    <div className="userhomepage">
      <Particle/>
      <Usernavbar/>
      <Routes>
      <Route path="/" element={<Pglist/>}/>
        <Route path="/Pglist" element={<Pglist/>}/>
        <Route path="/Myprofile" element={<Myprofile/>}/>
      </Routes>
      <Adminfooter/>
      
    </div>
  )
}

export default Userhomepage