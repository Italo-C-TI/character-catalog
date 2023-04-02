import styled from 'styled-components';

import theme from 'theme';

export const BackgroundModal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(145, 154, 150, 0.3);
    backdrop-filter: blur(4px);

    overflow-y: scroll;

    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    color: #3f3f55;
    z-index: ${theme.zIndex.modal};
`;

export const Modal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    background: #ffffff;
    width: 500px;
    height: 600px;
    border-radius: 10px;
    z-index: ${theme.zIndex.modal};
`;


export const Picture = styled.img`
    width: 150px;
    height: 150px;
    margin-bottom: 18px;
    margin-top: 18px;
    border-radius: ${theme.borderRadius.circle};
`;


export const CloseModal = styled.img`
    cursor: pointer;
    position: absolute;
    top: 28px;
    right: 30px;
    background: ${theme.colors.grayDark};
    border-radius: 10px;
    padding: 5px;
`;

export const Strong = styled.b`
    font-weight: bold;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    color: #131E30;
    margin-bottom: 8px;
`;

export const Light = styled.p`
    font-size: 18px;
    line-height: 23px;
    font-weight: 500;
    text-align: center;
    margin:10px;
`;


export const Emphasis = styled.span`
    font-weight: bold;
    color: #131E30;
    border-radius: 10px;
    border: 2px solid #131E30;
    padding: 4px;
    cursor: default;

    background-image: linear-gradient(to bottom, rebeccapurple, steelblue, turquoise);
  
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  
    color: black;
    
`;

export const Text = styled.p`
    display: flex;
    flex-direction: column;
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    text-align: center;
    color: #000000;
    margin-top: 12px;
    margin-bottom: 12px;
    border : 1px solid #000000;
    border-radius: 10px;
    width: 300px;
`;

export const Liked = styled.img`
    cursor: pointer;
    background: ${theme.colors.grayDark};
    border-radius: 10px;
    padding: 5px;
    margin-top: 24px;
    width: ${theme.iconSize.xl};
    height: ${theme.iconSize.xl};
`;


export const Badge = styled.span`
    background-color: green;
    color: white;
    padding: 4px 8px;
    text-align: center;
    border-radius: 5px;
`;