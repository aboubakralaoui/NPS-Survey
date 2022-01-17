import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Form from "./components/Form";
import Dashboard from "./components/Dashboard";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Form />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/dashboard" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
