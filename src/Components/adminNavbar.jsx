import { Link } from "react-router-dom";
import '../Styles/adminNavbar.css'

const AdminNavbar = () => {
    return ( 
           
             <div className="adminNavbar">
                <div className="header">
             <h1>ADMIN PORTAL</h1>
             </div>
                <div className="lists">
                <ul>
                    <li><Link to="/admin/">DASHBOARD</Link></li>
                    <li><Link to="/admin/addBooks">ADD BOOKS</Link></li>
                    <li><Link to='/admin/addUser'>ADD USERS</Link></li>
                    <li><Link to="/admin/bookList">BOOK LIST</Link></li>
                    <li><Link to="/admin/userList">USER LIST</Link></li>
                    <li><Link to="/">LOGOUT</Link></li>
                </ul>
                </div>
             </div>
           
     );
}
 
export default AdminNavbar;