const gasButton = document.querySelector("#GAS");
const humssButton = document.querySelector("#HUMSS");
const abmButton = document.querySelector("#ABM");
const stemButton = document.querySelector("#STEM");
const tvlIctButton = document.querySelector("#TVL-ICT");
const tvlHeButton = document.querySelector("#TVL-HE");
const adButton = document.querySelector("#AD");

const gasInfo = document.querySelector("#gasInfo");
const humsInfo = document.querySelector("#humsInfo");
const abmInfo = document.querySelector("#abmInfo");
const stemInfo = document.querySelector("#stemInfo");
const tvlictInfo = document.querySelector("#tvlictInfo");
const tvlheInfo = document.querySelector("#tvlheInfo");
const adInfo = document.querySelector("#adInfo");
let first = false;

gasInfo.style.display = "block";
humsInfo.style.display = "none";
abmInfo.style.display = "none";
stemInfo.style.display = "none";
tvlictInfo.style.display = "none";
tvlheInfo.style.display = "none";
adInfo.style.display = "none";

let string = "block";
if(!first){
    gasButton.style.backgroundColor = "red";
    first = true;
}
function buttonClickHandler(clickedButton, color, info) {
    

    const allButtons = [gasButton, humssButton, abmButton, stemButton, tvlIctButton, tvlHeButton, adButton];
    allButtons.forEach(button => {
        button.style.color = "";
        button.style.backgroundColor = "";
    
    });
    const allInfo = [gasInfo, humsInfo, abmInfo, stemInfo, tvlictInfo, tvlheInfo, adInfo];
    allInfo.forEach(infos => {
        infos.style.display = "none";
    })
    info.style.display = "block";
    console.log(gasInfo.style.display);   
    clickedButton.style.transition = 0.5 + 's' + " ease";
    clickedButton.style.color = "white";
    clickedButton.style.backgroundColor = color;
}


gasButton.addEventListener('click', () => buttonClickHandler(gasButton, "red", gasInfo));
humssButton.addEventListener('click', () => buttonClickHandler(humssButton, "green", humsInfo));
abmButton.addEventListener('click', () => buttonClickHandler(abmButton, "yellow", abmInfo));
stemButton.addEventListener('click', () => buttonClickHandler(stemButton, "blue", stemInfo));
tvlIctButton.addEventListener('click', () => buttonClickHandler(tvlIctButton, "gray", tvlictInfo));
tvlHeButton.addEventListener('click', () => buttonClickHandler(tvlHeButton, "purple", tvlheInfo));
adButton.addEventListener('click', () => buttonClickHandler(adButton, "pink", adInfo));

