window.addEventListener("load", function(){
    const premium_label = "flag-video-premium";
    const elements_to_remove = document.getElementsByClassName(premium_label);
    while(elements_to_remove.length > 0){
        elements_to_remove[0].parentElement.parentElement.parentElement.parentElement.parentElement.remove();
    }
});