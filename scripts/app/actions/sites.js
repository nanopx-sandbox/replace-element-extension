import { createAction } from 'redux-actions';
import {
  CREATE_SITE,
  DELETE_SITE,
} from '../actionTypes';


export const createSite = createAction(CREATE_SITE);
export const deleteSite = createAction(DELETE_SITE);
