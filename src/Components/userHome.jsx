import { Routes,Route } from "react-router-dom";
import BookList from "./bookList";
import ReadBook from "./readbook";
import UserDashboard from "./userDashboard";
import UserNavbar from "./userNavbar";
const UserHome = () => {
    return ( 
        <div className="userHome">
          <UserNavbar/>
          <Routes>
            <Route path="/" element={<UserDashboard/>}/>
            <Route path="/bookList" element={<BookList/>}/>
            <Route path="/bookList/:id" element={<ReadBook/>} />
          </Routes>
        </div>
     );
}
 
export default UserHome;
