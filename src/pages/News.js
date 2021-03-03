import React, { Component } from "react";
import {connect} from 'react-redux';
import {getNews} from '../redux/actions/newsActions';
import Loader from '../components/Loader';

class News extends Component {

    componentDidMount() {
        this.loadNews();
    }

    loadNews() {
        this.props.dispatch(getNews());
    }

    render() {
        const {data, loading} = this.props.news;
        return (
            <>
                <h1>Новини</h1>
                {loading && <Loader />}
                {data.map(item => (
                    <div className="row">
                        <div className="col-12">
                            <h2>{item.title}</h2>
                            <p>{item.text}</p>
                        </div>
                    </div>
                ))}
            </>
        )
    }
}

const mapStateToProps = state => ({
    news: state.news
});

export default connect(mapStateToProps)(News);
