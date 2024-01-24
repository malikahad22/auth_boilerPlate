import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { checkDataFormat, checkUserExist } from '../../middleware/userValidationMiddleware/page';

const Page = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let user = localStorage.getItem('user');
    user = JSON.parse(user);

    const navigate = useNavigate();

    useEffect(()=>{
        if(user){
            navigate('/home');
        }
    },[navigate , user])

    const userData = (e) => {

        e.preventDefault()
        let validation = checkDataFormat(email, password);

        if (validation) {

            let userExist = checkUserExist(email, password)

            if (userExist) {
                localStorage.setItem('user', JSON.stringify(userExist));
                navigate('/home')
            }
            else {
                alert("User does not exist")
            }

        }
        else {
            alert("Please Provide Valid Credentials")
        }
        
        
    }
    return (
        <div className='flex flex-col items-center justify-center h-screen px-5 space-y-5'>
            <form className='flex flex-col w-full md:w-[50%] lg:w-[40%]  space-y-5 shadow-xl rounded-lg p-5'>
                <h1 className='text-2xl font-semibold text-zinc-800'>LogIn</h1>
                <input required className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="email" placeholder='Enter Your Email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <input required className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="Password" placeholder='Enter Your Password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                <Link to={'/signup'} className="font-medium text-blue-600 hover:underline dark:text-primary-500">Create Account</Link>
                <button className="btn" onClick={userData}>Login</button>
            </form>
        </div>
    )
}

export default Page;