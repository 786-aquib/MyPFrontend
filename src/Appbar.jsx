import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
    useNavigate
} from "react-router-dom";
import {
    useEffect,
    useState
} from "react";

function Appbar() {
    const navigate = useNavigate();
    const [userEmail, setUserEmail] = useState(null);
    useEffect(() => {
        function callback2(data) {
            if (data.username) {
                setUserEmail(data.username);
            }
        }

        function callback1(res) {
            res.json().then(callback2);
        }
        fetch("https://chartandcontact.onrender.com/admin/me", {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        }).then(callback1);
    }, []);
    if (userEmail) {
        return ( <
            div style = {
                {
                    display: "flex",
                    justifyContent: "space-between",
                    padding: 4
                }
            } >
            <
            div >
            <
            Button variant = {
                "contained"
            }
            onClick = {
                () => {
                    window.location = "/"
                }
            } >
            My Web App <
            /Button> <
            /div> <
            div style = {
                {
                    display: "flex"
                }
            } >
            <
            Typography variant = "h5" > {
                userEmail
            } < /Typography> <
            div style = {
                {
                    marginRight: 10
                }
            } >
            <
            Button variant = {
                "contained"
            }
            onClick = {
                () => {
                    localStorage.setItem("token", null);
                    window.location = "/SignUp"
                }
            } >
            Logout <
            /Button> <
            /div> <
            /div> <
            /div>
        )
    }
    return ( <
        div style = {
            {
                display: "flex",
                justifyContent: "space-between",
                padding: 4
            }
        } >
        <
        div >
        <
        Button variant = {
            "contained"
        }
        onClick = {
            () => {
                window.location = "/"
            }
        } >
        My Web App <
        /Button> <
        /div> <
        div >
        <
        Button variant = {
            "contained"
        }
        onClick = {
            () => {
                navigate("/SignUp")
            }
        } >
        Signup <
        /Button> <
        Button variant = {
            "contained"
        }
        onClick = {
            () => {
                navigate("/SignIn")
            }
        } >
        Signin < /Button> <
        /div> <
        /div>
    )
}

export default Appbar;