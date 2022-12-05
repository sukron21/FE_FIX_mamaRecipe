import React, { useState, useRef, useEffect } from 'react'
import axios from 'axios';
import StyleUpdateRecipe from './UpdateRecipe.module.css';
import Footer from '../../Component/Footer';
import { Link, useNavigate, useParams } from "react-router-dom";
import { updaterecipe } from '../../redux/action/recipe';
import { useDispatch } from 'react-redux';

const UpdateRecipe = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const hiddenFileInput = useRef(null);
    // const navigate = useNavigate();
    const [image, setImage] = useState('');

    const handleClick = (event) => {
        hiddenFileInput.current.click();
    };

    const { id } = useParams();
    const [update, setUpdate] = useState([]);
    //function "getPostById"
    const getById = async () => {
        const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_URL}/recipe/${id}`
        );
        const data = await response.data;
        //usestate
        setUpdate(data);
    };

    //hook useEffect
    useEffect(() => {
        getById();
    }, []);

    const updateForm = (event) => {
        event.preventDefault();
        let formData = new FormData(event.target);
        formData.append("photo", image);
        handlePost(Object.fromEntries(formData));
    };
    const UpdatePhoto = (event) => {
        const fileUploaded = event.target.files[0];
        document.getElementById("addphoto").innerHTML = fileUploaded.name;
        setImage(fileUploaded);
    };

    const handlePost = (form) => {
        dispatch(
            updaterecipe(form, id)
                // axios
                //   .put(`${process.env.REACT_APP_BACKEND_URL}/recipe/${id}`, form, {
                //     headers: {
                //       "Content-Type": "multipart/form-data",
                //     },
                //   })
                .then((res) => {
                    console.log(res);
                    setImage("");
                    alert("Update Success");
                    return navigate("/profile");
                })
                .catch((err) => {
                    console.log(err);
                    alert("Update Failed");
                })
        )
    };

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
                                <Link className={`${StyleUpdateRecipe['nav-link']} active`} aria-current="page" to="/landingpage">Home</Link>
                            </li>
                            <li className="nav-item mx-5">
                                <Link className={`${StyleUpdateRecipe['nav-link']} ${StyleUpdateRecipe.active}`} to="/addrecipe">Add Recipe</Link>
                            </li>
                            <li className="nav-item mx-5">
                                <Link className={`${StyleUpdateRecipe['nav-link']} active`} to="/profile">Profile</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <!-- form input add recipe --> */}
            <section className="addrecipe">
                <div className="container">
                    <div className="row">
                        <form onSubmit={updateForm}>
                            <div className="col-md-12 d-flex flex-column justify-content-center align-items-center">
                                <div className={`col-md-7 mb-4 d-flex flex-column justify-content-center  ${StyleUpdateRecipe.addphoto}`}>
                                    <input className="form-control" type="file" ref={hiddenFileInput} htmlFor="image" onClick={handleClick} id="addphoto" onChange={UpdatePhoto} />
                                    <div className="text-center" type="button" htmlFor="image" onClick={handleClick}  >
                                        <i className="fa-regular fa-image fa-4x mb-3" ></i> <br /> Add Photo</div>
                                </div>
                                <div className="col-md-7 mb-4">
                                    {
                                        update.map((item) => (
                                            <div className="form-floating">
                                                <input type="text " className={`form-control ${StyleUpdateRecipe.costuminput}`} id="floatingInputGroup1" name='title' defaultValue={item.title} />
                                                <label htmlFor="floatingInputGroup1 ">Title</label>
                                            </div>
                                        ))
                                    }
                                    {
                                        update.map((item) => (
                                            <div className="form-floating my-4">
                                                <textarea className={`form-control ${StyleUpdateRecipe.costuminput}`} defaultValue={item.ingredients} id="floatingTextarea2" name='ingredients'
                                                    style={{ height: '200px' }}></textarea>
                                                <label htmlFor="floatingTextarea2">Ingredients</label>
                                            </div>
                                        ))
                                    }
                                    {
                                        update.map((item) => (
                                            <div className="form-floating">
                                                <input type="text " className={`form-control ${StyleUpdateRecipe.costuminput}`} id="floatingInputGroup1" defaultValue={item.video} name='video' />
                                                <label htmlFor="floatingInputGroup1 ">Video</label>
                                            </div>
                                        ))
                                    }
                                </div>
                                <button type="submit" className={`btn d-grid gap-2 col-3 mx-auto text-white ${StyleUpdateRecipe['btn-send']}`} > Post </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            {/* <!-- footer --> */}
            <Footer />
        </>
    )
}

export default UpdateRecipe