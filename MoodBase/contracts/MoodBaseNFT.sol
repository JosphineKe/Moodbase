// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MoodBaseNFT is ERC721, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;

    struct Mood {
        string mood;
        string color;
    }

    mapping(uint256 => Mood) private _moods;

    event NFTMinted(address indexed owner, uint256 indexed tokenId, string mood, string color);

    constructor() ERC721("MoodBaseNFT", "MBNFT") {
        _tokenIdCounter.increment(); // Start token IDs at 1 for better UX
    }

    function mintNFT(string memory mood, string memory color) public {
        require(bytes(mood).length > 0, "Mood cannot be empty");
        require(bytes(color).length > 0, "Color cannot be empty");

        uint256 tokenId = _tokenIdCounter.current();
        _mint(msg.sender, tokenId);
        _moods[tokenId] = Mood(mood, color);
        _tokenIdCounter.increment();

        emit NFTMinted(msg.sender, tokenId, mood, color);
    }

    function getMood(uint256 tokenId) public view returns (string memory mood, string memory color) {
        require(_exists(tokenId), "Query for nonexistent token");
        Mood memory moodData = _moods[tokenId];
        return (moodData.mood, moodData.color);
    }
}