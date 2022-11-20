import React, { useState } from "react"
import * as S from "./styles"
import { TfiSearch } from "react-icons/tfi"
import { SearchProps } from "./types"

const Search = ({
  newsArticleList,
  setFilteredNewsArticleList,
}: SearchProps) => {
  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    if (!inputValue) {
      setFilteredNewsArticleList(null)
      return
    }

    const filteredNewsArticleList = newsArticleList.filter((article) =>
      article.title.toLowerCase().includes(inputValue.toLowerCase())
    )

    setFilteredNewsArticleList(filteredNewsArticleList)
  }

  return (
    <>
      <S.SearchInputContainer>
        <S.IconContainer>
          <TfiSearch />
        </S.IconContainer>
        <S.SearchInput
          type="text"
          placeholder="Search news articles by title"
          onChange={inputChangeHandler}
        />
      </S.SearchInputContainer>
    </>
  )
}

export default Search
