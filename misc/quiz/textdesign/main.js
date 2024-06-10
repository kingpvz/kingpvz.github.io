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
        } else {
            views["other"]["txt"].style.textDecoration = "none";
        }
    }
    if (type === "b") {
        views["other"]["txt"].style.fontWeight = value;
    }
}

function updateText() {
    if (views["editor"]["textinput"].value) { views["other"]["txt"].innerHTML = views["editor"]["textinput"].value.split("\n").join("<br>").split("<").join("&lt;"); }
    else { views["other"]["txt"].innerHTML = "Text will show here."; }    
}