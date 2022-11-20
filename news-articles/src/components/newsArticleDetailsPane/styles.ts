import styled from "styled-components"

export const StyledNewsArticleDetailsPane = styled.article`
  background: #fff;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 5px auto;
  min-height: 98%;
  padding: 1rem;
  width: 85%;
`

export const CloseButtonArea = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 4%;
`

export const CloseButton = styled.div`
  & > * {
    transform: scale(1.5);
  }

  &:hover {
    cursor: pointer;
  }
`

export const ArticleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4%;
`

export const ArticleHeaderImage = styled.img`
  border-radius: 4px;
  height: 300px;
  width: 300px;
`
export const ArticleHeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60%;
`

export const Introduction = styled.div`
  display: flex;
  flex-direction: column;
`

export const MetaData = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-weight: 500;
  }
`

export const ArticleDescription = styled.p`
  margin-top: 1%;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const ArticleContent = styled.p`
  margin-top: 1%;
`
