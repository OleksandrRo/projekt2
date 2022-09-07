import { ResultsStyled } from "../App.styled";

export const Results = (props) => {
    return <ResultsStyled className="List">
                <p>list of your ingredients</p>
                {props.allList.map(e => <span> {e} </span>)}
                {props.loading ? <img src={props.img} /> : <ul> {props.recipes.length === 0 ? <div>Not found</div> : props.recipes.map(e =>
                        <li>
                            <h3>{e.recipe.label} </h3>
                            <img src={e.recipe.image} />
                            <br />
                            {e.recipe.ingredientLines}
                            {e.recipe.cuisineType}
                        </li>)}
                </ul>}
            </ResultsStyled>
}