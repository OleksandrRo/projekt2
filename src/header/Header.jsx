import { AppTitel, AppImage, FixedHeaderStyled } from "../App.styled"
import fridge from "../assets/fridge.png"
import { ButtonMenu } from './ButtonMenu';
import { Menu } from './Menu';

export const Header = ({recipes, setRecipes, allList, setAllList, loading, setLoading, openMenu, isVisible }) =>{
return <FixedHeaderStyled>
<AppImage src={fridge} width="100vm" height="100vm" margin="left" />
<AppTitel color='white'>What's cooking, <br/> good looking?</AppTitel>
<Menu isVisible={isVisible} recipes={recipes} allList={allList} loading={loading} setAllList={setAllList} setRecipes={setRecipes} setLoading={setLoading}/>
<ButtonMenu openMenu={openMenu}>Menu</ButtonMenu>
</FixedHeaderStyled>
}