import styled from 'styled-components';

export const Root = styled.div`
    width: 252px;
    height: 366px;
    background: #ffffff;
    border-radius: 10px;
    position: relative;
    -webkit-box-shadow: 0px 0px 10px -2px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0px 0px 10px -2px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 0px 10px -2px rgba(0, 0, 0, 0.1);
    margin: 15px;

    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    &:hover {
        transform: translateY(-5px);
        -webkit-box-shadow: 0px 9px 20px -2px rgba(0, 0, 0, 0.2);
        -moz-box-shadow: 0px 9px 20px -2px rgba(0, 0, 0, 0.2);
        box-shadow: 0px 9px 20px -2px rgba(0, 0, 0, 0.2);
    }
`;
export const Title = styled.div`
    border-radius: 0px 0px 10px 10px;
    background: #000000;
    width: 100%;
    height: 50px;
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Text = styled.span`
    color: white;
    max-width: 100%;
    max-lines: 1;
`;

export const Container = styled.div`
    width: 100%;
    height: calc(100% - 50px);
    border-radius: 10px 10px 0px 0px;
    position: relative;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const Price = styled.div`
    width: 85px;
    height: 35px;
    background: #ff0000;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.110058);
    border-radius: 10px;
    position: absolute;
    right: 0;
    bottom: 0;
    margin: 10px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    z-index: 1;
`;

export const Img = styled.img`
    margin: 25px;
    width: 200px;
    max-width: 200px;
    max-height: 250px;
    height: auto;
`;
