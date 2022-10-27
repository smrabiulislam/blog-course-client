import React from 'react';
import Banner from '../Banner/Banner';
import Cta from '../Cta/Cta';
import Pcard from '../Pcard/Pcard';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Pcard></Pcard>
            <Cta></Cta>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;