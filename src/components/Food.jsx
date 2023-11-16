import React, { useState } from 'react';
import { data } from '../data/data.js';

const Food = () => {
    const [foods, setFoods] = useState(data);

    // Filter Type (Burgers, Pizza, etc.)
    const filterType = (category) => {
        const filteredFoods = data.filter((food) => food.category === category);
        setFoods(filteredFoods);
    };

    // Filter by price
    const filterPrice = (price) => {
        const filteredFoods = data.filter((food) => food.price === price);
        setFoods(filteredFoods);
    };

    return (
        <div className="max-w-[1640] m-auto px-4 py-12">
            <h1 className="text-red-800 font-bold text-4xl text-center">Highest-Rated Menu Selections</h1>

            {/* FILTER ROW */}
            <div className="flex flex-col lg:flex-row justify-between">

                {/* Filter type */}
                <div>
                    <p className="font-bold text-gray-700">Filter Type</p>
                    <div className="flex justify-between flex-wrap">
                        <button onClick={() => setFoods(data)} className="border-red-700 text-red-700 hover:bg-red-800 hover:text-white m-1">All</button>
                        <button onClick={() => filterType("burger")} className="border-red-700 text-red-700 hover:bg-red-800 hover:text-white m-1">Burgers</button>
                        <button onClick={() => filterType("chicken")} className="border-red-700 text-red-700 hover:bg-red-800 hover:text-white m-1">Chicken</button>
                        <button onClick={() => filterType("salad")} className="border-red-700 text-red-700 hover:bg-red-800 hover:text-white m-1">Salads</button>
                        <button onClick={() => filterType("pizza")} className="border-red-700 text-red-700 hover:bg-red-800 hover:text-white m-1">Pizza</button>
                    </div>
                </div>

                {/* Filter price */}
                <div>
                    <p className="font-bold text-gray-700">Filter price</p>
                    <div className="flex justify-between max-w-[390px] w-full">
                        <button onClick={() => filterPrice("$")} className="border-red-700 text-red-700 hover:bg-red-800 hover:text-white m-1">$$</button>
                        <button onClick={() => filterPrice("$$")} className="border-red-700 text-red-700 hover:bg-red-800 hover:text-white m-1">$$</button>
                        <button onClick={() => filterPrice("$$$")} className="border-red-700 text-red-700 hover:bg-red-800 hover:text-white m-1">$$$</button>
                        <button onClick={() => filterPrice("$$$$")} className="border-red-700 text-red-700 hover:bg-red-800 hover:text-white m-1">$$$$</button>
                    </div>
                </div>
            </div>

            {/* DISPLAY IMAGES */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
                {foods.map((food, index) => (
                    <div key={index} className="border shadow-lg hover:scale-105 rounded-lg duration-300">
                        <img className="w-full h-[200px] object-cover rounded-t-lg" src={food.image} alt={food.name} />
                        <div className="flex justify-between px-2 py-4">
                            <p className="font-bold">{food.name}</p>
                            <p>
                                <span className="bg-red-600 text-white p-1 rounded-full">{food.price}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Food;
