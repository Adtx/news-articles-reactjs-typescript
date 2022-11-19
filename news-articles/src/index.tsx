import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import NewsArticles from "./NewsArticles"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <NewsArticles />
  </React.StrictMode>
)
