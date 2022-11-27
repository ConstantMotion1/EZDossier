import { useReducer } from "react";
import {
    ADD_PORTFOLIO,
    UPDATE_PORTFOLIO,
    DELETE_PORTFOLIO,
} from './actions';

export const reducer = (state, action) => {
    switch (action.type) {
        case ADD_PORTFOLIO:
            return {
                ...state,
                
            }
    }
}