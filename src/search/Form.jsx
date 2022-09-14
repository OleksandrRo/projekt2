import { FormStyled, ButtonFormStyled, FormComponemtStyled } from "../App.styled"
// import { Choise } from "./Choise"
import { InputComponent } from "./Input"

export const Form = (props) => {
    
    return <FormStyled>
        <FormComponemtStyled>
            <InputComponent setIngredient={props.setIngredient} ingredient={props.ingredient} />
            <ButtonFormStyled type="button" onClick={props.addIngredient}>Add</ButtonFormStyled>
        </FormComponemtStyled>
        
            {/* <Choise name="diet" changeValue={props.setDiet}
                aray={props.DIET} />
            <br />
            <Choise name="health" changeValue={props.setHealth}
                aray={props.HEALTH} />
            <br />
            <Choise name="mealType" changeValue={props.setMealType}
                aray={props.MEALTYPE} />
            <br />
            <Choise name="dishType" changeValue={props.setDishType}
                aray={props.DISHTYPE} />
            <br />
            <Choise name="cookingTime" changeValue={props.setCookingTime}
                aray={props.COOKINGTIME} />
         */}

    </FormStyled>
}