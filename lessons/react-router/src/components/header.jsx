import "bootstrap/dist/css/bootstrap.min.css"
import { IoIosHome } from "react-icons/io";
import { AiFillDashboard } from "react-icons/ai";
import { MdGroups2 } from "react-icons/md";

const Header = () => {
  return (
    <header>
      <div className="px-3 py-2 text-bg-dark border-bottom">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
              <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap"></use></svg>
            </a>

            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
              <li>
                <a href="#" className="nav-link clickActive">
                  <svg className="bi d-block mx-auto mb-1" width="24" height="24"><IoIosHome />
                  </svg>
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-white">
                  <svg className="bi d-block mx-auto mb-1" width="24" height="24"><AiFillDashboard />
                  </svg>
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-white">
                  <svg className="bi d-block mx-auto mb-1" width="24" height="24"><MdGroups2 />
                  </svg>
                  Groups
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="px-3 py-2 border-bottom mb-3">
        <div className="container d-flex flex-wrap justify-content-center">
          <form className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto" role="search">
            <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
          </form>

          <div className="text-end">
            <button type="button" className="btn btn-light text-dark me-2">Login</button>
            <button type="button" className="btn btn-primary">Sign-up</button>
          </div>
        </div>
      </div>
    </header>
  )
};
export default Header;