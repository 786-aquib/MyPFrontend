import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import {
    useState
} from "react";


function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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
        Typography variant = "h6" >
        Welcome To My Course.SignUp below <
        /Typography> <
        /div>

        <
        div style = {
            {
                display: "flex",
                justifyContent: "center",
                overflow: "hidden"
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
                setEmail(e.target.value);
            }
        }
        fullWidth = {
            true
        }
        label = "Username"
        variant = "outlined" /
        >
        <
        br / >
        <
        br / >
        <
        TextField onChange = {
            (e) => {
                setPassword(e.target.value);
            }
        }
        fullWidth = {
            true
        }
        label = "Password"
        variant = "outlined"
        type = "Password" /
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
                    localStorage.setItem("token", data.token);
                    window.location = "/"
                }

                function callback(res) {
                    res.json().then(callback2);
                }
                fetch("https://chartandcontact.onrender.com/admin/signup", {
                    method: "POST",
                    body: JSON.stringify({
                        username: email,
                        password: password
                    }),
                    headers: {
                        "Content-type": "application/json"
                    }
                }).then(callback);
            }
        } >
        SignUp < /Button> <
        /Card> <
        /div> <
        />
    )
}
export default SignUp