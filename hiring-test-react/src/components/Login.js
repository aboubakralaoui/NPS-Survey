import React, { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import axios from "axios";
import api from "../assets/api";

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const onSubmit = async (e) => {
        e.preventDefault();
        if (!username || !password) {
            alert("Please fill in all fields");
            return;
        }
        axios
            .post(`${api.api}/login`, {
                username: username,
                password: password,
            })
            .then((res) => {
                const data = res.data;
                console.log(data.token);
                const date = new Date();
                date.setHours(date.getHours() + 1);
                Cookies.set(
                    "auth",
                    JSON.stringify({
                        auth: true,
                        token: data.token,
                    }),
                    { expires: date }
                );
                setUsername("");
                setPassword("");
                navigate("/dashboard");
            })
            .catch((err) => {
                console.log(err.response);
            });
    };

    return (
        <div className="container">
            <form className="add-form" onSubmit={onSubmit}>
                <div className="form-control">
                    <label style={{ color: "#fff" }} for="username">
                        username
                    </label>
                    <input
                        type="text"
                        id="username"
                        placeholder="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <label style={{ color: "#fff" }} for="password">
                        password
                    </label>
                    <input
                        type="password"
                        id="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button
                    className="btn"
                    style={{ background: "#db8d18" }}
                    type="submit"
                >
                    Login
                </button>
                <button className="btn">
                    <a
                        href="/"
                        style={{ color: "#fff", textDecoration: "none" }}
                    >
                        Vote
                    </a>
                </button>
            </form>
        </div>
    );
};

export default Login;
