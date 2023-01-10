// import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LandingPage from './Components/landingPage';
import AdminLogin from './Components/adminLogin';
import UserLogin from './Components/userLogin';
import AdminHome from './Components/adminHome';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       
         <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/adminLogin' element={<AdminLogin/>}/>
          <Route path='/userLogin' element={<UserLogin/>}/>
          <Route path='/admin/*' element={<AdminHome/>}/>
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
