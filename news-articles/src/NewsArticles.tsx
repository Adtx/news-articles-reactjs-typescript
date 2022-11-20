import React, { useEffect, useState } from "react"
import { fetchNewsArticles } from "./apiUtils"
import NewsArticleDetails from "./components/newsArticleDetails/NewsArticleDetails"
import NewsArticleList from "./components/newsArticleList/NewsArticleList"
import { StyledHeader, StyledNewsArticles, Title } from "./styles"
import { NewsArticle } from "./types"

export const SelectedArticleContext = React.createContext<{
  selectedNewsArticle?: NewsArticle | null
  setSelectedNewsArticle?: React.Dispatch<
    React.SetStateAction<NewsArticle | null>
  >
}>({})

const NewsArticles = () => {
  const [newsArticleList, setNewsArticleList] = useState<NewsArticle[]>([])
  const [selectedNewsArticle, setSelectedNewsArticle] =
    useState<NewsArticle | null>(null)

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
        value={{ selectedNewsArticle, setSelectedNewsArticle }}
      >
        <StyledNewsArticles>
          <NewsArticleList
            articles={newsArticleList}
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
