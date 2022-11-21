import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home'
import SignUp from './Components/SignUp'
import Notification from './Components/Notification'
import Login from './Components/Login'
import NUpload from './Components/NUpload'
import Profile from './Components/Profile';
import NUpdate from './Components/NUpdate';
import UpdateProfile from './Components/UpdateProfile';
import Userlist from './Components/Userslist';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/notification' element={<Notification />} />
        <Route path='/login' element={<Login />} />
        <Route path='/create-task' element={<NUpload />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/userslist' element={<Userlist/>} />
        <Route path='/notification/:id' element={<NUpdate />} />
        <Route path='/update-profile/:id' element={<UpdateProfile />} />
        <Route path='*' element={<h1>Page not found</h1>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
