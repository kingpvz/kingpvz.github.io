var shadow = { "x": '0', "y": '0', "blur": '0', "color": "black" }
var data = { "weight": 400, "color": "white", "style":"normal", "decoration":"none" }
var colorState = "text";
var colorslider = { "text": { "r": '255', "g": '255', "b": '255', "a": '100' }, "shadow": { "r": '0', "g": '0', "b": '0', "a": '100' } }
var gCode = '';

function changeto(view) {
    views["layout"]["textedit"].classList.add("hidden");
    views["layout"]["coloredit"].classList.add("hidden");
    views["layout"]["codeview"].classList.add("hidden");
    views["button"]["text"].classList.remove("selected");
    views["button"]["color"].classList.remove("selected");
    views["button"]["code"].classList.remove("selected");
    views["button"][view].classList.add("selected");
    views["editor"]["copycode"].classList.remove("copied");
    views["editor"]["copycode"].innerHTML = "COPY CODE";
    if (view === "text") {
        views["layout"]["textedit"].classList.remove("hidden");
    } else if (view === "color") {
        views["layout"]["coloredit"].classList.remove("hidden");
    } else if (view === "code") {
        views["layout"]["codeview"].classList.remove("hidden");
        refreshCode();
    }
}

function editstyle(type, value=0) {
    if (type === "i") {
        if (views["editor"]["textitalic"].checked) {
            views["other"]["txt"].style.fontStyle = "italic";
            data["style"] = "italic";
        } else {
            views["other"]["txt"].style.fontStyle = "normal";
            data["style"] = "normal";
        }
    }
    if (type === "u") {
        if (views["editor"]["textund"].checked) {
            views["other"]["txt"].style.textDecoration = "underline";
            views["other"]["toDisableShadow"].classList.add("disabled");
            data["decoration"] = "underline";
        } else {
            views["other"]["txt"].style.textDecoration = "none";
            views["other"]["toDisableShadow"].classList.remove("disabled");
            data["decoration"] = "none";
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

function changeColor(x,r,g,b) {
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
    if (r !== undefined) {
        colorslider[colorState]["r"] = r; colorslider[colorState]["g"] = g; colorslider[colorState]["b"] = b; colorslider[colorState]["a"] = 100;
    changeColorTab(colorState); }
    
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

function refreshCode() {

    

    let styles;
    if (data['decoration'] === 'none') {
        if (shadow["y"]!=='0' || shadow["x"]!=='0' || shadow["blur"]!=='0') {
            styles = "font-weight: " + data['weight'] + "; font-style: " + data['style'] + "; color: " + data['color'] + "; text-shadow: " + shadow["x"] / 10 + "vw " + shadow["y"] / 10 + "vh " + shadow["blur"] / 4 + "px " + shadow["color"] + ";";
        } else {
            styles = "font-weight: " + data['weight'] + "; font-style: " + data['style'] + "; color: " + data['color'] + ";";
        }
       } else {
        styles = "font-weight: " + data['weight'] + "; font-style: " + data['style'] + "; font-decoration: " + data['decoration'] + "; color: " + data['color'] + ";";
    }

    gCode = "<span style='" + styles + "'>" + views["editor"]["textinput"].value.split("<").join("&lt;").split("\n").join("<br>").split('"').join("&quot;").split("'").join("&#39;") + '</span>'

       

    views["editor"]["code"].innerHTML = `
    <span style="color: #d68e13">&lt;</span><span style="color: #5b8af7">span</span>
    <span style="color: #71b4f2">style</span><span style="color: #5b8af7">=</span><span style="color: #d68e13">'</span><span style="color: #71f273">`+ styles + `</span><span style="color: #d68e13">'&gt;</span>` + views["editor"]["textinput"].value.split('&').join('&amp;').split("<").join("&amp;lt;").split('"').join("&amp;quot;").split("'").join("&amp;#39;").split("\n").join("<span style='color: #d68e13'>&lt;</span><span style='color: #5b8af7'>br</span><span style='color: #d68e13'>&gt;</span>") + `<span style="color: #d68e13">&lt;</span><span style="color: #ed5417">/</span><span style="color: #5b8af7">span</span><span style="color: #d68e13">&gt;</span>
    `;
}

function copyCode() {
    navigator.clipboard.writeText(gCode);
    views["editor"]["copycode"].classList.add("copied");
    views["editor"]["copycode"].innerHTML = "COPIED!";
}