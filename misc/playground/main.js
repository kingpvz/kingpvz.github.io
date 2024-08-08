var mode = 0;
var editable = 0;
var currentScreen = 'home';


window.onload = function () {
if (localStorage.getItem('displayMode') === '1') {
    toggleMode();
}
}


function toggleMode() {
    if (mode === 0) { //set to light

        mode = 1;

        r.style.setProperty('--highlightcolor', '#eae356');
        r.style.setProperty('--verybgcolor', '#eee');
        r.style.setProperty('--shadowtabcolor', '#333');
        r.style.setProperty('--shadowctabcolor', '#efef5f');
        r.style.setProperty('--textcolor', '#222');
        r.style.setProperty('--hoverhighlightcolor', 'yellow');
        r.style.setProperty('--maintabcolor', 'orange');
        r.style.setProperty('--gradient1', 'linear-gradient(orange 0%, #eee 80%, #eee 100%)');
        r.style.setProperty('--gradient2', 'linear-gradient(yellow 0%, #eee 80%, #eee 100%)');
        r.style.setProperty('--syntaxsymbol', 'orangered');
        r.style.setProperty('--syntaxkeyword', 'blue');
        r.style.setProperty('--linkcolor', 'darkblue');
        r.style.setProperty('--linkhovercolor', 'yellow');
        r.style.setProperty('--syntaxbackground', 'white');
        r.style.setProperty('--syntaxproperty', 'deepslateblue');

    }
    else{ //set to dark

        mode = 0;

        r.style.setProperty('--highlightcolor', '#210c00');
        r.style.setProperty('--verybgcolor', '#333');
        r.style.setProperty('--shadowtabcolor', '#ddd');
        r.style.setProperty('--shadowctabcolor', '#111');
        r.style.setProperty('--textcolor', 'white');
        r.style.setProperty('--hoverhighlightcolor', 'orange');
        r.style.setProperty('--maintabcolor', 'orangered');
        r.style.setProperty('--gradient1', 'linear-gradient(orangered 0%, #333 80%, #333 100%)');
        r.style.setProperty('--gradient2', 'linear-gradient(orange 0%, #333 80%, #333 100%)');
        r.style.setProperty('--syntaxsymbol', 'orange');
        r.style.setProperty('--syntaxkeyword', 'cornflowerblue');
        r.style.setProperty('--linkcolor', 'yellow');
        r.style.setProperty('--linkhovercolor', 'blue');
        r.style.setProperty('--syntaxbackground', '#181818');
        r.style.setProperty('--syntaxproperty', 'lightblue');

    }
    localStorage.setItem('displayMode', mode)
}

function setScreen(x) {
    if (x !== currentScreen) {
        layouts["tab"][currentScreen].classList.remove('current');
        layouts["screen"][currentScreen].classList.remove('selected');
        currentScreen = x;
        layouts["tab"][currentScreen].classList.add('current');
        layouts["screen"][currentScreen].classList.add('selected');
    }
}

document.addEventListener("keydown", handleKeydown);

function handleKeydown(e) {
    if (e.key === "q" && (e.ctrlKey || e.metaKey)) {

        document.getElementById("contenteditablealert").classList.toggle("hidden");

        if (editable === 0) {
            editable = 1;
            document.body.contentEditable = true;
        } else {
            editable = 0;
            document.body.contentEditable = false;
        }

    }
}

function Export (){

}