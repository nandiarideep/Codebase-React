import React, { useState } from 'react'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
import testimonial from '../assets/images/testmonial.png'
import hero from '../assets/images/hero.png'
import { Link } from 'react-router-dom'

const Home = () => {
    // FAQ Data
    const [Data] = useState([
        {
            title: 'Why Mern ? Is it Good Technology',
            details: 'Join us at iMeet and unlock a world of opportunities! Engage with industry experts, collaborate with like-minded peers, and gain hands-on experience in cutting-edge technologies. Our platform fosters a community of growth, where students can expand their knowledge, sharpen their skills, and explore their passions.'
        },
        {
            title: 'Here My source code is secure or not ?',
            details: 'Join us at iMeet and unlock a world of opportunities! Engage with industry experts, collaborate with like-minded peers, and gain hands-on experience in cutting-edge technologies. Our platform fosters a community of growth, where students can expand their knowledge, sharpen their skills, and explore their passions.'
        },
        {
            title: 'Why Mern Stack is Famous ?',
            details: 'Join us at iMeet and unlock a world of opportunities! Engage with industry experts, collaborate with like-minded peers, and gain hands-on experience in cutting-edge technologies. Our platform fosters a community of growth, where students can expand their knowledge, sharpen their skills, and explore their passions.'
        },
        {
            title: 'What is iMeet ?',
            details: 'Join us at iMeet and unlock a world of opportunities! Engage with industry experts, collaborate with like-minded peers, and gain hands-on experience in cutting-edge technologies. Our platform fosters a community of growth, where students can expand their knowledge, sharpen their skills, and explore their passions.'
        }
    ])

    // FAQ Details Toggle
    const toggle = (i) => {
        if (active === i) {
            return setActive(false)
        }
        setActive(i)
    }
    
    // FAQ Arrow Toggle
    const [active, setActive] = useState(false);

    return (
        <div className='min-h-full min-w-full'>
            <div className='mx-10 mt-20 flex justify-center relative'>
                <img src={testimonial} alt="" />
                <div className='absolute md:top-[60%] md:left-[20%] top-[60%] left-[5%] flex gap-3 md:text-2xl text-sm'>
                    <button className='bg-[#6d62e1] hover:bg-[#554bb9] px-3 py-1 rounded-xl text-white'><Link to='/Signup'>Join Now</Link></button>
                    <button className='border-black hover:bg-[#e5e5ea] border-[1px] rounded-xl px-3 py-1'><Link to='/Login'>Upload Code</Link></button>
                </div>
            </div>
            <div className='mx-10 mt-20 flex justify-center'>
                <img src={hero} className='rounded-3xl' alt='' />
            </div>
            <div className='my-20 mx-10 cursor-pointer gap-4 flex flex-col'>
                {Data.map((Data, i) => (
                    <div key={i} 
                        onClick={() => toggle(i) } 
                        className='w-full h-full rounded-2xl shadow-xl bg-[#e5e4e4]'>
                        <div className='flex justify-between items-center'>
                            <h1 className='md:text-xl text-lg font-bold m-3'>{Data.title}</h1>
                            <div className='m-3 md:text-xl text-lg'>
                                {active === i ? <AiOutlineUp /> : <AiOutlineDown /> }
                            </div>
                        </div>
                        <p className={active === i ? 'text-md m-3 font-bold' : 'text-md m-3 font-bold hidden'}>{Data.details}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home
