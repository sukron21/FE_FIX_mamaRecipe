import React from 'react'
import StyleCodeReset from './CodeReset.module.css'
import Logo from '../../asset/img/Group697.svg';
import { Link } from "react-router-dom";

const CodeReset = () => {
  return (
    <>
        <div className="container-fluid">
      <div className="row">
        {/* <!-- leftside --> */}
        <div className={`col-md-6 ${StyleCodeReset.leftside}`}>
          <img src={Logo} alt="logo" className={StyleCodeReset.logo}/>
        </div>
        {/* <!-- rightside --> */}
        <div className="col-md-6 d-flex align-items-center rightside">
          <form className="row g-3 m-5">
            <div>
              <hr/>
              <label htmlFor="label" className={StyleCodeReset.code}> Code 6 Digit </label>
              <input type="text" className="form-control" id={StyleCodeReset.inputCode} />
            </div>

            <div className="d-grid gap-2">
              <button type="submit" className={`btn ${StyleCodeReset.btnreset}`}>
              <Link to="/resetpassword">Reset Password</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
    
  )
}

export default CodeReset