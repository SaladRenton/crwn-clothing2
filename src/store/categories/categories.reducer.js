import {CATEGORIES_ACTION_TYPES} from './categories.types';

export const CATEGORIES_INITIAL_STATE = {
  categories: [],
  isLoading: false,
  error: null,

};

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
        console.log('Fetching categories started');
        return {
            ...state, isLoading: true
        }
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
        console.log('Fetching categories succeeded', payload);
        return {
            ...state, categories: payload, isLoading: false
        };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
        console.log('Fetching categories failed', payload);
        return {
            ...state, error: payload, isLoading: false
        }
    default:
        return state;
}
};
