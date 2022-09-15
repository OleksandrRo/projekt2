import { FormStyled, ButtonFormStyled, FormComponemtStyled } from "../App.styled"
import { InputComponent } from "./Input"

export const Form = (props) => {

    return <FormStyled>
        <FormComponemtStyled>
            <InputComponent setIngredient={props.setIngredient} ingredient={props.ingredient} />
            <ButtonFormStyled type="button" onClick={props.addIngredient}>Add</ButtonFormStyled>
        </FormComponemtStyled>

    </FormStyled>
}