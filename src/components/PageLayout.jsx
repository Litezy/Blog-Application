import React from 'react'
import Header from './Header'
import Footer from './Footer'

const PageLayout = ({ children }) => {
    return (
        <div className='grid md:grid-cols-1 lg:grid-cols-7'>   
            <div className="h-screen hidden lg:block lg:col-span-2"></div>
            <div className="h-screen bg-white lg:col-span-3">
                <div className="h-[10vh] bg-blue-800 flex w-[100%] md:w-full">
                <Header />
                </div>
                <div className="h-[85vh] overflow-y-auto">
                {children}
                </div>
                <div className="h-[5vh]">
                <Footer />
                </div>
            </div>
        </div>
    )
}

export default PageLayout