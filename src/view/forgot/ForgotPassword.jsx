import React from 'react'
import StyleForgot from './ForgotPass.module.css';
import Logo from '../../asset/img/Group697.svg';
import { Link } from "react-router-dom";

const ForgotPassword = () => {
    return (
        <>
            <div className="container-fluid ">
                <div className="row">
                    {/* <!-- leftside --> */}
                    <div className={`col-md-6 ${StyleForgot.leftside}`}>
                        <img src={Logo} alt="logo" className={StyleForgot.logo} />
                    </div>
                    {/* <!-- rightside --> */}
                    <div className="col-md-6 d-flex align-items-center rightside">
                        <form className="row g-3 m-5">
                            <h1 className={StyleForgot.title}>Forgot Password?</h1>
                            <p className={StyleForgot['sub-title']}>We just need your registered e-mail address <br />
                                to send your password resend</p>
                            <hr className={StyleForgot.line} />
                            <label htmlFor="email" className={StyleForgot.email}> Email </label>
                            <input type="email" className="form-control" id={StyleForgot.inputEmail} placeholder="examplexxx@gmail.com" />
                            <div className="d-grid gap-2">
                                <button type="submit" className={`btn ${StyleForgot.btnemail}`}>
                                    <Link to="/codereset">Send E-mail</Link>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword
