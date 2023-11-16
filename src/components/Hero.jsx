import React from 'react'

const Hero = () => {
    return (
        <div className='max-w-[1640] mx-auto p-4'>
            <div className='max-h-[500px] relative'>
                {/* Overlay */}
                <div className=' absolute w-full h-full text-gray-100 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-red-700'>Finest</span></h1>
                    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-red-600 font-bold'>Foods <span className='text-white'>Delivered </span></h1>

                </div>

                <img className='w-full object-cover max-h-[500px]' src="https://images.unsplash.com/photo-1540914124281-342587941389?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
        </div>
    )
}

export default Hero
