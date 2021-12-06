import { AnyAction } from 'redux';
import _ from 'lodash';

import { Resource } from 'entities/Resource';
import { State } from 'entities/State';

import * as ActionTypes from '../actions/actions';

const initialState: State = {
  channels: {},
  dataPoints: {},
  devices: {},
};

const normalize = (resources: Array<Resource>) =>
  _.keyBy(
    _.map(resources, (resource: Resource) =>
      _.mapKeys(resource, (_value: unknown, key: string) => _.camelCase(key))
    ),
    'id'
  );

const reducers = (
  state: State = initialState,
  action: AnyAction = { type: '' }
): State => {
  switch (action.type) {
    case ActionTypes.API_FETCH_SUCCEEDED:      
      return {
        ...state,
        [_.camelCase(action.payload.model)]: {
          ...state[_.camelCase(action.payload.model) as keyof State],
          ...normalize(action.payload.resources),
        },
      };
    default:
      return state;
  }
};

export default reducers;
