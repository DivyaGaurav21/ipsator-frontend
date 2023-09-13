import React from 'react'

const TechRepo = () => {
    const pdfUrl = '../pdf/pdf';

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'downloaded-file.pdf';
    };
    return (
        <div className="bg-gray-100 w-full flex items-center justify-center">
            <div className="w-full h-auto relative">
                <img src="https://media.istockphoto.com/id/1435409342/photo/robot-workers-in-factory.webp?b=1&s=170667a&w=0&k=20&c=iOE-n6bVh0wXTqaCQR5SltbTKMFq2LUG8C0lYV09Hko=" alt="Image" className="w-full h-[400px] opacity-70" />
                {/* Absolute download link */}
                <div className='absolute text-justify p-5 md:w-[80%] left-16 md:left-36 top-20 py-2 font-bold'>
                    <p className='text-red-900'>The technologies listed in this repository broadly fall under two categories: Technologies
                        which been evaluated by Waste to Wealth Mission and Jal Jeevan Mission. These
                        technologies have been scientifically evaluated by Expert Committees comprising of
                        renowned subject experts from academia and industry. These recommendations are based
                        on scientific merits and only suggestive in nature for deployment. All technical and
                        commercial information provided about the technologies are only for information and
                        general understanding of readers. Users should not consider the technologies listed here as
                        any form of endorsement or recommendation by Waste to Wealth Mission, Office of PSA,
                        Invest India, Jal Jeevan Mission, Department of Drinking Water and Sanitation (DDWS),
                        and Ministry of Jal Shakti, Government of India. There could be many other similar
                        technologies and users are advised to select appropriate technologies as per their local needs
                        and procure them according to their procurement policies after carrying out necessary due
                        diligence.
                        The repository also lists technologies identified by other bodies such as Central Pollution
                        Control Board, United Nations Environment Programme, Tamil Nadu Urban Sanitation
                        Support Programme etc. The information provided for these technologies have been
                        sourced as is from the respective databases and Waste to Wealth Mission, Office of PSA
                        and Invest India cannot be held liable for any incorrect information provided in these
                        databases.
                    </p>
                    <button
                        onClick={handleDownload}
                        className=" bg-red-950 text-white rounded shadow hover:bg-red-300 transition duration-300 p-4 m-auto"
                    >
                        Download PDF
                    </button>
                </div>

            </div>
        </div>
    )
}

export default TechRepo