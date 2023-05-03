import React from 'react';

import UniversitiesPage from './UniversitiesPage';

import Navbar from './Navbar'
import Hero from './Hero'

import { useDispatch } from "react-redux";

import { fetchUniversities } from "../actions/universityAction";

function App() {
  const dispatch = useDispatch();

  const onFetch = (name: string) => {
    dispatch(fetchUniversities(name));
  }
  return (
   <>
      <Navbar onFetch={onFetch} />
      <Hero />
      <UniversitiesPage />
   </>
   );
}

export default App;
