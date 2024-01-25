import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    margin: 10px;
`
export const ImageBanner = styled.img`
    width: 70%;
    height: 210px;
    background-size: cover;
    border-radius: 12px;
    cursor: pointer;
`

export const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 30px;
`

export const ChannelImage = styled.div`
    background-color: beige;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
`

export const TextContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3px;
`

export const Title = styled.span`
    font-weight: 500;
    color: #0f0f0f;
`

export const TextCard = styled.span`
    color: #8c8c8c;
    font-size: 14px;
    cursor: pointer;
`