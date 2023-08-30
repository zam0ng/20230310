import React from 'react'

const DayBox = ({num,Cname,Cname2}) => {

  function tta() {
  }

  
  return (
      <td className={"day " + Cname2} onClick={tta()} key={num}>
        <div className={'ribon ' + Cname}></div>
        <div className='daynum'>{num}</div>
      </td>

  )
}
{/* <td className="day" onClick={() => {tta(index)}} key={index}><div className='ribon'></div>
       {index > 5 ? <div className='daynum'>{index}</div> : <div className='daynum'></div>}
      </td> */}
export default DayBox