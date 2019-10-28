import React from 'react';

// import des différents composants
import Connect from './components/Connect';
import Footer from './components/Footer.js';
import NavBar from './components/NavBar.js';

import PlantList from './components/PlantList';
import Search from './components/Search';

import Weather from './components/Weather';
import SearchBar from './components/SearchBar';

import './App.scss';
import FormWeather from './components/FormWeather';

 
class App extends React.Component {
  

  render() {
    return (
      <div className="app">

       
        <Connect /> 
        {/* affichage météo relié à une API */}
        <FormWeather />
        <Weather />


        {/* barre de recherche lié à une API plante */}
        <SearchBar /> 

        {/* grille suggestion plantes */}
        <PlantList /> 

        {/* infos / réseaux sociaux */}
        <Footer />

        {/* menu de l'appli une fois connecté garden/board/alerts */}
        <NavBar /> 
        </div>
    );
  }
}

export default App;
