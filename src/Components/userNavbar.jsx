import { Link } from "react-router-dom";
import '../Styles/userNavbar.css'
const UserNavbar = () => {
    return ( 
        <div className="userNavbar">
        <div className="he">
     <h1>USER PORTAL</h1>
     </div>
        <div className="LI">
        <ul>
            <li><Link to="/user/">DASHBOARD</Link></li>
            <li><Link to="/user/bookList">BOOK LIST</Link></li>
            <li><Link to="/">LOGOUT</Link></li>
        </ul>
        </div>
     </div>
     );
}
 
export default UserNavbar;