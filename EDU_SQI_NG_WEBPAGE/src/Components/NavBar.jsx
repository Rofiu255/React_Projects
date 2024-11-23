import React from "react";
import './NavBar.css'

const NavBar = () => {
  return (
    <div>
      <nav class="navbar navbar-light bg-light" style={{backgroundColor:'#ffffff', fontSize:'14px'}}>
        <div class="container-fluid d-flex bd-highlight">
          <a href="https://edu.sqi.ng/" class="p-2 flex-grow-1 bd-highlight">
            <img
              src="https://edu.sqi.ng/wp-content/uploads/2019/01/co.jpg"
              style={{ width: "52px", height: "60px" }}
            ></img>
          </a>
          <ul class="nav justify-content-center">
            <li class="nav-item dropdown">
              <a
                className="nav-menu"
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="https://edu.sqi.ng/"
                role="button"
                aria-expanded="false"
              >
                About
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="https://edu.sqi.ng/our-story/">
                    Our Story
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="https://edu.sqi.ng/our-team/">
                    Our Team
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="https://edu.sqi.ng/campus-info/">
                    Campus Info
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                className="nav-menu"
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="https://edu.sqi.ng/"
                role="button"
                aria-expanded="false"
              >
                Programmes
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="https://edu.sqi.ng/nid/">
                    National Innovation Diploma
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="https://edu.sqi.ng/procert/">
                    Professional Diploma Program
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="https://edu.sqi.ng/executive-professional-certificate-programme/">
                    Executive Professional Certificate Programme
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                className="nav-menu"
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="https://edu.sqi.ng/"
                role="button"
                aria-expanded="false"
              >
                Admissions
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="https://edu.sqi.ng/apply-for-a-programme/">
                    Apply for a Program
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="https://edu.sqi.ng/mode-of-study/">
                    Mode of Study
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="https://edu.sqi.ng/tuition/">
                    Tuition
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="https://edu.sqi.ng/frequently-asked-questions/">
                    Frequently Asked Questions
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                className="nav-menu"
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="https://edu.sqi.ng/"
                role="button"
                aria-expanded="false"
              >
                E-Portal
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="https://edu.sqi.ng/tportal/">
                    Student
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="https://scict.edossier.app/admin">
                    Staff
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                SQI Scholarship
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">
                News
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <hr />
    </div>
  );
};

export default NavBar;
