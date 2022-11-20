import * as S from "./styles"
import { NewsArticleCardProps } from "./types"

const NewsArticleCard = ({ article, onClick }: NewsArticleCardProps) => {
  return (
    <S.StyledNewsArticleCard onClick={onClick}>
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
