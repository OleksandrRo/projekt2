import styled from '@emotion/styled'


// ** Header folder


export const ButtonStyled = styled.button`
background: url(./src/assets/hmbg.png);
top: 0;
right: 0;
color: white;
cursor: pointer;
border: 2px solid white;


&:hover {
  
   box-sizing: border-box;
   background: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
}
`;

export const AppTitel = styled.h1`
color: ${({color}) => color};


`;

export const AppImage = styled.img`
width: ${({ width}) => width};

`;

export const MenuStyled = styled.div`
position: absolute;
top: 100px;
right: ${({isVisible}) => (isVisible ? "0" : "-20vw")};
width: 20vw;
height: 100vh;
background: #404040;
visibility: ${({isVisible}) => (isVisible ? "visible" : "hidden")};
transition: all 0.5s ease-in;
`;

export const ListMenuStyled = styled.h3`
color: white;
margin: 3vw;
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
// position: relative;
// top: 4vw;

`;

export const ResultsStyled = styled.div`
width: auto;
display: flex;
flex-wrap: wrap;
justify-content: space-between;

`;


export const ResultsNFStyled = styled.div`
position: relative;
top: 4vw;

`;

export const ImgStyled = styled.img`
border: 5px solid #FF6F61;

`;

export const ResultContainer = styled.div`
width: 22%;
height: 60vh;
border: 1px solid #fff;
margin-bottom: 20px;

`;




// ** Search folder

export const SelectStyled = styled.select`
width: auto;
height: auto;

`;

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
// position: absolute;
// top: 50vh;
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


// @media (min-width: 300px) and (max-width: 575px)