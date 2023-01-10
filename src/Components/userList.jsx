import { useState,useEffect } from "react";
import '../Styles/userList.css'

const UserList = () => {
    let[users,setUsers]=useState([])

    useEffect(()=>{
        let fetchData = async () =>{
            let response = await fetch('http://localhost:4005/users')
            let data = await response.json()
            setUsers(data)
        }
        fetchData()
    },[])

    let handleremove = (id,name)=>{
        setUsers(users.filter(x=> x.id !== id))
        alert(`${name} has been removed`)
    }
    return ( 
        <div className="userlist">
            <div className="H">
                <h1>User List:{users.length}</h1>
            </div>
            <div className="user_section">
                {users.map((data)=>(
                    <div className="user_card">
                        <h1>Name: {data.name}</h1>
                        <h5>Age: {data.age}</h5>
                        <h5>Email: {data.email}</h5>
                        <h5>Phone Number: {data.phoneNumber}</h5>
                        <button className="remove" onClick={()=>handleremove(data.id,data.name)}>Remove User</button>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default UserList;