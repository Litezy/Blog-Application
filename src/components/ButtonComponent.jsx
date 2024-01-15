import React, { useState } from 'react'
import { FaCommentAlt, FaRegThumbsDown, FaRegThumbsUp } from 'react-icons/fa'
import dogimg from '../assets/images/dog.avif'
import deerimg from '../assets/images/deer.avif'
import chameleonimg from '../assets/images/chameleon.avif'
import eagleimg from '../assets/images/eagle.avif'
import giraffeimg from '../assets/images/giraffe.avif'
import CommentsComponent from './utils/CommentsComponent'
import { BsEmojiFrown} from 'react-icons/bs'
import Forminput from './utils/Forminput'
import Formbutton from './utils/Formbutton'

const ButtonComponent = () => {
  const [likes, setLikes] = useState(false)
  const [dislikes, setDislikes] = useState(false)
  const [comment, setComment] = useState(false)



  return (
    <div className="w-full">
      <div className='flex items-center justify-between md:w-[90%] md:mx-auto px-3 w-[100%] mt-5'>
      <button onClick={() => setLikes(prev => !prev)} className={`flex items-center justify-center px-8 py-1   md:px-12 md:py-3 rounded-md border-2 ${likes === true ? 'border-blue-400' : '' }`}>
        <FaRegThumbsUp className={`text-xl font-bold ${likes === true ? 'text-blue-500': ''}`}/> 
        <p className='pl-1 font-medium'>: 100</p></button>

      <button onClick={() => setDislikes(prev =>!prev)} className={`flex items-center px-8 py-1 md:px-12 md:py-3 rounded-md border-2 ${dislikes === true? 'border-red-500':''} `}><FaRegThumbsDown className={`text-xl font-bold ${dislikes === true ? 'text-red-500': ''}`}/> <span className='pl-1 font-medium'>: 50</span></button>

      <button onClick={() => setComment(prev => !prev)} className='flex items-center px-8 py-1 md:px-12 md:py-3 rounded-md border-2 '>
        <FaCommentAlt  className="text-lg font-bold"/> <span className='pl-1 font-medium'>: 100</span></button>
    
    </div>
    {comment === true && <div className='flex flex-col h-[20rem] overflow-y-auto w-[90%] mx-auto mt-5'>
      <CommentsComponent pic={dogimg} title={'Daniel Samson'} post={'Posted: 10 minutes ago'}>
        <div className="ml-2 ">
         I think i have of these at home at the moment.
        </div>
        <hr  className='shadow-lg mt-2'/>
      </CommentsComponent>
      <CommentsComponent pic={deerimg} title={'Andre Stevens'} post={'Posted: 15 minutes ago'}>
        <div className="ml-2 ">
          so beautiful, where did you get this picture from? the internet i guess!.
        </div>
        <hr  className='shadow-lg mt-2'/>
      </CommentsComponent>
      <CommentsComponent pic={chameleonimg} title={'Mary Donald'} post={'Posted: 19 minutes ago'}>
        <div className="ml-2 ">
          I stay here in Kansas just by the river, can i have one of those?.
        </div>
        <hr  className='shadow-lg mt-2'/>
      </CommentsComponent>
      <CommentsComponent pic={eagleimg} title={'Marc Richard'} post={'Posted: 26 minutes ago'}>
        <div className="ml-2 ">
          This just made me remember kain, my lovely dog. I miss him so much. <BsEmojiFrown className="text-red-300" />
        </div>
        <hr  className='shadow-lg mt-2'/>
      </CommentsComponent>
      <CommentsComponent pic={giraffeimg} title={'Stephanie Parker'} post={'Posted: 36 minutes ago'}>
        <div className="ml-2 ">
          I so much love cats a lot, i had a couple before i lost 'em, still gonna get another.
        </div>
        <hr  className='shadow-lg mt-2'/>
      </CommentsComponent>
      <Forminput label={'Mike Ashley'} className="font-medium" formtype='text' placeholder={'comment your reply'}/>
      <div className="w-fit ml-auto text-md">
        <Formbutton Alert={() => setComment(prev => !prev)} title={'Upload comment'}/>  
      </div>
      <hr className='mt-5' />
      </div>}
    </div>
    
  )
}

export default ButtonComponent