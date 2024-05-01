
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Hellooo1() {
    const count = useSelector(state => state.count);
  return (

    <div className="position-sticky  top-0  w-100">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
           Redux Crud
          </a>
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
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/form"}>
                  Form
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/table"}>
                  Table
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/formapi"}>
                  Form Api
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/tableapi"}>
                  Table Api
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/formapiToken"}>
                  Form Api Token
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/tableapiToken"}>
                  Table Api Token
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/formapiProduct"}>
                  form Api Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/tableapiProduct"}>
                  Table Api Product
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={"/formapiStudent"}>
                  form Api Student
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/tableapiStudent"}>
                  Table Api Student
                </Link>
              </li>
            
          
             </ul>

             <div className="">
                <button className="btn btn-primary">Api </button>
             </div> 
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Hellooo1;
