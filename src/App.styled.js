import styled from '@emotion/styled'


// ** Header folder

export const ButtonStyled = styled.button`
background: #000;
`;

export const BurgerImg = styled.img`
width: 4vw;
height: 4vw;
position: absolute;
top: 1.5vw;
right: 2vw;
border-radius: 5px;

&:hover {
  
  box-shadow: rgb(255, 255, 255, 0.5) 0px 0px 10px 4px;
  box-sizing: border-box;
  
}

@media (min-width: 300px) and (max-width: 575px) {
position: absolute;
top: 5.5vw;
right: 2vw;
width: 15vw;
height: 15vw;
  }


`;
export const AppTitel = styled.h1`
color: ${({ color }) => color};
br {
  display: none;
}

@media (min-width: 300px) and (max-width: 575px) {
  text-align: center;
  font-size: 20px;
  line-height: 4vh;
  margin-right: 13vw;

  br {
    display: initial;
  }
}


`;

export const AppImage = styled.img`
width: ${({ width }) => width};

`;

export const MenuStyled = styled.div`
position: absolute;
top: 100px;
right: ${({ isVisible }) => (isVisible ? "0" : "-40vw")};
width: 15vw;
height: 100vh;
background: #404040;
visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
transition: all 0.5s ease-in;

@media (min-width: 300px) and (max-width: 575px) {

  width: 50vw;
 }
`;

export const ListMenuStyled = styled.div`
color: white;
margin: 3vw;



text-align: center;
`;

export const SelectStyled = styled.select`
width: 11vw;
height: 4vh;
position: relative;
top: 1vw;
left: -1.5vw;
margin: 1vh;

@media (min-width: 300px) and (max-width: 575px) {
  width: 40vw;
  height: 3vh;
    }

`;

export const CheckboxStyled = styled.input`
margin: 2vh;
position: relative;
top: 5px;
left: -2vw;
height: 3vh;
width: 2vw;

@media (min-width: 300px) and (max-width: 575px) {
  width: 6vw;
  height: 2.5vh;
  left: -3vw;
  
  
    }
`;

export const FixedHeaderStyled = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100vw;
display: flex;
justify-content: space-between;
align-items: center;
background: #000;
`;





// ** Result folder 

export const ResultsAllStyled = styled.div`
width: auto;
background: #121212;
color: white;
flex-wrap: wrap;
display: flex;
justify-content: center;
margin-top: 10vh;



`;

export const ResultsStyled = styled.div`
width: auto;
display: flex;
flex-wrap: wrap;
justify-content: space-between;


@media (min-width: 300px) and (max-width: 575px) {
  
  margin-left: 20px;
  display: grid;
  column-gap: 10px;
    
  }

`;


export const ResultsNFStyled = styled.div`
position: relative;
top: 4vw;

`;

export const ImgStyled = styled.img`
border: 5px solid #FF6F61;
border-radius: 4px;

@media (min-width: 300px) and (max-width: 575px) {

  border: 2px solid #FF6F61;
  width: 70%;
  height: auto;
  
  
}
`;

export const ResultContainer = styled.div`
width: 22%;
height: 60vh;
border: 1px solid #fff;
margin-bottom: 20px;
border-radius: 4px;


&:hover {
  
  box-shadow: rgb(255, 255, 255, 0.5) 0px 0px 5px 4px;
  box-sizing: border-box;
  cursor: pointer;
}

@media (min-width: 300px) and (max-width: 575px) {

 width: 90%;
 height: auto;
 
 flex-wrap: wrap;
}
`;

export const TextContainer = styled.div`
height: 8vh;

@media (min-width: 300px) and (max-width: 575px) {
  margin-bottom: 5px;
  height: 5vh;
 }
`;
export const TextResultStyled = styled.h3`


@media (min-width: 300px) and (max-width: 575px) {

  width: auto;
  font-size: 17px;
  line-height: 20px;
}
`;





// ** Search folder

export const FormStyled = styled.form`
width: auto;
height: 15vh;
background: #121212;
display: flex;
justify-content: center;
flex-wrap: wrap;
margin-top: 20vh;

`;

export const FormComponemtStyled = styled.div`
display: flex;
align-items: center;

`;

export const ButtonFormStyled = styled.button`
  align-items: center;
  background: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
  border: 0;
  border-radius: 4px;
  box-shadow: rgba(151, 65, 252, 0.6) 0px 0px 3px 2px;
  box-sizing: border-box;
  color: #FFFFFF;
  font-family: Phantomsans, sans-serif;
  font-size: 20px;
  line-height: 1em;
  max-width: 100%;
  width: 100px;
  height: 33px;
  cursor: pointer;
  margin-left: 0.5vw;

  &:hover {
  
  box-shadow: rgba(151, 65, 252, 0.6) 0px 0px 10px 4px;
  box-sizing: border-box;
 }
`;

export const InputStyled = styled.input`
width: auto;
height: 0, auto;
padding: 1vh 2vw;
`;

export const ListItemStyled = styled.div`
font-size: 2em;
font-weight: 500;
margin-left: 3vw;
color: white;
position: relative;
top: 1.2vw;

@media (min-width: 300px) and (max-width: 575px) {
 margin-left: 13vw;
}

`;

export const ButtonListItemStyled = styled.button`
  align-items: center;
  background: rgba(80, 80, 80, 0.5);
  color: red;
  border: 0;
  border-radius: 4px;
  box-shadow: #FF6F61 0 0px 3px 1.5px;
  box-sizing: border-box;
  font-size: 0.5em;
  font-weight: 900;
  line-height: 1em;
  max-width: 100%;
  width: 0 auto;
  height: 0 auto;
  cursor: pointer;
  opacity: background 0.2;
  margin-left: 0.7vw;
  position: absolute;
  top: 10px;

  &:hover {
  
    box-shadow: #FF6F61 0 0px 3px 3px;
    box-sizing: border-box;
   }
`;

export const MainStyled = styled.div`
min-height: 100vh;
background: #121212;
text-align: center;
display: flex;
flex-direction: column;

`;

export const ButtonSentReqStyled = styled.button`
  align-items: center;
  background: linear-gradient(144deg,#AF40FF, #5B42F3 70%,#00DDEB);
  border: 0;
  border-radius: 4px;
  box-shadow: rgba(151, 65, 252, 0.6) 0px 0px 3px 2px;
  box-sizing: border-box;
  color: #FFFFFF;
  font-family: Phantomsans, sans-serif;
  font-size: 20px;
  line-height: 1em;
  max-width: 100%;
  width: auto;
  height: 33px;
  cursor: pointer;

  &:hover {
  
    box-shadow: rgba(151, 65, 252, 0.6) 0px 0px 10px 4px;
    box-sizing: border-box;
  }
`;


export const ItemsTextStyled = styled.div`
width: auto;
background: #121212;
display: flex;
justify-content: center;


@media (min-width: 300px) and (max-width: 575px) {
  margin-top: 5vh;
  
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  
}
`;


export const ItemsStyled = styled.div`
width: auto;
background: #121212;



`;





// ** App

export const AppContainer = styled.div`
width: auto;
margin: 0 auto;
background: #121212;
display: flex;
justify-content: space-between;
overflow: hidden;
`;


