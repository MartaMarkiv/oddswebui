import styled from "styled-components";

const TimeoutBadgeContainer = styled.div`
    background: #FFD43D;
    font-weight: 400;
    font-size: 12px;
    margin-top: 10px;
    color: #000000;
    display: inline;
    padding: 3px 6px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    
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
            }
    }
}}
`;

export {
    TimeoutBadgeContainer
}