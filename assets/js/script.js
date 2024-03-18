const qone = {
    question: "Avec l'oxygene ,quel est l'élément le plus abondant dans l'atmosphère terrestre ? :",
    reponse: ["Azote", " Argon", "Dioxyde de carbone", "hydrogene"],
    goodReponse: "Azote"
}

const qtwo = {
    question: "Quel est le plus grand océan du monde ? :",
    reponse: ["Océan Atlantique", "Océan Indien", "Océan Arctique", "Océan Pacifique"],
    goodReponse: "Océan Pacifique"
}

const qthree = {
    question: " Quelle est la capitale de l'Espagne ? :",
    reponse: ["Barcelone", " Séville", "Madrid", "Valence"],
    goodReponse: "Madrid"
}

const qfour = {
    question: "Qui a écrit Romeo et Juliette ? :",
    reponse: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Emily Brontë"],
    goodReponse: "William Shakespeare"
}
const qfive ={
    question : "Quel est le plus haut sommet du monde",
    reponse : [ "Mont Kilimandjaro" , "Mont McKinley" , "Mont Fuji", "Mont Everest"],
    goodReponse : "Mont Everest"
}
const qsix = {
    question : "Quel est le plus grand désert du monde ?" ,
    reponse : [ "Le désert de Gobi", "Le désert du Kalahari" ,"Le Sahara","Le désert d'Atacama"],
    goodReponse: "Le Sahara"
}
const qseven = {
    question : "Quel est le plus grand pays en superficie ?",
    reponse : [ "Canada" ,"Russie" , "Chine" , "États-Unis"],
    goodReponse : "Russie"
}



const questionArray = [qone, qtwo, qthree, qfour , qfive , qsix , qseven]
let shufflearray =[]
let isValidate = false;
let score = 0
let index = 0

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randarray(){
    let i = 0
    while (i<questionArray.length) {
        let qrandom = questionArray[random(0,questionArray.length -1)]
        if (shufflearray.indexOf(qrandom) == -1) {
            shufflearray.push(qrandom)
            i++
        }
    }
}

function quizz() {
    if (index < questionArray.length) {
        document.querySelector('#next').classList.remove('hidden')
        document.querySelector('#replay').classList.add('hidden')
       
        document.querySelector('#button').classList.add('hidden')

        document.querySelector("#result").innerHTML = ""
        const qcontainer = document.querySelector("#question")
        const reponse = document.querySelectorAll(".reponse")
        qcontainer.innerHTML = shufflearray[index].question

        for (let i = 0; i < shufflearray[index].reponse.length; i++) {
            reponse[i].innerHTML =shufflearray[index].reponse[i]

        }
    } else {
        document.querySelector("#result").innerHTML = `Vous avez fini le quizz ! votre score final est de ${score} sur ${questionArray.length} `;
        document.querySelector('#next').classList.add('hidden')
        document.querySelector('#replay').classList.remove('hidden')

    }

}

randarray()
quizz()


function valide(element) {
    if (isValidate == false) {
        isValidate = true
        if (element.innerHTML == shufflearray[index].goodReponse) {
            score++
            document.querySelector("#result").innerHTML = `Bonne réponse ! votre score est de ${score}  `;

        } else {
            document.querySelector("#result").innerHTML = `Mauvaise réponse ! votre score est de ${score}  `;
        }

        document.querySelector("#button").classList.remove('hidden')

    }
}

function suivant() {
    isValidate = false
    index++
    quizz()
}


function replay() {
    isValidate = false
    index = 0
    score = 0
    shufflearray =[]
    randarray()
    quizz()
    
}


