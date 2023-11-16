import React from 'react'
import { categories } from '../data/data'

const Category = () => {

    console.log(categories)

    return (
        <div className='max-w-[1640px] px-4 py-12'>
            <h1 className='text-red-700 font-bold text-4xl text-center'>Highest-Rated Menu Selections</h1>
            {/* Categories */}
            <div className=' grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
                {categories.map((food, index) => (
                    <div key={index} className='bg-red-100 rounded-lg p-4 hover:scale-105 duration-300 flex justify-between items-center'>
                        <h2 className='font-bold sm:text-xl'>{food.name}</h2>
                        <img className='w-20' src={food.image} alt={food.name} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Category
