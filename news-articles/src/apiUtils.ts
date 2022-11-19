import axios from "axios"
import { NewsArticle } from "./types"

const NEWS_ARTICLES_API_BASE_URL = "http://127.0.0.1:8000/v1/news"
const NEWS_ARTICLE_TITLE = ""

export const fetchNewsArticles = async (): Promise<
  NewsArticle[] | undefined
> => {
  const urlParams = {
    q: NEWS_ARTICLE_TITLE,
  }

  const apiQueryString = new URLSearchParams(urlParams).toString()

  try {
    const { data } = await axios.get(
      `${NEWS_ARTICLES_API_BASE_URL}?${apiQueryString}`
    )
    const { articles } = data
    return articles
  } catch (error) {
    console.error(error)
  }
}
