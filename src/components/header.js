import React from "react";
import { useEffect } from "react";

const Header = () => {
  return (
    <div className="w-100 py-lg-3 px-lg-5 position-fixed top-0 left-0" style={{ zIndex: 50 }}>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark rounded-pill no-round-sm shadow py-2  ps-2 pe-3">
        <div class="container-fluid">
          <a class="navbar-brand" href="#home">
            <img src="logo-wb.png" alt="" height="60" />
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
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0 gap-4">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#about">
                  About
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link" href="#explore">
                  Products
                </a>
              </li>
              <li class="nav-item" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <a class="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <form class="d-lg-flex d-none">
            <i className="fa fa-search fs-2 text-light" />
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Header;
