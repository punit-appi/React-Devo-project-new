import { useState } from "react"
import '../Styles/UserForgetpassword.css'
import Particle from "./Particle"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import {useNavigate} from 'react-router-dom'

const Userforgetpassword = () => {
    let [email,setemail]=useState("")
    let navigate=useNavigate();
    
     function sendemail(e){
          e.preventDefault()
          try{
             axios.post(`http://localhost:5000/userforgetpassword/${email}`)
             .then(res=>{
                if(res.data==="success"){
                  toast.success("chack your mail")
                  navigate('/Userlogin')

                }})
             .catch(err=>console.log(err))
             
          }
          catch{
             toast("can't send mail")
          }
     }
     

  return (
    <div className='userforgetpassword'>
        <Particle/>
        <h1>ENTER THE VAILD EMAIL TO GET YOUR PASSWORD</h1>
        <form action="" onSubmit={sendemail}>
            <label htmlFor="">EMAIL</label>
            <input type="email" placeholder='Enter Your Email' value={email} onChange={(e)=>setemail(e.target.value)} />
            <button >Send Email</button>
        </form>
      
    </div>
  )
}

export default Userforgetpassword
