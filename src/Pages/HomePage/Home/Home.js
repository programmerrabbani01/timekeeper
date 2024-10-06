import React from 'react';
import BannerTwo from '../BannerTwo/BannerTwo';
import HomeProducts from '../HomeProducts/HomeProducts';
import ReviewPage from '../ReviewPage/ReviewPage';
import SliderBanner from '../SliderBanner/SliderBanner';
import TeamMember from '../TeamMember/TeamMember';

const Home = () => {
    return (
        <>
            <SliderBanner></SliderBanner>
            <HomeProducts></HomeProducts>
            <ReviewPage></ReviewPage>
            <TeamMember></TeamMember>
            <BannerTwo></BannerTwo>
        </>
    );
};

export default Home;