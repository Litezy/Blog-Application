import React from 'react'
import BlogUserComponent from './BlogUserComponent'
import blogimg from '../assets/images/animals-2222007_1280.jpg'
import ButtonComponent from './ButtonComponent'
import profilepic from '../assets/images/cat.jpg'
const SingleBlog = () => {
  return (
    <div className='mb-10 bg-white/45'>
        <BlogUserComponent pic={profilepic} title={'Mike Ashley'} post={'Posted: 20 minutes ago'}/>
        <div className="mt-4 overflow-y-hidden">
            <img src={blogimg} className=' w-[95%] rounded-lg mx-auto h-[15rem] object-cover' alt="blogimg" />
            <div className="w-11/12 mx-auto px-1">
            <h1 className='font-bold text-2xl mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
            <p className='text-md font-md mt-3 text-orange-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit neque pariatur tempora est minima vitae iusto amet labore esse culpa atque aliquid nulla dolores nemo, deleniti ipsum accusantium! Ea, debitis.</p>
            </div>
        </div>
        <ButtonComponent/>
    </div>
  )
}

export default SingleBlog