import { ResultsStyled, ResultsAllStyled, ResultsNFStyled, ImgStyled, ResultContainer } from "../App.styled";



export const Results = (props) => {
    return <ResultsAllStyled className="List">
        
       
        
            {props.loading ? <img src={props.img} width="35%" height="35%"/> : <ResultsStyled> {props.recipes.length === 0 ? <ResultsNFStyled>Not found</ResultsNFStyled> : props.recipes.map(e =>
                <ResultContainer>
                    <h3>{e.recipe.label} </h3>
                    <ImgStyled src={e.recipe.image}  />
                    {/* <br />
                    {e.recipe.ingredientLines}
                    <br />
                    {e.recipe.cuisineType} */}
                </ResultContainer>)}
        </ResultsStyled>}
    </ResultsAllStyled>
}