import React from 'react'
import PageLayout from '../../components/PageLayout'
import profileimg from '../../assets/images/cat.jpg'
const Profile = () => {
  return (
    <PageLayout>
    <div className="flex w-full h-full gap-3 items-center justify-center">
      <div className="">
        <img src={profileimg} className="w-[20rem] h-[20rem] object-cover rounded-full" alt="profile-img" />
       <div className="text-center mt-8">
       <h1 className='text-2xl font-bold'>Mike Ashley Higgins</h1>
        <p className='text-md mt-2'>mikeashley@gmail.com</p>
       </div>
      </div>
    </div>
    </PageLayout>
  )
}

export default Profile