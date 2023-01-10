import AdminNavbar from "./adminNavbar";
import { Routes,Route } from "react-router-dom";
import AdminDashboard from "./adminDashboard";
import BookList from "./bookList";
import UserList from "./userList";
import ReadBook from "./readbook";
import AddBook from "./addBooks";
import AddUser from "./addUser";
const AdminHome = () => {
    return ( 
        <div className="adminHome">
            <AdminNavbar/>
            <Routes>
                <Route path="/" element={<AdminDashboard/>}/>
                <Route path="/bookList" element={<BookList/>} />
                <Route path="/userList" element={<UserList/>}/>
                                    {/* route parameter */}
                <Route path="/booklist/:id" element={<ReadBook/>}/>
                <Route path="/addbooks" element={<AddBook/>}/>
                <Route path="/addUser" element={<AddUser/>} />
            </Routes>
        </div>
     );
}
 
export default AdminHome;