import styled from "styled-components"
import { StyledNewsArticleDetailsPaneProps } from "./types"

export const StyledNewsArticleDetailsPane = styled.article<StyledNewsArticleDetailsPaneProps>`
  background: #fff;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  left: ${(props) => (props.articleSelected ? "72px" : "100%")};
  margin: 5px auto;
  min-height: 98%;
  padding: 1rem;
  position: absolute;
  transition: left 0.2s ease-in;
  width: 85%;

  @media (max-width: 630px) {
    margin: 5px 5px;
    position: initial;
    width: 95%;
  }

  @media (max-width: 545px) {
    align-items: center;
    position: initial;
  }
`

export const CloseButtonArea = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 4%;
`

export const CloseButton = styled.div`
  & > * {
    transform: scale(1.5);
  }

  &:hover {
    cursor: pointer;
  }
`

export const ArticleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4%;

  @media (max-width: 545px) {
    flex-direction: column;
    align-items: center;
  }
`

export const ArticleHeaderImage = styled.img`
  border-radius: 4px;
  height: 300px;
  width: 300px;

  @media (max-width: 1905px) {
    height: 250px;
    width: 250px;
  }

  @media (max-width: 1600px) {
    height: 200px;
    width: 200px;
  }

  @media (max-width: 800px) {
    height: 185px;
    width: 185px;
  }
`
export const ArticleHeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60%;
`

export const Introduction = styled.div`
  display: flex;
  flex-direction: column;
`

export const MetaData = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-weight: 500;
  }
`

export const ArticleDescription = styled.p`
  margin-top: 1%;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const ArticleContent = styled.p`
  margin-top: 1%;
`
