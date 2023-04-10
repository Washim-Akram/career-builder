import React from 'react';
import Banner from '../Banner/Banner';
import CategoryContainer from '../CategoryContainer/CategoryContainer';
import FeaturedContainer from '../FeaturedContainer/FeaturedContainer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryContainer></CategoryContainer>
            <FeaturedContainer></FeaturedContainer>
        </div>
    );
};

export default Home;