import { useState } from "react"
import styled from "styled-components"
import { NewsArticle } from "../NewsArticles"

const StyledNewsArticleCard = styled.article<StyledNewsArticleCardProps>`
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

const ArticleImageContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 33%;

  @media (max-width: 650px) {
    align-items: flex-start;
  }
`

const ArticleImage = styled.img`
  border-radius: 4px;
  height: 150px;
  width: 150px;

  @media (max-width: 650px) {
    height: 125px;
    width: 125px;
  }
`

const ArticleInfoContainer = styled.div`
  width: 66%;
`

const ArticleDescription = styled.p`
  margin-top: 1%;
  overflow: hidden;
  text-overflow: ellipsis;
`

interface NewsArticleCardProps {
  article: NewsArticle
  onClick: () => void
}

interface StyledNewsArticleCardProps {
  checked: boolean
}

const NewsArticleCard = ({ article, onClick }: NewsArticleCardProps) => {
  const [checked, setChecked] = useState(false)

  const onClickHandler = () => {
    setChecked(true)
    onClick()
  }

  return (
    <StyledNewsArticleCard onClick={onClickHandler} checked={checked}>
      <ArticleImageContainer>
        <ArticleImage src={article.urlToImage} />
      </ArticleImageContainer>
      <ArticleInfoContainer>
        <h3>{article.title}</h3>
        <ArticleDescription>{article.description}</ArticleDescription>
      </ArticleInfoContainer>
    </StyledNewsArticleCard>
  )
}

export default NewsArticleCard
