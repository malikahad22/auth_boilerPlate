import React, { useState } from 'react';
import { addTodo } from '../../redux/todoSlice/todoSlice';
import { useDispatch } from 'react-redux';

const Page = () => {
    const dispatch = useDispatch();
    const [todo, setTodo] = useState("");

    const handleDispatch = (e) => {
        e.preventDefault();

        if (todo.trim()) {
            dispatch(addTodo(todo))
            setTodo('')
            document.getElementById('my_modal_1').close();
        }else{
            alert("Please Enter Valid Value")
        }
    }
    return (
        <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
                <h3 className="text-lg font-bold">Add Your Todo</h3>
                <div className="modal-action">
                    <form method="dialog " className='w-full space-y-3'>
                        <input type="text" name='todo' placeholder="Type Your Todo" value={todo} className="w-full input input-bordered" onChange={(e) => { setTodo(e.target.value) }} required />
                        <button type='submit' className="btn" onClick={handleDispatch}>Add</button>
                    </form>
                </div>
            </div>
        </dialog>
    )
}

export default Page