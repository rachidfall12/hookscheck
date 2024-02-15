import React from "react"; // Importation de React
import Container from 'react-bootstrap/Container'; // Importation du composant Container de react-bootstrap
import { useState, useEffect } from "react"; // Importation des hooks useState et useEffect de React
import axios from "axios"; // Importation de axios pour les requêtes HTTP
import { useParams, Link } from "react-router-dom"; // Importation des hooks useParams et Link de react-router-dom
import PageHeader from "./PageHeader"; // Importation du composant PageHeader

const MovieDetail = () => {
    let param = useParams(); // Récupération des paramètres d'URL avec useParams
    let thisMovieID = param.undefined; // Obtention de l'ID du film depuis les paramètres d'URL
    const [movies, setMovies] = useState([]); // Initialisation de l'état movies avec useState, contenant un tableau vide
    const API_URL  = "http://www.omdbapi.com/?i=tt3896198&apikey=5881ce94"; // URL de l'API OMDB

    // Fonction asynchrone pour récupérer les films depuis l'API
    const fetchMovie = async (title) => {
        const response = await axios.get(`${API_URL}&s=${title}`); // Requête GET à l'API OMDB pour récupérer les films
        setMovies(response?.data.Search); // Mise à jour de l'état movies avec les données de réponse
    };

    // Utilisation de useEffect pour exécuter fetchMovie lors du chargement initial du composant
    useEffect(() => {
        fetchMovie("superman"); // Appel à fetchMovie avec le titre "superman"
    }, []);

    // Filtrage du film actuel à partir de l'ID
    const getCurrentMovie = movies.filter(movieIds => movieIds.imdbID === thisMovieID);
    const currentMovie = getCurrentMovie[0]; // Récupération du premier élément du tableau filtré
    console.log(currentMovie); // Affichage du film actuel dans la console

    return (
        <>
            <PageHeader>Movie Details</PageHeader> {/* Affichage du titre de la page */}
            <Container>
                <div className="movie-detail-card">
                    {
                        currentMovie ?
                            <img src={currentMovie.Poster} alt="" /> // Affichage de l'affiche du film s'il existe
                        : <p>Aucun résultat</p> // Affichage d'un message s'il n'y a aucun résultat
                    }
                </div>
                <div className="movie-info">
                    {
                        currentMovie ?
                            <>
                                <h4>{currentMovie.Title}</h4> {/* Affichage du titre du film */}
                                <h6>{currentMovie.Year}</h6> {/* Affichage de l'année de sortie du film */}
                                <Link to="https://youtu.be/y73_RpazLVw">Movie Triller</Link> {/* Lien vers la bande-annonce du film */}
                            </>
                        : <h5>Loading...</h5> // Affichage d'un message de chargement si les données sont en cours de récupération
                    }
                </div>
            </Container>
        </>
    );
};

export default MovieDetail; // Exportation du composant MovieDetail
