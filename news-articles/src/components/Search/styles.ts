import styled from "styled-components"

export const SearchInputContainer = styled.div`
  align-items: center;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 32px;
  box-shadow: 0 1px 6px rgba(28, 33, 39, 0.1);
  display: flex;
  margin: 1rem auto;
  padding: 0.375rem 0.75rem;
  position: sticky;
  top: 15px;
  width: 65%;
  z-index: 1;
`

export const IconContainer = styled.div`
  padding-left: 0.4rem;
  padding-right: 0.6rem;
`

export const SearchInput = styled.input`
  background-clip: padding-box;
  background-color: #fff;
  border: 0;
  color: #495057;
  display: block;
  font-size: 1rem;
  font-weight: 400;
  line-height: 2;
  outline: 0;
  padding: 0;
  width: 75%;
`

export const LoadingPausedMessage = styled.p`
  color: #6c757d;
  font-size: 80%;
`
