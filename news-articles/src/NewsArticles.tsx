import React, { useEffect, useState } from "react"
import { fetchNewsArticles } from "./apiUtils"
import NewsArticleDetails from "./components/newsArticleDetails/NewsArticleDetails"
import NewsArticleList from "./components/newsArticleList/NewsArticleList"
import Search from "./components/Search/Search"
import { StyledHeader, StyledNewsArticles, Title } from "./styles"
import { NewsArticle } from "./types"

export const SelectedArticleContext = React.createContext<{
  selectedNewsArticle?: NewsArticle | null
  setSelectedNewsArticle?: React.Dispatch<
    React.SetStateAction<NewsArticle | null>
  >
  newsArticleList?: NewsArticle[]
  setFilteredNewsArticleList?: React.Dispatch<
    React.SetStateAction<NewsArticle[] | null>
  >
}>({})

const NewsArticles = () => {
  const [newsArticleList, setNewsArticleList] = useState<NewsArticle[]>([])
  const [selectedNewsArticle, setSelectedNewsArticle] =
    useState<NewsArticle | null>(null)
  const [filteredNewsArticleList, setFilteredNewsArticleList] = useState<
    NewsArticle[] | null
  >(null)

  useEffect(() => {
    fetchNewsArticles().then((newsArticle) => {
      setNewsArticleList(newsArticle!)
    })
  }, [])

  return (
    <>
      <StyledHeader>
        <Title>News Articles</Title>
      </StyledHeader>
      <SelectedArticleContext.Provider
        value={{
          selectedNewsArticle,
          setSelectedNewsArticle,
          newsArticleList,
          setFilteredNewsArticleList,
        }}
      >
        <StyledNewsArticles>
          <NewsArticleList
            articles={filteredNewsArticleList || newsArticleList}
            selectedNewsArticle={selectedNewsArticle}
            setSelectedNewsArticle={setSelectedNewsArticle}
          />
          <NewsArticleDetails selectedNewsArticle={selectedNewsArticle} />
        </StyledNewsArticles>
      </SelectedArticleContext.Provider>
    </>
  )
}

export default NewsArticles
