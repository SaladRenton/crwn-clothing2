import {CATEGORIES_ACTION_TYPES} from './categories.types';
import { createAction } from '../../utils/reducer/reducer.utils';


export const fetchCategoriesStart = () => {
  return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START); // Asegúrate de devolver la acción
}

export const fetchCategoriesSuccess = (categoriesArray) => {
  return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray); // Asegúrate de devolver la acción
}

export const fetchCategoriesFailed = (error) => {
  return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error); // Asegúrate de devolver la acción
}

