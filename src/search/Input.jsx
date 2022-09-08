import { InputStyled } from "../App.styled"
export const InputComponent = (props) => {
    return <InputStyled
        type="text"
        value={props.ingredient}
        onChange={(e) => props.setIngredient(e.target.value)}
        placeholder="Your ingredients..." />


}
