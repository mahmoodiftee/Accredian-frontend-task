import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
    TextField,
    Button,
    Typography,
    Container,
    Paper,
    CssBaseline,
} from "@mui/material";
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
    marginTop: "20px",
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
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = async (e) => {
        e.preventDefault();
        const userInfo = { email, password };

        if (password.length < 6) {
            toast.error("Password must be at least 6 characters")
        }
        if (!/[A-Z]/.test(password)) {
            toast.error("Password must contain one uppercase letter")
        }
        if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
            toast.error("Password must contain one special character such as ( @ )")
        }

        axios.post('http://localhost:8081/login', userInfo)
            .then(res => {
                if (res.data === "success") {
                    setUser(userInfo.email)
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
        <ThemeProvider theme={theme}>
            <StyledContainer component="main">
                <CssBaseline />
                <StyledPaper elevation={3}>
                    <Typography variant="h4" align="center" fontWeight={600} color={'#403f3f'} gutterBottom>
                        SignIn
                    </Typography>
                    <form
                        onSubmit={handleSignIn}
                        style={{ width: "100%", padding: "0 15px" }}
                    >
                        <div className="w-full flex justify-center items-center">
                            <StyledTextField
                                label="Name"
                                variant="outlined"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
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
                            <StyledButton type="submit" variant="contained">
                                SignIn
                            </StyledButton>
                        </div>

                        <Typography variant="body2" align="center" marginTop={2} fontWeight={500}>
                            Already have an account?{" "}
                            <StyledLink to="/login">SignUp</StyledLink>
                        </Typography>
                    </form>
                </StyledPaper>
            </StyledContainer>
        </ThemeProvider>
    );
};

export default Registration;

const Login = () => {
    const [user, setUser] = useState();
    const handleSignIn = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const userInfo = { email, password };

        axios.post('http://localhost:8081/login', userInfo)
            .then(res => {
                if (res.data === "success") {
                    setUser(userInfo.email)
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
        <div className="mt-10 h-screen">
            <div className="flex flex-col justify-center items-center ">
                <div className="max-w-[600px] mb-10 lg:px-10 relative flex flex-col rounded-xl border bg-white bg-clip-border  text-[#403F3F] shadow-none">
                    <p className="block w-[60%] mx-auto border-b-2 py-2 text-center text-3xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        Login
                    </p>
                    <form
                        onSubmit={handleSignIn}
                        className="mt-4 mb-4 w-80 max-w-screen-lg"
                    >
                        <div className="mb-4 flex flex-col gap-4">
                            <div className="relative h-10 w-[80%] mx-auto min-w-[200px]">
                                <input
                                    className="peer rounded-lg h-full w-full  border border-blue-gray-200 border-t-transparent bg-[#F3F3F3] p-5  text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#403F3F] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    placeholder=" "
                                    type="email"
                                    name="email"
                                    required
                                />
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[9px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[9px] peer-focus:leading-tight peer-focus:text-[#403F3F] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#403F3F] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#403F3F] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Enter your Email
                                </label>
                            </div>
                            <div className="relative h-10 w-[80%] mx-auto min-w-[200px]">
                                <input
                                    type="password"
                                    className="peer rounded-lg h-full w-full  border border-blue-gray-200 border-t-transparent bg-[#F3F3F3] p-5  text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#403F3F] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    placeholder=" "
                                    name="password"
                                    required
                                />
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[9px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[9px] peer-focus:leading-tight peer-focus:text-[#403F3F] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#403F3F] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#403F3F] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Enter your Password
                                </label>
                            </div>
                        </div>

                        <button
                            className="mt-4 block w-[80%] mx-auto select-none rounded-lg bg-[#403F3F] py-3 px-6 text-center align-middle  text-xs font-bold uppercase text-white shadow-md shadow-[#403F3F]/20 transition-all hover:shadow-lg hover:shadow-[#403F3F]/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="submit"
                            data-ripple-light="true"
                        >
                            Sign In
                        </button>
                        <p className="mt-4 text-[12px] block text-center font-normal leading-relaxed  text-[#403F3F] antialiased">
                            don't have an account?
                            <Link
                                to={"/"}
                                className="font-medium text-[#292929] transition-colors hover:text-[#777676]"
                                href="#"
                            >
                                Register
                            </Link>
                        </p>
                    </form>
                </div>
                {user && (
                    <p className="mt-4 text-2xl font-bold block text-center leading-relaxed  text-[#403F3F] antialiased">
                        Welcome, {user}!
                    </p>
                )}
            </div>
        </div>
    );
};

export default Login;