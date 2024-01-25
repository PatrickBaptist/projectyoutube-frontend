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
    display: flex;
    flex-direction: column;
    margin: 10px;
`