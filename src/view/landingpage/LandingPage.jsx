import React, { useState } from 'react'
import StyleLanding from './LandingPage.module.css'
import UserIcon from '../../asset/img/Usericon.png'
import PhotoEgg from '../../asset/img/sanwihlanding.png'
import PhotoProfile from '../../asset/img/profile.png'

import Square from '../../asset/img/kotak.png'
import SquareFood from '../../asset/img/kotakfood.png'
import PhotoBread from '../../asset/img/roti.png'
import PhotoBurger from '../../asset/img/burgernewrecipe.png'
import PhotoChickenKare from '../../asset/img/chickenkare.png'
import PhotoBombChicken from '../../asset/img/bomchicken.png'
import PhotoBananaSmothiePop from '../../asset/img/bananasmotiepop.png'
import PhotoCoffreCake from '../../asset/img/coffelavacake.png'
import PhotoSugarSalmon from '../../asset/img/sugarsalmon.png'
import PhotoIndianSalad from '../../asset/img/indiansalad.png'
import Footer from '../../Component/Footer'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'


const LandingPage = () => {
    const data = JSON.parse(localStorage.getItem('data'));
    const navigate = useNavigate()

    const [title, setTitle] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (title != "") {
            axios
                .get(`${process.env.REACT_APP_BACKEND_URL}/recipe/search/${title}`)
                .then((res) => {
                    if (res.data.length > 0) {
                        navigate(`/searchrecipe?title=${title}`);
                    } else {
                        alert("Data Recipe not found");
                    }
                });
        }
    };


    const logout = () => {
        localStorage.clear();
        alert("berhasil")
        return navigate("/");
    };

    return (
        <>
            {/* <!-- navbar --> */}
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container">
                    {/* <!-- <a className="navbar-brand" href="#">Mama Recipe</a> --> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item mx-5">
                                <Link className={`${StyleLanding['nav-link']} ${StyleLanding.active}`} aria-current="page" to="/landingpage">Home</Link>
                            </li>
                            <li className="nav-item mx-5">
                                <Link className={`${StyleLanding['nav-link']} `} to="/addrecipe">Add Recipe</Link>
                            </li>
                            <li className="nav-item mx-5">
                                <Link className={`${StyleLanding['nav-link']} `} to="/profile">Profile</Link>
                            </li>
                        </ul>
                        <div className="secondary-menu">
                            <ul className="navbar-nav">
                                <li className="nav-link"> <Link to="/" className={`${StyleLanding['nav-link']} active`}>
                                    <div className="icon" onClick={logout}>
                                        <img src={PhotoProfile} alt="" style={{height:"50px"}} className='me-3' />
                                        {/* login  */}
                                        {data.name}
                                    </div>
                                </Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            {/* <!-- section hero --> */}
            <section id={StyleLanding.hero}>
                <div className={`${StyleLanding.leftside} px-0`}>
                    <div className={`${StyleLanding.left} g-0`}>
                        <div className={`col-md-12 d-flex flex-column justify-content-center ${StyleLanding.judul}`}>
                            <h1 className={`${StyleLanding.title} col-md-6`}>Discover Recipe & Delicious Food</h1>
                            <form onSubmit={(e) => onSubmitHandler(e)}>
                                <div className={`input-group flex-nowrap ${StyleLanding.cari}`}>
                                    <span className="input-group-text" id="addon-wrapping"><i className="fa fa-search"> </i></span>
                                    <input type="text" className="form-control" id={StyleLanding.cari2} placeholder="search restaurant, food" onChange={(e)=>setTitle(e.target.value)}
                                        aria-describedby="addon-wrapping" />
                                </div>
                            </form>

                        </div>
                    </div>
                    <div className={StyleLanding.decoration}>
                        <img src={PhotoEgg} alt="" />
                    </div>
                </div>
            </section>
            {/* <!-- section  popular for you--> */}
            <section id={StyleLanding.hero2}>
                <div className="container-fluid">
                    <div className={StyleLanding.kotak}>
                        <img src={Square} alt="" />
                        <h1 className={StyleLanding.pfy}> Popular For You !</h1>
                    </div>
                    <div className="row">
                        <div className={`col-md-6 d-flex flex-column  align-items-center ${StyleLanding.popularfood}`}>
                            <img src={SquareFood} alt="" className={StyleLanding.square} />
                            <img src={PhotoBread} alt="" className={StyleLanding.bread} />
                        </div>

                        <div className={`col-md-4 offset-1 d-flex flex-column  ${StyleLanding.quick}`}>
                            <h1>Healthy Bone Broth Ramen (Quick & Easy) </h1>
                            <hr className="line" />
                            <p>Quick + Easy Chicken Bone Broth Ramen - Healthy chicken ramen in a hurry? That’s right! </p>
                            <button type="button"
                                className={`btn d-grid gap-2 col-5  text-white ${StyleLanding['btn-send']}`}> <Link to="/detailrecipe">Learn More</Link> </button>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- new recipe --> */}
            <section className="newrecipe">
                <div className="container-fluid px-0">
                    <div className={StyleLanding.kotak2}>
                        <img src={Square} alt="" />
                        <h1 className={StyleLanding.pfy2}> New Recipe</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-6 burgerfood">
                            <div className={StyleLanding.rectangle}></div>
                            <img src={PhotoBurger} alt="" className={StyleLanding.burger} />
                        </div>
                        <div className={`col-md-4 offset-1 d-flex flex-column justify-content-center ${StyleLanding.quick2}`}>
                            <h1> Healthy Bone Broth Ramen (Quick & Easy)</h1>
                            <hr className="line" />
                            <p>Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That’s right!</p>
                            <button type="button " className={`btn d-grid gap-2 col-5  text-white ${StyleLanding['btn-send']}`}>Learn
                                More</button>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- popular recipe --> */}
            <section className={StyleLanding.poprecipe}>
                <div className="container">
                    <div className={StyleLanding.kotak4}>
                        <img src={Square} alt="" />
                        <h1 className={StyleLanding.precipe}> Popular Recipe </h1>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-4 d-flex flex-row justify-content-center">
                            <div className={StyleLanding.foodbox}>
                                <img src={PhotoChickenKare} alt="" className={StyleLanding.gambar} />
                                <p className={`col-md-3 ${StyleLanding.titlefood}`}>
                                    Chicken Kare
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex flex-row justify-content-center">
                            <div className={StyleLanding.foodbox}>
                                <img src={PhotoBombChicken} alt="" className={StyleLanding.gambar} />
                                <p className={`col-md-3 ${StyleLanding.titlefood}`}>
                                    Bomb Chicken
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex flex-row justify-content-center">
                            <div className={StyleLanding.foodbox}>
                                <img src={PhotoBananaSmothiePop} alt="" className={StyleLanding.gambar} />
                                <p className={`col-md-3 ${StyleLanding.titlefood}`}>
                                    Banana <br /> Smothie Pop
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex flex-row justify-content-center">
                            <div className={StyleLanding.foodbox}>
                                <img src={PhotoCoffreCake} alt="" className={StyleLanding.gambar} />
                                <p className={`col-md-3 ${StyleLanding.titlefood}`}>
                                    Coffe Lava Cake
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex flex-row justify-content-center">
                            <div className={StyleLanding.foodbox}>
                                <img src={PhotoSugarSalmon} alt="" className={StyleLanding.gambar} />
                                <p className={`col-md-3 ${StyleLanding.titlefood}`}>
                                    Sugar Salmon
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex flex-row justify-content-center">
                            <div className={StyleLanding.foodbox}>
                                <img src={PhotoIndianSalad} alt="" className={StyleLanding.gambar} />
                                <p className={`col-md-3 ${StyleLanding.titlefood}`}>
                                    Indian Salad
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* footer */}
            <Footer />
        </>
    )
}

export default LandingPage