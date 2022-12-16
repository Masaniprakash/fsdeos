import "./Navbar.css"
import { Link, useNavigate } from 'react-router-dom'
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket, faBars, faTimes, faUnlock } from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
    const [click, setClick] = useState(false);
    let user = JSON?.parse(localStorage.getItem("fsdeos")) || null
    let admin = user?.isAdmin;

    const logout = () => {
        localStorage.removeItem("fsdeos");
        setClick(!click);
    }

    const handleClick = () => setClick(!click);
    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <span className="logo">
                        <Link to="/" style={{ color: "white", textDecoration: "none", fontSize: "1.4rem" }}>
                            <span className="lo">Jewellery S</span>hop
                        </Link>
                    </span>

                    <ul className={click ? "nav-menu active" : "nav-menu"} style={{ paddingLeft: 0 }}>
                        {user ? <>
                            <li className="nav-item"   >
                                <Link
                                    to="/plan"
                                    className="nav-links"
                                >
                                    My Order <FontAwesomeIcon icon={faArrowRightFromBracket} />
                                </Link>
                            </li>
                            <li className="nav-item"   >
                                <Link
                                    to="/"
                                    style={{ color: "red" }}
                                    className="nav-links"
                                    onClick={logout}
                                >
                                    Logout <FontAwesomeIcon icon={faArrowRightFromBracket} color="red" />
                                </Link>
                            </li>
                            </> : <>
                            <li className="nav-item"  >
                                <Link
                                    to="/register"
                                    className="nav-links"
                                >
                                    Register <FontAwesomeIcon icon={faArrowRightFromBracket} />
                                </Link>
                            </li>
                            <li className="nav-item"  >
                                <Link
                                    to="/login"
                                    className="nav-links"
                                >
                                    Login <FontAwesomeIcon icon={faArrowRightFromBracket} />
                                </Link>
                            </li>
                        </>}
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        {click ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar