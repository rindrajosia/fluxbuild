import { University } from '../universities/University';

export enum ActionTypes {
  FETCH_UNIVERSITY_LOADING,
  FETCH_UNIVERSITY_SUCCESS,
  FETCH_UNIVERSITY_FAILURE
}

export interface fetchUniversityAction {
  type: ActionTypes;
  payload?: University[] | string;
}

export interface stateType {
  isLoading: boolean,
  universities: University[],
  error: string
}
