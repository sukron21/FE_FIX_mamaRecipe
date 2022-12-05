import React from "react";

import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Login from '../view/login/Login';
import Register from '../view/register/Register';
import ForgotPassword from "../view/forgot/ForgotPassword";
import CodeReset from "../view/CodeReset/CodeReset";
import ResetPassword from '../view/ResetPassword/ResetPassword'
import AddRecipe from "../view/addrecipe/AddRecipe";
import UpdateRecipe from "../view/updaterecipe/UpdateRecipe";
import Profile from "../view/profile/Profile";
import LandingPage from "../view/landingpage/LandingPage";
import DetailRecipe from "../view/detailrecipe/DetailRecipe";
import DetailVideo from "../view/detailvideo/DetailVideo";
import SearchRecipe from "../view/searchrecipe/SearchRecipe";

const PrivateRoute = () => {
	const token = localStorage.getItem("token");
	if (token) {
		return <Outlet />;
	} else {
        alert("Anda harus login terlebih dahulu")
		return <Navigate to="/" />;
	}
};

    const Router = () => {
        return(
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<Login />} />
                        <Route path="register" element={<Register/>} />
                        <Route path="forgot" element={<ForgotPassword/>} />
                        <Route path="codereset" element={<CodeReset/>} />
                        <Route path="resetpassword" element={<ResetPassword/>} />

                        <Route path="landingpage" element={<PrivateRoute/>} >
						    <Route index element={<LandingPage />} />
                        </Route>

                        <Route path="profile" element={<PrivateRoute/>} >
						    <Route index element={<Profile />} />
                        </Route>

                        <Route path="searchrecipe" element={<PrivateRoute/>} >
						    <Route index element={<SearchRecipe />} />
                        </Route>

                        <Route path="detailrecipe/:id" element={<PrivateRoute/>} > 
						    <Route index element={<DetailRecipe />} />
                        </Route>

                        <Route path="detailvideo" element={<PrivateRoute/>} >
						    <Route index element={<DetailVideo />} />
                        </Route>
                        
                        <Route path="addrecipe" element={<PrivateRoute/>} >
						    <Route index element={<AddRecipe />} />
                        </Route>

                        <Route path="updaterecipe/:id" element={<PrivateRoute/>} >
						    <Route index element={<UpdateRecipe />} />
                        </Route>
                        
                    </Route>
                </Routes>
            </BrowserRouter>
        )
        
    }
    export default Router;
