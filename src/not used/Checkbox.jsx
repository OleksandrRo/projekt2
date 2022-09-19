import { CheckboxStyled } from "../App.styled"

export const Checkbox = (props) => {
    return <>
    <CheckboxStyled type={props.type}/><label>{props.name}</label>
    </>
}
