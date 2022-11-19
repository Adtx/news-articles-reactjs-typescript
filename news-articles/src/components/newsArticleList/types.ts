import { NewsArticle } from "../../types"

export interface NewsArticleListProps {
  articles: NewsArticle[]
  setSelectedNewsArticle: React.Dispatch<
    React.SetStateAction<NewsArticle | null>
  >
}
