import React from "react";

const Footer = () => {
  return (
    <div class="container-fluid  mt-5 py-5  bg-black">
      <footer class="d-flex flex-wrap justify-content-between align-items-center  mt-4  py-5">
        <ul class="nav col-md-4 justify-content-center list-unstyled d-flex">
          <li class="ms-3">
            <a class="text-light fs-4" href="#">
              <i className="fa fa-twitter" />
            </a>
          </li>
          <li class="ms-3">
            <a class="text-light fs-4" href="#">
              <i className="fa fa-instagram" />
            </a>
          </li>
          <li class="ms-3">
            <a class="text-light fs-4" href="#">
              <i className="fa fa-facebook" />
            </a>
          </li>
        </ul>

        <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
          <div className="w-100 text-center">
            <img src="./logo-wb.png" height={100} />
            <h6 className="fw-bold text-muted pt-4"> © 2024 TUTTO-PASSA, Inc</h6>
          </div>
        </a>

        <ul class="nav col-md-4 justify-content-center">
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-light">
              HOME
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-light">
              ABOUT
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-light">
              CONTACT
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-light">
              PRODUCTS
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
