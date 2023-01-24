import styled from "styled-components"
import { StyledNewsArticleListProps } from "./types"

export const StyledNewsArticleList = styled.div<StyledNewsArticleListProps>`
  height: 100%;
  overflow: auto;
  width: 50%;

  @media (max-width: 1300px) {
    display: ${(props) => (!props.articleIsSelected ? "block" : "none")};
    overflow: visible;
    width: 65%;
  }

  @media (max-width: 940px) {
    width: 70%;
  }

  @media (max-width: 860px) {
    width: 75%;
  }

  @media (max-width: 810px) {
    width: 80%;
  }

  @media (max-width: 765px) {
    width: 85%;
  }

  @media (max-width: 753px) {
    width: 95%;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`
export const ArticleNotFoundMessage = styled.h2`
  left: 10%;
  position: fixed;
  top: 25%;
`
