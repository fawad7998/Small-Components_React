// src/components/LetterTracer.js
import React, { useRef, useState, useEffect } from "react";
import CanvasDraw from "react-canvas-draw";
import clsx from "clsx";

const LetterTracer = ({ letter = "A", width = 300, height = 400 }) => {
    const [isComplete, setIsComplete] = useState(false);
    const [strokeCount, setStrokeCount] = useState(0);
    const canvasRef = useRef(null);

    const resetCanvas = () => {
        canvasRef.current.clear();
        setIsComplete(false);
        setStrokeCount(0);
    };

    // Check completion based on strokes and length of drawing
    const checkCompletion = () => {
        const data = canvasRef.current.getSaveData();
        const lines = data ? JSON.parse(data).lines : [];
        if (lines.length > 10) { // Adjust this threshold as needed
            setIsComplete(true);
        }
    };

    useEffect(() => {
        if (!isComplete) {
            const timeout = setTimeout(resetCanvas, 2000);
            return () => clearTimeout(timeout);
        }
    }, [isComplete, strokeCount]);

    const handleDraw = () => {
        if (!isComplete) {
            setStrokeCount(canvasRef.current.getSaveData().lines.length);
            checkCompletion();
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
            <h1 className="text-5xl font-bold mb-6">{letter}</h1>
            <div
                className={clsx("border-4 rounded-md", {
                    "border-green-500": isComplete,
                    "border-red-500": !isComplete,
                })}
                style={{ width, height }}
            >
                <CanvasDraw
                    ref={canvasRef}
                    onChange={handleDraw}
                    brushRadius={5}
                    lazyRadius={0}
                    brushColor="#34D399" // Tailwind green
                    canvasWidth={width}
                    canvasHeight={height}
                    hideInterface={true}
                    immediateLoading={false} // Prevents auto-draw
                    disabled={isComplete} // Disable drawing after completion
                />
            </div>
            <button
                onClick={resetCanvas}
                className="mt-4 bg-red-600 px-4 py-2 rounded hover:bg-red-500"
            >
                Reset
            </button>
            {isComplete && <p className="mt-4 text-green-500">Great Job!</p>}
        </div>
    );
};

export default LetterTracer;
