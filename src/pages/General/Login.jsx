import React from 'react'
import PageLayout from '../../components/PageLayout'
import Forminput from '../../components/utils/Forminput'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <PageLayout>
      <div className=" flex items-center justify-center w-full h-full">
        <form className='w-11/12 lg:w-10/12'>
        <div className="-mb-2 font-bold text-2xl text-slate-800">Login Account</div>
        <div className="">
          <Forminput formtype='text' className="text-xl font-bold mb-1 text-slate-800" placeholder={'yourname@email.com'} label={'Email Address'} />
        </div>
        <div className='-mt-2'>
          <Forminput formtype='text' className="mb-1 text-xl font-bold text-slate-800" label={'Password'} placeholder={'*******'} />
        </div>
        <div className="flex items-center justify-between w-full mt-8">
          <p className='text-md font-medium'>Forgot <span className='text-blue-800 text-md cursor-pointer'>Password?</span></p>
          <button className='px-8 py-2 rounded-lg text-white bg-blue-800 font-medium'>Login</button>
        </div>
        <div className="text-md text-center mt-8">Don't have an account? <Link to={`/signup`} className='text-blue-800 text-md cursor-pointer'>Sign up</Link></div>
        </form>
      </div>
    </PageLayout>
  )
}

export default Login