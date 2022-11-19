import { NewsArticle } from "../../types"

interface NewsArticleListProps {
  articles: NewsArticle[]
}

const NewsArticleList = ({ articles }: NewsArticleListProps) => {
  return (
    <>
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
    </>
  )
}

export default NewsArticleList
