import { NewsArticle } from "../../types"

export interface SearchProps {
  newsArticleList: NewsArticle[]
  setFilteredNewsArticleList: React.Dispatch<
    React.SetStateAction<NewsArticle[] | null>
  >
}
