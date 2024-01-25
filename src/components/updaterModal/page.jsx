import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateTodo } from '../../redux/todoSlice/todoSlice';

const Page = (p) => {

    const [todo, setTodo] = useState("");
    const dispatch = useDispatch();

    let { props: { id, text } } = p;


    useEffect(() => {
        setTodo(text || "");
    }, [text])


    const handleDispatch = (e) => {
        e.preventDefault();

        if (todo.trim()) {
            dispatch(updateTodo({ id, todo }))
            document.getElementById('my_modal_2').close();
        } else {
            alert("Please Enter Valid Value")
        }

    }

    return (
        <div>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <h3 className="text-lg font-bold">Update Your Todo</h3>
                    <div className="modal-action">
                        <form method="dialog " className='w-full space-y-3'>
                            <input type="text" name='todo' placeholder="Type Your Todo" value={todo} className="w-full input input-bordered" onChange={(e) => setTodo(e.target.value)} required />
                            <button className="btn" onClick={handleDispatch}>Update</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default Page;