import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    display: flex;

    @media(max-width: 759px) {
    flex-direction: column-reverse;
  }
`

export const ContainerRoutes = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    padding: 0 10px;

`