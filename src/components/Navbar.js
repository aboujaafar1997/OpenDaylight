import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <span className="navbar-brand"><img src="/logo-odl.png" width="60px" height="60px" /> Myopendaylight</span>

                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/home" >Acceuil</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/host" >hosts</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/statistique" >statistique</Link>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <i className="fa fa-user fa-lg"> <span className="mr-5">{props.islogin ? props.nom : ""}</span></i>
                    <button onClick={props.islogin ?
                        (e) => {
                            e.preventDefault();
                            sessionStorage.removeItem("login");
                            props.setstate({ isLogin: false, user: { nom: "", prenom: "", cin: "" } })
                            props.history.push('/login')
                        } :
                        ""}
                        className={props.islogin ? "btn btn-outline-danger" : "btn btn-outline-success my-2 my-sm-0"} >{props.islogin ? "Déconnecté" : "Connectez-vous"}</button>
                </form>
            </nav>
        </>
    )
}
