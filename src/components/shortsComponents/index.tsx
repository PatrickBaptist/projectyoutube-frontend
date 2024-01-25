import { Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from './style'
import Short1 from '../../assets/short1.webp'
import Short2 from '../../assets/short2.webp'
import Short3 from '../../assets/short3.webp'
import Short4 from '../../assets/short4.webp'
import Short5 from '../../assets/short5.webp'
import Short6 from '../../assets/short6.webp'

const shorts = [
    {img: Short1, title: 'Entendento Arrays JavaScript', text: '1.3 mil visualizações', id: 0},
    {img: Short2, title: 'Sites para ganhar dinehri', text: '15 mil visualizações', id: 1},
    {img: Short3, title: 'SPEED Watch!', text: '1 mi visualizações', id: 2},
    {img: Short4, title: 'Qual a idade ideal para programar', text: '100 mil visualizações', id: 3},
    {img: Short5, title: '3 bibliotecas para usar no seu projetos com React.js', text: '6.2 mil visualizações', id: 4},
    {img: Short6, title: 'Your new fav synth!', text: '632 mil visualizações', id: 5}
]

function ShortsComponent(){
    return(
       <Container>
        {shorts.map((shortMap, id) => (
            <TitleContainer key={id}>
            <ImageBanner src={shortMap.img} alt="banner" />
            
            <TextContainer>
                <Title>{shortMap.title}</Title>
                <TextCard>{shortMap.text}</TextCard>
            </TextContainer>

            </TitleContainer>
        ))}
       </Container>
    )
}

export default ShortsComponent