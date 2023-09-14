import React from 'react';
import { aboutSamaroh } from '../../staticdata';

const HoverImageWithText = () => {
    return (

        <div className='my-8'>
            <h1 className='text-center text-red-800 font-extrabold text-3xl mb-5'>About the Samaroh</h1>
            <div className='flex flex-wrap justify-between gap-5'>
                {
                    aboutSamaroh.map(item => (
                        <div key={item.id} className="hover-image-container">
                            <img src={item.imgUrl} alt="Hover Image" className="hover-image" />
                            <div className="hover-text">{item.content}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default HoverImageWithText;
