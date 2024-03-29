import { NewsArticleDetailsPane } from "./NewsArticleDetailsPane"
import styled from "styled-components"
import { NewsArticle } from "../NewsArticles"

const StyledNewsArticleDetails = styled.div<StyledNewsArticleDetailsProps>`
  align-items: ${(props) =>
    props.articleIsSelected ? "flex-start" : "center"};
  border-left: 1px solid #000;
  display: flex;
  height: 100%;
  justify-content: center;
  overflow: auto;
  overflow-x: hidden;
  position: relative;
  width: 50%;

  @media (max-width: 1300px) {
    border: none;
    display: ${(props) => (props.articleIsSelected ? "flex" : "none")};
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

interface NewsArticleDetailsProps {
  selectedNewsArticle: NewsArticle | null
  articleSelected: boolean
}

interface StyledNewsArticleDetailsProps {
  articleIsSelected: boolean
}

const NewsArticleDetails = ({
  selectedNewsArticle: article,
  articleSelected,
}: NewsArticleDetailsProps) => {
  return (
    <StyledNewsArticleDetails articleIsSelected={articleSelected}>
      {!articleSelected && (
        <h2>Select a news article to view its contens here...</h2>
      )}
      <NewsArticleDetailsPane selectedNewsArticle={article} />
    </StyledNewsArticleDetails>
  )
}

export default NewsArticleDetails
