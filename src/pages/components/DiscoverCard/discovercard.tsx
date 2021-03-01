import React from 'react';
import { Root, Img, Info, Title, Description, Shop } from './styled';
import { Colors } from '../../../utils/colors';
import { Product } from '../../../utils/types';
import useDeviceDetect from '../../../hooks/useDevideDetect';

interface Props {
    type: boolean;
    product: Product;
    select: Function;
}
export default function DiscoverCard(props: Props) {
    const { isMobile } = useDeviceDetect();
    let background_card;
    let background_button;
    const product = props.product;
    let dots = '';
    let dots_description = '';
    if (props.type) {
        background_button = Colors.button_blue;
        background_card = Colors.background_blue;
    } else {
        background_button = Colors.button_red;
        background_card = Colors.background_red;
    }
    if (product) {
        if (product.description.length > 24) {
            dots_description = '...';
        }
        if (product.title.length > 24) {
            dots = '...';
        }
    }
    return (
        <Root
            isMobile={isMobile}
            style={{ backgroundColor: `${background_card}` }}
        >
            {product ? (
                <>
                    <Img isMobile={isMobile} src={product.image} />
                    <Info>
                        <Title isMobile={isMobile}>{`${
                            product.title.substring(0, 25) + dots
                        }`}</Title>
                        <Description>
                            "
                            {`${
                                product.description.substring(0, 100) +
                                dots_description
                            }`}
                            "
                        </Description>
                    </Info>
                    <Shop
                        onClick={() => {
                            props.select();
                        }}
                        style={{ backgroundColor: `${background_button}` }}
                    >
                        SHOP
                    </Shop>
                </>
            ) : (
                <></>
            )}
        </Root>
    );
}
