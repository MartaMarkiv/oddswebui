import styled from "styled-components";

const TimeoutBadgeContainer = styled.div`
  background: #FFD43D;
  font-weight: 400;
  font-size: 14px;
  margin-top: 10px;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  
  .text {
    margin-left: 6px;
    display: inline-block;
    margin-top: 2px;
  }
  
  ${({ size }) => {
    switch (size) {
        case 'small':
            return {
                width: '20px',
                height: '19px',
                borderRadius: '100%'
            }
        default:
            return {
                height: '24px',
                borderRadius: '4px',
                width: '79px'
            }
    }
}}
`;

export {
    TimeoutBadgeContainer
}