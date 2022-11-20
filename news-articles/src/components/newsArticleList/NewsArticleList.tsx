import { NewsArticle } from "../../types"
import NewsArticleCard from "../newsArticleCard/NewsArticleCard"
import { StyledNewsArticleList } from "./styles"
import { NewsArticleListProps } from "./types"

const NewsArticleList = ({
  articles,
  selectedNewsArticle,
  setSelectedNewsArticle,
}: NewsArticleListProps) => {
  const clickHandler = (selectedArticle: NewsArticle) =>
    setSelectedNewsArticle(selectedArticle)

  const articleIsSelected = selectedNewsArticle !== null
  return (
    <StyledNewsArticleList articleIsSelected={articleIsSelected}>
      {articles.map((article) => (
        <NewsArticleCard
          key={article.url}
          article={article}
          onClick={() => clickHandler(article)}
        />
      ))}
    </StyledNewsArticleList>
  )
}

export default NewsArticleList
