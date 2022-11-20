import styled from "styled-components"

export const StyledNewsArticleCard = styled.article`
  background: #fff;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  display: flex;
  margin: 5px auto;
  padding: 1rem;
  width: 85%;

  &:hover {
    cursor: pointer;
    box-shadow: 0 1px 6px 2px rgba(28, 33, 39, 0.1);
  }
`

export const ArticleImageContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 33%;
`

export const ArticleImage = styled.img`
  border-radius: 4px;
  height: 150px;
  width: 150px;
`

export const ArticleInfoContainer = styled.div`
  width: 66%;
`

/* export const UserName = styled.p`
  font-size: 80%;
  color: #6c757d;
  margin-bottom: 0.4rem;
` */

export const ArticleDescription = styled.p`
  margin-top: 1%;
  overflow: hidden;
  text-overflow: ellipsis;
`
