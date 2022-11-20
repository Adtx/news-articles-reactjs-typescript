import styled from "styled-components"

export const StyledHeader = styled.header`
  background-color: #f8f9fa;
  height: 7vh;
  position: relative;

  @media (max-width: 1300px) {
    display: flex;
    justify-content: center;
  }
`

export const Title = styled.h1`
  margin-left: 3.75%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`

export const StyledNewsArticles = styled.main`
  background-color: #f8f9fa;
  display: flex;
  height: 93vh;

  @media (max-width: 1300px) {
    align-items: center;
    flex-direction: column;
  }
`
