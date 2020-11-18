var auto;

var banden = false;
var nieuweBanden = false;

var carChange = true;

var lost = false;
var win = false;

var gameContainer = document.getElementById("game-container");

var title = document.getElementById("title");
var omschrijving = document.getElementById("description");

var gameButtons = document.getElementById("game-buttons");

var btn1 = document.getElementById("button1");
var btn2 = document.getElementById("button2");
var btn3 = document.getElementById("button3");

var img = document.getElementById("inventoryItem");

function setInlineBlock(){
    btn1.style.display = 'inline-block';
    btn2.style.display = 'inline-block';
    btn3.style.display = 'inline-block';
    btn1.style.backgroundColor = "#1E1E1E";
    btn2.style.backgroundColor = "#1E1E1E";
    btn3.style.backgroundColor = "#1E1E1E";
    btn1.style.backgroundImage = "none";
    btn2.style.backgroundImage = "none";
    btn3.style.backgroundImage = "none";
    btn1.removeAttribute("onclick");
    btn2.removeAttribute("onclick");
    btn3.removeAttribute("onclick");
    btn1.style.width = "auto";
    btn2.style.width = "auto";
    btn3.style.width = "auto";
    btn1.style.height = "auto";
    btn2.style.height = "auto";
    btn3.style.height = "auto";
}

function setCarImage(){
    btn1.style.backgroundImage = "url('images/cars/ftype.png')";
    btn2.style.backgroundImage = "url('images/cars/gtr.png')";
    btn3.style.backgroundImage = "url('images/cars/m2.png')";
    btn1.style.backgroundColor = "transparent";
    btn2.style.backgroundColor = "transparent";
    btn3.style.backgroundColor = "transparent";
    btn1.style.width = "300px";
    btn2.style.width = "300px";
    btn3.style.width = "300px";
    btn1.style.height = "150px";
    btn2.style.height = "150px";
    btn3.style.height = "150px";
    btn1.innerText = "";
    btn2.innerText = "";
    btn3.innerText = "";
    gameButtons.style.maxWidth = "100%";
}

function setStandard(t, o){
    title.innerText = t;
    omschrijving.innerText = o;
}

function bandGevonden(){
    banden = true;
    alert("Je hebt een nieuw setje banden gevonden");
}

function startPagina(){
    btn1.style.display = 'none';
    btn3.style.display = 'none';
    btn2.innerText = "START";
    btn2.style.backgroundColor = "green";
    btn2.setAttribute('onclick','kiesAuto()');
    setStandard("race driver", "Je bent een auto coureur en je moet de aankomende race echt winnen anders verlies je het kampioenschap je moet dingen vinden en laten maken luk het jou om de race te winnen?")
    img.style.display = "none";
    gameContainer.style.backgroundImage = "url('images/backgrounds/startpagina.jpg')";
}

function kiesAuto(){
    carChange = true;
    img.style.display = "none";
    setInlineBlock();
    setCarImage();
    setStandard("Auto kiezen", "Kies hier je auto waar mee je wilt racen!");
    btn1.setAttribute('onclick','workshop("ftype")');
    btn2.setAttribute('onclick','workshop("gtr")');
    btn3.setAttribute('onclick','workshop("m2")');
    gameContainer.style.backgroundImage = "url('images/backgrounds/nurburgring.jpg')";
}
function workshop(car){
    console.log(car);
    if(car != "" && carChange == true){
        auto = car; 
        carChange = false;
    }
    setInlineBlock();
    setStandard("Workshop", "dit is de workshop hier kan je nieuwe dingen monteren!");
    gameContainer.style.backgroundImage = "url('images/backgrounds/workshop.jpeg')";
    img.src = "images/items/banden.png";
    img.style.display = "block";
    img.setAttribute('onclick', 'bandGevonden()');
    btn1.innerText = "Kies auto";
    btn2.innerText = "naar de voorbereiding van de racebaan";
    btn3.style.display = "none";
    btn1.setAttribute('onclick','kiesAuto()');
    btn2.setAttribute('onclick','voorbereiding()');
    
}

function voorbereiding(){
    img.style.display = "none";
    setInlineBlock();
    setStandard("Voorbereiding", "Dit is de voorbereiding als je nu gaat racen krijg je gelijk de uitslag");
    gameContainer.style.backgroundImage = "url('images/backgrounds/voorbereiding_"+ auto +".jpg')";
    if(banden){
        btn2.innerText = 'Nieuwe banden monteren';
        btn2.setAttribute('onclick', "nieuweBanden = true; alert('je nieuwe banden zijn gemonteerd')");
    }else{
        btn2.style.display = "none";
    }
    btn1.innerText = "Terug naar de workshop";
    btn1.setAttribute('onclick', 'workshop()');
    btn3.innerText = "Naar de race!";
    btn3.setAttribute("onclick", "race()");
}

function race(){
    setInlineBlock();
    gameContainer.style.backgroundImage = "url('images/backgrounds/race.jpg')";
    if(nieuweBanden == true && auto == "gtr" || auto == "ftype"){
        setStandard("de race", "gefeliciteerd je hebt gewonnen!");
    }else{
        setStandard("de race", "Helaas je bent gecrashed");
    }
    btn1.style.display = "none";
    btn3.style.display = "none";
    btn2.innerText = "reset";
    btn2.setAttribute("onclick", "location.reload()");
}  

startPagina();
// raceBaan();