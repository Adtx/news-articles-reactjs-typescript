import { NewsArticleDetailsPane } from "../newsArticleDetailsPane/NewsArticleDetailsPane"
import { StyledNewsArticleDetails } from "./styles"
import { NewsArticleDetailsProps } from "./types"

const NewsArticleDetails = ({
  selectedNewsArticle: article,
}: NewsArticleDetailsProps) => {
  const articleIsSelected = article !== null
  return (
    <StyledNewsArticleDetails articleIsSelected={articleIsSelected}>
      {!article && <h2>Select a news article to view its contens here...</h2>}
      {article && <NewsArticleDetailsPane selectedNewsArticle={article} />}
    </StyledNewsArticleDetails>
  )
}

export default NewsArticleDetails
