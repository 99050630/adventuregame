var auto;

var banden = false;
var nieuweBanden = false;
var oudeBandenAan = true;

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

function setBtn(btn, t, e, d){
    if(btn == "1"){
        if(t != ""){
            btn1.innerText = t;
        }
        if(e != ""){
            btn1.setAttribute("onclick", e);
        }
        if(d == "none"){
            btn1.style.display = "none";
        }else{
            btn1.style.display = "inline-block";
        }
    }
    if(btn == "2"){
        if(t != ""){
            btn2.innerText = t;
        }
        if(e != ""){
            btn2.setAttribute("onclick", e);
        }
        if(d == "none"){
            btn2.style.display = "none";
        }else{
            btn2.style.display = "inline-block";
        }
    }
    if(btn == "3"){
        if(t != ""){
            btn3.innerText = t;
        }
        if(e != ""){
            btn3.setAttribute("onclick", e);
        }
        if(d == "none"){
            btn3.style.display = "none";
        }else{
            btn3.style.display = "inline-block";
        }
    }
}

function setStandard(t, o){
    title.innerText = t;
    omschrijving.innerText = o;
}

function bandGevonden(){
    banden = true;
    alert("Je hebt een nieuw setje banden gevonden");
}
function setBackground(name){
    gameContainer.style.backgroundImage = "url('images/backgrounds/" + name + "')";
}

function startPagina(){
    setBackground("startpagina.jpg");
    setStandard("race driver", "Je bent een auto coureur en je moet de aankomende race echt winnen anders verlies je het kampioenschap je moet dingen vinden en laten maken luk het jou om de race te winnen?")
    setBtn("1", "", "", "none");
    setBtn("3", "", "", "none");
    setBtn("2", "START", "kiesauto()");
    btn2.style.backgroundColor = "green";
    img.style.display = "none";
}

function kiesAuto(){
    setInlineBlock();
    setCarImage();
    setBtn("1", "", "workshop('ftype')");
    setBtn("2", "", "workshop('gtr')");
    setBtn("3", "", "workshop('m2')");
    setStandard("Auto kiezen", "Kies hier je auto waar mee je wilt racen!");
    setBackground("nurburgring.jpg");
    carChange = true;
    img.style.display = "none";
}
function workshop(car){
    console.log(car);
    if(car != "" && carChange == true){
        auto = car; 
        carChange = false;
    }
    setInlineBlock();
    setStandard("Workshop", "dit is de workshop hier kan je nieuwe dingen monteren!");
    setBtn("1", "Kies auto", "kiesAuto()");
    setBtn("2", "Naar de voorbereiding", "voorbereiding()");
    setBtn("3", "", "", "none");
    setBackground("workshop.jpeg");
    img.src = "images/items/banden.png";
    img.style.display = "block";
    img.setAttribute('onclick', 'bandGevonden()');
}

function voorbereiding(){
    setInlineBlock();
    setStandard("Voorbereiding", "Dit is de voorbereiding als je nu gaat racen krijg je gelijk de uitslag");
    setBackground("voorbereiding_"+ auto +".jpg");
    if(banden){
        setBtn("2", "Nieuwe banden monteren", "nieuweBanden = true; alert('je nieuwe banden zijn gemonteerd')");
    }else{
        setBtn("2", "", "", "none");
    }
    setBtn("1", "Terug naar de workshop", "workshop()");
    setBtn("3", "Naar de race!", "race()");
    img.style.display = "none";
}

function race(){
    setInlineBlock();
    setBackground("race.jpg");
    setBtn("1", "Naar de pitstraat", "pitstraat()");
    setBtn("2", "Doorrijden", "baan()");
    setBtn("3", "", "", "none");
}  

function pitstraat(){
    banden = true;
    setInlineBlock();
    setStandard("Pitstraat", "Dit is de pitstraat hier kan je verschillenden dingen doen bijvoorbeeld nieuwe banden monteren");
    setBackground("pitstraat.jpg");
    if(banden == true && nieuweBanden == false){
        setBtn("1", "Nieuwe banden monteren", "nieuweBanden = true; alert('je hebt een nieuw setje banden gemonteerd')");
        nieuweBanden = true;
    }else if(nieuweBanden == true){
        setBtn("1", "Oude banden monteren", "oudeBandenAan = true; alert('je hebt je oude banden gemonteerd')");
    }
    setBtn("2", "Doorrijden", "baan()")
    setBtn("3", "Opgeven", "opgeven()");
}

function opgeven(){
    setInlineBlock();
    setStandard("Je hebt verloren", "Omdat je hebt opgegeven heb je automatisch verloren");
    setBackground("pitbox.jpg");
}

function baan(){
    setInlineBlock();
    setStandard("Welke kant van de baan?", "Je hebt een keuze te maken pak je de linkse baan of de rechtse baan?");
    setBtn("1", "Links", "bocht('links')");
    setBtn("2", "Rechts", "bocht('rechts')");
    setBtn("3", "", "", "none");
}

function bocht(richting){
    setInlineBlock();
    if(richting == "links"){
        setStandard("Verloren", "Je bent over een spijker heen gereden en gecrashed");
        setBackground("grindbak.jpg");
    }else{
        gewonnen();
    }
}

function gewonnen(){
    setInlineBlock();
    if(nieuweBanden == true && auto == "gtr" || auto == "ftype"){
        setStandard("GEWONNEN", "Gefeliciteerd je hebt gewonnen");
        setBackground("win.jpg");
        setBtn("1", "Opnieuw spelen", "location.reload()");
    }else{
        setStandard("Verloren", "Helaas je bent geen eerste geworden en je hebt dus verloren");
        setBackground("lost.jpg");
        setBtn("1", "Opnieuw spelen", "location.reload()");
    }
    setBtn("2", "", "", "none");
    setBtn("3", "", "", "none");
}

startPagina();
race();