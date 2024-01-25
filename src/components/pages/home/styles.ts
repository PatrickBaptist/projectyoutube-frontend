import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: auto;
    max-width: 1600px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
`
export const ContainerCard = styled.div<{$openmenu: boolean}>`
    width: 100%;
    max-width: 1600px;
    display: grid;
    grid-template-columns: ${({ $openmenu }) => $openmenu? 'repeat(3, 1fr)' : 'repeat(4, 1fr)'};
    column-gap: 20px;
    row-gap: 50px;
    margin-top: 90px;
`

export const ContainerShort = styled.div`
    width: 100%;
    max-width: 1600px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
`
    