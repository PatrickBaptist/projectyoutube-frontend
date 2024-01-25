import { 
    ButtonContainer, 
    ButtonIcon, 
    Container,  
    LogoContainer,
    SearchContainer,
    SearchInputContainer,
    SearchInput,
    SearchButton,
    HeaderButtons, 
    LinkLogo,
    LoginContainer,
    LoginButton,
    LogoIcon,
    Span,
    LoginIcon,
    DropDownMenu,
    DropDownMenuContent,
    LogOutButton,
    UserInfoContainer,
    UserName,
    ClearButton,
    CloseImg,
    SearchButtonResponsive,
    BackButton
  } from "./style";
import HamburguerIcon from '../../assets/hamburguer.png'
import Logo from '../../assets/youtube-logo.png'
import SearchIcon from '../../assets/search.png'
import MicIcon from '../../assets/microfone-grava.png'
import VideoIcon from  '../../assets/video.png'
import NotificationIcon from '../../assets/sino.png'
import CloseIcon from '../../assets/closeIcon.png'
import LoginIconPng from '../../assets/LoginIconPng.png'
import BackButtonIcon from '../../assets/voltar.png'
import logout from '../../assets/logout.png'
import { UserContext } from "../../contexts/userContext"
import { UsersContext } from '../../contextApi/usersContext'
import { useContext, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSearchContext } from "../../contexts/searchContext"
import { useCategoryContext } from "../../contexts/searchCategories"

const Header: React.FC = () => {

    const {openMenu, setOpenMenu} = useContext(UserContext)
    const {login, logOut, user, openDropDownMenu, setOpenDropDownMenu} = useContext(UsersContext)
    const [clearButton, setClearButton] = useState(false)
    const [openSearch, setOpenSearch] = useState(false)
    const navigate = useNavigate()

    const inputRef = useRef<HTMLInputElement>(null)

    const Search = () => {
        setOpenSearch(true)
        if(inputRef.current) {
            inputRef.current.focus()
        }
    }

    const handleMenuClick = () => {
        setOpenMenu(!openMenu);
      }

    const handleDropDownMenu = () => {
        setOpenDropDownMenu(!openDropDownMenu)
    }

    const {setSearch} = useSearchContext()

    const [inputValue, setInputValue] = useState('')

    function handleInput(inputValue: string) {
        setInputValue(inputValue)
        if(inputValue === '') {
            setClearButton(false)
        }else (
            setClearButton(true)
        )
    }

    const clearInput = () => {
        setInputValue('')
        setClearButton(false)
        if(inputRef.current) {
            inputRef.current.focus()
        }
    }

    const goOut = () => {
        logOut()
        handleDropDownMenu()
        navigate('/')
    }

    const goYourVideos = () => {
        navigate('/yourvideos')
        handleDropDownMenu()
    }

    const {setCategoryId} = useCategoryContext()

    return(
        <Container>

        <LogoContainer>
  
          <ButtonContainer onClick={handleMenuClick} $margin='0 10px 0 0'>
            <ButtonIcon alt="logo menu" src={HamburguerIcon}/>
          </ButtonContainer>
  
          <LinkLogo to='/' onClick={() => setCategoryId('0')}>
            <LogoIcon alt="logoYoutube" src={Logo} />
          </LinkLogo>
  
        </LogoContainer>
  
        <SearchButtonResponsive onClick={Search}>
          <ButtonIcon alt="ícone lupa" src={SearchIcon}/>
        </SearchButtonResponsive>
  
        <SearchContainer $openSearch={openSearch}>
  
          <BackButton $openSearch={openSearch} onClick={() => setOpenSearch(false)}>
            <img alt="Botão voltar" src={BackButtonIcon} style={{width: '20px'}}/>
          </BackButton>
  
          <SearchInputContainer>
            <SearchInput
              ref={inputRef}
              value={inputValue} 
              placeholder="Pesquisar" 
              onChange={(e) => {
                handleInput(e.target.value)
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setSearch(inputValue)
                  navigate('/search')
                  setOpenSearch(false)
                }
              }}
            />
            <ClearButton 
              $clearButton={clearButton}
              onClick={clearInput}
            >
  
              <CloseImg src={CloseIcon}/>
              
            </ClearButton>
            
          </SearchInputContainer>
  
          <SearchButton 
            onClick={() => {
              if (inputValue.trim() === '') {
                alert('Digite alguma palavra chave antes de tentar pesquisar')
                return;
              }
              setSearch(inputValue)
              navigate('/search')
            }}
          >
            <ButtonIcon alt="ícone lupa" src={SearchIcon}/>
          </SearchButton>
  
          <ButtonContainer $margin='0 0 0 10px' $responsive688>
            <ButtonIcon alt="ícone microfone" src={MicIcon}/>
          </ButtonContainer>
  
  
        </SearchContainer>
  
        {login?
          <HeaderButtons>
            <ButtonContainer onClick={() => navigate('/yourvideos')} >
              <ButtonIcon alt="ícone vídeo" src={VideoIcon} />
            </ButtonContainer>
  
            <ButtonContainer $margin='0 0 0 10px' $responsive600 >
              <ButtonIcon alt="ícone notificação" src={NotificationIcon}/>
            </ButtonContainer>
  
            <ButtonContainer $margin='0 0 0 10px' onClick={handleDropDownMenu} >
              {user && user.nome ? user.nome.charAt(0).toUpperCase() : ''}
            </ButtonContainer>
            
            <DropDownMenu $openDropDownMenu={openDropDownMenu}>
  
              <UserInfoContainer>
                <ButtonContainer 
                $margin='0 0 0 10px' 
                onClick={handleDropDownMenu} 
                style={{backgroundColor: '#f2f2f2'}}
                >
                  {user && user.nome ? user.nome.charAt(0).toUpperCase() : ''}
                </ButtonContainer>
                <UserName>{user && user.nome ? user.nome : ''}</UserName>
              </UserInfoContainer>
  
              <DropDownMenuContent onClick={goOut}>
                <ButtonIcon alt="ícone logout" src={logout} />
                <LogOutButton>
                  Sair
                </LogOutButton>
              </DropDownMenuContent>
  
              <DropDownMenuContent onClick={goYourVideos}>
                <ButtonIcon alt="ícone logout" src={VideoIcon} />
                <LogOutButton>
                  Seus vídeos
                </LogOutButton>
              </DropDownMenuContent>
  
            </DropDownMenu>
  
          </HeaderButtons>
          :
          <LoginContainer onClick={() => navigate('/login')}>
            <LoginButton>
              <LoginIcon alt="Login Icon" src={LoginIconPng} />
              <Span>Fazer login</Span>
            </LoginButton>
          </LoginContainer>
        }
  
  
      </Container>
    )
}

export default Header