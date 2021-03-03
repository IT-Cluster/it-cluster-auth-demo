import actionTypes from './types';
import config from "../../config";

export const getNewsSuccess = payload => ({
    type: actionTypes.FETCH_NEWS_SUCCESS,
    payload
});

export const getNewsStart = () => ({
    type: actionTypes.FETCH_NEWS_START
});

export const getNewsError = payload => ({
    type: actionTypes.FETCH_NEWS_ERROR,
    payload
});

export const getNews = () => {
    return dispatch => {
        dispatch(getNewsStart());
        fetch(`${config.baseUrl}/news`)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                dispatch(getNewsSuccess({data: res}));
            })
            .catch(error => {
                console.log(error);
                dispatch(getNewsError(error.message));
            });
    };
};
