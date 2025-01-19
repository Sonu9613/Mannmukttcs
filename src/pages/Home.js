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
            <Landing
                title="Your trusted guide to mental health & wellness"
                description1="Find the right professional for your mental health needs"
                description2="Start Improving your mental health and well-being today."
                primaryButtonText="Learn More"
                primaryButtonLink="/impact"
                secondaryButtonText="Connect Us"
                secondaryButtonLink="/contactus"
                images={[
                    { src: '/Landing1.png', alt: 'Mental Health Therapy' },
                    { src: '/Landing2.png', alt: 'Mental Health Therapy', marginTop: '3rem' },
                    { src: '/Landing3.png', alt: 'Mental Health Therapy' },
                ]}
            />
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