import styled from "styled-components";

export const Container = styled.div`
  background-color: #FFFFFF;
  padding:0 0 20px;
  max-width:1160px;
  width:95%;
  margin:0 auto;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.26);
  overflow: hidden;
  position: relative;
`

export const Header = styled.div`
  background-color: #00796B;
  color: #FFFFFF;
  display:flex;
  align-items: center;
  justify-content: space-between;
  height:55px;
  padding:0 20px;
  margin-bottom:20px
`

export const HeaderTitle = styled.h3`
  font-size:20px;
  font-weight:500;
`
export const HeaderButton = styled.button`
font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 14px;
text-transform: uppercase;
color: #FFFFFF;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
border: 0;
padding: 0 16px;
background-color: #00A98E;
cursor: pointer;
border-radius: 2px;
transition: all 300ms ease-in-out;
&:hover {
  background-color: #232323;
}
`
 

export const Row1 = styled.div`
  display:grid;
  gap:15px;
  padding:10px 20px;
  grid-template-columns:1fr 1fr 1fr;
  @media(max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const Row2 = styled.div`
  display:grid;
  gap:15px;
  padding:10px 20px;
  grid-template-columns:1fr 1fr;
  @media(max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const Row3 = styled.div`
  display:grid;
  gap:15px;
  padding:10px 20px;
  grid-template-columns:1fr;
  @media(max-width: 768px) {
    grid-template-columns: 1fr;
  }
`


export const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: auto;
  align-content: start;
`

export const ResetImage = styled.img`
  flex: 0 0 auto;
  margin: 50px;
  transform: scale(1);
  transition: all 200ms ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`
export const ItemSelect = styled.div`
  width:100%;
  padding:10px 0;
  &:h3 {
    margin:0px
  }
`