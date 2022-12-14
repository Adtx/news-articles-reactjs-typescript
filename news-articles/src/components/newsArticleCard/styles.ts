import styled from "styled-components"
import { StyledNewsArticleCardProps } from "./types"

export const StyledNewsArticleCard = styled.article<StyledNewsArticleCardProps>`
  background: #fff;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  display: flex;
  margin: 5px auto;
  opacity: ${(props) => (props.checked ? "0.65" : "1")};
  padding: 1rem;
  width: 85%;

  &:hover {
    cursor: pointer;
    box-shadow: 0 1px 6px 2px rgba(28, 33, 39, 0.1);
  }
`

export const ArticleImageContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 33%;

  @media (max-width: 650px) {
    align-items: flex-start;
  }
`

export const ArticleImage = styled.img`
  border-radius: 4px;
  height: 150px;
  width: 150px;

  @media (max-width: 650px) {
    height: 125px;
    width: 125px;
  }
`

export const ArticleInfoContainer = styled.div`
  width: 66%;
`

export const ArticleDescription = styled.p`
  margin-top: 1%;
  overflow: hidden;
  text-overflow: ellipsis;
`
