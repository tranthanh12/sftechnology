import React from 'react'
import Banner from '../Home/Banner'
import Introduce from '../Home/Introduce'
import OurService from '../Home/OurService'
import LazyLoad from 'react-lazy-load';

const index = () => {
    return (
        <div className='body'>
            <main>
                <LazyLoad height={'100%'} once>
                    <Banner></Banner>
                </LazyLoad>
                <LazyLoad height={'100%'} once>
                    <Introduce></Introduce>
                </LazyLoad>
                <LazyLoad height={'100%'} once>
                    <OurService></OurService>
                </LazyLoad>
            </main>
        </div>
    )
}

export default index