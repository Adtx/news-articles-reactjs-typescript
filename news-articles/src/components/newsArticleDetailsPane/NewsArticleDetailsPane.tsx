import * as S from "./styles"
import { NewsArticleDetailsPaneProps } from "./types"

export const NewsArticleDetailsPane = ({
  selectedNewsArticle: article,
  setSelectedNewsArticle,
}: NewsArticleDetailsPaneProps) => {
  return (
    <S.StyledNewsArticleDetailsPane>
      <S.ArticleHeader>
        <S.ArticleHeaderImage src={article.urlToImage} />
        <S.ArticleHeaderInfo>
          <S.Introduction>
            <h3>{article.title}</h3>
            <S.ArticleDescription>{article.description}</S.ArticleDescription>
          </S.Introduction>
          <S.MetaData>
            <p>
              <span>{"Source: "}</span>
              {article.source.name}
            </p>
            <p>
              <span>{"URL: "}</span>
              <a href={article.url}>{article.url}</a>
            </p>
            <p>
              <span>{"Author: "}</span>
              {article.author}
            </p>
            <p>
              <span>{"Published at: "}</span>
              {article.publishedAt}
            </p>
          </S.MetaData>
        </S.ArticleHeaderInfo>
      </S.ArticleHeader>
      <p>{article.content}</p>
    </S.StyledNewsArticleDetailsPane>
  )
}
