import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { TextField, Button, Typography, Container, Paper, CssBaseline, } from "@mui/material";
import { styled } from "@mui/system";
import axios from "axios";
import toast from "react-hot-toast";

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

const Registration = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = async (e) => {
        e.preventDefault();
        const userInfo = { username, email, password };
        if (password !== confirmPassword) {
            toast.error("Confirmation Password didn't match");
            return;
        }

        if (password.length < 6) {
            toast.error("Password must be at least 6 characters");
            return;
        }
        if (!/[A-Z]/.test(password)) {
            toast.error("Password must contain one uppercase letter");
            return;
        }
        if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
            toast.error("Password must contain one special character such as ( @ )");
            return;
        }

        axios
            .post("http://localhost:8081/signup", userInfo)
            .then((res) => {
                if (res.data.status === "emailAlreadyUsed") {
                    toast.error("Email is already used. Please use a different email.");
                } else if (res.data.status === "success") {
                    toast.success("User created successfully");
                    navigate("/login");
                } else {
                    toast.error("Failed to create user");
                }
            })
            .catch((err) => {
                console.error(err);
                toast.error("An error occurred while creating the user.");
            });
        }

        return (
            <ThemeProvider theme={theme}>
                <StyledContainer component="main">
                    <CssBaseline />
                    <StyledPaper elevation={3}>
                        <Typography
                            variant="h4"
                            align="center"
                            fontWeight={600}
                            color={"#403f3f"}
                            gutterBottom
                        >
                            SignUp
                        </Typography>
                        <form onSubmit={handleSignUp} style={{ width: "100%", padding: "0 15px" }}>
                            <div className="w-full flex justify-center items-center">
                                <StyledTextField
                                    label="Username"
                                    variant="outlined"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="w-full flex justify-center items-center">
                                <StyledTextField
                                    label="Email"
                                    variant="outlined"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
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
                                <StyledTextField
                                    label="Confirm Password"
                                    variant="outlined"
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="w-full flex justify-center items-center">
                                <StyledButton type="submit" variant="contained">
                                    Sign Up
                                </StyledButton>
                            </div>

                            <Typography
                                variant="body2"
                                align="center"
                                marginTop={2}
                                fontWeight={500}
                            >
                                Already have an account?{" "}
                                <StyledLink to="/login">SignIn</StyledLink>
                            </Typography>
                        </form>
                    </StyledPaper>
                </StyledContainer>
            </ThemeProvider>
        );
    };

    export default Registration;
