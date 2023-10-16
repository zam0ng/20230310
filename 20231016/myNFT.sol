// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import "./node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MyNFT is ERC721 {
    constructor(string memory _name, string memory _symbol) ERC721(_name,_symbol) {


    }
    mapping(uint256 tokenId => string tokenHash) _tokenURI;

    function minting(uint256 _tokenId, string memory tokenURI) public {
    // function minting(uint256 _tokenId) public {
        _tokenURI[_tokenId] = tokenURI;
        _mint(msg.sender, _tokenId);
    }

    function tokenURI(uint256 _tokenId) public view override returns (string memory){
        // return "QmTN9Qi9vEKpUq9C2khoSj2H1DJNYTJyYBypWERyxm2tmb";
        return _tokenURI[_tokenId];
    }

    function _baseURI() internal view override returns(string memory){
        return "https://amethyst-defeated-badger-139.mypinata.cloud/ipfs/";
    }
   
}