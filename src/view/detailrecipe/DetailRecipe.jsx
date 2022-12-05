import React, { useState, useEffect } from 'react'
import StyleDetailRecipe from './DetailRecipe.module.css'
import titleimage from '../../asset/img/sandwichdetail.png';
import bookmarkimg from '../../asset/img/bookmark.png';
import likedimg from '../../asset/img/liked.png';
import photocomment from '../../asset/img/photodetail.png'
import Footer from '../../Component/Footer';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { detailrecipe } from '../../redux/action/detailrecipe';

const DetailRecipe = () => {
    //get action
    const dispatch = useDispatch()
     // useselector untuk get reducer
    const detailya = useSelector((state) => {
        return state.detailya
    })

    console.log(detailya)
    
    const { id } = useParams();
    // const [detail, setDetail] = useState([]);
    //hook useEffect
    useEffect(() => {
        dispatch(
            detailrecipe(id)
        )
    }, []);
    //function "getPostById"
    // const getById = async () => {
    //     // addrecipe(id)
    //     const response = await 
    //     axios.get(
    //         `${process.env.REACT_APP_BACKEND_URL}/recipe/${id}`
    //     );
    //     //get response data
    //     const data = await response.data;
    //     //assign data to state
    //     setDetail(data);
    // };

    return (
        <>
            {/* <!-- navbar --> */}
            <nav className="navbar navbar-expand-lg fixed-top bg-white">
                <div className="container">
                    {/* <!-- <a className="navbar-brand" href="#">Mama Recipe</a> --> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item mx-5">
                                <Link className={`${StyleDetailRecipe['nav-link']} active`} aria-current="page" to="/landingpage">Home</Link>
                            </li>
                            <li className="nav-item mx-5">
                                <Link className={`${StyleDetailRecipe['nav-link']} active`} to="/addrecipe">Add Recipe</Link>
                            </li>
                            <li className="nav-item mx-5">
                                <Link className={`${StyleDetailRecipe['nav-link']} active`} to="/profile">Profile</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <!-- judul dan gambar --> */}
            <section className="judul">
                <div className="container-fluid">
                {
                    detailya.data.map((item, index) => (
                        <div className="row">
                        <div key={index} className="col-md-12 mx-auto align-items-center ">
                            <h1 className={`text-center ${StyleDetailRecipe.title}`}>
                            {item.title} 
                            </h1>
                        </div>
                    </div>
                    ))
                }
                    
                {
                    detailya.data.map((item, index) => (
                        <div className="row">
                        <div  key={index} className=" col-md-8 offset-4 mx-auto">
                            <div className={StyleDetailRecipe.foodbox}>
                                <img src={`${process.env.REACT_APP_BACKEND_URL}/${item.photo}`} className={`mx-auto d-block ${StyleDetailRecipe.titleimg}`} alt="" />
                                <button type="button" className={StyleDetailRecipe.bookmark} >
                                    <img src={bookmarkimg} alt="" />
                                </button>
                                <button type="button" className={StyleDetailRecipe.liked}>
                                    <img src={likedimg} alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                    ))
                }
                </div>
            </section>
            {/* <!-- recipe --> */}
            <section className="mt-5 recipe">
                <div className="container">
                    {
                        detailya.data.map((item, index) => (                      
                            <div className="row">
                                <div key={index} className="col-md-12">
                                    <h1 className={`text-start ${StyleDetailRecipe.ingredients}`}> Ingredients </h1>
                                    <p className={`text-start mt-4 ${StyleDetailRecipe.subingredients}`} />
                                    {item.ingredients} 
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
            {/* <!-- video step --> */}
            <section className="mt-5 videostep">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 d-flex flex-column">
                            <h1 className={`text-start ${StyleDetailRecipe.videostep}`}> Video Step </h1>
                            <Link to="/detailvideo"><button type="button"
                                className={`btn ${StyleDetailRecipe['btn-labeled']} btn-warning mt-3 mb-4`}>
                                <span className="btn-label"><i className="fa-solid fa-play" style={{ color: 'white' }}></i></span>
                            </button></Link>
                            <Link to="/detailvideo"><button type="button"
                                className={`btn ${StyleDetailRecipe['btn-labeled']} btn-warning mt-3 mb-4`}>
                                <span className="btn-label"><i className="fa-solid fa-play" style={{ color: 'white' }}></i></span>
                            </button></Link>
                            <Link to="/detailvideo"><button type="button"
                                className={`btn ${StyleDetailRecipe['btn-labeled']} btn-warning mt-3 mb-4`}>
                                <span className="btn-label"><i className="fa-solid fa-play" style={{ color: 'white' }}></i></span>
                            </button></Link>
                            <Link to="/detailvideo"><button type="button"
                                className={`btn ${StyleDetailRecipe['btn-labeled']} btn-warning mt-3 mb-4`}>
                                <span className="btn-label"><i className="fa-solid fa-play" style={{ color: 'white' }}></i></span>
                            </button></Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--  comments --> */}
            <section className="mt-5 comments">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 d-flex flex-column justify-content-center ">
                            <div className="mb-5 form-floating">
                                <textarea className={`form-control ${StyleDetailRecipe.comment}`} placeholder="Leave a comment here"
                                    id="floatingTextarea2"></textarea>
                                <label htmlFor="floatingTextarea2" className="labelcomment">Comment :</label>
                            </div>
                            <button type="button" className={`btn d-grid gap-2 col-4 mx-auto text-white ${StyleDetailRecipe['btn-send']}`}>Send</button>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- comment user --> */}
            <section className="my-5 commentuser">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className={`mb-5 ${StyleDetailRecipe.titlecomment}`}>
                                Comment
                            </h1>
                            <img src={photocomment} alt="" className={StyleDetailRecipe['photo-comment']} />
                            <h1 className={`fs-5 ${StyleDetailRecipe.username}`}>
                                Ayudia
                            </h1>
                            <p className={StyleDetailRecipe.commentrecipe}>
                                Nice recipe. simple and delicious, thankyou
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- footer --> */}
            <Footer />
        </>
    )
}

export default DetailRecipe