import { University } from '../../universities/University';

import { v4 as uuidv4 } from 'uuid';

import { ActionTypes, fetchUniversityAction } from '../../actions';

export interface stateType {
      isLoading: boolean,
      universities: University[],
      error: string
}

export const initialState: stateType  = {
    isLoading: false,
    universities: [],
    error: ''
}



const universitiesReducer = (state: stateType = initialState, action: fetchUniversityAction) => {
    switch (action.type) {
        case ActionTypes.FETCH_UNIVERSITY_LOADING:
            return {
                ...state,
                isLoading: true
            }

        case ActionTypes.FETCH_UNIVERSITY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                universities: action.payload,
                error: ''
            }

        case ActionTypes.FETCH_UNIVERSITY_FAILURE:
            return {
                ...state,
                isLoading: false,
                universities: [],
                error: action.payload
            }

        default: return state
    }
}

export const fetchAllUniversities = ({
  universities: { universities }
}: { universities: { universities: University[] } } ) => {
  //content = JSON.stringify(universities);
  return (universities).map( university => ({
    ...university,
    id: uuidv4()
  }))
};



export const getUniversitiesError = ({
  universities: { error }
}: { universities: { error: string }}) => error;

export const getUniversitiesStatus = ({
  universities: { isLoading }
}: { universities: { isLoading: boolean }}) => isLoading;


export default universitiesReducer
