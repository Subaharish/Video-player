const video = document.querySelector(".video")
const videoSource = document.querySelector("#video-source")
const gBtn = document.querySelector(".topRightBtn")
const firstVideoBtn = document.querySelector(".videoFirst-btn")
const secondVideoBtn = document.querySelector(".videoSecond-btn")
const linkBtn = document.querySelector(".link-btn")

video.onloadedmetadata= function(){
    
    console.log("metadata loaded")
    let EndTime = this.duration
    console.log(EndTime)
    
    video.ontimeupdate = function() {
        
        let currTime = video.currentTime
        console.log(currTime)
        
        for (let i = 0; i < EndTime; i++) {
            
            if ( currTime > (EndTime/2)){
                linkBtn.style.display ="inline"
                gBtn.style.display = "block"
                console.log("Reached 50%")
            }
            else {
                linkBtn.style.display ="none"
                gBtn.style.display = "none"
                console.log("Not Reached 50%")
            
            }
        }
    }
}


firstVideoBtn.addEventListener('click', () => {
    video.pause()
    videoSource.setAttribute( 'src', './content/video-two.mp4')
    video.load()
    video.play()
})

secondVideoBtn.addEventListener('click', () => {
    video.pause()
    videoSource.setAttribute( 'src', './content/video-three.mp4')
    video.load()
    video.play()
})