import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import {Toaster} from "react-hot-toast";

import Login from "./Pages/Auth/Login";
import SignUp from "./Pages/Auth/SignUp";
import LandingPage from "./Pages/LandingPage";
import Dashboard from "./Pages/Home/Dashboard";
import InterviewPrep from "./Pages/InterviewPrep/interviewPrep";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/interview-prep/:sessionid" element={<InterviewPrep/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
