
import { ItemsStyled, ButtonSentReqStyled, ItemsTextStyled } from "../App.styled"
import { ListItems } from "./ListItem"

export const SendReq = (props) => {
    return <ItemsStyled>
         {props.allList.length > 0 && <ButtonSentReqStyled type="button" onClick={props.newData}>sent request</ButtonSentReqStyled>}
         <ItemsTextStyled>
            {props.allList.map((e) => <ListItems name={e} buttonId={e} allList={props.allList} setAllList={props.setAllList} />)}
        </ItemsTextStyled>
       
    </ItemsStyled>
}


