import { useState } from 'react';
import './App.css';
import { AppContainer, AppTitel, AppImage } from "./App.styled"
import fridge from "./assets/fridge.png"
import loader from "./assets/loader.gif"
import { ButtonMenu } from './ButtonMenu';
import { Menu } from './Menu';
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
        <AppImage src={fridge} width="100px" margin="left" />
        <AppTitel color='white'>What's cooking, good looking?</AppTitel>
        <Menu isVisible={isVisible} />
        <ButtonMenu openMenu={openMenu}>Menu</ButtonMenu>
      </AppContainer>
      <SearchIngredients img={loader} />

    </div>
  );
};



export default App;
