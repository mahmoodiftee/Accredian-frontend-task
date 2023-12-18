import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TextField, Button, Typography, Container, Paper } from "@mui/material";
import { styled } from "@mui/system";
import axios from "axios";
import toast from "react-hot-toast";

const StyledPaper = styled(Paper)({
    maxWidth: "600px",
    margin: "auto",
    padding: "20px",
    marginTop: "10vh",
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
        <Container>
            <StyledPaper elevation={3}>
                <Typography variant="h4" align="center" gutterBottom>
                    Register
                </Typography>
                <form onSubmit={handleSignUp}>
                    <TextField
                        label="Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <TextField
                        label="Password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        type="submit"
                        style={{ marginTop: "20px" }}
                    >
                        Register
                    </Button>
                    <Typography
                        variant="body2"
                        style={{ marginTop: "20px" }}
                        align="center"
                    >
                        Already have an account?{" "}
                        <Link to="/login">Sign In</Link>
                    </Typography>
                </form>
            </StyledPaper>
        </Container>
    );
};

export default Registration;
