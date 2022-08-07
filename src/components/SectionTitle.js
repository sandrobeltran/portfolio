import styled from 'styled-components'

const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    font-style: italic;
    font-weight: 900;
    height: 100px;
    color: var(--pink);
`

const SectionTitle = ({ children }) => {
  return (
    <TitleContainer>
      <h2>{children}</h2>
    </TitleContainer>
  )
}

export default SectionTitle
