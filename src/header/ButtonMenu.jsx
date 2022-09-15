import {ButtonStyled, BurgerImg} from "../App.styled"
import hmbg from "../assets/hmbg.png"

export const ButtonMenu = (props) => {
    return <ButtonStyled onClick={props.openMenu} ><BurgerImg src={hmbg}/></ButtonStyled>
};