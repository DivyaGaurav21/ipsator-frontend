import React from 'react';
import { highlight } from '../staticdata'
const WasteToWealthHighlights = () => {
  return (
    <div className="bg-gray-200 p-6 rounded-lg shadow-md w-full">
      <h1 className="text-2xl text-center font-bold mb-4 text-red-600 py-8">HIGHLIGHTS OF INITIATIVES UNDER WASTE TO WEALTH MISSION</h1>
      <div className="grid grid-cols-2 gap-4 w-[80%] m-auto">
        {
          highlight.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow-md h-[140px]  flex flex-col justify-center items-center">
              <h2 className="text-2xl font-bold mb-3 text-red-400">{item.amount}</h2>
              <p className='text-gray-500'>{item.source}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default WasteToWealthHighlights;
