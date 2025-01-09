import React from 'react'
import Landing from '../components/Landing'
import HowItWorks from '../components/HowItWorks'
import PhotoSlider from '../components/PhotoSilder'
import PinkSection from '../components/PinkSection'
import TeamSection from '../components/TeamSection'
import SessionsSection from '../components/SessionsSection'
import ReviewsSection from '../components/ReviewsSection'
import ContactUs from '../components/ContactUs'

const Home = () => {
    return (
        <div>
            <Landing />
            <PhotoSlider />
            <PinkSection />
            <TeamSection />
            <SessionsSection />
            <ReviewsSection />
            <HowItWorks />
            <ContactUs />
        </div>
    )
}

export default Home