import { SendReqStyled } from "../App.styled"

export const SendReq = (props) => {
    return <>
        <div>{props.allList}</div>
        {props.allList.length > 0 && <button type="button" onClick={props.newData}>sent request</button>}
    </>
}