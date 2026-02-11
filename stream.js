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
    const schd = document.getElementById("schedulestr");
    if (receive.schedule.length != 0) schd.innerHTML = "";
    function getPFTZ(date, timeZone) {
        const fmt = new Intl.DateTimeFormat('en-US', {
            timeZone: timeZone,
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });
        const parts = fmt.formatToParts(date);
        const map = {};
        for (const p of parts) {
            if (p.type !== 'literal') map[p.type] = p.value;
        }
        return map;
    }
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

    for (i of receive.schedule) {
        const body = document.createElement("div");
        body.classList.add("streamelms");
        const head = document.createElement("div");
        const date = document.createElement("h2");
        let td = new Date();
        const dtParts = getPFTZ(Date.parse(i[0]), 'Europe/Berlin');
        const nowParts = getPFTZ(td, tz);

        const dtKey = `${dtParts.year}-${dtParts.month}-${dtParts.day}`;
        const nowKey = `${nowParts.year}-${nowParts.month}-${nowParts.day}`;
        const nowMinutes = parseInt(nowParts.hour, 10) * 60 + parseInt(nowParts.minute, 10);
        if (dtKey === nowKey) {
            if (nowMinutes < 16 * 60) date.innerHTML = "Today";
            else if (nowMinutes < 18 * 60) date.innerHTML = "Live Now";
            else date.innerHTML = "Finished";
        } else if (dtKey > nowKey) {
            const dtMidUtc = Date.UTC(+dtParts.year, +dtParts.month - 1, +dtParts.day);
            const nowMidUtc = Date.UTC(+nowParts.year, +nowParts.month - 1, +nowParts.day);
            const dayDiff = Math.round((dtMidUtc - nowMidUtc) / (24 * 60 * 60 * 1000));

            if (dayDiff === 1) {
                date.innerHTML = "Tomorrow";
            } else if (dayDiff > 1) {
                const userLocale = navigator.language || 'en-US';
                const shortFormatter = new Intl.DateTimeFormat(userLocale, {
                    timeZone: tz,
                    month: '2-digit',
                    day: '2-digit'
                });
                const shortDate = shortFormatter.format(Date.parse(i[0]));
                date.innerHTML = shortDate;
            }
        } else {
            date.innerHTML = "Finished";
        }
        head.appendChild(date);
        const genre = document.createElement("h2");
        genre.innerHTML = i[1];
        head.appendChild(genre);
        body.appendChild(head);
        const name = document.createElement("h1");
        name.innerHTML = i[2];
        body.appendChild(name);
        if (i[3]) {
            const notes = document.createElement("p");
            notes.innerHTML = i[3];
            body.appendChild(notes);
        }
        schd.appendChild(body);
    }
}