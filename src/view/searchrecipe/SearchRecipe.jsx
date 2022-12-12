import React, { useState, useEffect } from 'react'
import StyleSearchRecipe from './SearchRecipe.module.css'
import titleimage from '../../asset/img/sandwichdetail.png';
import bookmarkimg from '../../asset/img/bookmark.png';
import likedimg from '../../asset/img/liked.png';
import photocomment from '../../asset/img/photodetail.png'
import Footer from '../../Component/Footer';
import { Link, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { searchrecipedetail } from '../../redux/action/recipe';
import { useDispatch } from 'react-redux';

const SearchRecipe = () => {
    const dispatch = useDispatch()

    const [queryParam] = useSearchParams();
    const titleSearch = queryParam.get("title");
    const [title, setTitle] = useState([]);

    useEffect(() => {
             searchrecipedetail(titleSearch)
            .then((res) => {
                console.log(res.data)
                setTitle(res.data);
            })
            .catch((err) => {
                console.log(err);
            })

    }, []);
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
                                <Link className={`${StyleSearchRecipe['nav-link']} active`} aria-current="page" to="/landingpage">Home</Link>
                            </li>
                            <li className="nav-item mx-5">
                                <Link className={`${StyleSearchRecipe['nav-link']} active`} to="/addrecipe">Add Recipe</Link>
                            </li>
                            <li className="nav-item mx-5">
                                <Link className={`${StyleSearchRecipe['nav-link']} active`} to="/profile">Profile</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* JUDUL */}
            <section className='judul'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 align-items-center">
                            <h1 className={`text-center ${StyleSearchRecipe.title}`}>
                                {/* RECIPE : {titleSearch} */}
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            {/* DATA RECIPE */}
            <section className='recipe'>
                <div className='container-fluid'>
                    <div className="row d-flex flex-row ">
                        {
                            title.map((item) => (
                                <div className={`col-md-4 my-3 d-flex flex-row ${StyleSearchRecipe.foodbox}`}>
                                    <div className=''>
                                    <img src={item.photo_url} className={StyleSearchRecipe.gambar} alt='#' />
                                    <p className={`mx-1 ${StyleSearchRecipe.titlefood}`}>
                                        {item.title}
                                    </p>
                                    <div className='d-flex justify-content-center align-items center mt-1'>
                                    <Link to={`/detailrecipe/${item.id}`}> 
                                    
                                    <button className="" type="button" >Detail
                                    </button>
                                    </Link>
                                    </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default SearchRecipe



