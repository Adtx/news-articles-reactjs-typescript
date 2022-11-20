import { NewsArticle } from "../../types"

export interface NewsArticleDetailsPaneProps {
  selectedNewsArticle: NewsArticle
  setSelectedNewsArticle: React.Dispatch<
    React.SetStateAction<NewsArticle | null>
  >
}
