export function searchQuery(result) {
    console.log('action: LOGIN_USER');
    return {
        type: 'SEARCH_QUERY',
        payload : result
    };
}