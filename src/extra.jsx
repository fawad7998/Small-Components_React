import React, { useState } from 'react'

function Extra() {
    const [value, setvalue] = useState([]);
    const handleSubmit = (e) => {
        const files = Array.from(e.target.files)
        setvalue((prevFiles) => [...prevFiles, ...files]);
    }

    const onDrop = (e) => {
        e.preventDefault();
        const file = Array.from(e.dataTransfer.files)
        setvalue((prevFiles) => [...prevFiles, ...file]);
    }
    const onDragOver = (e) => e.preventDefault()
    return (

        <>
            <div onDrop={onDrop} onDragOver={onDragOver} >
                <input multiple type="file" onDrop={handleSubmit} className='hidden' />
            </div>
            {value.map((val) => {
                return (
                    <div>
                        <p>{val.name}</p>
                        <p>{val.size}</p>
                    </div>
                )
            })}
        </>
    )
}

export default Extra
