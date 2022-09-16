
import './App.css';
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import Header1 from './header';
import Home from './home';
import Login from './login';

import BusComponent from './BusComponent';
import AdminComponent from './AdminComponent';
import AdminAdd from './AdminAdd';
import AdminGetAll from './adminGetAll';
import AdminUpdate from './AdminUpdate';
import AdminDelete from './AdminDelete';
import UserAddBooking from './UserAddBooking';
import UserShow from './UserShow';
import About from './About';
import Helpar from './helpar';
import SignUpUser from './SignUpUser';





function App() {
  return (
<BrowserRouter>
    <div>
     {/* <BusComponent />  */}
     
        <Header1/>  
      

         <Routes>
          <Route path="/" exact element={<Home />} /> 
          <Route path="/login" element={<Login/>} />
          <Route path="/BusComponent" element={<BusComponent/>} />
          <Route path="/AdminComponent" element={<AdminComponent/>} />
          <Route path="/AdminAdd" element={<AdminAdd/>} />
          <Route path="/adminGetAll" element={<AdminGetAll/>} />
          <Route path="/AdminUpdate" element={<AdminUpdate/>} />
          <Route path="/AdminDelete" element={<AdminDelete/>} />
          <Route path="/UserAddBooking" element={<UserAddBooking/>} />
          <Route path="/UserShow" element={<UserShow/>} />
          <Route path="/about" element={ <About/> }/>
          <Route path="/helpar" element={ <Helpar/> }/>
          <Route path="/SignUpUser" element={ <SignUpUser/> }/>
           
          
          
          

        </Routes> 
      </div>
    </BrowserRouter>
  );
}

export default App;
