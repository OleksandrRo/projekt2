import {MenuStyled} from "../App.styled"
import { ListMenu } from "./ListMenu";



export const Menu = (props) => {
    return <MenuStyled isVisible={props.isVisible}><ListMenu/></MenuStyled>
};