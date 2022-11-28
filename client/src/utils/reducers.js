import { useReducer } from "react";
import {
    UPDATE_PORTFOLIO,
    DELETE_PORTFOLIO,
} from './actions';

export const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_PORTFOLIO:
            return {
                ...state,
                portfolios: [...action.products],
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

