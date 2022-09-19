import { useState } from 'react';
import './App.css';
import { AppContainer } from "./App.styled"
import { Header } from './header/Header';
import loader from "./assets/loader.gif"
import { SearchIngredients } from './search/SearchIngridients';


const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [recipes, setRecipes] = useState([])
    const [allList, setAllList] = useState([])
    const [loading, setLoading] = useState(false)

  const openMenu = () => {

    setIsVisible(!isVisible);
    
  };


  const closeMenu = (e) => {

    if (e.pageX < window.innerWidth - 230)
     setIsVisible(false)
    console.log(e.pageX)
    
    console.log(window.screen.width)

  }

  return (
    <div onClick={closeMenu}>
      <AppContainer >
      <Header isVisible={isVisible} openMenu={openMenu} recipes={recipes} allList={allList} loading={loading} setAllList={setAllList} setRecipes={setRecipes} setLoading={setLoading}/>
      </AppContainer>
      <SearchIngredients img={loader} recipes={recipes} allList={allList} loading={loading} setAllList={setAllList} setRecipes={setRecipes} setLoading={setLoading} />
    </div>
  );
};



export default App;
