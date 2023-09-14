import React from 'react'

const ProblemTechCard = ({ problem, solution }) => {
    return (
        <div>
            <h1 className='text-center text-red-500 text-xl'>{problem}</h1>
            <p className='mt-5 text-justify font-serif text-rose-950 px-5'>{solution}</p>
        </div>
    )
}

export default ProblemTechCard