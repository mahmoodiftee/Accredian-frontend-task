import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
    borderRadius: "15px", // Added border radius
});

const StyledTextField = styled(TextField)({
    width: "100%",
    margin: "10px 0",
    borderRadius: "8px", // Added border radius
});

const StyledButton = styled(Button)({
    width: "100%",
    marginTop: "20px",
    backgroundColor: "#403F3F",
    color: "#fff",
    borderRadius: "8px", // Added border radius
    "&:hover": {
        backgroundColor: "#292929",
    },
});

const StyledLink = styled(Link)({
    marginTop: "20px",
    fontSize: "12px",
    color: "#292929",
    textDecoration: "none",
    "&:hover": {
        color: "#777676",
    },
});
const Registration = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = async (e) => {
        e.preventDefault();
        const userInfo = { name, email, password };

        if (password.length < 6) {
            toast.error("Password must be at least 6 characters")
        }
        if (!/[A-Z]/.test(password)) {
            toast.error("Password must contain one uppercase letter")
        }
        if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
            toast.error("Password must contain one special character such as ( @ )")
        }

        axios.post('http://localhost:8081/signup', userInfo)
            .then(res => {
                if (res.status === 200 && res.data.affectedRows > 0) {
                    toast.success("User created successfully");
                    navigate('/login');
                } else {
                    toast.error("Failed to create user");
                }
            })
            .catch(err => toast.error(err));
    };

    return (
        <StyledContainer component="main" maxWidth="xs">
            <CssBaseline />
            <StyledPaper elevation={3}>
                <Typography variant="h4" align="center" gutterBottom>
                    Register
                </Typography>
                <form
                    onSubmit={handleSignUp}
                    style={{ width: "100%", padding: "0 15px" }} // Added width and padding
                >
                    <StyledTextField
                        label="Name"
                        variant="outlined"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

                    <StyledTextField
                        label="Email"
                        variant="outlined"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <StyledTextField
                        label="Password"
                        variant="outlined"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <StyledButton type="submit" variant="contained">
                        Register
                    </StyledButton>

                    <Typography variant="body2" align="center">
                        Already have an account?{" "}
                        <StyledLink to="/login">Sign In</StyledLink>
                    </Typography>
                </form>
            </StyledPaper>
        </StyledContainer>
    );
};

export default Registration;
