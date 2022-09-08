import styled from '@emotion/styled'

export const AppContainer = styled.div`
width: auto;
// min-height: 100vh;
height: 100vm;
margin: 0 auto;
background: #6667AB;
display: flex;
justify-content: space-between;

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
right: 0px;
width: ${({isVisible}) => (isVisible ? "20vw" : "0px")};
height: 100vh;
background: #FF6F61;
visibility: ${({isVisible}) => (isVisible ? "visible" : "hidden")};
transition: all 0.5s ease-in;
`;

 export const ButtonStyled = styled.button`
 background: #6667AB;
 top: 0;
 right: 0;
 color: white;
 cursor: pointer;
 border: 2px solid white;
 background-image: url(./assets/hmbg.png.png);
 
 
 &:hover {
    background: #FF6F61;
  }
`;

export const ListMenuStyled = styled.h3`
color: white;
margin: 3vw;
`;

export const SelectStyled = styled.select`
width: auto;
`;

export const FormStyled = styled.form`
width: auto;
`;

export const InputStyled = styled.input`
width: auto;
`;

export const ResultsStyled = styled.div`
width: auto;
`;

export const SendReqStyled = styled.div`
width: auto;
`;

export const ResultsParStyled = styled.p`
width: auto;
`;

export const ResultsUlStyled = styled.ul`
width: auto;
`;

export const ResultsLiStyled = styled.li`
width: auto;
`;

export const ResultsNFStyled = styled.div`
width: auto;
`;

export const ButtonFormStyled = styled.button`
width: auto;
`;
// @media (min-width: 300px) and (max-width: 575px)