window.onload = setTimeout(() => {
    const d = document.querySelector("#main > div > div.Root__top-container > div.Root__now-playing-bar > footer > div > div.now-playing-bar__center > div > div.playback-bar > div:nth-child(3)"); // current song's duration
    const mute = document.querySelector("#main > div > div.Root__top-container > div.Root__now-playing-bar > footer > div > div.now-playing-bar__right > div > div.volume-bar > button"); //mute button
    setInterval(() => {
        dur = d.innerText.split(":");
        dur = Math.floor(dur[0])*60 + Math.floor(dur[1]);
        if(dur>35){
            if(mute.title == "Unmute"){
                mute.click();
            }
        }
        else if (dur == 0 ){
            //No song 
        }
        else {
            if(mute.title == "Mute"){
                mute.click();  
            }
        }
    }, 3000);
   
}, 5000); 
/*
    console.log('changed');
     var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            console.log("changed");
        });
    });
    
    var config = { attributes: true, childList: true, characterData: true }
    observer.observe(d, config);
    observer.disconnect();

}); }*/
