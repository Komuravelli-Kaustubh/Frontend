// import logo from './logo.svg';
import './App.css';
import Dashboard from './Componenets/Dashboard';
import { Routes, Route } from 'react-router-dom'
import Home from './Componenets/Home';
import Jobrecomm from './Componenets/Jobrecomm';
import Previous from './Componenets/Previous';
import Profile from './Componenets/Profile';
import Updateprof from './Componenets/Updateprof';
import Savedjobs from './Componenets/Savedjobs';
import Signinpage from './Componenets/Signinpage';
import Signuppage from './Componenets/Signuppage';
import Jobov1 from './Componenets/Jobov1';
import Jobov2 from './Componenets/Jobov2';
import Jobov3 from './Componenets/Jobov3';
import Jobov4 from './Componenets/Jobov4';
import Jobov5 from './Componenets/Jobov5';
import Jobov6 from './Componenets/Jobov6';


function App() {
  return (
    <div class="App">
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/Signinpage" element={<Signinpage />} />
        <Route path="/Signuppage" element={<Signuppage />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Updateprof" element={<Updateprof />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Jobrecomm" element={<Jobrecomm />} >
          <Route path="Jobov1" element={<Jobov1 />} />
          <Route path="Jobov2" element={<Jobov2 />} />
          <Route path="Jobov3" element={<Jobov3 />} />
          <Route path="Jobov4" element={<Jobov4 />} />
          <Route path="Jobov5" element={<Jobov5 />} />
          <Route path="Jobov6" element={<Jobov6 />} />
        </Route>
        <Route path="/Savedjobs" element={<Savedjobs />} />


      </Routes>

    </div>
  )
}


export default App;
