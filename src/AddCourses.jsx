import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import {
    useState
} from "react";

function AddCourses() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imageLink, setImageLink] = useState("");
    return ( <
        >
        <
        div style = {
            {
                paddingTop: 150,
                marginBottom: 10,
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
                width: 400,
                padding: 20
            }
        } >
        <
        TextField onChange = {
            (e) => {
                setTitle(e.target.value);
            }
        }
        fullWidth = {
            true
        }
        label = "Name"
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
        label = "Phone Number"
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
                    alert("Contact Added!!!")
                    window.location = "/"
                }

                function callback(res) {
                    res.json().then(callback2);
                }
                fetch("https://chartandcontact.onrender.com/admin/courses", {
                    method: "POST",
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
        Add Contacts!! < /Button> <
        /Card> <
        /div> <
        />
    )
}
export default AddCourses;