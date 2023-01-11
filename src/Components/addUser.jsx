import { useNavigate } from "react-router-dom";
import { useState } from "react";
import '../Styles/addUser.css'
const AddUser = () => {

    let [name, setName]=useState("")
    let [age, setAge]=useState("")
    let [email, setEmail]=useState("")
    let [phoneNumber, setPhoneNumber]=useState("")

    let navigate = useNavigate()

    let handleSubmit=(e)=>{
        e.preventDefault();
        let userdata = {name,age,email,phoneNumber}

        fetch('http://localhost:4005/users',{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(userdata)
         })
         alert(`User Added Successfully`)
         navigate('/admin/userList')
    }
    return ( 
        <div className="frame">
            <div className="addUser">
            <h1>Add a New User</h1>
            <div className="userform">
               <form action="" onSubmit={handleSubmit}>
               <div className="name">
                    <label htmlFor="">Name</label>
                    <input type="text" value={name} placeholder="Enter the Name" onChange={(e)=>setName(e.target.value)} />
                </div>
                <div className="age">
                    <label htmlFor="">Age</label>
                     <input type="number" value={age} min='1' placeholder="Enter the age" onChange={(e)=>setAge(e.target.value)}/>
                </div>
                <div className="Email">
                    <label htmlFor="">Email</label>
                     <input type="email" value={email}  placeholder="Enter The Email Id" onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="phoneNumber">
                    <label htmlFor="">Phone Number</label>
                     <input type="tel" value={phoneNumber} minLength='10' maxLength='10' placeholder="Enter the Phone Number" onChange={(e)=>setPhoneNumber(e.target.value)}/>
                </div>
                <button className="Adduser">Add User</button>
               </form>
            </div>
            
        </div>
        </div>
     );
}
 
export default AddUser;