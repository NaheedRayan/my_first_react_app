
import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = 'http://www.omdbapi.com?apikey=d6ac7431';

const App = () => {
    // hooks
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);


    // an async function for calling the api
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json() ;

        // console.log(data.Search)

        setMovies(data.Search);
    }

    // this hook runs when the app reloads
    useEffect(() => {
        searchMovies('Batman');

    },[]);



    return (
        <div className="app">
          <h1>MovieLand</h1>
    
          <div className="search">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for movies"
            />
            <img
              src={SearchIcon}
              alt="search"
              onClick={() => searchMovies(searchTerm)}
            />
          </div>
    
          {movies?.length > 0 ? (
            <div className="container">
              {movies.map((movie) => (
                <MovieCard movie={movie} />
              ))}
            </div>
          ) : (
            <div className="empty">
              <h2>No movies found</h2>
            </div>
          )}
        </div>
      );
    };
    
export default App;