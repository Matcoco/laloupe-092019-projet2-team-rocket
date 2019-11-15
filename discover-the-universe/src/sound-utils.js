
const currentSound = document.createElement("audio");
let currentURL = "";

export function playSound(url){

    //console.log(url === currentURL);

    // si on joue déjà la musique en ours ça ne sert à rien de changer
    if( currentURL === url )
        return; 

    currentURL = url;
    
    try{
        stopSound();
        currentSound.src = url;
        currentSound.play();
        //console.log("coucou");
    }
    catch( e ){
        //console.log(e);
    }
    
}

export function stopSound(){
    currentSound.pause();
}

