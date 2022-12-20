import React, { useState, useEffect } from "react";
import StyleProfile from "./Profile.module.css";
import PhotoProfile from "../../asset/img/profile.png";
import PhotoFoodchiken from "../../asset/img/bombchicken.png";
import PhotoFoodbananas from "../../asset/img/bananaspancake.png";
import Footer from "../../Component/Footer";
import { Link, useNavigate } from "react-router-dom";
import { getRecipe, deleterecipe } from "../../redux/action/recipe";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const dispatch = useDispatch();
  const [recipe, setRecipe] = useState([]);
  const data = JSON.parse(localStorage.getItem("data"));
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("asc");

  const detailprofile = useSelector((state) => {
    return state.detailprofile;
  });

  useEffect(() => {
    dispatch(
      getRecipe(sort, 4, page)
    );
  }, [sort, page, dispatch]);

  const handleSortasc = () => {
    if (sort === "asc") {
      setSort("desc");
    } else {
      setSort("asc");
    }
    dispatch(getRecipe(sort, 4, page));
  };

  const NextPage = () => {
    setPage(page + 1);
    dispatch(getRecipe(sort, 4, page));
    console.log(page);
  };
  const PreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
      console.log(page);
      dispatch(getRecipe(sort, 4, page - 1));
    }
  };

  const deleteFoods = (id, e) => {
    e.preventDefault();
    dispatch(
      deleterecipe(id)
        .then((response) => {
          console.log(response);
          console.log(response.data);

          const posts = recipe.filter((item) => item.id !== id);
          setRecipe({ data: posts });
          alert("Delete Success");
          return navigate("/landingpage");
        })
        .catch((err) => {
          console.log(err);
          alert("Delete Failed");
        })
    );
  };
  return (
    <>
      
      <nav className="navbar navbar-expand-lg fixed-top bg-white">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item mx-5">
                <Link
                  className={`${StyleProfile["nav-link"]} `}
                  aria-current="page"
                  to="/landingpage"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item mx-5">
                <Link
                  className={`${StyleProfile["nav-link"]} `}
                  to="/addrecipe"
                >
                  Add Recipe
                </Link>
              </li>
              <li className="nav-item mx-5">
                <Link
                  className={`${StyleProfile["nav-link"]} ${StyleProfile.active}`}
                  to="/profile"
                >
                  Profile
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section className="profile">
        <div className="container-fluid">
          <div className="row">
            <div
              className={`col-md-12 d-flex flex-column justify-content-center align-items-center ${StyleProfile.photo}`}
            >
              <img src={PhotoProfile} alt="" />
              <p>
                <i
                  className={`fa-solid fa-pencil fa-1x ${StyleProfile.pencil}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseExample"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                ></i>
              </p>
              <div
                className={`collapse ${StyleProfile.collcostum}`}
                id="collapseExample"
              >
                <div className={`card card-body ${StyleProfile.edit}`}>
                  Change Photo Profile
                </div>
                <div className={`card card-body ${StyleProfile.edit}`}>
                  <Link to="/resetpassword">Change Password</Link>
                </div>
              </div>
              <h1 className={`${StyleProfile.username} mt-5`}>
                {data.name}
              </h1>
              <hr className={StyleProfile.line} />
            </div>
          </div>
        </div>
      </section>
      <section className="menu">
        <div className="container-fluid">
          <div className="row">
            <div
              className={`col-md-12 d-flex flex-row ${StyleProfile.menucostum}`}
              style={{ marginLeft: "50px" }}
            >
              <p
                className={`mx-5 ${StyleProfile.myrecipe}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target=".multi-collapse2"
                aria-expanded="false"
                aria-controls="multiCollapseExample1 multiCollapseExample2"
              >
                My Recipe
              </p>
              <p
                className={`mx-5 ${StyleProfile.savedrecipe}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target=".multi-collapse"
                aria-expanded="false"
                aria-controls="multiCollapseExample1 multiCollapseExample2"
              >
                Saved Recipe
              </p>
              <p
                className={`mx-5 ${StyleProfile.likedrecipe}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target=".multi-collapse"
                aria-expanded="false"
                aria-controls="multiCollapseExample1 multiCollapseExample2"
              >
                Liked Recipe
              </p>
            </div>
            <hr className={StyleProfile.linemenu} />
            <div className=" collapse multi-collapse2" id="foods1">
              <div className="row d-flex flex-row  kolom2">
                {detailprofile.isLoading ? (
                  <h2>Loading...</h2>
                ) : detailprofile.isError ? (
                  <h2>error</h2>
                ) : detailprofile.data === 0 ? (
                  <h2> Data Not Found</h2>
                ) : (
                  detailprofile.data.map((item) => {
                    return (
                      <>
                        <div
                          key={item.id}
                          className={`col-md-3 my-3 d-flex flex-row justify-content-center ${StyleProfile.foodbox}`}
                        >
                          <div className="">
                            <img
                              src={item.photo_url}
                              className={StyleProfile.gambar}
                              alt='#'
                            />
                            <p className={`mx-1 ${StyleProfile.titlefood}`}>
                              {item.title}
                            </p>
                            <div className=" d-flex justify-content-center align-items center mt-1 mr-3">
                              <Link to={`/detailrecipe/${item.id}`}>
                                {" "}
                                <button
                                  className="{StyleProfile.btndetail}"
                                  type="button"
                                >
                                  {" "}
                                  Detail
                                </button>{" "}
                              </Link>

                              <Link to={`/updaterecipe/${item.id}`}>
                                {" "}
                                <button className="{StyleProfile.btnupdate} ">
                                  Update{" "}
                                </button>
                              </Link>

                              <button
                                className="{StyleProfile.btndelete}"
                                onClick={(e) => deleteFoods(item.id, e)}
                              >
                                {" "}
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })
                )}
              </div>
              <div className="d-flex justify-content-center">
                <ul className="pagination">
                  <li className="page-item">
                    <button
                      className="btn btn-warning-custom page-link"
                      disabled={page === 1}
                      onClick={() => PreviousPage()}
                    >
                      Previous
                    </button>
                  </li>
                  <li style={{ marginLeft: 3 }}></li>
                  <button className="btn btn-primary-custom page-link">
                    {page}
                  </button>
                  <li style={{ marginLeft: 3 }} className="page-item">
                    <button
                      className="btn btn-primary-custom page-link"
                      disabled={detailprofile.data <= 0}
                      onClick={() => NextPage()}
                    >
                      Next
                    </button>
                  </li>
                  {/* <p className="text-center">sort By</p> */}
            <button
              className="btn btn-primary-custom"
              // disabled={detailprofile.data <= 0}
              onClick={() => handleSortasc()}
            >
              {sort.toUpperCase()}
            </button>
                </ul>
              </div>
            </div>

            {/* DIBAWAH INI DESIGN FOOD BIASA */}
            <div className="row">
              <div className="col-md-4  kolom1">
                <div className="collapse multi-collapse" id="foods1">
                  <div className={StyleProfile.foodbox}>
                    <img
                      src={PhotoFoodchiken}
                      alt=""
                      className={StyleProfile.gambar}
                    />
                    <p className={`col-md-2 ${StyleProfile.titlefood}`}>
                      Bomb Chicken
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 kolom2">
                <div className="collapse multi-collapse" id="foods1">
                  <div className={StyleProfile.foodbox}>
                    <img
                      src={PhotoFoodbananas}
                      alt=""
                      className={StyleProfile.gambar}
                    />
                    <p className={`col-md-2 ${StyleProfile.titlefood}`}>
                      Bananas Pancake
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* ))} */}
          </div>
        </div>
      </section>
      {/* <!-- footer --> */}
      <Footer />
    </>
  );
};

export default Profile;
