import 'whatwg-fetch'
import cuid from 'cuid'
import {REQUEST_TAGS, RECEIVE_TAGS, SELECT_TAG} from '../constants'

export const requestTags = (id = cuid(), timeStamp = Date.now()) => ({
    type: REQUEST_TAGS,
    payload: {id, timeStamp}
});

export const receiveTags = (data, id = cuid(), timeStamp = Date.now()) => ({
    type: RECEIVE_TAGS,
    payload: {id, timeStamp, items: data}
});

export const loadTags = () => dispatch => {
    dispatch(requestTags());

    return fetch('/api/tags')
        .then(response => response.json())
        .then(data => {
            dispatch(receiveTags(data))
        });
};

export const selectTag = (name, id = cuid(), timeStamp = Date.now()) => {
    return ({ 
        type: SELECT_TAG, 
        payload: {id, timeStamp, name}
    })
}
