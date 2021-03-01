import styled from 'styled-components';
import { isMobile } from '../../../utils/types';
import { Colors } from '../../../utils/colors';

export const Background: any = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgba(255, 255, 255, 0);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
`;

export const Root: any = styled.div`
    width: ${(props: isMobile) =>
        props.isMobile ? 'calc(100vw - 50px)' : '1000px'};
    height: ${(props: isMobile) =>
        props.isMobile ? 'calc(100vh - 100px)' : '600px'};
    overflow-y: ${(props: isMobile) => (props.isMobile ? 'scroll' : 'none')};
    overflow-x: ${(props: isMobile) => (props.isMobile ? 'hidden' : 'none')};
    background-color: white;
    border-radius: 15px;
    z-index: 6;
    -webkit-box-shadow: 0px 0px 10px -2px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0px 0px 10px -2px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 0px 10px -2px rgba(0, 0, 0, 0.1);
    display: grid;
    grid-template-areas: ${(props: isMobile) =>
        props.isMobile ? "'c''b''a''d'" : "'a b''c d'"};
    gap: 15px;
    padding: ${(props: isMobile) =>
        props.isMobile ? '100px 5px 0px 5px' : '50px'};
    position: relative;
`;

export const Img = styled.img`
    max-width: 50%;
    min-width: 300px;
    max-height: 300px;
    grid-area: c;
    align-self: center;
    justify-self: center;
`;

export const Price = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${Colors.red};
    width: 250px;
    min-width: 250px;
    height: 105px;
    border-radius: 10px;
    font-size: 24px;
    z-index: 6;
    color: white;
    grid-area: b;
    align-self: center;
    justify-self: center;
`;

export const Title = styled.h1`
    max-width: 85%;
    text-align: center;
    grid-area: a;
    align-self: center;
    justify-self: center;
`;

export const Description = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 17px;
    color: #a8a4a4;
    max-width: 60%;
    text-align: center;
    grid-area: d;
    align-self: center;
    justify-self: center;
`;

export const Back = styled.div`
    background: rgba(255, 0, 0, 0.3);
    min-width: 100px;
    width: 100px;
    height: 50px;
    position: absolute;
    top: 20px;
    left: 20px;
    border-radius: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`;
