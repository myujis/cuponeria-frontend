import { Colors } from '@/utils/colors';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Root = styled(motion.div)`
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    background: #f2f2f2;
    position: relative;
    font-style: 16px;
    font-weight: 700;
    padding: 0;
`;

export const DiscoverContentWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin-top: 25px;
`;

export const ContentWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 35px;
    position: relative;
`;

export const Title = styled.h1`
    position: relative;
    &::before {
        width: 100%;
        height: 3px;
        content: '';
        background-color: ${Colors.red};
        position: absolute;
        bottom: -5px;
    }
`;

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 25px;
    justify-content: center;
`;

export const ProductsContainer = styled(motion.div)`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 25px;
    overflow-x: auto;

    ::-webkit-scrollbar-thumb {
        background: linear-gradient(270deg, #ff0000 29%, #a80000 87%);
    }
    ::-webkit-scrollbar {
        width: 17px;
        height: 17px;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 15px;
    }
`;
export const Loading = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #353535;
    display: flex;
    justify-content: center;
    align-items: center;
`;
