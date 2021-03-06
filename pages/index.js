import React from 'react';
import { Layout, Content } from '../src/components';
import Container from '@material-ui/core/Container';
import MovieProvider from '../src/context/movieContext';

const index = (props) => {
    return (
        <MovieProvider>
            <Container className='main'>
                <Layout >
                    <Content />
                </Layout>
            </Container>
        </MovieProvider>
    )
}

export default index;

