import React, { useState } from 'react'
import PageLayout from '../../components/PageLayout'
import Forminput from '../../components/utils/Forminput'
import Formbutton from '../../components/utils/Formbutton'
import { Link } from 'react-router-dom'
import SignupModal from '../../components/utils/signupmodal'

const Signup = () => {
const [modal, setModal] = useState(false)
const AlertFunc = (e) =>{
  e.preventDefault()
  setModal(prev => !prev)
 }

  return (
    <PageLayout>
      {modal && <SignupModal closeView={() => setModal(prev => !prev)}/>}
      <div className="w-full h-full flex items-center justify-center mb-40  mt-10 ">
        <div className="w-[80%] h-full ">
          <div className=""> <strong className='text-blue-800'>Sign up </strong>today and start posting your blogs</div>
          <form className=''>
            <Forminput className="mt-2" label={'First name'} formtype='text' placeholder={'enter first name'} />
            <Forminput className="mt-2" label={'Last name'} formtype='text' placeholder={'enter last name'} />
            <Forminput className="mt-2" label={'Username'} formtype='text' placeholder={'enter username'} />
            <Forminput className="mt-2" label={'Create password'} formtype='text' placeholder={'********'} />
            <div className="text-[13px] -mt-2 text-red-500">password must contain at least one Uppercase,lowercase,number, and one special character </div>
            <Forminput className="mt-2" label={'Confirm password'} formtype='text' placeholder={'********'} />
            <div className="text-[13px] -mt-2 text-red-500">password must match with the one above </div>
            <div className="flex w-full justify-center items-start mt-5  ">
            <input type='checkbox' />
            <span className='ml-5 w-11/12 text-[.8rem]'>by checking this box you agree to our user <span>Terms and Conditions</span> and our <span>Privacy Policy</span></span></div>
            <div className="mt-3 mb-20 w-fit ml-auto h-full 
            "><Formbutton Alert={AlertFunc} title={'create account'}/></div>
            <div className="text-md text-center -mt-9 pb-10 font-medium">Already have an account? <Link to={`/login`} className='text-blue-800 text-md cursor-pointer'>Login</Link></div>
          </form>
        </div>
      </div>
      
    </PageLayout>
  )
}

export default Signup