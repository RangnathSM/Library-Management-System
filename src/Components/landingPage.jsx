import {Link} from 'react-router-dom'
import '../Styles/landingPage.css'
const LandingPage = () =>{
    return(
  <div className="background">
         <div className="landingpage">
           <div className="selectLoginType">
               <h1>Library Management System</h1>
                <div className="section1">
                <div className="admin">
                    <img src="../images/admin.jpg" alt="" />
                <button className='brown'><Link to='/adminLogin' className='' >ADMIN</Link></button>
                </div>
                <div className="user">
                    <img src="../images/user.jpg" alt="" />
                <button className='blue'><Link to='/userLogin' className=''>USER</Link></button>
                </div> 
                </div> 
           </div>
       </div>
  </div>
    )
}
export default LandingPage;