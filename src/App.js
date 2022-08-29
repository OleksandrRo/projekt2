import { useState } from 'react';
import './App.css';
import { AppContainer, AppTitel, AppImage } from "./App.styled"
import flight from "./assets/flight.jpg"
import { Button } from './Button';
import { Menu } from './Menu';
import { Ingredients } from './Ingredients';


const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const openMenu = () => {

    setIsVisible(!isVisible);
  };


  const closeMenu = (e) =>{

    if( e.pageX < window.innerWidth - 200)
    setIsVisible(false)
    console.log(e.pageX)

  }

  return (
    <>
      <AppContainer onClick={closeMenu}>
        <AppImage src={flight} width="100px" margin="left" />
        <AppTitel color='white'>FLYING HOLIDAYS PLANER</AppTitel>
        <Menu isVisible={isVisible} />
        <Button openMenu={openMenu}>Menu</Button>
      </AppContainer>
      <Ingredients/>

    </>
  );
};



export default App;
