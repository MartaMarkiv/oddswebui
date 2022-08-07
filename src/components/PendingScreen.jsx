import {Spin} from "antd";
import styled from "styled-components";


const PendingScreenStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: ${({ theme }) => theme.colors.bgBody};
  z-index: 1000;

  ${({ position }) => {
      switch (position) {
        case 'absolute':
          return { position: 'absolute' }
        default:
            return { 
                position: 'fixed', 
                marginTop: '96px' 
            }
      }
  }};
`

export const PendingScreen = ({position}) => {

    return <PendingScreenStyled position={position}>
        <Spin />
    </PendingScreenStyled>
}