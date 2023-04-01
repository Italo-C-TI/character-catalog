import styled from 'styled-components';
import theme from 'theme';
import { HeaderProps } from './Header.types';

const headerVariant = {
    open: {
        width: '200px'
    },
    default: {
        width: '64px',
    },
};

export const Header = styled.header<HeaderProps>`	
    display: flex;
    flex-direction: column;
    background-color:${theme.colors.grayDark};;
    height: 100vh;
    justify-content: space-between;
    z-index:  ${theme.zIndex.header};
    transition: ease-out 300ms;
    margin-right: ${theme.space.regular};
    ${({ variant }) => headerVariant[variant]};
`;

export const IconsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-left: ${theme.space.regular};
`;

export const RowIconWithText = styled.div`
    display: flex;
    height: 80px;
`;

export const IconText = styled.span`
    margin-left: ${theme.space.larger};
    color: ${theme.colors.white};
    cursor: pointer;
`;