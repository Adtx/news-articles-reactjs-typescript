import styled from "styled-components"
import { StyledNewsArticleDetailsProps } from "./types"

export const StyledNewsArticleDetails = styled.div<StyledNewsArticleDetailsProps>`
  align-items: ${(props) =>
    props.articleIsSelected ? "flex-start" : "center"};
  border-left: 1px solid #000;
  display: flex;
  justify-content: center;
  height: 100%;
  overflow: auto;
  width: 50%;
`
