import React from 'react';

const Card = ({ title, description, imageSrc }) => {
    return (
        <>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden flex justify-center items-center">
                <img src={imageSrc} alt={title} className="w-full md:w-52 h-52 rounded-full object-cover object-center" />
            </div>
            <div className="p-1 bg-slate-100 rounded-xl mt-2">
                <h2 className="text-sm font-extrabold text-center text-red-800">{title}</h2>
                <p className="mt-1 font-bold text-xs text-center text-red-800">{description}</p>
            </div>
        </>
    );
};

export default Card;
