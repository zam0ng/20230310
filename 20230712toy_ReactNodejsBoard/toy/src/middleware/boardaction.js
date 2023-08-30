import axios from "axios";

function Insert(title,content){

  return async(dispatch)=>{
    
    const data = await axios.get("http://localhost:8080/board",{
        withCredentials:true,
        params : {
            title : title,
            content : content,
        }
    })

    console.log(data);
    console.log(data.status);

    if(data.status==200){
        dispatch({type:"INSERTCOM", payload : false})
    }
    // 성공했으면 board 의 isactive 값을 다시 false로 줘서 창 꺼지게 해야함.
  }
}
function bring(){

  return async(dispatch) =>{
      const data = await axios.get("http://127.0.0.1:8080/board/bring",
      
      {withCredentials:true,}
      
      )

      // console.log(data);

      dispatch({type :"BRINGCOM", payload :data})

      
  }
}

function bringDetail(title){
  return async(dispatch) =>{

    console.log("-------------title");
    console.log(title);
    const {data} = await axios.get("http://127.0.0.1:8080/board/bringdetail",{
      withCredentials:true,
      params :{
        title : title,
      }
    })

    console.log(data.data);
    console.log(data.user_id);
    const ta= data.user_id
    dispatch({type:"DETAILBRINGCOM", payload : data, payload2 : ta});
    return ta;
  }
}

function update(title,uptitle,upcontent){

  return async(dispatch)=>{
    console.log(uptitle);
    
    const data = await axios.get("http://127.0.0.1:8080/board/update",{

      params :{
        title : title,
        uptitle : uptitle,
        upcontent : upcontent,}
    })

    // console.log(data);
    if(data.status==200){
      
      dispatch({type:"UPDATECOM", payload :false})
    }
  }
}

function remove(title){

  return async(dispatch)=>{
    
    const data = await axios.get("http://127.0.0.1:8080/board/del",{

      params :{
        title:title,
      }
    })
    console.log(data);
    if(data.status==200){
      dispatch({type:"REMOVE", payload:false})
    }
  }
}


export const Inserts = {Insert,bring,bringDetail,update,remove}