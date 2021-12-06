import { Middleware } from 'redux';
import _ from 'lodash';

import { State } from 'entities/State';

import * as ActionTypes from '../actions/actions';
import { apiFetchSucceeded } from '../actions';
import toParams from './toParams';


const middleware: Middleware<unknown, State> =
  (state) => (next) => (action) => {
    if (action.type !== ActionTypes.API_FETCH_REQUESTED) return next(action);

    return fetch(
      `/api/${action.payload.model}.json?${toParams(action.payload.params)}`,
      {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
    ).then(async (response) => {
      const json = await response.json();
      if(!json) return;
      state.dispatch(apiFetchSucceeded(action.payload.model, json));
    }).catch((e) => {
      if(e instanceof Response) {
        console.warn('Response error ', e);
      }else if(e instanceof Error) {
        console.error('Error message ', e);
      }
    });
  };

export default middleware;
