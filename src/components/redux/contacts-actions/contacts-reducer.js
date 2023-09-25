// import { combineReducers } from "redux";
// import { createReducer } from "@reduxjs/toolkit";
// // import types from './contacts-types';
// import actions from './contacts-actions';
// // import initialContacts from '../initialContacts.json';
// // import  { useState, useEffect } from "react";

// const items = createReducer([], {
//     [actions.addContacts]: (state, { payload }) => [...state, payload],
//     [actions.deleteContacts]: (state, { payload }) => state.filter(({ id }) => id !== payload),
// });

// // const items = (state = [], {type, payload}) => {
// //     switch (type) {
// //         case types.ADD:
// //             return [...state, payload];
        
// //         case type.DELETE:
// //             return state.filter(({ id }) => id !== payload);
        
// //         default:
// //             return state;
// //     }
// // };

   
// const filter = createReducer('', {
//     [actions.changeFilter]: (_, { payload }) => payload,
// });

// // const filter =  (state = '', {type, payload}) => {
// //     switch (type) {
// //         case 'contacts/ChangeFilter':
// //             return payload;
        
// //         default:
// //             return state;
// //     }
// // };

// export default combineReducers({
//     items,
//     filter,
// });