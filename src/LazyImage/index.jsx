import React, { useState, useEffect, useRef } from 'react';

// Image data array (You can replace this with your image URLs)
const images = [
    'https://picsum.photos/400/300?random=1',
    'https://picsum.photos/400/300?random=2',
    'https://picsum.photos/400/300?random=3',
    'https://picsum.photos/400/300?random=4',
    'https://picsum.photos/400/300?random=5',
    'https://picsum.photos/400/300?random=6',
    'https://picsum.photos/400/300?random=7',
    'https://picsum.photos/400/300?random=8',
    'https://picsum.photos/400/300?random=9',
    'https://picsum.photos/400/300?random=10',
    'https://picsum.photos/400/300?random=1',
    'https://picsum.photos/400/300?random=2',
    'https://picsum.photos/400/300?random=3',
    'https://picsum.photos/400/300?random=4',
    'https://picsum.photos/400/300?random=5',
    'https://picsum.photos/400/300?random=6',
    'https://picsum.photos/400/300?random=7',
    'https://picsum.photos/400/300?random=8',
    'https://picsum.photos/400/300?random=9',
    'https://picsum.photos/400/300?random=10'
];


const ImageGallery = () => {
    const [loadedImages, setLoadedImages] = useState(Array(images.length).fill(false));
    const imgRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = imgRefs.current.indexOf(entry.target);
                        setLoadedImages((prev) => {
                            const newLoadedImages = [...prev];
                            newLoadedImages[index] = true;
                            return newLoadedImages;
                        });
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        imgRefs.current.forEach((imgRef) => {
            if (imgRef) {
                observer.observe(imgRef);
            }
        });

        return () => {
            imgRefs.current.forEach((imgRef) => {
                if (imgRef) {
                    observer.unobserve(imgRef);
                }
            });
        };
    }, []);

    return (
        <div className="grid grid-cols-2 gap-4 p-4">
            {images.map((src, index) => (
                <div
                    key={index}
                    ref={(el) => (imgRefs.current[index] = el)}
                    className="relative w-full h-48 bg-gray-200"
                >
                    {loadedImages[index] ? (
                        <img
                            src={src}
                            alt={`Image ${index + 1}`}
                            className="object-cover w-full h-full"
                        />
                    ) : (
                        <div className="w-full h-full bg-gray-300"></div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ImageGallery;
