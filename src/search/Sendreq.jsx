import { SendReqStyled } from "../App.styled"
import { ListItem } from "./ListItem"


export const SendReq = (props) => {
    return <>
    {props.allList.map((e)=> <ListItem name={e} butonId={e} allList={props.allList} setAllList={props.setAllList}  />)}
    {props.allList.length > 0 && <button type="button" onClick={props.newData}>sent request</button>}

        
</>
}


       