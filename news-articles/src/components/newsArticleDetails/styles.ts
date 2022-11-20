import styled from "styled-components"
import { StyledNewsArticleDetailsProps } from "./types"

export const StyledNewsArticleDetails = styled.div<StyledNewsArticleDetailsProps>`
  align-items: ${(props) =>
    props.articleIsSelected ? "flex-start" : "center"};
  border-left: 1px solid #000;
  display: flex;
  justify-content: center;
  height: 100%;
  overflow: auto;
  width: 50%;

  @media (max-width: 1300px) {
    display: ${(props) => (props.articleIsSelected ? "flex" : "none")};
    border: none;
    width: 65%;
  }

  @media (max-width: 1010px) {
    width: 70%;
  }

  @media (max-width: 930px) {
    width: 75%;
  }

  @media (max-width: 870px) {
    width: 80%;
  }

  @media (max-width: 750px) {
    width: 85%;
  }

  @media (max-width: 710px) {
    width: 95%;
  }

  @media (max-width: 630px) {
    width: 100%;
  }
`
