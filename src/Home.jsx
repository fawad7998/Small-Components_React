import React from 'react'
import Button from './Components/Button/Button'

function Home() {
    return (
        <>
            <div className='flex items-center justify-center gap-10 h-[90vh]'>
                <Button link="/test" name="Model Component" />
                <Button link="/image" name="Image Galary" />
                <Button link="/Drag" name="Drag & Drop" />
                <Button link="/Movie" name="Movie Search" />
            </div>

        </>
    )
}

export default Home
