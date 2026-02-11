window.onload = function () {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "https://kingpvz.github.io/global_resources/stream.txt", false);
    xmlhttp.send();
    if (xmlhttp.status == 200) {
        var receive = xmlhttp.responseText;
    }
    receive = JSON.parse(receive);
    document.getElementById("seasonnumber").innerHTML = receive.season;
    const upcomings = document.getElementById("upcomingstr");
    if (receive.coming.length != 0) upcomings.innerHTML = "";
    for (i of receive.coming) {
        const body = document.createElement("div");
        body.classList.add("streamelmc");
        const name = document.createElement("h1");
        name.innerHTML = i[0];
        const genre = document.createElement("h2");
        genre.innerHTML = "/ "+i[1];
        body.appendChild(name);
        body.appendChild(genre);
        if (i[2]) body.style.backgroundColor = "#762102";
        upcomings.appendChild(body);
    }
}