import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    box-sizing: border-box;
    gap: 8px;

    @media(max-width: 1015px) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  `

export const TitleContainer = styled.div`
    width: 100%;
`

export const ImageBanner = styled.img`
    width: 100%;
    height: 300px;
    border-radius: 12px;
    cursor: pointer;
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const Title = styled.span`
    font-weight: 600;
    color: #0f0f0f;
`

export const TextCard = styled.span`
    color: #8c8c8c;
    font-size: 14px;
`