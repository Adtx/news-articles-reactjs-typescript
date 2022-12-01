import { SelectedArticleContext } from "../../NewsArticles"
import { PageButton, StyledPagination } from "./styles"
import { PaginationProps } from "./types"
import { useContext } from "react"

export const Pagination = ({ numberOfArticlesPerPage }: PaginationProps) => {
  const { setNewsArticlesSliceStart, totalNumberOfArticles } = useContext(
    SelectedArticleContext
  )

  const numberOfPages =
    totalNumberOfArticles! / numberOfArticlesPerPage +
    (totalNumberOfArticles! % numberOfArticlesPerPage ? 1 : 0)

  console.log({
    totalNumberOfArticles,
    numberOfArticlesPerPage,
    remainder: totalNumberOfArticles! % numberOfArticlesPerPage,
    numberOfPages,
  })

  const handleClick = (index: number) =>
    setNewsArticlesSliceStart!((index - 1) * numberOfArticlesPerPage)

  return (
    <StyledPagination>
      {(() => {
        const pageButtons = []
        for (let i = 1; i <= numberOfPages; i++) {
          pageButtons.push(
            <PageButton key={i} onClick={() => handleClick(i)}>
              {i}
            </PageButton>
          )
        }
        return pageButtons
      })()}
    </StyledPagination>
  )
}
