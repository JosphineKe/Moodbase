# MoodBase

MoodBase is a web application that allows users to mint NFTs representing their selected moods. Built on the Base Goerli testnet, this project combines a Solidity smart contract with a React frontend using Material UI for a seamless user experience.

## Features

- Mint NFTs that represent different moods.
- User-friendly interface for mood selection and NFT minting.
- Integration with Ethereum wallets for transaction management.

## Project Structure

```
MoodBase
├── contracts
│   └── MoodBaseNFT.sol          # Solidity smart contract for minting NFTs
├── frontend
│   ├── public
│   │   └── index.html           # Main HTML file for the frontend application
│   ├── src
│   │   ├── components
│   │   │   └── NFTMintForm.tsx  # React component for minting NFTs
│   │   ├── pages
│   │   │   └── Home.tsx         # Home page component
│   │   ├── App.tsx              # Main application component
│   │   ├── index.tsx            # Entry point of the React application
│   │   └── theme.ts             # Material UI theme configuration
│   ├── package.json              # Frontend npm configuration
│   └── tsconfig.json            # Frontend TypeScript configuration
├── hardhat.config.ts            # Hardhat configuration for deploying the smart contract
├── package.json                  # Root project npm configuration
├── tsconfig.json                 # Root TypeScript configuration
└── README.md                     # Project documentation
```

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- Hardhat installed globally.

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd MoodBase
   ```

2. Install dependencies for the frontend:
   ```
   cd frontend
   npm install
   ```

3. Install dependencies for the smart contract:
   ```
   npm install
   ```

### Running the Application

1. Start the frontend application:
   ```
   cd frontend
   npm start
   ```

2. Deploy the smart contract to the Base Goerli testnet:
   ```
   npx hardhat run scripts/deploy.ts --network goerli
   ```

### Usage

- Connect your Ethereum wallet to the application.
- Select a mood from the available options.
- Click the mint button to create your NFT.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
