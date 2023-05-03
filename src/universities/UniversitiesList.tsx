import React from 'react';

import { University } from './University';

import UniversityCard from './UniversityCard';

interface UniversityListProps {
  universities: University[];
}

function UniversitytList({ universities }: UniversityListProps) {


  return (
    <div className="mx-auto px-20">
          <div style={{backgroundColor:"rgb(255, 255, 255)"}}>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 pt-20 pb-10 lg:pt-40 lg:pb-20" style={{cursor: "auto"}}>

        {universities.map((university) => (
            <UniversityCard key={university.id} university={university}/>
        ))}



            </div>
        </div>
    </div>
  );
}

export default UniversitytList;
