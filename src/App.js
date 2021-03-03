import React, { Component } from 'react';
import './App.css';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Header from './components/Header';
import Footer from './components/Footer';
import Profile from './pages/Profile';
import Skills from './pages/Skills';
import NotFound from './pages/NotFound';
import News from './pages/News';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';
import { alertClear } from './redux/actions/alertActions';
import { history } from './helpers';

class App extends Component {
    constructor(props) {
        super(props);

        const {dispatch} = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertClear());
        });
    }

    render() {
        const { alert } = this.props;
        return (
            <>
                <Header/>
                <div className="main">
                    <div className="container">
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Switch>
                            <Redirect exact from='/' to='/news'/>
                            <Route path='/login' component={Login}/>
                            <Route path='/news' component={News}/>
                            <PrivateRoute path='/profile' component={Profile}/>
                            <PrivateRoute path='/skills' component={Skills}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </div>
                </div>
                <Footer/>
            </>
        )
    }
}

const mapStateToProps = state => ({
    alert: state.alert
});

export default connect(mapStateToProps)(withRouter(App));
