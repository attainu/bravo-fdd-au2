export function songLinks(result) {
    console.log('action: SONG_LINKS');
    return {
        type: 'SONG_LINKS',
        payload : result
    };
}