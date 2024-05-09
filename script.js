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

const gasButtonAbout = document.querySelector('#GasButtonAbout')
const gasAbout = document.querySelector('#aboutGas');
const gasButtonCourse = document.querySelector("#GasButtonCourse")
const gasCourse = document.querySelector("#coursesGas")

const humsButtonAbout = document.querySelector("#humsButtonAbout")
const humsAbout = document.querySelector('#aboutHums');
const humsCourse = document.querySelector("#coursesHums");
const humsButtonCourse = document.querySelector("#humsButtonCourse")

const abmButtonAbout = document.querySelector("#abmButtonAbout")
const abmAbout = document.querySelector('#aboutAbm');
const abmCourse = document.querySelector("#coursesAbm");
const abmButtonCourse = document.querySelector("#abmButtonCourse")

const stemButtonAbout = document.querySelector("#StemButtonAbout")
const stemAbout = document.querySelector('#aboutStem');
const stemCourse = document.querySelector("#coursesStem");
const stemButtonCourse = document.querySelector("#StemButtonCourse")

const ictButtonAbout = document.querySelector("#TvlictButtonAbout")
const ictAbout = document.querySelector('#aboutTvlict');
const ictCourse = document.querySelector("#coursesTvlict");
const ictButtonCourse = document.querySelector("#TvlictButtonCourse")

const heButtonAbout = document.querySelector("#TvlheButtonAbout")
const heAbout = document.querySelector('#aboutTvlhe');
const heCourse = document.querySelector("#coursesTvlhe");
const heButtonCourse = document.querySelector("#TvlheButtonCourse")

const adButtonAbout = document.querySelector("#AdButtonAbout")
const adAbout = document.querySelector('#aboutAd');
const adCourse = document.querySelector("#coursesAd");
const adButtonCourse = document.querySelector("#AdButtonCourse")
let first = false;

gasInfo.style.display = "block";
humsInfo.style.display = "none";
abmInfo.style.display = "none";
stemInfo.style.display = "none";
tvlictInfo.style.display = "none";
tvlheInfo.style.display = "none";
adInfo.style.display = "none";

if (!first) {
    gasButton.style.backgroundColor = "#B52412";
    gasButton.style.color = "white";
    first = true;
}
function buttonClickHandler(clickedButton, color, info, about) {

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
    clickedButton.style.transition = 0.5 + 's' + " ease";
    clickedButton.style.color = "white";
    clickedButton.style.backgroundColor = color;
    about.click()

}


gasButton.addEventListener('click', () => buttonClickHandler(gasButton, "#B52412", gasInfo, gasButtonAbout));
humssButton.addEventListener('click', () => buttonClickHandler(humssButton, "#18882e", humsInfo, humsButtonAbout));
abmButton.addEventListener('click', () => buttonClickHandler(abmButton, "#ffdc5f", abmInfo, abmButtonAbout));
stemButton.addEventListener('click', () => buttonClickHandler(stemButton, "blue", stemInfo, stemButtonAbout));
tvlIctButton.addEventListener('click', () => buttonClickHandler(tvlIctButton, "#4c5c74", tvlictInfo, ictButtonAbout));
tvlHeButton.addEventListener('click', () => buttonClickHandler(tvlHeButton, "#9a3ccc", tvlheInfo, heButtonAbout));
adButton.addEventListener('click', () => buttonClickHandler(adButton, "#fb52d9", adInfo, adButtonAbout));


let First = false;

if (!First) {
    gasAbout.style.display = 'flex';
    gasCourse.style.display = 'none';
    humsCourse.style.display = "none";
    abmCourse.style.display = "none";
    stemCourse.style.display = "none"
    ictCourse.style.display = "none";
    heCourse.style.display = "none";
    adCourse.style.display = "none";
    gasButtonAbout.style.backgroundColor = "#cb6254";
}

gasButtonAbout.addEventListener('click', () => strandHandler(gasButtonAbout, "#cb6254", gasAbout));
gasButtonCourse.addEventListener('click', () => strandHandler(gasButtonCourse, "#cb6254", gasCourse));

humsButtonAbout.addEventListener('click', () => strandHandler(humsButtonAbout, "#1da538", humsAbout));
humsButtonCourse.addEventListener('click', () => strandHandler(humsButtonCourse, "#1da538", humsCourse));

abmButtonAbout.addEventListener('click', () => strandHandler(abmButtonAbout, "#ffd175", abmAbout));
abmButtonCourse.addEventListener('click', () => strandHandler(abmButtonCourse, "#ffd175", abmCourse));

stemButtonAbout.addEventListener('click', () => strandHandler(stemButtonAbout, "#2e2eff", stemAbout));
stemButtonCourse.addEventListener('click', () => strandHandler(stemButtonCourse, "#2e2eff", stemCourse));

ictButtonAbout.addEventListener('click', () => strandHandler(ictButtonAbout, "#728299", ictAbout));
ictButtonCourse.addEventListener('click', () => strandHandler(ictButtonCourse, "#728299", ictCourse));

heButtonAbout.addEventListener('click', () => strandHandler(heButtonAbout, "#9a3ccc", heAbout));
heButtonCourse.addEventListener('click', () => strandHandler(heButtonCourse, "#9a3ccc", heCourse));

adButtonAbout.addEventListener('click', () => strandHandler(adButtonAbout, "#fb52d9", adAbout));
adButtonCourse.addEventListener('click', () => strandHandler(adButtonCourse, "#fb52d9", adCourse));
function strandHandler(click, whenHover, div) {
    const allButtons = [gasButtonAbout, gasButtonCourse, humsButtonAbout, humsButtonCourse,
        abmButtonAbout, abmButtonCourse, stemButtonAbout, stemButtonCourse,
        ictButtonAbout, ictButtonCourse, heButtonAbout, heButtonCourse,
        adButtonAbout, adButtonCourse];
    allButtons.forEach(button => {
        button.style.backgroundColor = "#ffffff00";
    })
    const allDiv = [gasAbout, gasCourse, humsAbout, humsCourse, abmAbout, abmCourse, stemAbout, stemCourse, ictAbout, ictCourse, heAbout, heCourse, adAbout, adCourse];
    allDiv.forEach(div => {
        div.style.display = "none";
    })
    div.style.display = "flex";
    click.style.backgroundColor = whenHover;


}


//org

const miso = document.querySelector(".MISOButton");
const image = document.querySelector("#image");
const displays = document.querySelector("#imageDisplay")
const displayerblur = document.querySelector("#backgroundDilim")
const back = document.querySelector("#back")



function orgChartButtons(department) {
    switch (department) {
        case 'miso':
            image.src = "/org/miso.png";
            displays.style.display = "block";
            displayerblur.style.display = "block";
            break;
        case 'SHSD':
            image.src = "/org/SHSD.png";
            displays.style.display = "block";
            displayerblur.style.display = "block";
            break;
        case 'HR':
            image.src = "/org/HR.png";
            displays.style.display = "block";
            displayerblur.style.display = "block";
            break;
        case 'FAD':
            image.src = "/org/FAD.png";
            displays.style.display = "block";
            displayerblur.style.display = "block";
            break;
        case 'WIP':
            image.src = "/org/WIP.png";
            displays.style.display = "block";
            displayerblur.style.display = "block";
            break;
        case 'OSR':
            image.src = "/org/OSR.png";
            displays.style.display = "block";
            displayerblur.style.display = "block";
            break;
        case 'LRC':
            image.src = "/org/LRC.png";
            displays.style.display = "block";
            displayerblur.style.display = "block";
            break;
        case 'HS':
            image.src = "/org/HS.png";
            displays.style.display = "block";
            displayerblur.style.display = "block";
            break;
        case 'OSAS':
            image.src = "/org/OSAS.png";
            displays.style.display = "block";
            displayerblur.style.display = "block";
            break;
        case 'GCDB':
            image.src = "/org/GCDB.png";
            displays.style.display = "block";
            displayerblur.style.display = "block";
            break;
    }
    
}



function backs() {
    displayerblur.style.display = "none";
}

const qe = document.querySelectorAll('.panel-title');
const classs = document.querySelectorAll('.faq-question');

const inputs = document.querySelector('input');

function test(){
    
    
    for(let i = 0; i < classs.length; i++){

        let casese = inputs.value.toLowerCase();
        console.log(casese);

        let qes = qe[i].innerHTML.toLowerCase();
        if(qes.includes(casese)){
            
    
            classs[i].hidden = false;
        } else{
            classs[i].hidden = true;
        }
    }
    inputs.value = "";
}