import { ResultsStyled, ResultsAllStyled, ResultsNFStyled, ImgStyled, ResultContainer, TextResultStyled, TextContainer } from "../App.styled";



export const Results = (props) => {
    return <ResultsAllStyled className="List">
             {props.loading ? <img src={props.img} width="35%" height="35%"/> : <ResultsStyled> {props.recipes.length === 0 ? <ResultsNFStyled>Not found</ResultsNFStyled> : props.recipes.map(e =>
                <ResultContainer>
                    <TextContainer><TextResultStyled>{e.recipe.label} </TextResultStyled></TextContainer>
                    <ImgStyled src={e.recipe.image}  />
                </ResultContainer>)}
        </ResultsStyled>}
    </ResultsAllStyled>
}