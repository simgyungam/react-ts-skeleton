import { createAction } from 'redux-actions';

export const API_REQUEST = Symbol('API_REQUEST');
export const API_PENDING = Symbol('API_PENDING');
export const API_SUCCESS = Symbol('API_SUCCESS');
export const API_FAILURE = Symbol('API_FAILURE');
export const API_RESET = Symbol('API_RESET');

export const APIStatusName = {
  [API_REQUEST]: 'request',
  [API_PENDING]: 'pending',
  [API_SUCCESS]: 'success',
  [API_FAILURE]: 'failure',
  [API_RESET]: 'reset',
};

export const APIStatus = {
  API_REQUEST,
  API_PENDING,
  API_SUCCESS,
  API_FAILURE,
  API_RESET,

  complete(status) {
    return (status === API_SUCCESS || status === API_FAILURE);
  },

  success(status) {
    return (status === API_SUCCESS);
  },

  name(status) {
    return APIStatusName[status];
  },
};


// export function createAPIAction(
//   type,
//   request,
//   payloadCreator = () => {},
//   metaCreator = () => {},
// ) {
//   const apiMetaCreator = (...args) => ({
//     ...metaCreator(args),
//     api: {
//       request,
//       status: API_REQUEST,
//     },
//   });

//   return createAction(type, payloadCreator, apiMetaCreator);
// }

// export function createResetAPIAction(
//   type,
//   payloadCreator = () => {},
//   metaCreator = () => {},
// ) {
//   const apiMetaCreator = (...args) => ({
//     ...metaCreator(args),
//     api: {
//       reset: true,
//     },
//   });

//   return createAction(type, payloadCreator, apiMetaCreator);
// }
