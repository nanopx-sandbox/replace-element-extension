import createReducer from '../helpers/createReducer';
import {
  INITIALIZE,
  CREATE_SITE,
  DELETE_SITE,
  CREATE_REPLACER,
  DELETE_REPLACER,
} from '../actionTypes';

export const initialState = {
  sites: [],
  replaceEntries: {},
  error: null,
};

export const reducer = {
  [INITIALIZE]: (state, action) => {
    const newState = action.payload ? action.payload.sites : initialState;
    newState.sites.forEach((site) => {
      if (!newState.replaceEntries[site] && !newState.replaceEntries[site].length) {
        // ensure there's an empty array initialized
        newState.replaceEntries[site] = [];
      }
    })
    return newState;
  },
  [CREATE_SITE]: (state, action) => {
    if (state.sites.includes(action.payload)) {
      return state;
    }

    return {
      ...state,
      sites: [ ...state.sites, action.payload ],
      replaceEntries: {
        ...state.replaceEntries,
        [action.payload]: [],
      },
    };
  },
  [DELETE_SITE]: (state, action) => {
    const replaceEntries = Object.keys(state.replaceEntries)
    .filter((site) => action.payload !== site)
    .map((site) => state.replaceEntries[site]);

    return {
      ...state,
      sites: state.sites.filter((site) => action.payload !== site),
      replaceEntries,
    };
  },
  [CREATE_REPLACER]: (state, action) => {
    const { site, selector, html } = action.payload;
    const replaceEntries = Object.assign({}, state.replaceEntries);

    if (replaceEntries[site]) {
      replaceEntries[site].push({ selector, html });
    }

    return {
      ...state,
      replaceEntries,
    }
  },
  [DELETE_REPLACER]: (state, action) => {
    const { site, selector } = action.payload;
    const replaceEntries = Object.assign({}, state.replaceEntries);

    if (replaceEntries[site]) {
      replaceEntries[site] = replaceEntries[site].filter((replace) => replace.selector !== selector);
    }

    return {
      ...state,
      replaceEntries,
    }
  },
};

export default createReducer(initialState, reducer);
