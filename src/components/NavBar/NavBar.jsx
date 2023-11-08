import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import './Navbar.css';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to={"/"}>
                    <h1 className="titulo">Urban shop</h1>
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
                        <NavLink
                            to={"/categoria/remeras"}
                            className={({ isActive }) =>
                                isActive ? "activeOption  l-producto" : "option l-producto"
                            }
                        >
                            Remeras
                        </NavLink>
                        <NavLink
                            to={"/categoria/pantalones"}
                            className={({ isActive }) =>
                                isActive ? "activeOption l-producto" : "option l-producto"
                            }
                        >
                            Pantalones
                        </NavLink>
                        <NavLink
                            to={"/categoria/buzos"}
                            className={({ isActive }) =>
                                isActive ? "activeOption l-producto" : "option l-producto"
                            }
                        >
                            Buzos
                        </NavLink>
                        <NavLink
                            to={"/categoria/camperas"}
                            className={({ isActive }) =>
                                isActive ? "activeOption l-producto" : "option l-producto"
                            }
                        >
                            Camperas
                        </NavLink>
                    </ul>
                </div>
                <CartWidget />
            </div>
        </nav>
    );
};

export default NavBar;