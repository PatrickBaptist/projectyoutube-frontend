import { ChannelImage, Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from './style'

interface Props {
    title: string
    thumbnail: string
    channelImage: string
    channelName: string
    details: string
    description: string
}

function VideoCard(props : Props){
    return(
       <Container>
            <TitleContainer>
            <ImageBanner style={{backgroundImage: `url(${props.thumbnail})`}} />
                <TextContainer>
                    <Title>{props.title}</Title>
                    <TextCard>{props.details}</TextCard>
                    <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                    <ChannelImage>
                    {props.channelImage}
                    </ChannelImage>
                    <TextCard>{props.channelName}</TextCard>
                    </div>
                    <TextCard>{props.description}</TextCard>
                </TextContainer>
            </TitleContainer>
       </Container>
    )
}

export default VideoCard