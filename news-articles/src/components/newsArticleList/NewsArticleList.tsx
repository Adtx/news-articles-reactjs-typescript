import { useContext } from "react"
import { SelectedArticleContext } from "../../NewsArticles"
import { NewsArticle } from "../../types"
import NewsArticleCard from "../newsArticleCard/NewsArticleCard"
import { Pagination } from "../Pagination/Pagination"
import Search from "../Search/Search"
import { ArticleNotFoundMessage, StyledNewsArticleList } from "./styles"
import { NewsArticleListProps } from "./types"
import { NEWS_ARTICLES_PER_PAGE } from "../../NewsArticles"

const NewsArticleList = ({
  articles,
  selectedNewsArticle,
  setSelectedNewsArticle,
}: NewsArticleListProps) => {
  const clickHandler = (selectedArticle: NewsArticle) =>
    setSelectedNewsArticle(selectedArticle)

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
