import React from 'react'
import Listvalue from './Listvalue'
const List = ({itemm}) => {

    function ta(){

      if(itemm==undefined){
        <></>
      }
      else{      
        return itemm.map((item,index)=><Listvalue data={item}/>);
      }
    }

  return (
    <div className='listContain'>
      <div className='listMain'>
        <ol className='listValue'>

          {/* <li className='todoValue'>{itemm}</li>
                <button className='com'>완료</button> */}

          {ta()}
        </ol>
      </div>
    </div>
  )
}

export default List