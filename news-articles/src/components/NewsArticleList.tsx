import { useContext } from "react"
import { SelectedArticleContext } from "../NewsArticles"
import { NewsArticle } from "../NewsArticles"
import NewsArticleCard from "./NewsArticleCard"
import { Pagination } from "./Pagination"
import Search from "./Search"
import { NEWS_ARTICLES_PER_PAGE } from "../NewsArticles"
import styled from "styled-components"

const StyledNewsArticleList = styled.div<StyledNewsArticleListProps>`
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
const ArticleNotFoundMessage = styled.h2`
  left: 10%;
  position: fixed;
  top: 25%;
`
interface NewsArticleListProps {
  articles: NewsArticle[]
  selectedNewsArticle: NewsArticle | null
  setSelectedNewsArticle: React.Dispatch<
    React.SetStateAction<NewsArticle | null>
  >
  setArticleSelected: React.Dispatch<React.SetStateAction<boolean>>
}
interface StyledNewsArticleListProps {
  articleIsSelected: boolean
}

const NewsArticleList = ({
  articles,
  selectedNewsArticle,
  setSelectedNewsArticle,
  setArticleSelected,
}: NewsArticleListProps) => {
  const clickHandler = (selectedArticle: NewsArticle) => {
    setSelectedNewsArticle(selectedArticle)
    setArticleSelected(true)
  }

  const articleIsSelected = selectedNewsArticle !== null
  const { newsArticleList, setFilteredNewsArticleList } = useContext(
    SelectedArticleContext
  )
  const articleListEmpty = articles.length === 0
  return (
    <StyledNewsArticleList articleIsSelected={articleIsSelected}>
      <Search
        newsArticleList={newsArticleList!}
        setFilteredNewsArticleList={setFilteredNewsArticleList!}
      />
      {articleListEmpty && (
        <ArticleNotFoundMessage>
          Couldn't find an article by that title
        </ArticleNotFoundMessage>
      )}
      {!articleListEmpty &&
        articles.map((article) => (
          <NewsArticleCard
            key={article.url}
            article={article}
            onClick={() => clickHandler(article)}
          />
        ))}
      <Pagination numberOfArticlesPerPage={NEWS_ARTICLES_PER_PAGE} />
    </StyledNewsArticleList>
  )
}

export default NewsArticleList
