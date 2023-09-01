import React from 'react'
import { AiFillGoogleCircle } from 'react-icons/ai'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'



const Signup = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    console.log(watch(data));
  }

  // const auth = getAuth();
  // createUserWithEmailAndPassword(auth, email, password)
  //   .then((userCredential) => {
  //     // Signed in 
  //     const user = userCredential.user;
  //     // ...
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     // ..
  //   });
  return (
    <div className='flex items-center justify-center m-20'>
      <div className='h-full w-96 shadow-2xl rounded-3xl flex flex-col items-center gap-5'>
        <h1 className='text-2xl font-bold'>Register</h1>
        <form className='flex flex-col gap-3 w-[90%]' onSubmit={handleSubmit(onSubmit)}>
          {/* Name Field */}
          {/* <input type="text" 
                placeholder='Enter Full Name' 
                className='border border-black rounded-lg p-2' 
                id='fullName'
                name='fullName'
                {...register('fullName', {
                  required: true,
                  maxLength: 20,
                  pattern: /^[A-Za-z]+$/i
                })}
              />
              {errors?.fullName?.type === 'required' && <p className='text-red-500'>Required</p>}  */}
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
            <AiFillGoogleCircle className='text-2xl' />Continue With Google
          </button>
        </form>
        <div className='mb-3'>
          Already Have An Account ? <span className='font-bold cursor-pointer hover:text-[#191818]'><Link to='/Login'>Sign In</Link></span>
        </div>
      </div>
    </div>
  )
}

export default Signup
