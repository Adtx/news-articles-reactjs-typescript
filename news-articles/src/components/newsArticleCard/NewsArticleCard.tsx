import * as S from "./styles"
import { NewsArticleCardProps } from "./types"

const NewsArticleCard = ({ article }: NewsArticleCardProps) => {
  return (
    <S.StyledNewsArticleCard>
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
