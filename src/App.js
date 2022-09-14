import { useState } from 'react';
import './App.css';
import { AppContainer } from "./App.styled"
import { Header } from './header/Header';
import loader from "./assets/loader.gif"
import { SearchIngredients } from './search/SearchIngridients';


const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const openMenu = () => {

    setIsVisible(!isVisible);
  };


  const closeMenu = (e) => {

    if (e.pageX < window.innerWidth - 200)
      setIsVisible(false)
    console.log(e.pageX)

  }

  return (
    <div onClick={closeMenu}>
      <AppContainer >
      <Header isVisible={isVisible} openMenu={openMenu} />
      </AppContainer>
      <SearchIngredients img={loader} />
    </div>
  );
};



export default App;
