import { useState } from "react"
import * as S from "./styles"
import { NewsArticleCardProps } from "./types"

const NewsArticleCard = ({ article, onClick }: NewsArticleCardProps) => {
  const [checked, setChecked] = useState(false)

  const onClickHandler = () => {
    setChecked(true)
    onClick()
  }

  return (
    <S.StyledNewsArticleCard onClick={onClickHandler} checked={checked}>
      <S.ArticleImageContainer>
        <S.ArticleImage src={article.urlToImage} />
      </S.ArticleImageContainer>
      <S.ArticleInfoContainer>
        <h3>{article.title}</h3>
        <S.ArticleDescription>{article.description}</S.ArticleDescription>
      </S.ArticleInfoContainer>
    </S.StyledNewsArticleCard>
  )
}

export default NewsArticleCard
