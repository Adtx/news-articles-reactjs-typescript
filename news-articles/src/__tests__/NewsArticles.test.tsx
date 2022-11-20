import "@testing-library/jest-dom"
import { rest } from "msw"
import { setupServer } from "msw/node"
import { fireEvent, render } from "@testing-library/react"
import NewsArticles from "../NewsArticles"
import { NEWS_ARTICLES_API_MOCK_RESPONSE } from "../testUtils"
import { NEWS_ARTICLES_API_BASE_URL } from "../apiUtils"

const server = setupServer(
  rest.get(NEWS_ARTICLES_API_BASE_URL, (req, res, ctx) => {
    return res(ctx.json(NEWS_ARTICLES_API_MOCK_RESPONSE))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe("News article tests", () => {
  test("Displays the news articles once they are loaded", async () => {
    const { findAllByRole } = render(<NewsArticles />)

    const renderedArticles = await findAllByRole("article")

    expect(renderedArticles).toHaveLength(3)

    renderedArticles.forEach((article) => {
      expect(article).toBeVisible()
    })
  })

  test("Displays article details when article is selected", async () => {
    const { findByTestId, findAllByRole } = render(<NewsArticles />)

    const renderedArticles = await findAllByRole("article")
    fireEvent.click(renderedArticles[0])

    const articleDetailsPane = await findByTestId("newsarticledetails")

    expect(articleDetailsPane).toBeVisible()
  })

  test("Removes article details pane when close button clicked", async () => {
    const { findByTestId, findAllByRole } = render(<NewsArticles />)

    const renderedArticles = await findAllByRole("article")
    fireEvent.click(renderedArticles[0])

    const articleDetailsPane = await findByTestId("newsarticledetails")

    expect(articleDetailsPane).toBeVisible()

    const closeButton = await findByTestId("closebutton")
    fireEvent.click(closeButton)

    expect(articleDetailsPane).not.toBeVisible()
  })
})
