import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Clothing from './Component/Clothing';
import Furniture from './Component/Furniture';
import Review from './Component/Review';
import Signin from './Component/Signin';
import Login from './Component/Login';
import Kids from './C/Kids';
import Men from './C/Men';
import Women from './C/Women';
import Bed from './F/Bed';
import OfficeFurniture from './F/OfficeFurniture';
import Sofas from './F/Sofas';
import Tables from './F/Tables';
import Dashboard from './Admin/Dashboard';
import Footer from './Component/Footer';
import Welcome from './Component/Welcome';



function App() {
  return (
    <>
      <Router>
        <div>
        <div style={{
          position : 'relative',
          width: '100%',
          zIndex: '100',
        }}><Navbar /> </div>
          <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="cloth" element={<Clothing />} />
            <Route path="furniture" element={<Furniture />} />
            <Route path="Review" element={<Review />} />
            <Route path="signin" element={<Signin />} />
            <Route path="login" element={<Login />} />
            <Route path="Kids" element={<Kids />} />
            <Route path="Men" element={<Men />} />
            <Route path="Women" element={<Women />} />
            <Route path="Bed" element={<Bed />} />
            <Route path="OfficeFurniture" element={<OfficeFurniture />} />
            <Route path="Sofas" element={<Sofas />} />
            <Route path="Tables" element={<Tables />} />
            <Route path="dashboard" element={<Dashboard />} />
            {/* <Route path="Footer" element={<Footer />} /> */}
            <Route path="" element={<Welcome />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
