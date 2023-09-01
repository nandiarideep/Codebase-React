import React from 'react'
import { useForm } from 'react-hook-form'

const ForgotPassword = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => {
      alert(JSON.stringify(data));
      console.log(watch(data));
  }
return (
  <div className='flex items-center justify-center m-20'>
      <div className='h-full w-96 shadow-2xl rounded-3xl flex flex-col items-center gap-3 my-10'>
          <h1 className='text-2xl font-bold'>Forgot Password</h1>
          <form className='flex flex-col gap-3 w-[90%] m-3' onSubmit={handleSubmit(onSubmit)}>
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
            {errors?.email?.type === 'pattern' && <p className='text-red-500'>Enter a Correct One</p>} 
            

            <button type='submit' onSubmit={onSubmit} className='bg-[#0E2A47] hover:bg-[#0a1c30] text-white rounded-lg p-2'>Submit</button>
          </form>
      </div>
  </div>
)
}

export default ForgotPassword
