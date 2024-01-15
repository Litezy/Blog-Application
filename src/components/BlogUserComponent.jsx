import React from 'react'
import { Link } from 'react-router-dom'

const BlogUserComponent = ({title, post, pic}) => {
    return (
       <Link to={`/blog/1/user`}>
         <div className='pl-2 pt-2 flex items-center'>
            <img src={pic} className='w-10 h-10  object-cover rounded-full' alt="profile-pic" />
            <div className="ml-2">
                <h2 className='font-bold text-lg'>{title}</h2>
                <p className='text-md'>{post}   </p>
            </div>
        </div>
       </Link>
    )
}

export default BlogUserComponent