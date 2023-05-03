import { University } from '../universities/University';
import universityService from "../services/universities";

import {
  fetchUniversityAction,
  ActionTypes
} from './index';

export const fetchUniversityLoading = ():fetchUniversityAction => {
    return {
        type: ActionTypes.FETCH_UNIVERSITY_LOADING
    }
}

export const fetchUniversitySuccess = (data: University[]): fetchUniversityAction => {
    return {
        type: ActionTypes.FETCH_UNIVERSITY_SUCCESS,
        payload: data
    }
}

export const fetchUniversityError = (error: string): fetchUniversityAction => {
    return {
        type: ActionTypes.FETCH_UNIVERSITY_FAILURE,
        payload: error,
    }
}

export const fetchUniversities = (name: string) => {
    return dispatch => {

        dispatch(fetchUniversityLoading())

        universityService.getAll(name)
        .then( res => {

            const universityItemsArray = res.data;

            dispatch(fetchUniversitySuccess(universityItemsArray))
        })
        .catch( error => {
            dispatch(fetchUniversityError(error.message))
        })

    }
}
