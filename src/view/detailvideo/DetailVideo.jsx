import React from 'react'
import { Link } from 'react-router-dom'
import StyleDetailVideo from './DetailVideo.module.css'

const DetailVideo = () => {
  return (
    <>
      {/* <!-- kotak kuning --> */}
      <section className="kotakkuning">
        <div className={StyleDetailVideo.kotak}>
        </div>
      </section>

      {/* <!-- navbar --> */}
      <nav className="navbar navbar-expand-lg mb-5">
        <div className="container">
          {/* <!-- <a className="navbar-brand" href="#">Mama Recipe</a> --> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item mx-5">
                        <Link className={`${StyleDetailVideo['nav-link']} active`} aria-current="page" to="/landingpage">Home</Link>
                    </li>
                    <li className="nav-item mx-5">
                        <Link className={`${StyleDetailVideo['nav-link']} active`} to="/addrecipe">Add Recipe</Link>
                    </li>
                    <li className="nav-item mx-5">
                        <Link className={`${StyleDetailVideo['nav-link']} active`} to="/profile">Profile</Link>
                    </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <!-- video --> */}
      <section className="detailvideo">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7 d-flex flex-column leftside">
              <div className="ratio ratio-16x9">
                <iframe src="https://www.youtube.com/embed/uNT_AxXrUGs" height="500" width="1000" className={StyleDetailVideo.videoleft} title="YouTube video" allowfullscreen></iframe>
              </div>

              <h1 className={`text-start mx-5 ${StyleDetailVideo.titleleft}`}> Beef Steak with Curry Sauce - [Step 4]
                Cut the condiment and then mix it</h1>
              <p className={`text-muted mx-5 ${StyleDetailVideo.subleft}`}>3 month ago</p>
            </div>
            <div className={`col-md-3  d-flex flex-column ${StyleDetailVideo.rightside}`}>
              <h1 className={StyleDetailVideo.next}>Next</h1>
              <div className="ratio ratio-21x9 mt-4">
                <iframe src="https://www.youtube.com/embed/uNT_AxXrUGs" width="1000" height="520" title="YouTube video" allowfullscreen></iframe>
              </div>
              <h1 className={`${StyleDetailVideo.titlevideoright} mt-2`}> Beef Steak with Curry Sauce - [Step 5]
                Saute condiments together until turn brown </h1>
              <p className={StyleDetailVideo.subvideoright}> HanaLohana - 3 month ago</p>
              <div className="ratio ratio-21x9 mt-4">
                <iframe src="https://www.youtube.com/embed/uNT_AxXrUGs" width="1000" height="520" title="YouTube video" allowfullscreen></iframe>
              </div>
              <h1 className={`${StyleDetailVideo.titlevideoright} mt-2`}> Beef Steak with Curry Sauce - [Step 6]
                Roast beef until it’s medium rare </h1>
              <p className={StyleDetailVideo.subvideoright}> HanaLohana - 3 month ago</p>
              <div className="ratio ratio-21x9 mt-4">
                <iframe src="https://www.youtube.com/embed/uNT_AxXrUGs" width="1000" height="520" title="YouTube video" allowfullscreen></iframe>
              </div>
              <h1 className={`${StyleDetailVideo.titlevideoright} mt-2`}> Beef Steak with Curry Sauce - [Step 7]
                Roast beef until it’s medium rare </h1>
              <p className={StyleDetailVideo.subvideoright}> HanaLohana - 3 month ago</p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default DetailVideo