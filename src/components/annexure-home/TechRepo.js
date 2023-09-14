import React from 'react';

const TechRepo = () => {
    const pdfUrl = '../pdf/pdf';

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'downloaded-file.pdf';
        link.click();
    };

    return (
        <div className="bg-neutral-400 flex items-center justify-center min-h-[60vh]">
            <div className="w-full h-[400px] relative overflow-hidden rounded shadow-lg">
                <img
                    src="https://media.istockphoto.com/id/1435409342/photo/robot-workers-in-factory.webp?b=1&s=170667a&w=0&k=20&c=iOE-n6bVh0wXTqaCQR5SltbTKMFq2LUG8C0lYV09Hko="
                    alt="Image"
                    className="w-full h-full object-cover object-center opacity-90"
                />
                {/* Text overlay */}
                <div className="absolute text-white p-5 left-0 right-0 bottom-0 bg-black bg-opacity-70">
                    <h1 className="text-2xl text-center underline mb-6">
                        TECHNOLOGY REPOSITORY
                    </h1>
                    <p className="text-sm text-justify">
                        The technologies listed in this repository broadly fall under two categories: Technologies
                        which have been evaluated by Waste to Wealth Mission and Jal Jeevan Mission. These
                        technologies have been scientifically evaluated by Expert Committees comprising of
                        renowned subject experts from academia and industry. These recommendations are based
                        on scientific merits and only suggestive in nature for deployment. All technical and
                        commercial information provided about the technologies are only for information and
                        general understanding of readers. Users should not consider the technologies listed here as
                        any form of endorsement or recommendation by Waste to Wealth Mission, Office of PSA,
                        Invest India, Jal Jeevan Mission, Department of Drinking Water and Sanitation (DDWS),
                        and Ministry of Jal Shakti, Government of India. There could be many other similar
                        technologies, and users are advised to select appropriate technologies as per their local needs
                        and procure them according to their procurement policies after carrying out necessary due
                        diligence.
                        The repository also lists technologies identified by other bodies such as Central Pollution
                        Control Board, United Nations Environment Programme, Tamil Nadu Urban Sanitation
                        Support Programme, etc. The information provided for these technologies has been
                        sourced as is from the respective databases, and Waste to Wealth Mission, Office of PSA,
                        and Invest India cannot be held liable for any incorrect information provided in these
                        databases.
                    </p>
                    <button
                        onClick={handleDownload}
                        className="bg-red-900 text-white rounded shadow hover:bg-red-600 transition duration-300 p-4 mt-5 mx-auto block"
                    >
                        Download PDF
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TechRepo;
