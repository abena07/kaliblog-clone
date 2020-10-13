import React from 'react';
import Header from '../../widgets/Header';
import LandingContent from "../../widgets/LandingContent";


const Home = () => {
    return (
        <>
            <Header nav={true} active={1} />
            <main>
                <LandingContent />
            </main>
        </>
    )
}


export default Home;