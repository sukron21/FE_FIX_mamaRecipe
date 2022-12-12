import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import StyleLogin from './Login.module.css';
import Logo from '../../asset/img/Group697.svg';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/action/login";

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const [form, setform] = useState({
        email: '',
        password: '',
    })

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(form)
        dispatch(
            login(form)
            .then((response) => {
                console.log(response.data)
                if (response.data.status !== 'success') {
                    alert(response.data.message)
                } else {
                    alert("berhasil Login")
                    localStorage.setItem("name", JSON.stringify(response.data.token.data))
                    localStorage.setItem("token", response.data.token.token);
                    localStorage.setItem("data", JSON.stringify(response.data.token.data));
                    return navigate('/landingpage')}
                })
            .catch((err) => {
                console.log(err);
            })
        )     
    }

    return (
        <>
            <div className="container-fluid ">
                <div className="row">
                    <div className={`col-md-6  ${StyleLogin.leftside}`}>
                        <img src={Logo} alt="logo" className={StyleLogin.logo} />
                    </div>
                    <div className="col-md-6 d-flex align-items-center rightside">
                        <form onSubmit={(e) => onSubmit(e)} className="row g-3 m-5">
                            <h1 className={StyleLogin.welcome}>Welcome</h1>
                            <p className={StyleLogin.sublogin}>Log in into your exiting account</p>
                            <hr />
                            <label htmlFor="email" className={StyleLogin.email}> E-mail</label>
                            <input type="email" className="form-control" id={StyleLogin.inputEmail} placeholder="test@email.com" onChange={(e) => setform({ ...form, email: e.target.value })} />
                            <label htmlFor="password" className={StyleLogin.password}> Password</label>
                            <input type="password" className="form-control" id={StyleLogin.inputPassword} placeholder="Password" onChange={(e) => setform({ ...form, password: e.target.value })} />
                            <div className="form-check">
                                <input className={`form-check-input ${StyleLogin.checkbox}`} type="checkbox" value="" id={StyleLogin.flexCheckDefault} />
                                <label className={`form-check-label ${StyleLogin.term}`} htmlFor="flexCheckDefault">
                                    I agree of term conditions
                                </label>
                            </div>
                            <div className="d-grid gap-2">
                                <button type="submit" className={`btn ${StyleLogin.btncustom}`}>
                                    Login
                                </button>
                            </div>
                            <div className={StyleLogin.forgot}>
                                <Link to="/forgot">Forgot Password ?</Link>
                            </div>
                            <hr />
                            <div className="text-center">
                                <p className={StyleLogin.signup}>Don't have a account? <Link to="/register">
                                    <span className={StyleLogin['signup-page']}>Sign Up</span> </Link> </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;