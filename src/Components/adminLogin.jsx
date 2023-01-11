import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import '../Styles/adminLogin.css'

const AdminLogin = () =>{

    let [email,setEmail]=useState("")
    let [password,setPassword]=useState("")
    let navigate=useNavigate();

    let adminLogin =(a)=>{
        a.preventDefault()
        let data ={email,password}
        if (email=="admin@gmail.com" && password==1234)
        {
            navigate('/admin/')
        }
        
        else{
            alert(`Invalid credentials`)
        }
    }
    return(
        <div className="adminLogin">
            <div className="form">
                <h1>Login As Admin</h1>
                <div className="form_input">
                <form action="" onSubmit={adminLogin}>
                    <div className="email">
                    <label htmlFor="" >Email</label>
                    <input type="email" value={email} required placeholder="Enter email adress" onChange={(a)=>setEmail(a.target.value)} />
                    </div>
                    <div className="password">
                    <label htmlFor="">Password</label>
                    <input type="Password" value={password}required placeholder="Enter Password" onChange={(a)=>setPassword(a.target.value)} />
                    </div>
                    <button className="mit">Login</button>
                </form>
                <div className="ge">
                <img src={require('../vec.jpg')} />
                </div>
                </div>
            </div>
        </div>
    )
}
export default AdminLogin;
