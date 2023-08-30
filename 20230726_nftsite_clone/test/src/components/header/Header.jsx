import React from 'react'
import { HeaderBox,SiteIcon,SiteName,SearchBox,Mypage,Btn,BtnDiv,SiteIcon_Name_Div } from './header.styled'
const Header = () => {
  return (
    <HeaderBox>
      <SiteIcon_Name_Div>
        <SiteIcon></SiteIcon>
        <SiteName>NFTReally</SiteName>
      </SiteIcon_Name_Div>
      
      <SearchBox><div></div><input placeholder='컬렉션 이름, 마켓의 URL 주소'></input></SearchBox>
      <Mypage>마이페이지</Mypage>
      <BtnDiv>
        <Btn>🌙</Btn>
        <Btn>👤</Btn>
      </BtnDiv>
      

    </HeaderBox>
  )
}

export default Header