import Adminnavbar from "./Adminnavbar";
import "../Styles/Adminhomepage.css";
import Adminfooter from "./Adminfooter";
import Particle from './Particle';
import Addpg from "./Addpg";
import { Routes, Route } from "react-router-dom";
import Deshboard from "./Deshboard";
import Viewpg from "./Viewpg";
import Updatepg from "./Updatepg";
import Aboutus from "./Aboutus";
import Contactus from './Contactus';
import Privacypolicy from './Privacypolicy';
import Termsconditions from './Termsconditions';

const Adminhomepage = () => {
  return (
    <div className="adminhomepage">
      <Particle />
      <Adminnavbar />
         <Routes>
          <Route path="/" element={<Deshboard />} />
          <Route path="/Addpg" element={<Addpg />} />
          <Route path="/Viewpg" element={<Viewpg />} />
          <Route path="/Updatepg/:id" element={<Updatepg/>}/>
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Contactus" element={<Contactus />} />
          <Route path="/Privacypolicy" element={<Privacypolicy />} />
          <Route path="/Termsconditions" element={<Termsconditions />} />
        </Routes>
      

      <Adminfooter />
    </div>
  );
}

export default Adminhomepage;
