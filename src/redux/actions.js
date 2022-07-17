import {FAIL_FETCH, FINISH_FETCH, START_FETCH} from "./constants";
import {fetchWrap} from "../api";

export const startFetch = (isLoading) => {
    return {
        type: START_FETCH,
        isLoading
    };
};

export const finishFetch = (url) => {
    return {
        type: FINISH_FETCH,
        data: {
            url,
            isLoading: false
        },
    };
};

export const failFetch = (error) => {
    return {
        type: FAIL_FETCH,
        data: {
            error,
            isLoading: false
        }
    };
};

export const fetchData = () => (dispatch) => {
    dispatch(startFetch(true));
    return fetchWrap()
        .then((res) => {
            dispatch(finishFetch(res.message));
        })
        .catch((err) => {
            const {message} = err || "";
            dispatch(failFetch(message));
        })
};
