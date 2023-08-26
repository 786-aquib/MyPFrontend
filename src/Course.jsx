import {
  useParams
} from "react-router-dom";

import {
  useEffect,
  useState
} from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function Course() {

  let {
      CourseId
  } = useParams();
  const [Courses, setCourses] = useState([]);
  useEffect(() => {
      function callback2(data) {
          setCourses(data.Courses);
      }

      function callback1(res) {
          res.json().then(callback2);
      }
      fetch("https://chartandcontact.onrender.com/admin/Courses", {
          method: "GET",
          headers: {
              "Authorization": "Bearer " + localStorage.getItem("token")
          }
      }).then(callback1);
  }, []);

  let Course = null;
  for (let i = 0; i < Courses.length; i++) {
      if (Courses[i].id == CourseId) {
          Course = Courses[i];
      }
  }
  if (!Course) {
      return < div >
          Loading.... <
          /div>
  }
  return < div style = {
          {
              display: "flex",
              justifyContent: "center"
          }
      } >
      <
      OldCard Course = {
          Course
      }
  /> <
  UpdateCard Course = {
      Course
  }
  /> <
  /div>
}

function OldCard(props) {
  const Course = props.Course;
  return < div style = {
          {
              display: "flex",
              justifyContent: "center"
          }
      } >
      <
      Card variant = "outlined"
  style = {
          {
              margin: 10,
              width: 300,
              minHeight: 200
          }
      } >
      <
      Typography variant = "h5"
  style = {
          {
              display: "flex",
              justifyContent: "center"
          }
      } > {
          Course.title
      } < /Typography>

      <
      Typography variant = "subtitle1"
  style = {
          {
              display: "flex",
              justifyContent: "center"
          }
      } > {
          Course.description
      } < /Typography> <
      img src = {
          Course.imageLink
      }
  style = {
          {
              width: 300
          }
      } > < /img> <
      /Card> <
      /div>
}

function UpdateCard(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageLink, setImageLink] = useState("");
  const Course = props.Course;
  return ( <
      >
      <
      div style = {
          {
              display: "flex",
              justifyContent: "center"
          }
      } >
      <
      /div>

      <
      div style = {
          {
              display: "flex",
              justifyContent: "center"
          }
      } >
      <
      Card variant = "outlined"
      style = {
          {
              width: 300,
              padding: 20
          }
      } >
      <
      Typography >
      Update Course Details <
      /Typography> <
      TextField onChange = {
          (e) => {
              setTitle(e.target.value);
          }
      }
      fullWidth = {
          true
      }
      label = "Title"
      variant = "outlined" /
      >
      <
      br / > < br / >
      <
      TextField onChange = {
          (e) => {
              setDescription(e.target.value);
          }
      }
      fullWidth = {
          true
      }
      label = "Description"
      variant = "outlined" /
      >
      <
      br / > < br / >
      <
      TextField onChange = {
          (e) => {
              setImageLink(e.target.value);
          }
      }
      fullWidth = {
          true
      }
      label = "Image Link"
      variant = "outlined" /
      >
      <
      br / > < br / >

      <
      Button variant = "contained"
      size = {
          "large"
      }
      onClick = {
          () => {
              function callback2(data) {
                  alert("Course Updated!!!")
              }

              function callback(res) {
                  res.json().then(callback2);
              }
              fetch("https://chartandcontact.onrender.com/admin/Courses/" + Course.id, {
                  method: "PUT",
                  body: JSON.stringify({
                      title,
                      description,
                      imageLink: imageLink,
                      published: true
                  }),
                  headers: {
                      "Content-type": "application/json",
                      "Authorization": "Bearer " + localStorage.getItem("token")
                  }
              }).then(callback);
          }
      } >
      Update Courses!! < /Button> <
      /Card> <
      /div> <
      />
  )
}

export default Course;