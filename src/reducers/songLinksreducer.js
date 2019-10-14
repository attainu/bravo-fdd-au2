function songLinks(state = {media:[] },action){
    console.log("searchreducer invoked");
    switch(action.type){
        case 'SONG_LINKS':
            return Object.assign({},state,{media:action.payload});
        default:
            return state;
    }
}

export default songLinks;