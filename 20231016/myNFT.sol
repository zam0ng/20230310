// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import "./node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MyNFT is ERC721 {
    constructor(string memory _name, string memory _symbol) ERC721(_name,_symbol) {


    }
    mapping(uint256 tokenId => string tokenHash) _tokenURIs;
    uint256 totalSupply = 0;

    // function minting(uint256 _tokenId, string memory tokenURI) public {
    //     _tokenURI[_tokenId] = tokenURI;
    //     _mint(msg.sender, _tokenId);
    // }

    function minting(string memory tokenURI) public {
        _tokenURIs[totalSupply] = tokenURI;
        _mint(msg.sender, totalSupply);
        totalSupply += 1;
    }

    function tokenURI(uint256 _tokenId) public view override returns (string memory){
        // return "QmTN9Qi9vEKpUq9C2khoSj2H1DJNYTJyYBypWERyxm2tmb";
        return _tokenURIs[_tokenId];
    }

    function _baseURI() internal view override returns(string memory){
        return "https://amethyst-defeated-badger-139.mypinata.cloud/ipfs/";
    }

    // NFT에 관련된 메서드는 여기에
    // NFT의 판매 권한을 줄 함수를 여기에 작성을 해서

    function setAppAll(address owner, address operator, bool approved) public {
        _setApprovalForAll(owner, operator, approved);
    }
   
}