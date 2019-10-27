function SearchQueryReducer(state = {searchList:[] },action){
    switch(action.type){
        case 'SEARCH_QUERY':
            return Object.assign({},state,{searchList:action.payload});
        default:
            return state;
    }
}

export default SearchQueryReducer;