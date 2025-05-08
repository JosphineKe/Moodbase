import React from 'react';
import NFTMintForm from '../components/NFTMintForm';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Welcome to MoodBase</h1>
            <p>Select your mood and mint your NFT!</p>
            <NFTMintForm />
        </div>
    );
};

export default Home;