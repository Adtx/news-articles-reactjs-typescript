import { NewsArticle } from "../../types"

export interface NewsArticleCardProps {
  article: NewsArticle
  onClick: () => void
}

export interface StyledNewsArticleCardProps {
  checked: boolean
}
