var mode = 0;

function toggleMode() {
    if (mode === 0) { //set to light

        mode = 1;

        r.style.setProperty('--highlightcolor', '#eae356');
        r.style.setProperty('--verybgcolor', '#eee');
        r.style.setProperty('--shadowtabcolor', '#333');
        r.style.setProperty('--shadowctabcolor', '#efef5f');
        r.style.setProperty('--textcolor', '#222');

    }
    else{ //set to dark

        mode = 0;

        r.style.setProperty('--highlightcolor', '#210c00');
        r.style.setProperty('--verybgcolor', '#333');
        r.style.setProperty('--shadowtabcolor', '#ddd');
        r.style.setProperty('--shadowctabcolor', '#111');
        r.style.setProperty('--textcolor', 'white');

    }
}