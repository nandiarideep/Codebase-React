import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { AiFillGoogleCircle } from 'react-icons/ai'

const Login = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => {
      alert(JSON.stringify(data));
      console.log(watch(data));
  }
return (
  <div className='flex items-center justify-center m-20'>
      <div className='h-full w-96 shadow-2xl rounded-3xl flex flex-col items-center gap-3'>
          <h1 className='text-2xl font-bold'>Login</h1>
          <form className='flex flex-col gap-3 w-[90%]' onSubmit={handleSubmit(onSubmit)}>
            {/* Email Field */}
            <input type="email" 
              placeholder='Enter Email' 
              className='border border-black rounded-lg p-2' 
              id='email'
              name='email'
              {...register('email', {
                required: true,
                maxLength: 30,
                pattern: /^[A-Z0-9._%+-]+@[A-z0-9.-]+\.[A-Z]{2,4}$/i
              })}
            />
            {errors?.email?.type === 'required' && <p className='text-red-500'>Email is Required</p>} 
            {/* Password Field */}
            <input type="password" 
              placeholder='Enter Password' 
              className='border border-black rounded-lg p-2' 
              id='password'
              name='password'
              {...register('password', {
                required: true,
                minLength: 8,
              })}
            />
            {errors?.password?.type === 'required' && <p className='text-red-500'>Password is Required</p>} 
            {errors?.password?.type === 'minLength' && <p className='text-red-500'>Minimum 8 Characters</p>} 

            <button type='submit' onSubmit={onSubmit} className='bg-[#0E2A47] hover:bg-[#0a1c30] text-white rounded-lg p-2'>Submit</button>
            <button className='bg-black hover:bg-[#171717] text-white flex items-center justify-center gap-3 rounded-lg p-2'>
              <AiFillGoogleCircle className='text-2xl'/>Continue With Google
            </button>
          </form>
          <div>
            Don't Have An Account ? <span className='font-bold cursor-pointer hover:text-[#191818]'><Link to='/Signup'>Sign Up</Link></span> 
          </div>
          <div className='font-bold hover:text-[#171717] mb-3'><Link to='/ForgotPassword'>Forgot Password</Link></div>
      </div>
  </div>
)
}

export default Login
