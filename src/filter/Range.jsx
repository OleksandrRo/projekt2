import { RangeStyled } from "../App.styled"

export const Range = (props) => {
    return <>
    <RangeStyled type={props.type} min={props.min} max={props.max} /><label>{props.name}</label>
    </>
}
