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

const spanVariant = {
    open: {
        display: 'flex'
    },
    default: {
        display: 'none',
    },
};

export const Header = styled.header<HeaderProps>`	
    position: fixed;
    display: flex;
    flex-direction: column;
    background-color:${theme.colors.grayDark};;
    height: 100vh;
    justify-content: space-between;
    z-index:  ${theme.zIndex.header};
    transition: ease-out 300ms;
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

export const IconText = styled.span<HeaderProps>`
    margin-left: ${theme.space.larger};
    color: ${theme.colors.white};
    cursor: pointer;

    @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
      }
    animation: fadeIn 1.5s;
    
    ${({ variant }) => spanVariant[variant]};
`;