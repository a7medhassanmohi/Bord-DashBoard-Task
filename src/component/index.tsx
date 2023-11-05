"use client"
import styled from '@emotion/styled';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    height: 100%;

`;
const Nav = styled.nav`
overflow: hidden;
width: 25%;
max-width: 25%;
height: 100%;
border-right: 1px solid   #E3E2E7;
display: flex;
flex-direction: column;
@media screen and (max-width:600px) {
    width: 0%;
    max-width: 0%;
}
`;
const MainContent = styled.section`
width: 75%;
height: 100%;
max-width: 75%;
@media screen and (max-width:600px) {
    width: 100%;
    max-width: 100%;
}
`;
const HeaderContainer = styled.section`
padding: 16px 24px 16px 24px;
border-bottom: 1px solid   #E3E2E7;
 height:72px
`;
const SpaceBetweenContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const flexContainer = styled.div`
    display: flex;
    align-items: center;
    gap:10px
`;
// const flexChild = styled.div`
//     width:${props=>(props.width && "50% ")}
// `;


export  {Container,Nav,MainContent,HeaderContainer,SpaceBetweenContainer,flexContainer};