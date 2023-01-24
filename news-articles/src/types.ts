export interface NewsArticleList {
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

export interface Source {
  name: string
}
