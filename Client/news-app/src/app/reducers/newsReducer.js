const newsReducer = (state={
    articles: ''
},action)=>{
    switch(action.type){
        case 'GET_NEWS' : 
        state = {
            ...state,
            articles : action.payload
        };
        console.log(action.payload + 'payload');
        break;
    }
    return state;
};

export default newsReducer;