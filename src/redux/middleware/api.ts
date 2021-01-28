import callAPI from '@/api';
import { ActionType } from 'typesafe-actions';
import {
  API_PENDING,
  API_SUCCESS,
  API_FAILURE,
  API_RESET,
} from '../actions/api';


export default () => (next: any) => (action: any) => {
  const { type, payload, meta: { api, ...nextMeta } = {}, ...rest } = action;

  if (!api) {
    // no api
    return next(action);
  }
  if (!api.request && !api.reset) {
    // no request and not reset
    return next(action);
  }

  if (api.reset) {
    const nextAPI = {
      ...api,
      reset: undefined,
      status: API_RESET,
    };
    return next({
      ...rest,
      type,
      payload,
      meta: { ...nextMeta, api: nextAPI },
    });
  }

  const request = api.request;
  const nextAPI = {
    ...api,
    request: undefined,
    status: API_PENDING,
  };
  next({
    ...rest,
    type,
    payload,
    meta: { ...nextMeta, api: nextAPI },
  });

  return callAPI(request).then(
    (response) => {
      api.status = API_SUCCESS;
      api.response = response;
      next({
        ...rest,
        type,
        payload,
        meta: { ...nextMeta, api },
      });
    },
    (error) => {
      // if (error.message === 'Unauthorized' || error.code === 'UNAUTHORIZED') {
      // }

      api.status = API_FAILURE;
      api.error = error;
      next({
        ...rest,
        type,
        payload,
        meta: { ...nextMeta, api },
      });
    },
  );
};
