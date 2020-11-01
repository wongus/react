import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

export default class Navbar extends Component {
    render() {

        return (
            <nav className="mb-1 navbar navbar-expand navbar-dark sticky-top">
                <a className="navbar-brand" href="/" containerStyle="font-size: 1.4rem">wongus</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent-333"
                        aria-controls="navbarSupportedContent-333" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent-333">
                    <ul className="navbar-nav ml-auto nav-flex-icons">

                        <li className="nav-item navicon-bg p-1">
                            <NavLink exact to="/"
                                     className="nav-link text-center waves-effect waves-light navicon align-middle"
                                     activeClassName="active">
                                <i className="fas fa-home align-middle"></i>
                            </NavLink>
                        </li>
                        <li className="nav-item navicon-bg p-1">
                            <NavLink to="/work"
                                     className="nav-link text-center waves-effect waves-light navicon align-middle"
                                     activeClassName="active">
                                <i className="fas fa-money-bill align-middle"></i>
                            </NavLink>
                        </li>
                        <li className="nav-item navicon-bg p-1">
                            <NavLink to="/me"
                                     className="nav-link text-center waves-effect waves-light navicon align-middle"
                                     activeClassName="active">
                                <i className="fas fa-child align-middle"></i>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}