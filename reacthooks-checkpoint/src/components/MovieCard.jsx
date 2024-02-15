import React from "react"; // Importation de React
import "../App"; // Importation du fichier CSS (non utilisé dans ce composant)
import { Link } from "react-router-dom"; // Importation du composant Link de react-router-dom

// Définition du composant MovieCard en utilisant une fonction fléchée
const MovieCard = ({ poster, movieTitle }) => {
    return (
        <> {/* Fragment pour englober plusieurs éléments sans ajouter de nœud supplémentaire dans le DOM */}
            <div className="movie-card"> {/* Div contenant les informations de la carte du film */}
                <img src={poster} alt="poster is not available" className="movie-poster" /> {/* Image du film */}
                <h5 style={{ color: 'white', textAlign: 'center', textDecorationLine: 'underline', textDecorationColor: 'black' }}>{movieTitle}</h5> {/* Titre du film avec des styles en ligne */}
            </div>
        </> // Fin du fragment
    );
};

export default MovieCard; // Exportation du composant MovieCard
