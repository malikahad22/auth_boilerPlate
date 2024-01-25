import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { reset } from '../../redux/counterSlice/counterSlice';

import React from 'react';

const Page = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogOut = () => {

    localStorage.removeItem('user');
    dispatch(reset());
    navigate('/')
  }


  return (
    <>
      <header className='flex flex-row items-center justify-around w-full h-16 shadow-md text-zinc-700'>
        <div>
          <Link className='text-2xl font-bold tracking-wider ' to={'/home'}>Logo</Link>
        </div>

        <div className='flex gap-10 font-medium tracking-wide'>
          <Link className='duration-500 border-b border-zinc-500 hover:text-zinc-500' to={'/home'}>Home</Link>
          <Link className='duration-500 border-b border-zinc-500 hover:text-zinc-500' to={'/services'}>Services</Link>
          <Link className='duration-500 border-b border-zinc-500 hover:text-zinc-500' to={'/contact'}>Contact</Link>
          <Link className='duration-500 border-b border-zinc-500 hover:text-zinc-500' to={'/about'}>About</Link>
          <button onClick={handleLogOut} className='duration-500 border-b border-zinc-500 hover:text-zinc-500'>Logout</button>
        </div>
      </header>
    </>
  )
}

export default Page