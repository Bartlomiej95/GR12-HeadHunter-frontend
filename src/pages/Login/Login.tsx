import React, {useContext, useState} from "react";
import '../../styles/style.scss';
import {LoginForm} from "./LoginComponents/LoginForm";
import {Route, Routes} from "react-router-dom";
import {Register} from "./Register/Register";
import {ForgotPassword} from "./ForgotPassword/ForgotPassword";

export const Login = () => {

    return(
        <div className="t-login">

            <Routes>
                <Route path="/" element={<LoginForm/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/forgot-password" element={<ForgotPassword/>} />
            </Routes>
        </div>
    )
}