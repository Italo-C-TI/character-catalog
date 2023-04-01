import styled from 'styled-components';
import theme from 'theme';

export const Row = styled.div`
    display: flex;
`;

export const Title = styled.h1`
    font-weight: ${theme.fontWeights.bold};
    font-size: ${theme.fontSizes.xl};
    line-height: ${theme.lineHeights.m};
    margin-top: ${theme.space.largest};
    color: ${theme.colors.black};
`;