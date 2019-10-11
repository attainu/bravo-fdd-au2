function Reducer(state={result:[]},action){
    let list;
    switch(action.type){


case "Action":

return {
    ...state,
    result: action.result
        }
        
        default : return state;
    }
}
export default Reducer;