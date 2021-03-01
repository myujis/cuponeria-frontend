import React, { useEffect, useState } from 'react';
import Head from 'next/head';

import Header from './components/Header/header';
import Card from './components/Card/card';
import DiscoverCard from './components/DiscoverCard/discovercard';
import axios from 'axios';
import { Product } from '../utils/types';
import LoadingSpinner from './components/Loading/loading';
import ProductModal from './components/ProductModal/productmodal';
import {
    Root,
    DiscoverContentWrapper,
    Title,
    Container,
    ContentWrapper,
    ProductsContainer,
    Loading,
} from '../styles/index';

async function getCategories() {
    try {
        const apiRes = await axios.get(
            `https://fakestoreapi.com/products/categories`,
        );
        if (apiRes.status === 200) {
            return apiRes.data;
        } else {
            throw new Error('Error on getting information from Fake Store API');
        }
    } catch (err) {
        console.log('Error: ', err);
        return false;
    }
}

async function getProducts(category: string) {
    try {
        const apiRes = await axios.get(
            `https://fakestoreapi.com/products/${
                category !== '' ? 'category' : ''
            }/${category}`,
        );
        if (apiRes.status === 200) {
            console.log(apiRes);
            return apiRes.data;
        } else {
            throw new Error('Error on getting information from Fake Store API');
        }
    } catch (err) {
        console.log('Error: ', err);
        return false;
    }
}
function randomInt(min: number, max: number) {
    return min + Math.floor((max - min) * Math.random());
}

function Home() {
    const [category, setCategory] = useState('');
    const [categories, setCategories] = useState<String[]>();
    const [product, setProduct] = useState<Product>();
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [loadingProducts, setLoadingProducts] = useState<boolean>(false);
    const [discProds, setDiscProds] = useState<Product[]>([]);
    const [showModal, setShowModal] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            const categoriesAux = await getCategories();
            if (categoriesAux) {
                setCategories(categoriesAux);
                setLoadingProducts(false);
                setLoading(false);
            } else {
                alert('Falha em receber dados de categorias da APIFake Store');
            }
        })();
    }, []);

    useEffect(() => {
        (async () => {
            setLoadingProducts(true);
            const prods = await getProducts(category);
            if (category === '') {
                const aux: Product[] = [];
                let x = randomInt(0, prods.length - 1);
                aux.push(prods[x]);
                let y = randomInt(0, prods.length - 1);
                if (x === y) {
                    y = randomInt(0, prods.length - 1);
                }
                aux.push(prods[y]);
                setDiscProds(aux);
            }
            setProducts(prods);
            setLoadingProducts(false);
        })();
    }, [category]);

    return (
        <>
            <Head>
                <title>Cuponeria Store</title>
            </Head>
            {!loading ? (
                <Root>
                    <Header
                        categories={categories}
                        setCategory={(category: string) => {
                            setCategory(category);
                        }}
                    ></Header>
                    {loadingProducts ? (
                        <LoadingSpinner />
                    ) : (
                        <>
                            {category === '' ? (
                                <>
                                    <DiscoverContentWrapper>
                                        <Title>DISCOVER</Title>
                                        <Container>
                                            <DiscoverCard
                                                type={false}
                                                product={discProds[0]}
                                                select={() => {
                                                    setProduct(discProds[0]);
                                                    setShowModal(true);
                                                }}
                                            ></DiscoverCard>
                                            <DiscoverCard
                                                type={true}
                                                product={discProds[1]}
                                                select={() => {
                                                    setProduct(discProds[1]);
                                                    setShowModal(true);
                                                }}
                                            ></DiscoverCard>
                                        </Container>
                                    </DiscoverContentWrapper>
                                    <ContentWrapper>
                                        <Title>FEATURED</Title>
                                        <ProductsContainer>
                                            {products &&
                                                products.map(
                                                    (
                                                        product: Product,
                                                        index: number,
                                                    ) => {
                                                        return (
                                                            <Card
                                                                key={index}
                                                                product={
                                                                    product
                                                                }
                                                                select={() => {
                                                                    setProduct(
                                                                        product,
                                                                    );
                                                                    setShowModal(
                                                                        true,
                                                                    );
                                                                }}
                                                            />
                                                        );
                                                    },
                                                )}
                                        </ProductsContainer>
                                    </ContentWrapper>
                                </>
                            ) : (
                                <>
                                    <ContentWrapper>
                                        <Title>{category.toUpperCase()}</Title>
                                        <ProductsContainer>
                                            {products &&
                                                products.map(
                                                    (
                                                        product: Product,
                                                        index: number,
                                                    ) => {
                                                        return (
                                                            <Card
                                                                key={index}
                                                                product={
                                                                    product
                                                                }
                                                                select={() => {
                                                                    setProduct(
                                                                        product,
                                                                    );
                                                                    setShowModal(
                                                                        true,
                                                                    );
                                                                }}
                                                            />
                                                        );
                                                    },
                                                )}
                                        </ProductsContainer>
                                    </ContentWrapper>
                                </>
                            )}
                        </>
                    )}
                    {product && (
                        <ProductModal
                            close={() => {
                                setShowModal(false);
                                setProduct(undefined);
                            }}
                            product={product}
                            showModal={showModal}
                        />
                    )}
                </Root>
            ) : (
                <Loading>
                    <LoadingSpinner />
                </Loading>
            )}
        </>
    );
}

export default Home;
