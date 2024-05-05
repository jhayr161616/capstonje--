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
    gasButton.style.backgroundColor = "#B52412";
    gasButton.style.color = "white";
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


gasButton.addEventListener('click', () => buttonClickHandler(gasButton, "#B52412", gasInfo));
humssButton.addEventListener('click', () => buttonClickHandler(humssButton, "green", humsInfo));
abmButton.addEventListener('click', () => buttonClickHandler(abmButton, "yellow", abmInfo));
stemButton.addEventListener('click', () => buttonClickHandler(stemButton, "blue", stemInfo));
tvlIctButton.addEventListener('click', () => buttonClickHandler(tvlIctButton, "gray", tvlictInfo));
tvlHeButton.addEventListener('click', () => buttonClickHandler(tvlHeButton, "purple", tvlheInfo));
adButton.addEventListener('click', () => buttonClickHandler(adButton, "pink", adInfo));

const gasButtonAbout = document.querySelector('#GasButtonAbout')
const gasAbout = document.querySelector('#aboutGas');
const gasButtonCourse = document.querySelector("#GasButtonCourse")
const gasCourse = document.querySelector("#coursesGas")

const humsButtonAbout = document.querySelector("#humsButtonAbout")
const humsAbout = document.querySelector('#aboutHums');
const humsCourse = document.querySelector("#coursesHums");
const humsButtonCourse = document.querySelector("#humsButtonCourse")

let First = false;

if(!First){
    gasAbout.style.display = 'flex';
    gasCourse.style.display = 'none';
    gasButtonAbout.style.backgroundColor = "#cb6254";
}

gasButtonAbout.addEventListener('click', () => strandHandler(gasButtonAbout, "#B52412", "#cb6254", gasAbout));
gasButtonCourse.addEventListener('click', () => strandHandler(gasButtonCourse, "#B52412", "#cb6254", gasCourse));
humsButtonAbout.addEventListener('click', () => strandHandler(humsButtonAbout, "green", "lime", humsAbout));
humsButtonCourse.addEventListener('click', () => strandHandler(humsButtonCourse, "green", "lime", humsCourse));
function strandHandler(click, color, whenHover, div){
    const allButtons = [gasButtonAbout, gasButtonCourse, humsButtonAbout, humsButtonCourse];
    allButtons.forEach(button => {
        button.style.backgroundColor = color;
    })
    const allDiv = [gasAbout, gasCourse, humsAbout,humsCourse];
    allDiv.forEach(div => {
        div.style.display = "none";
    })
    div.style.display = "flex";
    click.style.backgroundColor = whenHover;


}
