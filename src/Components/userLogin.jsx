import {useNavigate} from 'react-router-dom'
import '../Styles/userlogin.css'
const UserLogin = () => {
    let navigate=useNavigate()
    let userLogin = ()=>{
           navigate('/user/')
    }
    return ( 
        <div className="userLogin">
            <div className="form">
                <h1>Login As User</h1>
                <div className="form_input">
                <form action="" onSubmit={userLogin}>
                    <div className="email">
                    <label htmlFor="">Email</label>
                    <input type="email"  required placeholder="Enter email adress"  />
                    </div>
                    <div className="password">
                    <label htmlFor="">Password</label>
                    <input type="Password" required placeholder="Enter Password"  />
                    </div>
                    <button className="Mit">Login</button>
                </form>
                <div className="ima">
                <img src={require('../vec.jpg')} />
                </div>
                </div>
            </div>
        </div>
     );
}
 
export default UserLogin;