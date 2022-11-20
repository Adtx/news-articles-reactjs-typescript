import { NewsArticle } from "../../types"

export interface NewsArticleDetailsProps {
  selectedNewsArticle: NewsArticle | null
}

export interface StyledNewsArticleDetailsProps {
  articleIsSelected: boolean
}
