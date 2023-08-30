import React from 'react'
import { MainBox,ContenDiv,ContenDiv2,MoreBtn } from './main.styled'
const Main = () => {
  return (
    <MainBox>
        <ContenDiv>
            <p>나의 NFT는 얼마나 안전할까?</p>
            <h1>쉽고 편한 NFT 검사 <br></br>
            NFTReally
            </h1>
            <MoreBtn>NFTReally 더 알아보기</MoreBtn>
        </ContenDiv>

        <ContenDiv2>

            <img src="https://nftreally.io/img/bn_nftreally.gif" alt="" />
        </ContenDiv2>
    </MainBox>
  )
}

export default Main