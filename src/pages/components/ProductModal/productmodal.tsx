import React from 'react';
import { Product } from '../../../utils/types';
import useDeviceDetect from '@/hooks/useDevideDetect';
import {
    Background,
    Root,
    Img,
    Price,
    Title,
    Description,
    Back,
} from './styled';

interface Props {
    product: Product;
    showModal: boolean;
    close: Function;
}

export default function ProductModal(props: Props) {
    const { isMobile } = useDeviceDetect();
    return (
        <div>
            {props.showModal && (
                <>
                    <Background>
                        <Root isMobile={isMobile}>
                            <Title>{props.product.title}</Title>
                            <Price>
                                {props.product.price.toLocaleString('en-IN', {
                                    style: 'currency',
                                    currency: 'BRL',
                                })}
                            </Price>
                            <Img src={props.product.image} />
                            <Description>
                                "{props.product.description}"
                            </Description>
                            <Back
                                onClick={() => {
                                    props.close();
                                }}
                            >
                                BACK
                            </Back>
                        </Root>
                    </Background>
                </>
            )}
        </div>
    );
}
