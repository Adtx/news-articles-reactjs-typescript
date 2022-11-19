import { NewsArticle } from "../../types"
import NewsArticleCard from "../newsArticleCard/NewsArticleCard"
import { StyledNewsArticleList } from "./styles"

interface NewsArticleListProps {
  articles: NewsArticle[]
}

const NewsArticleList = ({ articles }: NewsArticleListProps) => {
  return (
    <StyledNewsArticleList>
      {articles.map((article) => (
        <NewsArticleCard key={article.url} article={article} />
      ))}
    </StyledNewsArticleList>
  )
}

export default NewsArticleList
