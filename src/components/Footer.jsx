import React from 'react';
import { AiOutlineMail, AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai';
import { FiPhone } from 'react-icons/fi';
import { BiLocationPlus } from 'react-icons/bi';
import { BsFacebook } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Home from '../pages/Home';

const Footer = () => {
  return (
    <>
      <div className='bg-[#08192B] md:h-[22rem] h-full min-w-full justify-between flex flex-col'>
        <div className='md:flex md:justify-between my-5 text-white'>
          <div className='flex flex-col items-center md:items-start m-10 gap-2'>
            <h1 className='text-3xl'>{'{CodeBase}'}</h1>
            <p className='md:block hidden'>
              With iMeet's robust collaboration features,
              you can easily connect with fellow developers,
              share code snippets, and brainstorm ideas in real-time.</p>
          </div>
          <div className='flex flex-col items-center md:items-start m-10'>
            <h1 className='text-xl'>Quick Links</h1>
            <Link To={<Home />}>
              <h2 className='hover:underline cursor-pointer text-indigo-500'>Home</h2>
            </Link>
            <h2 className='hover:underline cursor-pointer'>About</h2>
            <h2 className='hover:underline cursor-pointer'>Contact Us</h2>
            <h2 className='hover:underline cursor-pointer'>Terms & Conditions</h2>
            <h2 className='hover:underline cursor-pointer'>Privacy & Policy</h2>
          </div>
          <div className='flex flex-col items-center md:items-start m-10'>
            <h1 className='text-xl'>Contact</h1>
            <div className='flex gap-5 items-center'>
              <div><FiPhone /></div>
              <p>+91 000000000</p>
            </div>
            <div className='flex gap-5 items-center'>
              <div><AiOutlineMail /></div>
              <p>imeet.mathura@gmail.com</p>
            </div>
            <div className='flex gap-5 items-center'>
              <div><BiLocationPlus /></div>
              <p>Mathura, Uttar Pradesh</p>
            </div>
            <div className='flex gap-2'>
              <div className='bg-[#0E2A47] hover:bg-[#1b446f] rounded-full p-3 cursor-pointer'>
                <AiOutlineInstagram />
              </div>
              <div className='bg-[#0E2A47] hover:bg-[#1b446f] rounded-full p-3 cursor-pointer'>
                <BsFacebook />
              </div>
              <div className='bg-[#0E2A47] hover:bg-[#1b446f] rounded-full p-3 cursor-pointer'>
                <AiOutlineYoutube />
              </div>
            </div>
          </div>
        </div>
        <div className='bg-[#0E2A47] h-full w-full justify-center items-center flex'>
          <h1 className='text-white'>Copyright @ 2023 iMeet</h1>
        </div>

      </div>
    </>
  )
}

export default Footer
