import { BrowserRouter,Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage"; 
import AdminLogin from "./Components/AdminLogin";
import UserLogin from "./Components/UserLogin";
import AdminSignUp from "./Components/AdminSignUp";
import UserSignUp from "./Components/UserSignUp";
import AdminHomePage from "./Components/AdminHomePage";
import UserHomePage from "./Components/UserHomePage";
import Error from "./Components/ErrorPage1";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path ="/*" element={<Error/>}/>
          <Route path="/" element={<LandingPage />} />
          <Route path="/admin" element={<AdminLogin/>} />
          <Route path="/user" element={<UserLogin/>} />
          <Route path="/AdminSignUp" element={<AdminSignUp/>} />
          <Route path="/UserSignUp" element={<UserSignUp/>} />
          <Route path="/AdminHomePage/*" element={<AdminHomePage />} />
          <Route path="/UserHomePage" element={<UserHomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
