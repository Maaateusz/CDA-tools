window.addEventListener("load", function(){
    const link = document.getElementsByClassName("pb-video-player")[0];
    if(typeof link !== "undefined"){
        console.log("--------------- Video URL --------------------\n" + 
        link.getAttribute('src') + 
        "\n--------------- Video URL --------------------");
    }
});