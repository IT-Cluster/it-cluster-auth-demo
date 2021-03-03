import React, {Component} from 'react';
import {Link} from "react-router-dom";
import { userLogout } from '../redux/actions/userActions';
import { connect } from 'react-redux';

class Header extends Component {
    logout() {
        this.props.dispatch(userLogout())
    }

    render() {
        const authRoutes = this.props.auth.loggedIn ?
            <>
                <Link to="/profile">Profile</Link>
                <Link to="/skills">Skills</Link>
                <div>{`Вітаємо, ${this.props.auth.user.username}`}</div>
                <button onClick={() => this.logout()} className="btn btn-success">Logout</button>
            </> :
            <>
                <Link to="/login">Login</Link>
            </>;
        return (
            <header>
                <div className="navbar navbar-dark bg-dark box-shadow">
                    <div className="container d-flex justify-content-between">
                        <Link to="/" className="navbar-brand d-flex align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                 fill="none"
                                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                 className="mr-2">
                                <path
                                    d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                                <circle cx="12" cy="13" r="4"></circle>
                            </svg>
                            <strong>Redux Routing JWT</strong>
                        </Link>
                        <Link to="/news">News</Link>
                        {authRoutes}
                    </div>
                </div>
            </header>
        );
    };
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Header);
