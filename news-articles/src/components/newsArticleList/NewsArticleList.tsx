import { NewsArticle } from "../../types"
import { StyledNewsArticleList } from "./styles"

interface NewsArticleListProps {
  articles: NewsArticle[]
}

const NewsArticleList = ({ articles }: NewsArticleListProps) => {
  return (
    <StyledNewsArticleList>
      {articles.map((article) => (
        <article key={article.url}>
          <img
            src={article.urlToImage}
            style={{ height: "200px", width: "200px" }}
          />
          <h2>{article.title}</h2>
          <p>{article.description}</p>
        </article>
      ))}
    </StyledNewsArticleList>
  )
}

export default NewsArticleList
