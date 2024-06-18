//Combine all the Reducers in on Place for Redux

import { combineReducers } from "redux"
import counterReducer from "./counter/counterReducer"

import userReducer from "./user/userReducer"


const rootReducer = combineReducers({
    counter: counterReducer,
    user: userReducer,
});
export default rootReducer;

// const rootReducer = {
//     counter: {
//         count: 0,
//         length: 10,
//         maxCount: 100,
//     },
//     user: {
//         uid: '',
//         userName: '',
//         isUserLoggedIn: false,
//         hobby: [],
//         moreData: {
//             city: '',
//         },
//     },
// };

// rootReducer.counter.count