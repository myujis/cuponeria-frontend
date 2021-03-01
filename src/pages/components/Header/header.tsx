import React, { useRef, useState } from 'react';
import useDeviceDetect from '../../../hooks/useDevideDetect';
import { Colors } from '../../../utils/colors';
import {
    Root,
    LogoContainer,
    Categories,
    Item,
    Title,
    Name,
    Row,
} from './styled';
import Logo from '../../../assets/logo.png';

interface Props {
    setCategory: Function;
    categories: String[] | undefined;
}
export default function Header(props: Props) {
    const { isMobile } = useDeviceDetect();
    const { categories, setCategory } = props;
    const [selected, setSelected] = useState(0);
    const constraintsRef = useRef(null);
    return (
        <Root ref={constraintsRef}>
            <Row isMobile={isMobile}>
                <LogoContainer isMobile={isMobile} src={Logo}></LogoContainer>
                <Title>CUPONERIA STORE</Title>
            </Row>
            <Categories isMobile={isMobile}>
                {selected === 0 ? (
                    <Item
                        key={0}
                        className={`title ${0 === selected && 'selected'}`}
                        onClick={() => {
                            setSelected(0);
                            props.setCategory('');
                        }}
                        style={{
                            backgroundColor: `${Colors.yellow}`,
                        }}
                    >
                        <Name>HOME</Name>
                    </Item>
                ) : (
                    <Item
                        key={0}
                        className={`title ${0 === selected && 'selected'}`}
                        onClick={() => {
                            setSelected(0);
                            props.setCategory('');
                        }}
                    >
                        <Name>HOME</Name>
                    </Item>
                )}
                {categories &&
                    categories.map((category: String, index: number) => {
                        return (
                            <>
                                {index + 1 === selected ? (
                                    <Item
                                        key={index + 1}
                                        className={`title ${
                                            index + 1 === selected && 'selected'
                                        }`}
                                        onClick={() => {
                                            setSelected(index + 1);
                                            setCategory(category);
                                        }}
                                        style={{
                                            backgroundColor: `${Colors.yellow}`,
                                        }}
                                    >
                                        <Name>{category.toUpperCase()}</Name>
                                    </Item>
                                ) : (
                                    <Item
                                        key={index + 1}
                                        className={`title ${
                                            index + 1 === selected && 'selected'
                                        }`}
                                        onClick={() => {
                                            setSelected(index + 1);
                                            setCategory(category);
                                        }}
                                    >
                                        <Name>{category.toUpperCase()}</Name>
                                    </Item>
                                )}
                            </>
                        );
                    })}
            </Categories>
        </Root>
    );
}
