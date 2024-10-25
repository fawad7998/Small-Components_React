import React, { useState } from 'react';

const DragDrop = () => {
    const [files, setFiles] = useState([]);

    const handleDrop = (e) => {
        e.preventDefault();
        const newFiles = Array.from(e.dataTransfer.files);
        setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    };

    const handleDragOver = (e) => e.preventDefault();

    const handleFileSelect = (e) => {
        const selectedFiles = Array.from(e.target.files);
        setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
    };

    const handleRemoveFile = (index) => {
        setFiles(f => f.filter((a, i) => i != index));
    };

    const formatFileSize = (size) => {
        if (size < 1024) return `${size} bytes`;
        else if (size < 1024 * 1024) return `${(size / 1024).toFixed(2)} KB`;
        else return `${(size / (1024 * 1024)).toFixed(2)} MB`;
    };
    const handleDeleteAll = () => {
        setFiles([])
    }

    return (
        <div className="flex flex-col items-center gap-4 p-4 bg-gray-900 text-gray-100 min-h-screen">
            <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                className="w-64 h-32 border-2 border-dashed border-gray-600 flex items-center justify-center mb-4 rounded-lg bg-gray-800 hover:border-blue-500 transition duration-200"
            >
                Drag & Drop Files Here
            </div>

            <input
                type="file"
                multiple
                onChange={handleFileSelect}
                className=" abc hidden"
                id="fileInput"
            />
            <button
                onClick={() => document.getElementById('fileInput').click()}
                className="px-4 py-2 bg-blue-500 text-gray-100 rounded hover:bg-blue-600 transition duration-200"
            >
                Select Files
            </button>

            <button
                onClick={handleDeleteAll}
                className="text-red-500 hover:text-red-600 transition duration-200 text-sm font-semibold px-3 py-1 rounded"
            >
                Remove All
            </button>

            <div className="w-full mt-4">
                {files.length > 0 && (
                    <ul className="list-none space-y-4 p-4 bg-gray-800 rounded-lg shadow-md">
                        {files.map((file, index) => (
                            <li
                                key={index}
                                className="flex items-center justify-between px-4 py-3 border border-gray-700 rounded-lg bg-gray-900 text-gray-100"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-sm font-semibold text-gray-300 truncate">{file.name}</span>
                                    <span className="text-xs text-gray-500">({formatFileSize(file.size)})</span>
                                </div>
                                <button
                                    onClick={() => handleRemoveFile(index)}
                                    className="text-red-500 hover:text-red-600 transition duration-200 text-sm font-semibold px-3 py-1 rounded"
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

        </div>
    );
};

export default DragDrop;
