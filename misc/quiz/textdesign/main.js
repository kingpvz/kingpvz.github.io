var shadow = { "x": '0', "y": '0', "blur": '0', "color": "black" }
var data = { "weight": 400, "color": "white" }
var colorState = "text";
var colorslider = { "text": { "r": '0', "g": '0', "b": '0', "a": '100' }, "shadow": { "r": '0', "g": '0', "b": '0', "a": '100' } }

function changeto(view) {
    views["layout"]["textedit"].classList.add("hidden");
    views["layout"]["coloredit"].classList.add("hidden");
    views["layout"]["codeview"].classList.add("hidden");
    views["button"]["text"].classList.remove("selected");
    views["button"]["color"].classList.remove("selected");
    views["button"]["code"].classList.remove("selected");
    views["button"][view].classList.add("selected");
    if (view === "text") {
        views["layout"]["textedit"].classList.remove("hidden");
    } else if (view === "color") {
        views["layout"]["coloredit"].classList.remove("hidden");
    } else if (view === "code") {
        views["layout"]["codeview"].classList.remove("hidden");
    }
}

function editstyle(type, value=0) {
    if (type === "i") {
        if (views["editor"]["textitalic"].checked) {
            views["other"]["txt"].style.fontStyle = "italic";
        } else {
            views["other"]["txt"].style.fontStyle = "normal";
        }
    }
    if (type === "u") {
        if (views["editor"]["textund"].checked) {
            views["other"]["txt"].style.textDecoration = "underline";
            views["other"]["toDisableShadow"].classList.add("disabled");
        } else {
            views["other"]["txt"].style.textDecoration = "none";
            views["other"]["toDisableShadow"].classList.remove("disabled");
        }
    }
    if (type === "b") {
        views["other"]["txt"].style.fontWeight = value;
        data["weight"] = value;
    }
}

function updateText() {
    if (views["editor"]["textinput"].value) { views["other"]["txt"].innerHTML = views["editor"]["textinput"].value.split("<").join("&lt;").split("\n").join("<br>"); }
    else { views["other"]["txt"].innerHTML = "Text will show here."; }    
}

function slideOffset(axs, value, changesliders=false) {
    shadow[axs] = value;
    views["other"]["txt"].style.textShadow = shadow["x"] / 10 + "vw " + shadow["y"] / 10 + "vh " + shadow["blur"]/4 + "px " + shadow["color"];
    if (changesliders) {
        views["editor"]["shadowslider"+axs].value = value
    }
    if (shadow["x"] === '0' && shadow["y"] === '0' && shadow["blur"] === '0') { views["other"]["toDisableUnderline"].classList.remove("disabled"); views["other"]["txt"].style.textShadow = 'none'; }
    else { views["other"]["toDisableUnderline"].classList.add("disabled") }
}

function changeColor(x) {
    let rs = '';
    var custom = false;
    switch (x) {
        case 'white': rs = 'white'; break;
        case 'black': rs = 'black'; break;
        case 'orange': rs = '#f80'; break;
        case 'red': rs = '#f11'; break;
        case 'green': rs = '#0a0'; break;
        case 'blue': rs = '#22f'; break;
        case 'cyan': rs = '#0dd'; break;
        case 'pink': rs = '#f0c'; break;
        case 'yellow': rs = '#ff0'; break;
        case 'darkgrey': rs = '#444'; break;
        case 'grey': rs = '#888'; break;
        case 'lightgrey': rs = '#bbb'; break;
        case 'magenta': rs = '#f0f'; break;
        case 'violet': rs = '#80f'; break;
        case 'lightpink': rs = '#f69'; break;
        case 'brown': rs = '#a22'; break;
        case 'mint': rs = '#3b8'; break;
        case 'skyblue': rs = '#0af'; break;
        default: rs = x; custom = true;
    }

    if (colorState === 'text') { data['color']=rs; views["other"]["txt"].style.color = rs }
    else { shadow['color'] = rs; views["other"]["txt"].style.textShadow = shadow["x"] / 10 + "vw " + shadow["y"] / 10 + "vh " + shadow["blur"] / 4 + "px " + shadow["color"]; }
}

function changeColorTab(x) {
    colorState = x;
    views["editor"]["colortabshadow"].classList.add("nonactive");
    views["editor"]["colortabtext"].classList.add("nonactive");
    views["editor"]["colortab" + x].classList.remove("nonactive");

    views["editor"]["colorr"].value = colorslider[x]["r"];
    views["editor"]["colorg"].value = colorslider[x]["g"];
    views["editor"]["colorb"].value = colorslider[x]["b"];
    views["editor"]["colora"].value = colorslider[x]["a"];
}