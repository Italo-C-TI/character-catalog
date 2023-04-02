import { Icon } from 'components/Icon';
import styled from 'styled-components';

import theme from 'theme';

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 241px;
    margin-right: 30px;
    position: relative;
    margin-bottom: 30px;
`;

export const Row = styled.div`
    display: flex;
`;

export const Picture = styled.img`
    width: 300px;
    height: 200px;
    margin-bottom: 18px;

    &: hover {    
        -webkit-transform: scale(0.8);
        -ms-transform: scale(0.8);
        transform: scale(1.2);
        transition: ease-in 300ms;
    }
    cursor: pointer;
    border-radius: 50px;
`;

export const LikeIcon = styled(Icon)`
    position: absolute;
    right: 18px;
    z-index: 2;

`;

export const Name = styled.p`
    margin-left: 10px;
    color: ${theme.colors.white};
`;

export const Status = styled.span`

`;