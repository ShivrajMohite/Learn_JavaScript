let myYoutubeVideoOne ={
    title: 'Loops in Javascript',
    videoLength: 15,
    videoCreator: 'ABC',
    videoDescription: 'this is a video description and a long one'

}

let myYoutubeVideoTwo ={
    title: 'Functions in Javascript',
    videoLength: 10,
    videoCreator: 'ABC',
    videoDescription: 'this is a video description and a long one'

}


// console.log(myYoutubeVideo);

// console.log(`Hey new video on ${myYoutubeVideo.title} by ${myYoutubeVideo.videoCreator}`);

// myYoutubeVideo.title ='ForEach loop in JS'
// console.log(`Hey new video on ${myYoutubeVideo.title} by ${myYoutubeVideo.videoCreator}`);
// console.log(myYoutubeVideo);

// Assignment

let changeVideoLength = function(myObject){
    return {
        formatOne: `Time of this video is: ${myObject.videoLength + 4}`,
        formatTwo: `Time of this video is: ${myObject.videoLength + 4}`
    }
    
}

let adOne = changeVideoLength(myYoutubeVideoTwo)
console.log(adOne.formatOne);
