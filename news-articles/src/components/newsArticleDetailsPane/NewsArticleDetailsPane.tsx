import { useContext } from "react"
import { NewsArticle, SelectedArticleContext } from "../../NewsArticles"
import { SlClose } from "react-icons/sl"
import styled from "styled-components"

const StyledNewsArticleDetailsPane = styled.article<StyledNewsArticleDetailsPaneProps>`
  background: #fff;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  left: ${(props) => (props.articleSelected ? "72px" : "100%")};
  margin: 5px auto;
  min-height: 98%;
  padding: 1rem;
  position: absolute;
  transition: left 0.2s ease-in;
  width: 85%;

  @media (max-width: 630px) {
    margin: 5px 5px;
    position: initial;
    width: 95%;
  }

  @media (max-width: 545px) {
    align-items: center;
    position: initial;
  }
`

const CloseButtonArea = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 4%;
`

const CloseButton = styled.div`
  & > * {
    transform: scale(1.5);
  }

  &:hover {
    cursor: pointer;
  }
`

const ArticleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4%;

  @media (max-width: 545px) {
    align-items: center;
    flex-direction: column;
  }
`

const ArticleHeaderImage = styled.img`
  border-radius: 4px;
  height: 300px;
  width: 300px;

  @media (max-width: 1905px) {
    height: 250px;
    width: 250px;
  }

  @media (max-width: 1600px) {
    height: 200px;
    width: 200px;
  }

  @media (max-width: 800px) {
    height: 185px;
    width: 185px;
  }
`
const ArticleHeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60%;
`

const Introduction = styled.div`
  display: flex;
  flex-direction: column;
`

const MetaData = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-weight: 500;
  }
`

const ArticleDescription = styled.p`
  margin-top: 1%;
  overflow: hidden;
  text-overflow: ellipsis;
`

const ArticleContent = styled.p`
  margin-top: 1%;
`

interface NewsArticleDetailsPaneProps {
  selectedNewsArticle: NewsArticle | null
}
interface StyledNewsArticleDetailsPaneProps {
  articleSelected: boolean
}

export const NewsArticleDetailsPane = ({
  selectedNewsArticle: article,
}: NewsArticleDetailsPaneProps) => {
  const { articleSelected, setArticleSelected, setSelectedNewsArticle } =
    useContext(SelectedArticleContext)

  const closeNewsArticleDetailsPane = () => {
    setArticleSelected!(false)
    setSelectedNewsArticle!(null)
  }

  return (
    <StyledNewsArticleDetailsPane
      data-testid="newsarticledetails"
      articleSelected={articleSelected!}
    >
      <CloseButtonArea>
        <CloseButton
          onClick={() => closeNewsArticleDetailsPane()}
          data-testid="closebutton"
        >
          <SlClose />
        </CloseButton>
      </CloseButtonArea>
      <ArticleHeader>
        <ArticleHeaderImage src={article?.urlToImage} />
        <ArticleHeaderInfo>
          <Introduction>
            <h3>{article?.title}</h3>
            <ArticleDescription>{article?.description}</ArticleDescription>
          </Introduction>
          <MetaData>
            <p>
              <span>{"Source: "}</span>
              {article?.source.name}
            </p>
            <p>
              <span>{"URL: "}</span>
              <a href={article?.url}>{"Source article"}</a>
            </p>
            <p>
              <span>{"Author: "}</span>
              {article?.author}
            </p>
            <p>
              <span>{"Published at: "}</span>
              {article?.publishedAt}
            </p>
          </MetaData>
        </ArticleHeaderInfo>
      </ArticleHeader>
      <p>{article?.content}</p>
    </StyledNewsArticleDetailsPane>
  )
}
