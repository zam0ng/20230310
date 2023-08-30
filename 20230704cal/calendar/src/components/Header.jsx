import React from 'react'

const Header = () => {
  return (
    <>
    <div className='month'>7</div>
    <Header2/>
    </>
  )
}

const Header2 = () => {
    return (
        <div className='week'>
            <th className='mon'>일</th>
            <th>월</th>
            <th>화</th>
            <th>수</th>
            <th>목</th>
            <th>금</th>
            <th>토</th>
        </div>
    )
  }

export {Header,Header2};