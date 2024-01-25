import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react'
import { deleteTodo } from '../../redux/todoSlice/todoSlice';

import Header from '../../components/Header/page';
import Modal from '../../components/Modal/page';
import UpdaterModal from '../../components/updaterModal/page';


const Page = () => {

  const [props, setProps] = useState(null);

  const dispatch = useDispatch();
  const todo = useSelector(state => state.todos.todos);

  const handleModal = (data) => {
    document.getElementById('my_modal_2').showModal()
    setProps(data);
  }

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <h1 className='py-5 text-3xl font-bold text-center text-zinc-600'>TODOS</h1>
        <button className='m-5 btn btn-primary' onClick={() => document.getElementById('my_modal_1').showModal()}>Add Todo</button>
        <div className="overflow-x-auto">

          <table className="table text-center table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>Id</th>
                <th>Todo</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                todo?.map((t, key) => (
                  <tr key={key}>
                    <td>{t.id}</td>
                    <td>{t.text}</td>
                    <td className='space-x-3'>
                      <button className='text-white btn btn-error' onClick={() => dispatch(deleteTodo(t.id))}>Delete</button>
                      <button className='text-white btn btn-accent' onClick={() => { handleModal(t) }}>Update</button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
      <UpdaterModal props={props || ""} />
      <Modal />
    </div>
  )
}

export default Page 