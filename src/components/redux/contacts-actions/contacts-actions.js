// import { nanoid } from 'nanoid';
// // import types from './contacts-types';
// import { createAction } from "@reduxjs/toolkit";
// // import { number } from 'prop-types';

// const addContacts = createAction('contacts/Add', (name, number) => {
//     return {
//         payload: {
//             id: nanoid(),
//             name,
//             number
//         }
//     }
// });

// // const addContacts = (name, number) => ({
// //     type: types.ADD,
// //     payload: {
// //         id: nanoid(),
// //         name,
// //         number
// //     }
// // });
// const deleteContacts = createAction('contacts/Delete');

// // const deleteContacts = contactId => ({
// //     type: types.DELETE,
// //     payload: contactId,
// // });

// const changeFilter = createAction('contacts/ChangeFilter')

// // const changeFilter = value => ({
// //     type: types.CHANGE_FILTER,
// //     payload: value,
// // });

// // eslint-disable-next-line import/no-anonymous-default-export
// export default{addContacts, deleteContacts,changeFilter};