import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom';

const NavBar = () => {

  const toggle = () => {
    if (active) {
        return setActive(false)
    }
    setActive()
  }

  const [active, setActive] = useState(false);

  return (
    <>
      <div className='flex justify-between h-[80px] min-w-full items-center shadow-2xl font-bold text-[1.5rem]'>
        <h1 className='text-[#6d62e1] hover:text-[#3b3391] cursor-pointer mx-3'><Link to='/'>{"{CodeBase}"}</Link></h1>
        <div className='block md:hidden cursor-pointer text-3xl mx-3' onClick={() => setActive(!active)}>
          <div>{active ? <AiOutlineClose /> : <AiOutlineMenu />}</div>
        </div>
        <div className={!active ? 'gap-5 md:flex mx-3 hidden' : 'absolute flex flex-col h-screen w-[100%] top-0 text-white justify-center items-center gap-10 bg-[rgb(0,0,0,1)]'}
             onClick={() => toggle(active)}>  
          <button className='text-[#6d62e1]'><Link to='/'>Home</Link></button>
          <button>About</button>
          <button>Contact</button>
          <button className='rounded-lg px-3 hover:bg-[#e5e5ea] border-[2px]'><Link to='/Login'>Login</Link></button>
          <button className='bg-[#6d62e1] rounded-lg px-3 text-white hover:bg-[#554bb9]'><Link to='/Signup'>Sign Up</Link></button>
        </div>

      </div>
    </>
  )
}

export default NavBar
