import { FormStyled } from "../App.styled"
import { Choise } from "./Choise"
import { Input } from "./Input" 

export const Form = (props) => {
    return <FormStyled>
                <Input setIngredient={props.setIngredient} ingredient={props.ingredient}/>
                <br />
                <button type="button" onClick={props.addIngredient}>Add</button>
                <br />
                <Choise name="diet" changeValue={props.setDiet}
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

            </FormStyled>
}