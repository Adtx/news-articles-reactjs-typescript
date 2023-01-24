import React, { useEffect, useState } from "react"
import { fetchNewsArticles } from "./apiUtils"
import NewsArticleDetails from "./components/NewsArticleDetails"
import NewsArticleList from "./components/NewsArticleList"
import styled from "styled-components"

const StyledHeader = styled.header`
  background-color: #f8f9fa;
  height: 7vh;
  position: relative;

  @media (max-width: 1300px) {
    display: flex;
    justify-content: center;
  }
`

const Title = styled.h1`
  margin-left: 3.75%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`

const StyledNewsArticles = styled.main`
  background-color: #f8f9fa;
  display: flex;
  height: 93vh;

  @media (max-width: 1300px) {
    align-items: center;
    flex-direction: column;
  }
`
interface NewsArticleList {
  articles: NewsArticle[]
}

export interface NewsArticle {
  source: Source
  author?: string
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: string
  content: string
}

interface Source {
  name: string
}

export const SelectedArticleContext = React.createContext<{
  newsArticleList?: NewsArticle[]
  setFilteredNewsArticleList?: React.Dispatch<
    React.SetStateAction<NewsArticle[] | null>
  >
  articleSelected?: boolean
  setNewsArticlesSliceStart?: React.Dispatch<React.SetStateAction<number>>
  setArticleSelected?: React.Dispatch<React.SetStateAction<boolean>>
  setSelectedNewsArticle?: React.Dispatch<
    React.SetStateAction<NewsArticle | null>
  >
  totalNumberOfArticles?: number
}>({})

export const NEWS_ARTICLES_PER_PAGE = 5

const NewsArticles = () => {
  const [newsArticleList, setNewsArticleList] = useState<NewsArticle[]>([])
  const [selectedNewsArticle, setSelectedNewsArticle] =
    useState<NewsArticle | null>(null)
  const [filteredNewsArticleList, setFilteredNewsArticleList] = useState<
    NewsArticle[] | null
  >(null)
  const [articleSelected, setArticleSelected] = useState(false)
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
          articleSelected,
          setArticleSelected,
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
            setArticleSelected={setArticleSelected}
          />
          <NewsArticleDetails
            selectedNewsArticle={selectedNewsArticle}
            articleSelected={articleSelected}
          />
        </StyledNewsArticles>
      </SelectedArticleContext.Provider>
    </>
  )
}

export default NewsArticles
