import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

function SignIn() {
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
        Welcome Back!!!.SignIn below <
        /Typography> <
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
        TextField fullWidth = {
            true
        }
        id = "outlined-basic"
        label = "Username"
        variant = "outlined" /
        >
        <
        br / >
        <
        br / >
        <
        TextField fullWidth = {
            true
        }
        id = "outlined-basic"
        label = "Password"
        variant = "outlined" /
        >
        <
        br / > < br / >
        <
        Button variant = "contained"
        size = {
            "large"
        } > SignIn < /Button> <
        /Card> <
        /div> <
        />
    )
}
export default SignIn