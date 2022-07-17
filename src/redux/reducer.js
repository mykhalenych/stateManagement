import {FAIL_FETCH, FINISH_FETCH, START_FETCH} from "./constants";

const initState = {
    url: "",
    error: null,
    isLoading: false
};

export const dataReducer = (state = initState, action) => {
    switch (action.type) {
        case FINISH_FETCH:
            return {
                error: null,
                url: action.data.url,
                isLoading: action.data.isLoading
            };
        case FAIL_FETCH:
            return {
                url: '',
                error: action.data.error,
                isLoading: action.data.isLoading
            };
        case START_FETCH:
            return {
                ...state,
                isLoading: action.isLoading
            };
        default:
            return state;
    }
};
