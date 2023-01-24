import React, { useContext, useRef } from "react"
import { TfiSearch } from "react-icons/tfi"
import { NewsArticle, SelectedArticleContext } from "../NewsArticles"
import styled from "styled-components"

const SearchInputContainer = styled.div`
  align-items: center;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 32px;
  box-shadow: 0 1px 6px rgba(28, 33, 39, 0.1);
  display: flex;
  margin: 1rem auto;
  padding: 0.375rem 0.75rem;
  position: sticky;
  top: 15px;
  width: 65%;
  z-index: 1;
`

const IconContainer = styled.div`
  padding-left: 0.4rem;
  padding-right: 0.6rem;
`

const SearchInput = styled.input`
  background-clip: padding-box;
  background-color: #fff;
  border: 0;
  color: #495057;
  display: block;
  font-size: 1rem;
  font-weight: 400;
  line-height: 2;
  outline: 0;
  padding: 0;
  width: 75%;
`

const LoadingPausedMessage = styled.p`
  color: #6c757d;
  font-size: 80%;
`
interface SearchProps {
  newsArticleList: NewsArticle[]
  setFilteredNewsArticleList: React.Dispatch<
    React.SetStateAction<NewsArticle[] | null>
  >
}

const Search = ({
  newsArticleList,
  setFilteredNewsArticleList,
}: SearchProps) => {
  let timeoutId = useRef<NodeJS.Timeout | null>(null)

  const { setNewsArticlesSliceStart } = useContext(SelectedArticleContext)

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (timeoutId && timeoutId.current) clearTimeout(timeoutId.current)

    const inputValue = e.target.value
    if (!inputValue) {
      setFilteredNewsArticleList(null)
      return
    }

    const filteredNewsArticleList = newsArticleList.filter((article) =>
      article.title.toLowerCase().includes(inputValue.toLowerCase())
    )

    timeoutId.current = setTimeout(() => {
      setFilteredNewsArticleList(filteredNewsArticleList)
      setNewsArticlesSliceStart!(0)
    }, 500)
  }

  return (
    <>
      <SearchInputContainer>
        <IconContainer>
          <TfiSearch />
        </IconContainer>
        <SearchInput
          type="text"
          placeholder="Search news articles by title"
          onChange={inputChangeHandler}
        />
      </SearchInputContainer>
    </>
  )
}

export default Search
