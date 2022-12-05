import React from 'react'
import style from '../asset/style/style.module.css'

const Footer = () => {
  return (
    <>
        {/* <!-- footer --> */}
    <section className={style.footer}>
        <div className="container-fluid">
            <div className="row">
                <div className={`col-md-12 d-flex flex-column justify-content-center align-items-center ${style['footer-style']}`}>
                    <h1 className="mb-3">
                        Eat, Cook, Repeat
                    </h1>
                    <p>
                        Share your best recipe by uploading here !
                    </p>

                </div>
                <div className={`d-flex flex-row justify-content-center align-items-center  ${style['footer-bottom']}`}
                    >
                    <p className="footer-product  mx-3">
                        Product
                    </p>
                    <p className="footer-company  mx-3">
                        Company
                    </p>
                    <p className="footer-learn  mx-3">
                        Learn more
                    </p>
                    <p className="footer-touch  mx-3">
                        Get in touch
                    </p>
                </div>
                {/* <!-- <div className="pijar" style="background-color:#EFC81A;">
                    <p className="text-end  mx-5" >
                     <i className="fa-regular fa-copyright"></i> Pijar Camp 
                </p>
                </div> --> */}
            </div>
        </div>
    </section>
    </>
  )
}

export default Footer