import React, { useState, useRef } from 'react'
import axios from 'axios';
import StyleAddRecipe from './AddRecipe.module.css';
import Footer from '../../Component/Footer';
import { Link, useNavigate } from "react-router-dom";
import {addrecipe} from '../../redux/action/recipe'
import { useDispatch } from 'react-redux';


const AddRecipe = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const hiddenFileInput = useRef(null);
    // const navigate = useNavigate();
    const [image, setImage] = useState('');

    const handleClick = (event) => {
        hiddenFileInput.current.click();
    };
    const handleChange = (event) => {
        const fileUploaded = event.target.files[0];
        document.getElementById('addphoto').innerHTML = fileUploaded.name;
        setImage(fileUploaded);
    };

    const [form, setForm] = useState({
        title: '',
        ingredients: '',
        // created_at:''
    })

    const onSubmit = (e) => {
        e.preventDefault();
        // console.log(form)
        
        let body = new FormData ()
      body.append('title', form.title )
      body.append('ingredients', form.ingredients )
      body.append('photo', image)

            // const body = {
            //     photo: form.photo,
            //     title: form.title,
            //     ingredients: form.ingredients,
            //     video: form.video
            // }
            dispatch(
                addrecipe(body)
                .then((response) => {
                    // if(response.data.code !== 200){
                    //     alert('error:' + response.data.message)
                    // }
                    console.log(response);
                    setImage("");
                    if (response.data.status !== 'success') {
                        alert(response.data.message)
                    } else {
                        alert("data berhasil ditambahkan")
                        console.log(response.data)
                        return navigate('/landingpage')
                    }
                    // console.log(response.data)
                    // return navigate('/')
                }).catch((err) => {
                    console.error(err)
                })
            )
            
        
    }

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
                                <Link className={`${StyleAddRecipe['nav-link']} active`} aria-current="page" to="/landingpage">Home</Link>
                            </li>
                            <li className="nav-item mx-5">
                                <Link className={`${StyleAddRecipe['nav-link']} ${StyleAddRecipe.active}`} to="/addrecipe">Add Recipe</Link>
                            </li>
                            <li className="nav-item mx-5">
                                <Link className={`${StyleAddRecipe['nav-link']} active`} to="/profile">Profile</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <!-- form input add recipe --> */}
            <section className="addrecipe">
                <div className="container">
                    <div className="row">
                        <form onSubmit={(e) => onSubmit(e)}>
                            <div className="col-md-12 d-flex flex-column justify-content-center align-items-center">
                                <div className={`col-md-7 mb-4 d-flex flex-column justify-content-center  ${StyleAddRecipe.addphoto}`}>
                                    <input className="form-control" type="file" ref={hiddenFileInput} htmlFor="image" onClick={handleClick} id="addphoto" onChange={handleChange}  style={{ display: 'none' }}  />
                                    <div className="text-center" type="button"  htmlFor="image" onClick={handleClick}  >
                                        <i className="fa-regular fa-image fa-4x mb-3" ></i> <br /> Add Photo</div>
                                </div>
                                
                                <div className="col-md-7 mb-4">
                                    <div className="form-floating">
                                        <input type="text " className={`form-control ${StyleAddRecipe.costuminput}`} id="floatingInputGroup1" placeholder="Title" onChange={(e) => setForm({...form, title: e.target.value})} />
                                        <label htmlFor="floatingInputGroup1 ">Title</label>
                                    </div>
                                    <div className="form-floating my-4">
                                        <textarea className={`form-control ${StyleAddRecipe.costuminput}`} placeholder="Leave a comment here" id="floatingTextarea2" onChange={(e) => setForm({...form, ingredients: e.target.value})}
                                            style={{ height: '200px' }}></textarea>
                                        <label htmlFor="floatingTextarea2">Ingredients</label>
                                    </div>

                                    <div className="form-floating">
                                        <input type="text " className={`form-control ${StyleAddRecipe.costuminput}`} id="floatingInputGroup1" placeholder="Title" onChange={(e) => setForm({...form, video: e.target.value})} />
                                        <label htmlFor="floatingInputGroup1 ">Video</label>
                                    </div>
                                </div>
                                <button type="button " className={`btn d-grid gap-2 col-3 mx-auto text-white ${StyleAddRecipe['btn-send']}`} > Post </button>

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

export default AddRecipe