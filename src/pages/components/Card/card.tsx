import { Root, Title, Text, Container, Price, Img } from './styled';
import { Product } from '../../../utils/types';

interface Props {
    product: Product;
    select: Function;
}

export default function Card(props: Props) {
    const { product, select } = props;
    let dots = '';
    if (product.title.length > 25) {
        dots = '...';
    }
    return (
        <Root>
            <Container
                onClick={() => {
                    select();
                }}
            >
                <Img src={product.image} />
                <Price>
                    {product.price.toLocaleString('en-IN', {
                        style: 'currency',
                        currency: 'BRL',
                    })}
                </Price>
            </Container>
            <Title>
                <Text>{`${product.title.substring(0, 25)}${dots}`}</Text>
            </Title>
        </Root>
    );
}
