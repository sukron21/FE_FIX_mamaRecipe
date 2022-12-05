import React from 'react'
import StyleResetPassword from './ResetPass.module.css'
import Logo from '../../asset/img/Group697.svg';
import { Link } from "react-router-dom";

const ResetPassword = () => {
  return (
    <>
        <div className="container-fluid">
      <div className="row">
        {/* <!-- leftside --> */}
        <div className={`col-md-6 ${StyleResetPassword.leftside}`}>
          <img src={Logo} alt="logo" className={StyleResetPassword.logo}/>
        </div>
        {/* <!-- rightside --> */}
        <div className="col-md-6  d-flex align-items-center rightside">
          <form className="row g-3 m-5">
            <div>
              <hr/>
              <label htmlFor="label" className={StyleResetPassword.cnp}> Create New Password </label>
              <input type="text" className="form-control" id="{StyleResetPassword.inputCode}" />
              <label htmlFor="label" className={StyleResetPassword.newpass}> New Password </label>
              <input type="text" className="form-control" id={StyleResetPassword.inputCode} />
            </div>
            <div className="form-check">
                <input className={`form-check-input  ${StyleResetPassword.checkbox}`} type="checkbox" value="" id="flexCheckDefault"/>
                <label className={`form-check-label ${StyleResetPassword.term}`} htmlFor="flexCheckDefault">
                    I agree of term conditions
                </label>
            </div>
            <div className="d-grid gap-2">
              <button type="submit" className={`btn ${StyleResetPassword.btnreset}`}>
                <Link to="/">Reset Password</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default ResetPassword