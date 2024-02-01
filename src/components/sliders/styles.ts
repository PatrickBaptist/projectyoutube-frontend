import styled from 'styled-components'

export const Container = styled.div<{$openMenu: boolean}>`
    width: ${({ $openMenu }) => $openMenu?'70vw' : '84vw'};
    max-width: 1600px;
    background-color: white;
    position: fixed;
    display: flex;
    align-items: center;
`

export const ContainerSliders = styled.div`
    height: 70%;
    display: flex;
    justify-content: flex-start;
    column-gap: 20px;
    flex-wrap: nowrap;
    align-items: center;
    overflow: hidden;
`

export const NavUl = styled.nav<{$openMenu: boolean}>`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    column-gap: 20px;
    height: 70%;
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