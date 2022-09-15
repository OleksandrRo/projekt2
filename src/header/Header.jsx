import { AppTitel, AppImage, FixedHeaderStyled } from "../App.styled"
import fridge from "../assets/fridge.png"
import { ButtonMenu } from './ButtonMenu';
import { Menu } from './Menu';

export const Header = (props) =>{
return <FixedHeaderStyled>
<AppImage src={fridge} width="100vm" height="100vm" margin="left" />
<AppTitel color='white'>What's cooking, <br/> good looking?</AppTitel>
<Menu isVisible={props.isVisible} />
<ButtonMenu openMenu={props.openMenu}>Menu</ButtonMenu>
</FixedHeaderStyled>
}