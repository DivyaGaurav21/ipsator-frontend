import React, { useState } from 'react';

const ReusableAccordion = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(-1);

    const toggleAccordion = (index) => {
        setActiveIndex(index === activeIndex ? -1 : index);
    };

    return (
        <div>
            {data.map((section, index) => (
                <div
                    key={index}
                    className="border-b border-red-700 pb-3"
                    onClick={() => toggleAccordion(index)}
                    role="button"
                >
                    <div className="flex justify-between items-center cursor-pointer">
                        <h2 className="text-xl font-semibold">{section.main}</h2>
                        <span className="text-red-800">
                            {activeIndex === index ? '▲' : '▼'}
                        </span>
                    </div>
                    {activeIndex === index && (
                        <ul className="mt-2 pl-4">
                            {section.sub.map((item, subIndex) => (
                                <li key={subIndex} className="mb-2">
                                    <h3 className="font-semibold text-red-900">{item.title}</h3>
                                    <ul className="list-disc pl-4">
                                        {item.description.map((desc, descIndex) => (
                                            <li key={descIndex}>{desc}</li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ReusableAccordion;
