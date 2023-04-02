import styled from 'styled-components';
import theme from 'theme';


export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Row = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

`;

export const Title = styled.h1`
    font-weight: ${theme.fontWeights.bold};
    font-size: ${theme.fontSizes.xl};
    line-height: ${theme.lineHeights.m};
    margin-top: ${theme.space.largest};
    margin-bottom: ${theme.space.largest};
    color: ${theme.colors.white};
`;