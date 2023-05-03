import React, { ChangeEvent, useState, useEffect, useCallback } from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineLogin } from 'react-icons/ai';

interface SearchFormProps {
  onFetch: (name: string) => void;
}
const Navbar = ( { onFetch }: SearchFormProps) => {

  const [name, setName] = useState<string>('');

  const nameHandleChange = useCallback((e: ChangeEvent<HTMLInputElement>):void => {
    setName(e.target.value);
  }, []);

  useEffect(() => {
    name !== '' && onFetch(name);
  }, [name])


  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
      {/* Left side */}
      <div className='flex items-center'>
        <div className='cursor-pointer'>
          <AiOutlineMenu size={30} />
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
          Best <span className='font-bold'>University</span>
        </h1>
        <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
          <p className='bg-black text-white rounded-full p-2'>Flux</p>
          <p className='p-2'>Build</p>
        </div>
      </div>

      {/* Search Input */}
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={25} />
        <input
          className='bg-transparent p-2 w-full focus:outline-none'
          type='text'
          name="name"
          placeholder="enter university name"
          value={name}
          onChange={nameHandleChange}
        />
      </div>
      {/* Cart button */}
      <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
        <AiOutlineLogin size={20} className='mr-2' /> Login
      </button>


    </div>
  );
};

export default Navbar;
