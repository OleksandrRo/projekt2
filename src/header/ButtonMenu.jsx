import {ButtonStyled, BurgerImg} from "../App.styled"
import hmbg from "../assets/hmbg.png"

export const ButtonMenu = ({openMenu}) => {
    return <ButtonStyled onClick={openMenu} ><BurgerImg src={hmbg}/></ButtonStyled>
};