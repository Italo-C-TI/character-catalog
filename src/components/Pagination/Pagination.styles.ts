import styled from 'styled-components';
import theme from 'theme';


export const Pagination = styled.div`
    display: flex;
    flex-direction: row;
    width: auto;

    margin-top: 20px;
    margin-bottom: 50px;

`;

export const Block = styled.div`
    border: 2px solid ${theme.colors.white};
    display: flex;
    align-items: center;
    padding: 5px;
    cursor: pointer;
    color: ${theme.colors.white};

`;



