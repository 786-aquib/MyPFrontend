import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import SignIn from "./SignIn.jsx";
import SignUp from "./SignUp.jsx";
import AppBar from "./Appbar.jsx";
import AddCourses from "./AddCourses.jsx";
import Courses from "./Courses.jsx";
import Course from "./Courses.jsx";
import Chart from "./Chart.jsx";
import MainPage from "./MainPage.jsx";


function App() {
  return ( <
      div style = {
          {
              width: "100vw",
              height: "100vh",
              backgroundColor: "#eeeeee"
          }
      } >
      <
      Router >
  
      <Routes >
      <Route path = "/"
      element = {
          < MainPage / >
      }
      /> 
      <Route path = "/Courses"
      element = {
          < Courses / >
      }
      /> <
      Route path = "/Chart"
      element = {
          < Chart / >
      }
      /> <
      Route path = "/Course/:CourseId"
      element = {
          < Course / >
      }
      /> <
      Route path = "/AddCourses"
      element = {
          < AddCourses / >
      }
      /> <
      Route path = "/Signup"
      element = {
          < SignUp / >
      }
      /> <
      Route path = "/Signin"
      element = {
          < SignIn / >
      }
      /> <
      /Routes> <
      /Router> <
      /div>
  )
}

export default App;