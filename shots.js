document.addEventListener("DOMContentLoaded", function(){
    const thumbnails = document.querySelectorAll(".thumbnail-image");
    const videoPlayer = document.getElementById("video-player");
    let i = 0;
    thumbnails.forEach(thumbnail=>{
    //    thumbnail.classList.add(`thumbnail-number${i++}`);
       thumbnail.addEventListener("dragstart", function(event){
            var url = thumbnail.getAttribute("data-url");
            event.dataTransfer.setData("text/plain", url);
       })
    });
    videoPlayer.addEventListener("dragover", function(ev){
        ev.preventDefault();
    })
    videoPlayer.addEventListener("drop", function(event){
        event.preventDefault();
        var data = event.dataTransfer.getData("text/plain");
        videoPlayer.src = data;
        videoPlayer.autoplay = "true";
        videoPlayer.parentElement.load();
    })
})