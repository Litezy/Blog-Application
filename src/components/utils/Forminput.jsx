import { Input } from 'postcss'
import React from 'react'

const Forminput = ({ formtype='text', type, label, placeholder, ...props }) => {
    return (
        <div className='mb-3  mt-5 ' >
           <div className="text-md" {...props}> {label}</div>
            {formtype === 'text' && <input type={type} placeholder={placeholder} className='outline-none border-2 border-slate-400 w-full p-2 rounded-md'/>}
            {formtype === "textarea" && <textarea id='' name='' cols={30} rows='2' placeholder={placeholder} className='outline-none border resize-none border-slate-400 w-full rounded-md'></textarea>}
        </div>
    )
}

export default Forminput