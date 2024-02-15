import React from "react"; // Importation de React

// Définition du composant PageHeader
const PageHeader = ({ children = "Liste des films" }) => {
    return (
        <>
            <header className='header-section'> {/* En-tête avec une classe CSS header-section */}
                <h1 style={{ color: 'white' }}>{children}</h1> {/* Titre avec la couleur blanche et le texte passé en tant qu'enfant */}
            </header>
        </>
    );
};

export default PageHeader; // Exportation du composant PageHeader
