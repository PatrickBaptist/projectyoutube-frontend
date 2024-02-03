import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: auto;
    background-color: white;
    position: fixed;
    display: flex;
    align-items: center;
`

export const ContainerSliders = styled.div<{$openMenu: boolean}>`
    width: 88%;
    display: flex;
    justify-content: flex-start;
    column-gap: 20px;
    flex-wrap: nowrap;
    align-items: center;
    overflow: hidden;

    @media(max-width: 1250px) {
        width: 86%;
  }

  @media(max-width: 1075px) {
        width: 85%;
  }

  @media(max-width: 1000px) {
        width: 82%;
  }

  @media(max-width: 1000px) {
        width: 80%;
  }

  @media(max-width: 759px) {
        width: 100%;
  }
`

export const NavUl = styled.nav<{$openMenu: boolean}>`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    column-gap: 20px;
    height: auto;
    transition: 0.5s ease-in-out;
`

export const NavLi = styled.button<{$openMenu: boolean}>`
    min-height: 90%;
    max-height: 90%;
    display: inline-block;
    white-space: nowrap;
    align-items: center;
    box-sizing: border-box;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    border-radius: 5px;
    background-color: #f2f2f2;
    border: none;
    padding: 8px;

    &:hover{
        background-color: black;
        color: white;
    }

    &:focus {
        outline: none;
        background-color: black;
        color: white;
    }
`

export const ButtonIcon = styled.img`
    display: block;
    width: 25px;
    height: 25px;
    padding: 5px;
    cursor: pointer;
    border-radius: 50%;
    background-color: white;

     &:hover{
        background-color: #f2f2f2;
     }
`