import { University } from './University';
import React from 'react';

import { IoSchool } from 'react-icons/io5';


interface UniversityCardProps {
  university: University;
}

function UniversityCard( props: UniversityCardProps) {
  const paragraph = (info: string[] | null) => (info!== null && info.length > 0) && info.join(', ');

  const { university } = props;
  return (
    <div className="p-6 bg-gray-100 rounded-lg">

      <div className="mb-5">

        <IoSchool size={30} />

      </div>

      <h3 className="text-lg font-bold mb-2">
                  {university.name}
      </h3>

      <p className="text-sm leading-6 text-gray-600">
        {university.country},
        {university.alpha_two_code}
      </p>
      <p className="text-sm leading-6 text-gray-600">
        {paragraph(university.domains)}
      </p>
      <p className="text-sm leading-6 text-gray-600">
        {paragraph(university.web_pages)}
      </p>

    </div>

  );
}

export default UniversityCard;
