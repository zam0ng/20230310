let init ={
    isactive :false,
    isactive2 : false,
    title :"",
    bringtitle : "",
    bringcontent :"",
    bringUserid :"",
    currentUserid : "",
}

function reducer(state=init,action){
    const {type,payload,payload2} = action;
    console.log(type);
    console.log(payload);
    console.log(payload2);
    switch (type) {
        case "INSERTSTART":
            
            return {...state,isactive : payload};
        
        case "INSERTCOM":

            return {...state,isactive : payload};

            case "DETAILSTART":

            return {...state,isactive2 : payload, title :payload2};

            case "DETAILBRINGCOM":

            return {...state,bringtitle : payload.data.title, bringcontent : payload.data.content, bringUserid : payload.data.user_id, currentUserid : payload2};
            case "UPDATECOM":

            return {...state,isactive2 :payload};
            case "REMOVE":

            return {...state,isactive2 :payload};
            
        default:
            return {...state}
    }
}

export default reducer;