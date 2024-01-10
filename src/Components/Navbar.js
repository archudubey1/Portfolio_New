import React from "react";

const Navbar = () => {
  return (
    <div className="container-fluid p-5  ">
      <nav class="navbar navbar-expand-lg navbar-dark main-cont">
        <div class="container-fluid">
          <a class="navbar-brand name-brand name-brand2" href="#">
            Archana Dubey
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="  " id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#about">
                  About
                </a>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="#projectss"
                >
                  Projects
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#sikllss">
                  Skills
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#contactn">
                  Contact
                </a>
              </li>
              {/* <Link className='text-white r-link' to='/addUsers'>+ ADD USERS</Link> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
