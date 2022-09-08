import { ResultsStyled, ResultsParStyled, ResultsUlStyled, ResultsLiStyled, ResultsNFStyled } from "../App.styled";

export const Results = (props) => {
    return <ResultsStyled className="List">
        <ResultsParStyled>list of your ingredients</ResultsParStyled>
        {props.allList.map(e => <span> {e} </span>)}
        {props.loading ? <img src={props.img} /> : <ResultsUlStyled> {props.recipes.length === 0 ? <ResultsNFStyled>Not found</ResultsNFStyled> : props.recipes.map(e =>
            <ResultsLiStyled>
                <h3>{e.recipe.label} </h3>
                <img src={e.recipe.image} />
                <br />
                {e.recipe.ingredientLines}
                {e.recipe.cuisineType}
            </ResultsLiStyled>)}
        </ResultsUlStyled>}
    </ResultsStyled>
}