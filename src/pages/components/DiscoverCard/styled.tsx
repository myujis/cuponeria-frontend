import styled from 'styled-components';
import { Colors } from '../../../utils/colors';
import { isMobile } from '../../../utils/types';

export const Root: any = styled.div`
    width: ${(props: isMobile) => (props.isMobile ? '300px' : '660px')};
    height: ${(props: isMobile) => (props.isMobile ? '350px' : '184px')};
    border-radius: 10px;
    margin: 10px;
    position: relative;
    -webkit-box-shadow: 0px 0px 10px -2px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0px 0px 10px -2px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 0px 10px -2px rgba(0, 0, 0, 0.1);
    display: ${(props: isMobile) => (props.isMobile ? 'flex' : 'flexbox')};
    flex-direction: ${(props: isMobile) => (props.isMobile ? 'column' : '')};
    justify-content: space-between;
    align-items: ${(props: isMobile) => (props.isMobile ? 'center' : 'start')};
    min-width: 350px;
    padding: 12px;
`;
export const Img = styled.img`
    height: 160px;
    max-height: 160px;
    width: auto;
    max-width: 180px;
    margin-left: ${(props: isMobile) => (props.isMobile ? '' : '40px')};
    mix-blend-mode: multiply;
`;

export const Info = styled.div`
    height: 100%;
    margin-top: 0;
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 50px;
    padding: 10px;

    @media only screen and (max-width: 550px) {
        & {
            width: 150px;
        }
    }
`;

export const Title = styled.h1`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 20px;
    color: #000000;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: ${(props: isMobile) => (props.isMobile ? 'center' : '')};
`;
export const Description = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #a8a4a4;
    @media only screen and (max-width: 1477px) {
        & {
            display: none;
        }
    }
`;

export const Shop = styled.div`
    background-color: ${Colors.button_blue};
    width: 120px;
    height: 50px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.110058);
    cursor: pointer;
`;
