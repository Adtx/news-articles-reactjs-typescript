import { SelectedArticleContext } from "../../NewsArticles"
import { useContext } from "react"
import styled from "styled-components"

const StyledPagination = styled.div`
  display: flex;
  justify-content: center;
  margin: 5px auto;
  width: 35%;
`

const PageButton = styled.div`
  background: #fff;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  margin: 0 2.5px;
  padding: 10px;

  &:hover {
    cursor: pointer;
  }
`
interface PaginationProps {
  numberOfArticlesPerPage: number
}

export const Pagination = ({ numberOfArticlesPerPage }: PaginationProps) => {
  const { setNewsArticlesSliceStart, totalNumberOfArticles } = useContext(
    SelectedArticleContext
  )

  const numberOfPages =
    totalNumberOfArticles! / numberOfArticlesPerPage +
    (totalNumberOfArticles! % numberOfArticlesPerPage ? 1 : 0)

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
