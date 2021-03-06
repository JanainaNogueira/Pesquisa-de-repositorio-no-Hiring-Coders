import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`
export const content = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const input = styled.input`
  border: 1px solid #ddd;
  border-radius: 0.25rem 0 0 0.25rem;
  height: 1.5rem;
  padding: 0 0.5rem;
  &focus,
  &active {
    outline: none;
    box-shadow: none;
  }
`
export const button = styled.button`
  height: 1.6rem;
  border: 1px solid #000;
  background: #000;
  color: #fff;
  border-radius: 0 0.25rem 0.25rem 0;
`
export const ErrorMsg = styled.span`
  display: block;
  font-size: 0.8rem;
  color: red;
  font-weight: 600;
  margin-top: 1rem;
`
