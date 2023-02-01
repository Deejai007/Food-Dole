import { React, useState, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Navbar = () => {
  let location = useLocation();
  let navigate = useNavigate();
  const [role, setRole] = useState("");
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    toast.success("Logged out successfully");
  };
  useEffect(() => {
    console.log(localStorage.role);
    setRole(localStorage.role);
  }, [localStorage.role]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark light">
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            to={role == "don" ? "/donarhome" : "/volunteerhome"}
          >
            Food Dole
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li
                className={`nav-item  ${
                  location.pathname === "/"
                    ? "active text-decoration-underline"
                    : ""
                } `}
              >
                <Link
                  className="nav-link "
                  aria-current="page"
                  to={role == "don" ? "/donarhome" : "/volunteerhome"}
                >
                  Home
                </Link>
              </li>
              <li
                className={`nav-item ${
                  location.pathname === "/about"
                    ? "active text-decoration-underline"
                    : ""
                } `}
              >
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa fa-user mx-2"></i>
                </a>
                <ul className="dropdown-menu">
                  <button
                    className="btn mx-1 text-warning "
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
