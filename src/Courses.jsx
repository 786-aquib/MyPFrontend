import {
  useEffect,
  useState
} from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button"

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
      function callback2(data) {
          setCourses(data.courses);
          console.log(data);
      }

      function callback1(res) {
          res.json().then(callback2);
      }
      fetch("https://chartandcontact.onrender.com/admin/courses", {
          method: "GET",
          headers: {
              "Authorization": "Bearer " + localStorage.getItem("token")
          }
      }).then(callback1);
  }, []);

  return < div style = {
      {
          display: "flex",
          justifyContent: "center"
      }
  } > {
      courses.map(course => {
              return < Course course = {
                  course
              }
              /> }
          )
      } </div>
  }

  function Course(prop) {
      return<Card variant = "outlined"
      style = {
              {
                  width: 400,
                  margin: 10,
                  border: "2px solid black",
                  minHeight: 300
              }
          } >
          <div style = {
              {
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "GrayText"
              }
          } >
          <Typography variant = "h5" > {
              prop.course.title
          }
          </Typography>
          </div>
          <div style = {
              {
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "GrayText"
              }
          } >
          <Typography variant = "subtitle" > {
              prop.course.description
          } </Typography>
          </div>
          <img src={prop.course.imageLink} style={{width:400}}></img>
          </Card>
       }


  export default Courses;