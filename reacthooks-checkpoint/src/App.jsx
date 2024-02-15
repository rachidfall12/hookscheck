// Importations des dépendances et des composants
import './App.css'; // Importation du fichier CSS principal
import MovieList from './components/MovieList'; // Importation du composant MovieList
import { Route, Routes, useParams } from 'react-router-dom'; // Importation des composants Route, Routes et useParams de react-router-dom
import MovieDetail from './components/MovieDetails'; // Importation du composant MovieDetail
import { useState } from 'react'; // Importation du hook useState de React
import axios from 'axios'; // Importation de axios pour les requêtes HTTP
import { useSearchParams } from 'react-router-dom'; // Importation du hook useSearchParams de react-router-dom

function App() {
  let { movieId } = useParams(); // Récupération des paramètres d'URL avec useParams

  return (
    <>
      {/* Définition des routes de l'application */}
      <Routes>
        {/* Route pour afficher la liste des films */}
        <Route path='/' element={<MovieList />} />

        {/* Route pour afficher les détails d'un film en utilisant son ID */}
        <Route path={`/movie-detail/:${movieId}`} element={<MovieDetail thisMovie={movieId} />} />
      </Routes>
    </>
  );
}

export default App; // Exportation du composant App
