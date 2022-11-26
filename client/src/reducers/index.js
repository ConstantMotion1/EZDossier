import counterRed from "./chooseLayout";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counter: counterRed
});

export default allReducers;





