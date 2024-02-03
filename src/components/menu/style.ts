import styled from 'styled-components'

export const Container = styled.div<{$openmenu: boolean}>`
    width: ${({ $openmenu }) => $openmenu? '340px' : '90px'};
    height: calc(100vh - 55px);
    box-sizing: border-box;
    padding: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-y: auto;
    position: sticky;
    top: 55px;
    z-index: 2020;
    background-color: white;
    transition: 0.3s;

    @media(max-width: 759px) {
        width: 100%;
        height: auto;
        flex-direction: row;
        position: sticky;
        top: none;
        bottom: 0;
  }
`

export const MenuItem1 = styled.div<{$openmenu: boolean}>`
    width: 90%;
    min-height: ${({ $openmenu }) => $openmenu? '45px' : '70px'};
    border-radius: 10px;
    cursor: pointer;
    padding:  2px 15px;
    margin: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: ${({ $openmenu }) => $openmenu? 'row' : 'column'};
    align-items: center;
    justify-content: ${({ $openmenu }) => $openmenu? 'none' : 'center'};
    
    span {
        font-weight: ${({ $openmenu }) => $openmenu? '400' : '350'};
        margin-left: ${({ $openmenu }) => $openmenu? '20px' : 'none'};
        font-size: ${({ $openmenu }) => $openmenu? '14px' : '12px'};
    }

    &:hover {
        background-color: #f2f2f2;
        }
`

export const ButtonIcon = styled.img`
width: 25px;
`

export const Hr = styled.hr<{$openmenu: boolean}>`
display: ${({ $openmenu }) => $openmenu? 'flex' : 'none'};
width: 90%;
margin: 10px 0;
border: 1px solid #d5cfcf;
`
export const MenuItem2 = styled.div<{$openmenu: boolean}>`
    width: 90%;
    min-height: ${({ $openmenu }) => $openmenu? '45px' : '70px'};
    border-radius: 10px;
    cursor: pointer;
    padding:  2px 17px;
    box-sizing: border-box;
    display: flex;
    flex-direction: ${({ $openmenu }) => $openmenu? 'row' : 'column'};
    align-items: center;
    justify-content: ${({ $openmenu }) => $openmenu? 'none' : 'center'};
    
    span {
        font-weight: ${({ $openmenu }) => $openmenu? '400' : '350'};
        margin-left: ${({ $openmenu }) => $openmenu? '20px' : 'none'};
        font-size: ${({ $openmenu }) => $openmenu? '14px' : '12px'};
    }

    &:hover {
        background-color: #f2f2f2;
        }
`;

export const MenuItem3 = styled.div<{$openmenu: boolean}>`
    width: 90%;
    min-height: ${({ $openmenu }) => $openmenu? '45px' : '70px'};
    border-radius: 10px;
    cursor: pointer;
    padding:  2px 17px;
    box-sizing: border-box;
    display: ${({ $openmenu }) => $openmenu? 'flex' : 'none'};
    flex-direction: ${({ $openmenu }) => $openmenu? 'row' : 'column'};
    align-items: center;
    justify-content: ${({ $openmenu }) => $openmenu? 'none' : 'center'};
    
    span {
        font-weight: ${({ $openmenu }) => $openmenu? '400' : '350'};
        margin-left: ${({ $openmenu }) => $openmenu? '20px' : 'none'};
        font-size: ${({ $openmenu }) => $openmenu? '14px' : '12px'};
    }

    &:hover {
        background-color: #f2f2f2;
        }
`;

export const SubTittle = styled.h3<{$openmenu: boolean}>`
display: ${({ $openmenu }) => $openmenu? 'flex' : 'none'};
font-size: 16px;
width: 75%;
height: 30px;
`
export const MenuItem4 = styled.div<{$openmenu: boolean}>`
    width: 90%;
    min-height: ${({ $openmenu }) => $openmenu? '45px' : '70px'};
    border-radius: 10px;
    cursor: pointer;
    padding:  2px 17px;
    box-sizing: border-box;
    display: ${({ $openmenu }) => $openmenu? 'flex' : 'none'};
    flex-direction: ${({ $openmenu }) => $openmenu? 'row' : 'column'};
    align-items: center;
    justify-content: ${({ $openmenu }) => $openmenu? 'none' : 'center'};
    
    span {
        font-weight: ${({ $openmenu }) => $openmenu? '400' : '350'};
        margin-left: ${({ $openmenu }) => $openmenu? '20px' : 'none'};
        font-size: ${({ $openmenu }) => $openmenu? '14px' : '12px'};
    }

    &:hover {
        background-color: #f2f2f2;
        }
`;

export const MenuItem5 = styled.div<{$openmenu: boolean}>`
    width: 90%;
    min-height: ${({ $openmenu }) => $openmenu? '45px' : '70px'};
    border-radius: 10px;
    cursor: pointer;
    padding:  2px 17px;
    box-sizing: border-box;
    display: ${({ $openmenu }) => $openmenu? 'flex' : 'none'};
    flex-direction: ${({ $openmenu }) => $openmenu? 'row' : 'column'};
    align-items: center;
    justify-content: ${({ $openmenu }) => $openmenu? 'none' : 'center'};
    
    span {
        font-weight: ${({ $openmenu }) => $openmenu? '400' : '350'};
        margin-left: ${({ $openmenu }) => $openmenu? '20px' : 'none'};
        font-size: ${({ $openmenu }) => $openmenu? '14px' : '12px'};
    }

    &:hover {
        background-color: #f2f2f2;
        }
`;

export const MenuItem6 = styled.div<{$openmenu: boolean}>`
    width: 90%;
    min-height: ${({ $openmenu }) => $openmenu? '45px' : '70px'};
    border-radius: 10px;
    cursor: pointer;
    padding:  2px 17px;
    box-sizing: border-box;
    display: ${({ $openmenu }) => $openmenu? 'flex' : 'none'};
    flex-direction: ${({ $openmenu }) => $openmenu? 'row' : 'column'};
    align-items: center;
    justify-content: ${({ $openmenu }) => $openmenu? 'none' : 'center'};
    
    span {
        font-weight: ${({ $openmenu }) => $openmenu? '400' : '350'};
        margin-left: ${({ $openmenu }) => $openmenu? '20px' : 'none'};
        font-size: ${({ $openmenu }) => $openmenu? '14px' : '12px'};
    }

    &:hover {
        background-color: #f2f2f2;
        }
`;

export const MenuItem7 = styled.div<{$openmenu: boolean}>`
    width: 90%;
    min-height: ${({ $openmenu }) => $openmenu? '17px' : '70px'};
    border-radius: 10px;
    cursor: pointer;
    box-sizing: border-box;
    display: ${({ $openmenu }) => $openmenu? 'flex' : 'none'};
    flex-direction: ${({ $openmenu }) => $openmenu? 'row' : 'none'};
    align-items: center;
    justify-content: ${({ $openmenu }) => $openmenu? 'none' : 'center'};
    
    span {
        font-weight: ${({ $openmenu }) => $openmenu? '400' : '350'};
        margin-left: ${({ $openmenu }) => $openmenu? '0' : 'none'};
        font-size: ${({ $openmenu }) => $openmenu? '12px' : '12px'};
    }

    &:hover {
        background-color: #f2f2f2;
        }
`;

export const MenuItem8 = styled.div<{$openmenu: boolean}>`
    width: 90%;
    min-height: ${({ $openmenu }) => $openmenu? '17px' : '70px'};
    border-radius: 10px;
    cursor: pointer;
    box-sizing: border-box;
    display: ${({ $openmenu }) => $openmenu? 'flex' : 'none'};
    flex-direction: ${({ $openmenu }) => $openmenu? 'row' : 'column'};
    align-items: center;
    justify-content: ${({ $openmenu }) => $openmenu? 'none' : 'center'};
    
    span {
        font-weight: ${({ $openmenu }) => $openmenu? '400' : '350'};
        margin-left: ${({ $openmenu }) => $openmenu? '0' : 'none'};
        font-size: ${({ $openmenu }) => $openmenu? '12px' : '12px'};
    }

    &:hover {
        background-color: #f2f2f2;
        }
`;

export const Developer = styled.p<{$openmenu: boolean}>`
display: ${({ $openmenu }) => $openmenu? 'flex' : 'none'};
width: 90%;
height: 5px;
font-family: 'Courier New', Courier, monospace;
font-size: 12px;
`