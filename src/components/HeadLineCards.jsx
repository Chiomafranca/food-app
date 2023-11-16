import React from 'react'

const HeadLineCards = () => {
    return (
        <div className='max-w-[1640] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
            {/* Card */}
            <div className=' rounded-xl relative'>
                {/* overlay */}
                <div className=' absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className=' font-bold text-2xl px-2 pt-4'>Cool weather</p>
                    <p className='px-2'>Through 12/4</p>
                    <button className='border-white bg-pink-100 text-black mx-2 absolute bottom-4'>order now</button>
                </div>
                <img className=' max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.unsplash.com/photo-1525184782196-8e2ded604bf7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="/" />
            </div>

            <div className=' rounded-xl relative'>
                {/* overlay */}
                <div className=' absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className=' font-bold text-2xl px-2 pt-4'>New Restaurants</p>
                    <p className='px-2'>Added Daily</p>
                    <button className='border-white bg-pink-100 text-black mx-2 absolute bottom-4'>order now</button>
                </div>
                <img className=' max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.unsplash.com/photo-1479832912902-77089f02b1d2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="/" />
            </div>
            <div className=' rounded-xl relative'>
                {/* overlay */}
                <div className=' absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className=' font-bold text-2xl px-2 pt-4'>We deliver Burger</p>
                    <p className='px-2'>Great Test</p>
                    <button className='border-white bg-pink-100 text-black mx-2 absolute bottom-4'>order now</button>
                </div>
                <img className=' max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.unsplash.com/photo-1460306855393-0410f61241c7?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="/" />
            </div>

        </div>
    )
}

export default HeadLineCards
