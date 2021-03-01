import styled from 'styled-components';
import { Colors } from '../../../utils/colors';
import { isMobile } from '../../../utils/types';

export const Root = styled.div`
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: black;
    position: relative;
`;
export const Row = styled.div`
    width: 100%;
    display: flex;
    flex-direction: ${(props: isMobile) => (props.isMobile ? 'row' : 'row')};
    align-items: center;
    justify-content: ${(props: isMobile) =>
        props.isMobile ? 'space-around' : 'center'};
    position: relative;
    margin-top: 30px;
`;

export const LogoContainer = styled.img`
    max-width: 50px;
    width: 300px;
    height: auto;
    position: ${(props: isMobile) => (props.isMobile ? '' : 'absolute')};
    left: ${(props: isMobile) => (props.isMobile ? '' : '0')};
    margin: ${(props: isMobile) => (props.isMobile ? '' : '30px')};
`;

export const Title = styled.h1`
    color: white;
`;

export const Categories = styled.ol`
    list-style: none;
    margin-bottom: 20px;
    width: 100%;
    display: flexbox;
    flex-direction: row;
    flex-wrap: ${(props: isMobile) => (props.isMobile ? '' : 'wrap')};
    justify-content: center;
    align-items: center;
    overflow-x: scroll;

    white-space: nowrap;
    position: absolute;
    bottom: 0;
    ::-webkit-scrollbar-thumb {
        display: none;
    }
    ::-webkit-scrollbar {
        display: none;
    }
`;

export const Item = styled.li`
    height: 50px;
    width: auto;
    padding-left: 50px;
    padding-right: 50px;
    background-color: white;
    border-radius: 10px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 2px;
    display: flex;
    align-items: center;

    position: relative;
    cursor: pointer;

    &::before {
        height: 0px;
        width: 100%;
        position: absolute;
        left: 0;
        content: '';
        -webkit-transition: all 0.2s ease;
        transition: all 0.2s ease;
    }
    &:hover::before {
        height: 100%;
        border-radius: 8px;
        background-color: ${Colors.yellow};
    }
`;

export const Name = styled.span`
    color: black;
    z-index: 1;
`;
