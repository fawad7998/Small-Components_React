import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Movie = () => {
    const [query, setQuery] = useState('');
    const [movie, setMovie] = useState(null);
    const [trailerUrl, setTrailerUrl] = useState('');

    const fetchMovie = async () => {
        try {
            const apiKey = '526ad75264a03e430f8b5d27573eeebb';
            const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`);
            if (response.data.results.length > 0) {
                const firstMovie = response.data.results[0];
                setMovie(firstMovie);
                fetchTrailer(firstMovie.id, apiKey);
            } else {
                setMovie(null);
                setTrailerUrl('');
            }
        } catch (error) {
            console.error('Error fetching movie data:', error);
            setMovie(null);
            setTrailerUrl('');
        }
    };

    const fetchTrailer = async (movieId, apiKey) => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`);
            const trailer = response.data.results.find(video => video.type === "Trailer");
            if (trailer) {
                setTrailerUrl(`https://www.youtube.com/embed/${trailer.key}`);
            } else {
                setTrailerUrl('');
            }
        } catch (error) {
            console.error('Error fetching trailer:', error);
            setTrailerUrl('');
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        fetchMovie();
    };

    return (
        <div className="p-8">
            <form onSubmit={handleSearch} className="flex gap-4 mb-8">
                <input
                    type="text"
                    placeholder="Search for a movie..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="flex-1 p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:border-blue-500"
                />
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600">
                    Search
                </button>
            </form>
            {movie && (
                <div className="mt-4 p-4 border border-gray-200 rounded shadow-lg">
                    <h2 className="text-2xl font-bold mb-2">{movie.title}</h2>
                    <p className="mb-4">{movie.overview}</p>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="mb-4 max-w-xs rounded" />
                    {trailerUrl && (
                        <iframe
                            src={trailerUrl}
                            width="560"
                            height="560"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full rounded"
                            title="Movie Trailer"
                        ></iframe>
                    )}
                </div>
            )}
        </div>
    );
};

export default Movie;
