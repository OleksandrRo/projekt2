import { ListItemStyled, ButtonListItemStyled } from "../App.styled";

export const ListItems = (props) => {
    const delItem = (e) =>{
        props.setAllList(props.allList.filter(item => item !== e.target.id))
    }
    return <ListItemStyled>
        {props.name}
        <ButtonListItemStyled id={props.buttonId} onClick={delItem} >X</ButtonListItemStyled>
         </ListItemStyled>

};