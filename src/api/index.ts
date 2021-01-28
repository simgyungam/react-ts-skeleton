import 'whatwg-fetch';
import {
  isNil,
  trimStart,
  trimEnd,
  forOwn,
  isObject,
} from 'lodash';
import config from '@/config';
// import { getAuthCookies, removeAuthCookies } from '@/utils/cookies/auth';
// import parseAPIError from './error';

export type Request = {
  endpoint: string,
  method?: string,
  query?: object,
  body?: object
};

export type FetchRequest = {
  method: string,
  headers: object,
  body?: string
};

// Fetches an API response.
export default function (request: Request, headers?: Object) {
  const apiRoot = trimEnd(config.apiBase, '/ ');
  const {
    endpoint,
    method = 'GET',
    query,
    body,
  } = request;

  let fullUrl;
  if (endpoint.indexOf('http') !== 0) {
    const path = trimStart(endpoint, ' /');
    fullUrl = `${apiRoot}/${path}`;
  } else {
    fullUrl = endpoint;
  }

  if (query) {
    let queryStr = '';
    let joint = '';
    forOwn(query, (v, k) => {
      if (!isNil(v)) {
        queryStr += `${joint}${k}=${encodeURIComponent(v)}`;
        joint = '&';
      }
    });
    if (fullUrl.indexOf('&') >= 0) {
      fullUrl = `${fullUrl}&${queryStr}`;
    } else {
      fullUrl = `${fullUrl}?${queryStr}`;
    }
  }

  const init: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  if (headers && isObject(headers)) {
    init.headers = { ...init.headers, ...headers };
  }

  // const authCookies = getAuthCookies();
  // if (authCookies) {
  //   init.headers.Authorization = `Bearer ${authCookies.token}`;
  // }

  if (body) {
    init.body = JSON.stringify(body);
  }

  return fetch(fullUrl, init).then((response) => {
    if (response.status === 401) {
      // const { pathname } = window.location;
      // if (pathname.indexOf('login') < 0) {
      //   window.location.href = '/login';
      // }
      // return null;
      throw(new Error('401 should redirect to Login page'));
    }
    if (response.ok) {
      return response.text();
    }
    try {
      return response.json();
    } catch (err) {
      throw response;
    }
  }).then((text) => {
    if (isObject(text)) {
      throw text;
    }
    if (text && text.length) {
      const parsed = JSON.parse(text);
      return parsed;
    }
    return null;
  }).catch((error) => {
    // throw parseAPIError(error);
    throw error;
  });
}
