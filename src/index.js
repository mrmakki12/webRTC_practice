// get video
const video = document.querySelector('video')

// play video
const playMedia = async () => {
    try {
        const constraints = {'video': true, 'audio': true}
        const stream = await navigator.mediaDevices.getUserMedia(constraints)
        console.log(video)
        video.srcObject = stream
    } catch(err) {
        console.log(err)
    }
}

playMedia()