import { useEffect, useState } from "react"
import { fetchNewsArticles } from "./apiUtils"
import NewsArticleDetails from "./components/newsArticleDetails/NewsArticleDetails"
import NewsArticleList from "./components/newsArticleList/NewsArticleList"
import { StyledHeader, StyledNewsArticles, Title } from "./styles"
import { NewsArticle } from "./types"

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
      <StyledNewsArticles>
        <NewsArticleList
          articles={newsArticleList}
          selectedNewsArticle={selectedNewsArticle}
          setSelectedNewsArticle={setSelectedNewsArticle}
        />
        <NewsArticleDetails
          selectedNewsArticle={selectedNewsArticle}
          setSelectedNewsArticle={setSelectedNewsArticle}
        />
      </StyledNewsArticles>
    </>
  )
}

export default NewsArticles
