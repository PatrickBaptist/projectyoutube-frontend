import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'

interface ContainerProps {
    $openDropDownMenu: boolean
}

interface ClearButtonProps {
    $clearButton: boolean
}

interface Responsive {
    $openSearch: boolean
}

export const Container = styled.header`
    width: 100%;
    height: 55px;
    background-color: #fff;
    padding: 0 16px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 1;
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const ButtonContainer = styled.div<{ $margin?: string, $responsive688?: boolean, $responsive600?: boolean }>`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: ${({ $margin }) => $margin? $margin : 0};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
        background-color: ${({theme}) => theme.colors.bgColor};
    }

    @media(max-width: 759px) {
    display: none;
  }

    ${props =>
    props.$responsive688 &&
    css`
      @media (max-width: 688px) {
        display: none;
      }
    `
    }

  ${props =>
    props.$responsive600 &&
    css`
      @media (max-width: 600px) {
        display: none;
      }
    `
  }
`

export const ButtonIcon = styled.img`
    width: 20px;
`;

export const LogoIcon = styled.img`
  width: 100px;
  cursor: pointer;

  @media (max-width: 414px) {
    width: 80px;
  }
`;

export const LinkLogo = styled(NavLink)`
  width: 100px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchContainer = styled.div<Responsive>`
  display: flex;

  @media(max-width: 414px) {
    position: fixed;
    top: ${({$openSearch}) => $openSearch? '10px' : '-100px'};
    left: 0;
    width: 95%;
    z-index: 6;
    background-color: #fff;
    height: 50px;
  }
`;

export const SearchInputContainer = styled.div`
    width: 450px;
    height: 35px;
    border: 1px  solid #d3d3d3;
    border-radius: 40px 0 0 40px;
    display:  flex;
    align-items: center;
    padding:  0 16px;

    @media(max-width: 834px) {
    width: 260px;
    margin-left: 10px;
    }

    @media(max-width: 688px) {
    width: 230px;
    margin-left: 10px;
    }

    @media(max-width: 600px) {
    width: 200px;
    margin-left: 10px;
    }

    @media(max-width: 414px) {
    width: 100%;
    }
`

export const SearchInput = styled.input`
    width: 100%;
    height: 25px;
    outline:  none;
    border: none;
    font-size: 14px;
`;

export const SearchButton = styled.div`
    border-radius: 0 40px 40px 0;
    height: 35px;
    width: 70px;
    background-color: #f8f8f8;
    border: 1px solid #d3d3d3;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const SearchButtonResponsive = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
  border: 1px solid ${({theme}) => theme.colors.borderColor};
  cursor: pointer;

  @media(max-width: 414px) {
    display: flex;
    border-radius: 50%;
    min-height: 40px;
    min-width: 40px;
    max-height: 40px;
    max-width: 40px;
  }
`;

export const HeaderButton = styled.div`
    width: 200px;
    display: flex;
`;

export const BackButton = styled.button<Responsive>`
  display: ${({$openSearch}) => $openSearch? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  outline: none;
  border: none;
  cursor: pointer;
  transition: .4s;
  margin-left: 10px;

  &:hover{
    background-color: ${({theme}) => theme.colors.bgColor};
  }
`;

export const HeaderButtons = styled.div`
  width: 200px;
  display: flex;

  @media(max-width: 834px) {
    margin-left: 10px;
  }
  
  @media(max-width: 414px) {
    margin-left: 50px;
  }
`;

export const LoginButton = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
  border: 1px solid ${({theme}) => theme.colors.borderColor};
  border-radius: 20px;

  &:hover{
    background-color: aliceblue;
  }
`;

export const ClearButton = styled.button<ClearButtonProps>`
  display: ${({$clearButton}) => $clearButton? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: .4s;
  background-color: ${({theme}) => theme.colors.secondary};

  &:hover{
    background-color: ${({theme}) => theme.colors.borderColor};
  }
`;

export const CloseImg = styled.img`
    width: 15px;
`

export const LoginContainer = styled.div`
    width: 140px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    cursor: pointer;
    border: .5px solid lightgray;
    border-radius: 20px;

    &:hover {
        background-color: aliceblue;
    }
`

export const Span = styled.span`
    font-size: 14px;
    font-weight: 500;
    color: blue;
    opacity: 0.9;
`

export const LoginIcon = styled.img`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 8px;
`

export const DropDownMenu = styled.div<ContainerProps>`
  width: 200px;
  background-color: ${({theme}) => theme.colors.secondary};
  display: ${({$openDropDownMenu}) => $openDropDownMenu ? 'flex' : 'none'};
  flex-direction: column;
  border-radius: 10px;
  padding: 10 0px;
  box-sizing: border-box;
  box-shadow: 0px 5px 10px 5px rgba(0,0,0,0.1);
  position: absolute;
  top: 10px;
  right: 120px;
  z-index: 202020202020202020020;

  @media(max-width: 375px) {
    right: 70px;
  }
`

export const UserInfoContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

export const UserName = styled.span`
  font-size: 1.1rem;
  font-weight: 400;
`;

export const DropDownMenuContent = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  column-gap: 10px;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: ${({theme}) => theme.colors.bgColor};
  }
`;

export const LogOutButton = styled.button`
  border: none;
  outline: none;
  font-size: 0.9rem;
  font-weight: 300;
  border-radius: 10px;
  background-color: inherit;
  cursor: pointer;
`;