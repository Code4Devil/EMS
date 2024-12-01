import React, { useState } from 'react'

const Login = ({HandleLogin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("email is ",email)
        console.log("password is ",password)
        HandleLogin(email,password)
        setEmail('')
        setPassword('')
    }

  return (
    <div className='h-screen w-screen flex justify-center items-center '>
        <div className='border-2 border-emerald-600 p-20 rounded-xl '>
            <form onSubmit={
                (e)=>{
                    submitHandler(e)
                }
            } className='flex flex-col items-center justify-center' >
                <input required value={email} onChange={(e)=>setEmail(e.target.value)} className= 'mb-3 text-white outline-none bg-transparent placeholder:text-gray-400 border-2 border-emerald-600 text-xl rounded-full py-2 px-5 ' type="email" placeholder='Enter Email'/>
                <input required value={password} onChange={(e)=>setPassword(e.target.value)} className='text-white outline-none bg-transparent placeholder:text-gray-400 border-2 border-emerald-600 text-xl rounded-full py-2 px-5 ' type="password"placeholder='Enter Password' />
                <button className='mt-7 text-white  bg-emerald-700 px-[120px] py-2 rounded-full' type='submit'>Login</button>
            </form>

        </div>

    </div>
  )
}

export default Login