import { useReducer } from "react";
import {
    ADD_PORTFOLIO,
    DELETE_PORTFOLIO,
} from './actions';

export const reducer = (state, action) => {
    switch (action.type) {
        case ADD_PORTFOLIO:
            return {
                ...state,
                portfolios: [...action.portfolios],
            };
        case DELETE_PORTFOLIO:
            return {
                ...state,
                portfolios: [],
            };
        default:
            return state;
    };
};

export function usePortfolioReducer(initialState) {
    return useReducer(reducer, initialState);
};

