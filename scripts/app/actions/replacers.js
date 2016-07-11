import { createAction } from 'redux-actions';
import {
  CREATE_REPLACER,
  DELETE_REPLACER,
} from '../actionTypes';


export const createReplacer = createAction(CREATE_REPLACER);
export const deleteReplacer = createAction(DELETE_REPLACER);
