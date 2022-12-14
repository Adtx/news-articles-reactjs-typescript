import { NewsArticle } from "../../types"

export interface NewsArticleDetailsProps {
  selectedNewsArticle: NewsArticle | null
  articleSelected: boolean
}

export interface StyledNewsArticleDetailsProps {
  articleIsSelected: boolean
}
