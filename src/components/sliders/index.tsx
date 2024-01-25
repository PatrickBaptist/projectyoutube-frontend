import { Container, ContainerSliders, NavUl, NavLi, ButtonIcon } from "./styles"
import Slider from '../../assets/setasSlider.png'
import { useState, useContext } from "react"
import { UserContext } from "../../contexts/userContext"
import { useCategoryContext } from "../../contexts/searchCategories"

const NavTitle = [
  {id: '0', name: 'Tudo'},
  {id: '20', name: 'Jogos'},
  {id: '10', name: 'Música'},
  {id: "22", name: 'Podcast'},
  {id: '23', name: 'Mistura'},
  {id: '1', name: 'Viver'},
  {id: '22', name: 'História'},
  {id: '17', name: 'Esportes'},
  {id: '24', name: 'Novidades'},
  {id: '1', name: 'Educação'},
  {id: '20', name: 'Jogos de ação e aventura'},
  {id: '2', name: 'Ciências'},
  {id: '24', name: 'Documentários'},
  {id: '15', name: 'Animais'},
  {id: '25', name: 'Notícias'}
]

function Sliders(){

  const { openMenu } = useContext(UserContext)

  const [sliderPosition, setSliderPosition] = useState(0)

  const buttonNext = () => {
    if(sliderPosition > -600) {
      setSliderPosition((prevPosition) => prevPosition - 100)
    }
  }

  const buttonBack = () => {
    if(sliderPosition < 0) {
      setSliderPosition((prevPosition) => prevPosition + 100)
    }
  }

  const {setCategoryId} = useCategoryContext()
  function searchCategory(id: string) {
    setCategoryId(id)
  }

    return(
      <Container $openMenu={openMenu}>
          <ButtonIcon alt="button slider" src={Slider} style={{transform: 'scaleX(-1)'}} onClick={buttonBack}/>
        <ContainerSliders>

            <NavUl $openMenu={openMenu} style={{transform: `translateX(${
              sliderPosition}px)`}}>

              {NavTitle.map((slide, index) => (
                <NavLi key={index} $openMenu={openMenu} onClick={() => searchCategory(slide.id)}>{slide.name}</NavLi>
              ))}

              
            </NavUl>
          
        </ContainerSliders>
          <ButtonIcon alt="button slider" src={Slider} onClick={buttonNext}/>
      </Container>
   )
}

export default Sliders