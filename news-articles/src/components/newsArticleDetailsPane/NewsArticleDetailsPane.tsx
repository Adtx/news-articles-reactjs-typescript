import * as S from "./styles"
import { useContext } from "react"
import { SelectedArticleContext } from "../../NewsArticles"
import { SlClose } from "react-icons/sl"
import { NewsArticleDetailsPaneProps } from "./types"

export const NewsArticleDetailsPane = ({
  selectedNewsArticle: article,
}: NewsArticleDetailsPaneProps) => {
  const { articleSelected, setArticleSelected, setSelectedNewsArticle } =
    useContext(SelectedArticleContext)

  const closeNewsArticleDetailsPane = () => {
    setArticleSelected!(false)
    setSelectedNewsArticle!(null)
  }

  return (
    <S.StyledNewsArticleDetailsPane
      data-testid="newsarticledetails"
      articleSelected={articleSelected!}
    >
      <S.CloseButtonArea>
        <S.CloseButton
          onClick={() => closeNewsArticleDetailsPane()}
          data-testid="closebutton"
        >
          <SlClose />
        </S.CloseButton>
      </S.CloseButtonArea>
      <S.ArticleHeader>
        <S.ArticleHeaderImage src={article?.urlToImage} />
        <S.ArticleHeaderInfo>
          <S.Introduction>
            <h3>{article?.title}</h3>
            <S.ArticleDescription>{article?.description}</S.ArticleDescription>
          </S.Introduction>
          <S.MetaData>
            <p>
              <span>{"Source: "}</span>
              {article?.source.name}
            </p>
            <p>
              <span>{"URL: "}</span>
              <a href={article?.url}>{"Source article"}</a>
            </p>
            <p>
              <span>{"Author: "}</span>
              {article?.author}
            </p>
            <p>
              <span>{"Published at: "}</span>
              {article?.publishedAt}
            </p>
          </S.MetaData>
        </S.ArticleHeaderInfo>
      </S.ArticleHeader>
      <p>{article?.content}</p>
    </S.StyledNewsArticleDetailsPane>
  )
}
