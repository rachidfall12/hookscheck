import React from "react"; // Importation de React
import { useEffect, useState } from 'react'; // Importation des hooks useEffect et useState de React
import MovieCard from "./MovieCard"; // Importation du composant MovieCard
import "../App"; // Importation du fichier CSS (non utilisé dans ce composant)
import Container from 'react-bootstrap/Container'; // Importation du composant Container de react-bootstrap
import Row from 'react-bootstrap/Row'; // Importation du composant Row de react-bootstrap
import Col from 'react-bootstrap/Col'; // Importation du composant Col de react-bootstrap
import Form from 'react-bootstrap/Form'; // Importation du composant Form de react-bootstrap
import axios from "axios"; // Importation de axios pour les requêtes HTTP
import { Link } from "react-router-dom"; // Importation du composant Link de react-router-dom
import PageHeader from "./PageHeader"; // Importation du composant PageHeader

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=5881ce94"; // URL de l'API OMDB

const MovieList = () => {
    const [movies, setMovies] = useState([]); // Initialisation de l'état movies avec useState, contenant un tableau vide
    const [search, setSearch] = useState("superman"); // Initialisation de l'état search avec useState, contenant "superman" par défaut
    const [loading, setLoading] = useState(false); // Initialisation de l'état loading avec useState, contenant false par défaut

    // Fonction asynchrone pour récupérer les films depuis l'API en fonction du titre
    const fetchData = async (title) => {
        try {
            // setLoading(true); // Activation du chargement
            const response = await axios.get(`${API_URL}&s=${title}`); // Requête GET à l'API OMDB pour récupérer les films en fonction du titre
            setMovies(response?.data.Search); // Mise à jour de l'état movies avec les données de réponse
            // setLoading(false); // Désactivation du chargement
        } catch (error) {
            // Gestion des erreurs
        }
    }

    // Utilisation de useEffect pour exécuter fetchData lors du chargement initial du composant et à chaque fois que search est modifié
    useEffect(() => {
        fetchData(search);
    }, [search]);

    // Gestionnaire de changement de la valeur de recherche
    const handleSearch = (e) => {
        e.preventDefault(); // Empêche le comportement par défaut du formulaire
        setSearch(e.target.value); // Met à jour l'état de la recherche avec la valeur de l'entrée de l'utilisateur
    }

    return (
        <>
            <PageHeader /> {/* Affichage de l'en-tête de la page */}
            <section className="search-movies"> {/* Section pour la recherche de films */}
                <input style={{ color: 'white' }} type="text" value={search} onChange={handleSearch} placeholder="search movies here..." /> {/* Champ de recherche */}
            </section>

            <Container> {/* Conteneur pour organiser les éléments de la liste de films */}
                <Row> {/* Ligne pour organiser les cartes de films */}
                    {
                        movies?.map((item, index) => { // Mapping sur les films pour afficher chaque carte de film
                            return (
                                <Col key={index}> {/* Colonne pour chaque carte de film */}
                                    <Link to={`/movie-detail/${item.imdbID}`}> {/* Lien vers la page de détail du film en utilisant l'ID IMDb */}
                                        <MovieCard poster={item.Poster} movieTitle={item.Title} movieId={item.imdbID} key={item.imdbID} /> {/* Carte de film avec l'affiche et le titre */}
                                    </Link>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </>
    )
}

export default MovieList; // Exportation du composant MovieList
