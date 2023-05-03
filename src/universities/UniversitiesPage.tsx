import React from 'react';

import UniversitytList from './UniversitiesList';

import Loading from './Loading';

import Error from './Error';

import { University } from '../universities/University';

import { useSelector } from "react-redux";

import { fetchAllUniversities, getUniversitiesError, getUniversitiesStatus } from "../reducers/universities/universityReducer";

import { MOCK_Universities } from "./MockUniversities";




function UniversitiesPage() {

  const universities: University[] = useSelector(fetchAllUniversities);

  const universitiesStatus: boolean = useSelector(getUniversitiesStatus);

  const error: string = useSelector(getUniversitiesError);

  let content;
  if (universitiesStatus === true) {
      content = <Loading />;
  }
  else if ((universitiesStatus === false && universities.length === 0) || universities.length === 0) {
      content = <Error text="Welcome" code={2023}  type="Info"/>;
  }
  else if (universitiesStatus === false && universities.length > 0) {
    content = <UniversitytList universities={universities} />
  } else if (universitiesStatus === false && error) {
      content = <Error text={error} code={404} type="Error"/>;
  }

  return (
    <>
      {content}
   </>
  );
}

export default UniversitiesPage;
