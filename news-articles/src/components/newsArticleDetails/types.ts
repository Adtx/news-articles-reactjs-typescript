import { NewsArticle } from "../../types"

export interface NewsArticleDetailsProps {
  selectedNewsArticle: NewsArticle | null
  setSelectedNewsArticle: React.Dispatch<
    React.SetStateAction<NewsArticle | null>
  >
}

export interface StyledNewsArticleDetailsProps {
  articleIsSelected: boolean
}
