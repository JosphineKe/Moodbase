import React, { useState } from 'react';
import { Button, TextField, Typography, Grid } from '@mui/material';
import { ethers } from 'ethers';
import MoodBaseNFT from '../../artifacts/contracts/MoodBaseNFT.sol/MoodBaseNFT.json';

const NFTMintForm = () => {
    const [mood, setMood] = useState('');
    const [color, setColor] = useState('');
    const [walletAddress, setWalletAddress] = useState('');
    const [message, setMessage] = useState('');

    const moods = [
        { label: 'Happy', value: 'happy' },
        { label: 'Sad', value: 'sad' },
        { label: 'Excited', value: 'excited' },
        { label: 'Calm', value: 'calm' },
    ];

    const connectWallet = async () => {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            setWalletAddress(accounts[0]);
        } else {
            alert('Please install MetaMask!');
        }
    };

    const mintNFT = async () => {
        if (!mood || !color) {
            setMessage('Please select a mood and color.');
            return;
        }

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(process.env.REACT_APP_CONTRACT_ADDRESS, MoodBaseNFT.abi, signer);

        try {
            const transaction = await contract.mintNFT(walletAddress, mood, color);
            await transaction.wait();
            setMessage('NFT minted successfully!');
        } catch (error) {
            console.error(error);
            setMessage('Minting failed. Please try again.');
        }
    };

    return (
        <Grid container spacing={2} direction="column" alignItems="center">
            <Grid item>
                <Typography variant="h4">Mint Your Mood NFT</Typography>
            </Grid>
            <Grid item>
                <TextField
                    select
                    label="Select Mood"
                    value={mood}
                    onChange={(e) => setMood(e.target.value)}
                    SelectProps={{
                        native: true,
                    }}
                >
                    <option value="" disabled>Select your mood</option>
                    {moods.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </TextField>
            </Grid>
            <Grid item>
                <TextField
                    label="Color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                />
            </Grid>
            <Grid item>
                <Button variant="contained" onClick={connectWallet}>
                    Connect Wallet
                </Button>
            </Grid>
            <Grid item>
                <Button variant="contained" onClick={mintNFT}>
                    Mint NFT
                </Button>
            </Grid>
            {message && (
                <Grid item>
                    <Typography variant="body1">{message}</Typography>
                </Grid>
            )}
        </Grid>
    );
};

export default NFTMintForm;