import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { TextField, Button, Typography, Container, Paper, CssBaseline, } from "@mui/material";
import { styled } from "@mui/system";


const theme = createTheme({
    components: {
        MuiInputBase: {
            styleOverrides: {
                root: {
                    "&:hover fieldset": {
                        borderColor: "#F3f3F3",
                    },
                    "&.Mui-focused fieldset": {
                        borderColor: "#F3f3F3",
                    },
                },
            },
        },
    },
});
const StyledContainer = styled(Container)({
    marginTop: "10vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
});

const StyledPaper = styled(Paper)({
    width: "80%",
    maxWidth: "400px",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "15px",
    boxShadow: "none",
    border: "2px solid #F3F3F3",
});

const StyledTextField = styled(TextField)({
    width: "85%",
    margin: "7px 0",
    backgroundColor: "#F3F3F3",
    borderRadius: "6px",
    "& .MuiInputLabel-root": {
        color: "#403F3F",
    },
    "& .MuiInputLabel-outlined.Mui-focused": {
        color: "#403F3F",
    },
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "#F3F3F3",
            color: "#403F3F",
        },
        "&:hover fieldset": {
            borderColor: "#403F3F",
            color: "#403F3F",
        },
        "&.Mui-focused fieldset": {
            borderColor: "#403F3F",
            color: "#403F3F",
        },
    },
});


const StyledButton = styled(Button)({
    width: "85%",
    marginTop: "7px",
    backgroundColor: "#403F3F",
    color: "#fff",
    borderRadius: "8px",
    "&:hover": {
        backgroundColor: "#292929",
    },
});

const StyledLink = styled(Link)({
    marginTop: "20px",
    fontSize: "12px",
    fontWeight: "600",
    color: "#292929",
    textDecoration: "none",
    "&:hover": {
        color: "#777676",
    },
});
const Login = () => {
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState("");

    const handleSignIn = async (e) => {
        e.preventDefault();
        const userInfo = { identifier , password };
        axios.post('http://localhost:8081/login', userInfo)
            .then(res => {
                if (res.data === "success") {
                    setUser(userInfo.identifier)
                    console.log(res);
                    toast.success("User successfully logged in");
                } else if (res.data === "incorrectPassword") {
                    console.log(res);
                    toast.error("Incorrect password");
                } else if (res.data === "incorrectEmail") {
                    console.log(res);
                    toast.error("Incorrect email");
                } else {
                    console.log(res);
                    toast.error("An error occurred during login");
                }
            })
            .catch(err => {
                console.error(err);
                toast.error(err);
            });
    };

    return (
        <div className="flex flex-col justify-center items-center ">
            <ThemeProvider theme={theme}>
                <StyledContainer component="main">
                    <CssBaseline />
                    <StyledPaper elevation={3}>
                        <Typography variant="h4" align="center" fontWeight={600} color={'#403f3f'} gutterBottom>
                            Login
                        </Typography>
                        <form
                            onSubmit={handleSignIn}
                            style={{ width: "100%", padding: "0 15px" }}
                        >
                            <div className="w-full flex justify-center items-center">
                                <StyledTextField
                                    label="Email or Username"
                                    variant="outlined"
                                    value={identifier}
                                    onChange={(e) => setIdentifier(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="w-full flex justify-center items-center">
                                <StyledTextField
                                    label="Password"
                                    variant="outlined"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="w-full flex justify-center items-center">
                                <StyledButton type="submit" variant="contained">
                                    Login
                                </StyledButton>
                            </div>

                            <Typography variant="body2" align="center" marginTop={2} fontWeight={500}>
                                Already have an account?{" "}
                                <StyledLink to="/">SignUp</StyledLink>
                            </Typography>
                        </form>
                    </StyledPaper>
                </StyledContainer>
            </ThemeProvider>
            {user && (
                <p className="mt-4 text-2xl font-bold block text-center leading-relaxed  text-[#403F3F] antialiased">
                    Welcome, {user}!
                </p>
            )}
        </div>
    );
};

export default Login;
