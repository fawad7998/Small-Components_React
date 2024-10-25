import React, { useState } from 'react';

const Test = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">Single Function Modal Example</h1>
            <button
                onClick={toggleModal}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-200"
            >
                Open Modal
            </button>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                        <h2 className="text-xl font-bold mb-4">Modal Title</h2>
                        <p className="mb-4">This is the content of the modal.</p>
                        <button
                            onClick={toggleModal}
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
                        >
                            Close Modal
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Test;
