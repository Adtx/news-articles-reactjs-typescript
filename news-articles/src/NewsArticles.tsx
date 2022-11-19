import { useEffect, useState } from "react"
import { fetchNewsArticles } from "./apiUtils"
import NewsArticleList from "./components/newsArticleList/NewsArticleList"
import { NewsArticle } from "./types"

const NewsArticles = () => {
  const [newsArticleList, setNewsArticleList] = useState<NewsArticle[]>([])

  useEffect(() => {
    fetchNewsArticles().then((newsArticle) => {
      setNewsArticleList(newsArticle!)
    })
  }, [])

  return (
    <>
      <header>
        <h1>News Articles</h1>
      </header>
      <main>
        <NewsArticleList articles={newsArticleList} />
      </main>
    </>
  )
}

export default NewsArticles
