import { NewsArticleDetailsPane } from "../newsArticleDetailsPane/NewsArticleDetailsPane"
import { StyledNewsArticleDetails } from "./styles"
import { NewsArticleDetailsProps } from "./types"

const NewsArticleDetails = ({
  selectedNewsArticle: article,
  articleSelected,
}: NewsArticleDetailsProps) => {
  return (
    <StyledNewsArticleDetails articleIsSelected={articleSelected}>
      {!articleSelected && (
        <h2>Select a news article to view its contens here...</h2>
      )}
      <NewsArticleDetailsPane selectedNewsArticle={article} />
    </StyledNewsArticleDetails>
  )
}

export default NewsArticleDetails
