import React from "react";
import axios from "axios";
import Header from "./Header";
import { useState } from "react";
import api from "../assets/api";

const Form = () => {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const [value, setValue] = useState("");
    const onSubmit = async (e) => {
        if (!value) {
            alert("Please check a value");
            return;
        }
        const res = await axios.post(`${api.api}/vote`, { value: value });
        setValue("");
    };

    return (
        <div className="section">
            <Header />
            <form onSubmit={onSubmit}>
                <div class="col-12 pb-5">
                    {arr.map((i) => {
                        return (
                            <>
                                <input
                                    className="checkbox-tools"
                                    type="radio"
                                    id={i}
                                    value={i}
                                    onChange={(e) => setValue(e.target.value)}
                                />
                                <label for={i}>{i}</label>
                            </>
                        );
                    })}
                </div>
                <button
                    className="btn"
                    style={{ background: "#db8d18" }}
                    type="submit"
                >
                    Submit
                </button>
                <button className="btn">
                    <a
                        href="/login"
                        style={{ color: "#fff", textDecoration: "none" }}
                    >
                        Login
                    </a>
                </button>
            </form>
        </div>
    );
};

export default Form;
