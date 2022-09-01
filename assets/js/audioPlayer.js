let audio1 = new Audio("assets/msc/Thomas-Bangalter-What-To-Do.mp3");
let audio2 = new Audio("assets/msc/Big-Moses-Brighter-Days.mp3");
let audio3 = new Audio("assets/msc/Crystal-Waters-Gypsy-Woman.mp3");

const checkbox1 = document.getElementById('btnControl1')
const checkbox2 = document.getElementById('btnControl2')
const checkbox3 = document.getElementById('btnControl3')


function addImg (parentDiv, divImg, classImg, srcImg) {
    let divParent = document.getElementById(parentDiv);
    let newImg = document.createElement("img");
    newImg.class=classImg;
    newImg.id=classImg;
    newImg.src=srcImg;

    // ajoute le nouvel élément créé et son contenu dans le DOM
    let currentDiv = document.getElementById(divImg);
    currentDiv.appendChild(newImg);
}

function removeImg (idElement) {
    let element = document.getElementById(idElement)
    element.remove();
}



checkbox1.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        addImg('flex-container-music-player', 'flex-right-gif', 'suu', 'assets/img/gypsy-woman-gif/blonde-on-beige.gif')
        audio1.play();
    } else {
        removeImg ('suu');
        audio1.pause();
    }
})
checkbox2.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        audio2.play();

    } else {
        audio2.pause();
    }
})
checkbox3.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        audio3.play();
        if(audio3.ended)
            audio3.play();
    } else {
        audio3.pause();
    }
})


