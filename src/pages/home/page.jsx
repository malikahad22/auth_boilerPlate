import React from 'react';
import Header from '../../components/Header/page';
import { useSelector, useDispatch } from 'react-redux';
import { increament, decrement, reset } from '../../redux/counterSlice/counterSlice';

const Page = () => {

  const count = useSelector(state => state.counter.counter);
  const dispatch = useDispatch();

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='absolute top-0 w-full'>
        <Header />
      </div>

      <div className='flex flex-col items-center justify-center space-y-5 rounded-lg shadow-lg h-80 w-96'>

        <h1 className='text-4xl font-bold'>Counter</h1>
        <div className='space-y-5'>
          <p className='text-2xl font-bold text-center'>Count:{count}</p>
          <div className='flex gap-3'>
            <button className='btn-neutral btn' onClick={() => dispatch(increament())}>Inc</button>
            <button className='btn-neutral btn' onClick={() => dispatch(decrement())}>Dec</button>
          </div>
          <button className='w-full btn btn-neutral' onClick={() => dispatch(reset())}>Reset</button>
        </div>

      </div>
    </div>
  )
}

export default Page;