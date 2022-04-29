window.onload = () => {
    let buttonServe = document.getElementById("serve-button");
    let videoCup = document.getElementById("cup");
    let videoCupSmoke = document.getElementById("cup-smoke");
    let cupStatus = "empty"

    //si apreto el boton de servir
    buttonServe.onclick = () => {
        // fijarse si la taza esta vacia
        if (cupStatus == "empty") {
            //reproducir video de tacita sirviendo
            play(videoCup);

            videoCup.onended = () => {
                //ocultar video
                hide(videoCup);

                //mostrar video de tacita humeando
                show(videoCupSmoke);

                //reproducir video
                play(videoCupSmoke, "loopear");

                //rebobinar video de tacita sirviendo
                reset(videoCup);

                //setear el estado de la tacita a lleno
                cupStatus = "full";

            }
        }

        let buttonTake = document.getElementById("take-button");
        let videoCupTaking = document.getElementById("drinking-cup");
        //aprieto el boton de tomar
        buttonTake.onclick = () => {

            // se fija si la taza tiene liquido
            if (cupStatus == "full") {
                // oculta el video de la taza humeando
                hide(videoCupSmoke);
                // muestra el de la tacita tomando
                show(videoCupTaking);
                // reproduce el de la taza tomando
                play(videoCupTaking);
                //resetea el de la taza humeando
                reset(videoCupSmoke);

                videoCupTaking.onended = () => {
                    show(videoCup);
                    //oculta el video de la taza tomando
                    hide(videoCupTaking);
                    // resetea el video de la taza tomando
                    reset(videoCupTaking);
                    // resetea el estaod de la taza a vacia;
                    cupStatus = "empty";
                }


            }
        }
    }
}

function play(video, loopear) {
    if (loopear == "loopear") {
        video.loop = true;
    }
    video.play();
}

function hide(video) {
    video.classList.add("display-none");
}

function show(video) {
    video.classList.remove("display-none")
}

function reset(video) {
    video.pause();
    video.currentTime = 0;
}