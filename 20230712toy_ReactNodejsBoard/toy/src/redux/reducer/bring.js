let init ={
    data : [],
}

function reducer(state=init,action){
    const {type,payload} = action;

    switch (type) {
       
        case "BRINGCOM":

            return {...state,data : payload};

    
        default:
            return {...state}
    }
}

export default reducer;