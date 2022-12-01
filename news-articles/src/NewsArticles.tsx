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
  setNewsArticlesSliceStart?: React.Dispatch<React.SetStateAction<number>>
  totalNumberOfArticles?: number
}>({})

export const NEWS_ARTICLES_PER_PAGE = 20

const NewsArticles = () => {
  const [newsArticleList, setNewsArticleList] = useState<NewsArticle[]>([])
  const [selectedNewsArticle, setSelectedNewsArticle] =
    useState<NewsArticle | null>(null)
  const [filteredNewsArticleList, setFilteredNewsArticleList] = useState<
    NewsArticle[] | null
  >(null)
  const [newsArticlesSliceStart, setNewsArticlesSliceStart] = useState(0)

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
          setNewsArticlesSliceStart,
          totalNumberOfArticles: (filteredNewsArticleList || newsArticleList)
            .length,
        }}
      >
        <StyledNewsArticles>
          <NewsArticleList
            articles={(filteredNewsArticleList || newsArticleList).slice(
              newsArticlesSliceStart,
              newsArticlesSliceStart + NEWS_ARTICLES_PER_PAGE
            )}
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
