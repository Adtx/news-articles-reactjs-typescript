import { NewsArticle } from "../../types"

export interface NewsArticleListProps {
  articles: NewsArticle[]
  selectedNewsArticle: NewsArticle | null
  setSelectedNewsArticle: React.Dispatch<
    React.SetStateAction<NewsArticle | null>
  >
}
export interface StyledNewsArticleListProps {
  articleIsSelected: boolean
}
