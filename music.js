var filt = {
    genre: {
        hardbass: true,
        swing: true,
        hh: true,
        house: true,
        chip: true,
        dubstep: true,
        complextro: true,
        erock: true,
        alt: true,
        fbass: true,
        trap: true,
        hardstyle: true,
        exp: true,
        other: true
    },
    album: {
        dj: true,
        uh: true,
        wyrtb: true,
        aj: true,
        dda: true,
        gb: true,
        ritt: true,
        gb2: true,
        none: true
    },
    more: {
        ororiginal: true,
        orremix: true,
        orbootleg: true,
        lylyric: true,
        lyinst: true,
        explicit: true,
        fr2019: true,
        fr2020: true,
        fr2021: true,
        fr2022: true,
        fr2023: true,
        fr2024: true,
        fr2025: true,
        arslavmax: true,
        ardogload: true,
        arsozislav: true,
        armatejkudlac: true,
        arleslovak: true
    }
}



function filters(x, close = false) {
    var y = document.getElementById(x);
    if (close) { y.style.display = "none"; }
    else { y.style.display = "flex"; }
}

function filter(x,y) {
    filt[x][y] = !filt[x][y];
    document.getElementById(y).checked = filt[x][y];
    search(document.getElementById("searchBar").value);
}

function updateLinks(from) {
    var yt = document.getElementById("musicLinkYouTube");
    var sp = document.getElementById("musicLinkSpotify");
    var sc = document.getElementById("musicLinkSoundCloud");
    var it = document.getElementById("musicLinkiTunes");
    var de = document.getElementById("musicLinkDeezer");
    var os = document.getElementById("musicLinkOdysee");
    var bl = document.getElementById("musicLinkBili");
    var ng = document.getElementById("musicLinkNG");
    if (from.youtube) {
        yt.style.display = 'block';
        yt.href = from.youtube;
    } else {
        yt.style.display = 'none';
    }
    if (from.spotify) {
        sp.style.display = 'block';
        sp.href = from.spotify;
    } else {
        sp.style.display = 'none';
    }
    if (from.soundcloud) {
        sc.style.display = 'block';
        sc.href = from.soundcloud;
    } else {
        sc.style.display = 'none';
    }
    if (from.itunes) {
        it.style.display = 'block';
        it.href = from.itunes;
    } else {
        it.style.display = 'none';
    }
    if (from.deezer) {
        de.style.display = 'block';
        de.href = from.deezer;
    } else {
        de.style.display = 'none';
    }
    if (from.odysee) {
        os.style.display = 'block';
        os.href = from.odysee;
    } else {
        os.style.display = 'none';
    }
    if (from.bili) {
        bl.style.display = 'block';
        bl.href = from.bili;
    } else {
        bl.style.display = 'none';
    }
    if (from.ng) {
        ng.style.display = 'block';
        ng.href = from.ng;
    } else {
        ng.style.display = 'none';
    }
}

function launchSong(id) {
    window.open("musicsong.html?id=" + id, "_blank");
}

function openSong(id, pc=true) {
    var x = database[id];
    if(pc)document.getElementById("musicView").style.display = "flex";
    document.getElementById("musicViewName").innerHTML = x.title;
    document.getElementById("musicViewCover").src = x.cover;
    document.getElementById("musicViewArtists").innerHTML = getArtists(x.collab);
    var lyrsx = "";
    if (x.explicit) lyrsx += '<span class="explicitContent" title="Explicit Content">E</span> &nbsp; ';
    lyrsx += (x.lyrics === "lyric" ? x.language+" Lyrics" : "Instrumental");
    lyrsx += " &nbsp; | &nbsp; ";
    switch (x.originality) {
        case "original": lyrsx += "Original Song"; break;
        case "remix": lyrsx += "Remix, Original by "+x.originalby; break;
        case "meme": lyrsx += "Meme Rewind"; break;
        case "bootleg": lyrsx += "Bootleg, Original by "+x.originalby; break;
    }
    document.getElementById("musicViewLabel").innerHTML = lyrsx;
    document.getElementById("musicViewYear").innerHTML = x.year;

    document.getElementById("musicViewGenres").innerHTML = "";
    document.getElementById("musicViewGenres").appendChild(getGenres(x.genre, 0));

    updateLinks(x.link.base);

    var ex = document.getElementById("extra");
    ex.innerHTML = "";
    if (x.album!=="none") {
        for (var i of x.album.split(" ")) {
            i = albums[i];
            var alb = document.createElement("div");
            alb.classList.add("musicViewAlbum");
            var cover = document.createElement("img");
            cover.classList.add("musicViewAlbumCover");
            cover.src = i.cover;
            alb.appendChild(cover);
            var data = document.createElement("div");
            data.classList.add("musicViewAlbumData");
            var name = document.createElement("h1");
            name.classList.add("musicViewAlbumName");
            name.innerHTML = i.name+" ("+i.type+")";
            data.appendChild(name);
            var desc = document.createElement("p");
            desc.classList.add("musicViewAlbumDesc");
            desc.innerHTML = i.desc;
            data.appendChild(desc);
            var links = document.createElement("div");
            links.classList.add("linkContainer");
            if (i.youtube) {
                var yt = document.createElement("a");
                yt.href = i.youtube;
                yt.target = "_blank";
                let img = document.createElement("img");
                img.src = "https://cdn.iconscout.com/icon/free/png-512/youtube-1868966-1583130.png";
                img.classList.add("linkImage");
                img.title = "YouTube";
                yt.appendChild(img);
                links.appendChild(yt);
            }
            if (i.spotify) {
                var sp = document.createElement("a");
                sp.href = i.spotify;
                sp.target = "_blank";
                let img = document.createElement("img");
                img.src = "https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png";
                img.classList.add("linkImage");
                img.title = "Spotify";
                sp.appendChild(img);
                links.appendChild(sp);
            }
            if (i.itunes) {
                var it = document.createElement("a");
                it.href = i.itunes;
                it.target = "_blank";
                let img = document.createElement("img");
                img.src = "https://logodownload.org/wp-content/uploads/2018/09/itunes-logo-11.png";
                img.classList.add("linkImage");
                img.title = "iTunes";
                it.appendChild(img);
                links.appendChild(it);
            }
            if (i.deezer) {
                var de = document.createElement("a");
                de.href = i.deezer;
                de.target = "_blank";
                let img = document.createElement("img");
                img.src = "https://e-cdn-files.dzcdn.net/cache/images/common/favicon/favicon-240x240.bb3a6a29ad16a77f10cb.png";
                img.classList.add("linkImage");
                img.title = "Deezer";
                de.appendChild(img);
                links.appendChild(de);
            }
            if (i.soundcloud) {
                var sc = document.createElement("a");
                sc.href = i.soundcloud;
                sc.target = "_blank";
                let img = document.createElement("img");
                img.src = "https://cdn.icon-icons.com/icons2/99/PNG/512/soundcloud_socialnetwork_17421.png";
                img.classList.add("linkImage");
                img.title = "SoundCloud";
                sc.appendChild(img);
                links.appendChild(sc);
            }
            data.appendChild(links);
            alb.appendChild(data);
            ex.appendChild(alb);
        }
    }

    if (x.link.alt && x.link.alt.length > 0) {
        ex.appendChild(document.createElement("br"));
        for (var i of x.link.alt) {
            var alt = document.createElement("div");
            alt.classList.add("musicViewAlt");
            var name = document.createElement("h1");
            name.classList.add("musicViewAltName");
            name.innerHTML = i.name;
            alt.appendChild(name);
            var links = document.createElement("div");
            links.classList.add("linkContainer");
            if (i.youtube) {
                var yt = document.createElement("a");
                yt.href = i.youtube;
                yt.target = "_blank";
                let img = document.createElement("img");
                img.src = "https://cdn.iconscout.com/icon/free/png-512/youtube-1868966-1583130.png";
                img.classList.add("linkImage");
                img.title = "YouTube";
                yt.appendChild(img);
                links.appendChild(yt);
            }
            if (i.spotify) {
                var sp = document.createElement("a");
                sp.href = i.spotify;
                sp.target = "_blank";
                let img = document.createElement("img");
                img.src = "https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png";
                img.classList.add("linkImage");
                img.title = "Spotify";
                sp.appendChild(img);
                links.appendChild(sp);
            }
            if (i.itunes) {
                var it = document.createElement("a");
                it.href = i.itunes;
                it.target = "_blank";
                let img = document.createElement("img");
                img.src = "https://logodownload.org/wp-content/uploads/2018/09/itunes-logo-11.png";
                img.classList.add("linkImage");
                img.title = "iTunes";
                it.appendChild(img);
                links.appendChild(it);
            }
            if (i.deezer) {
                var de = document.createElement("a");
                de.href = i.deezer;
                de.target = "_blank";
                let img = document.createElement("img");
                img.src = "https://e-cdn-files.dzcdn.net/cache/images/common/favicon/favicon-240x240.bb3a6a29ad16a77f10cb.png";
                img.classList.add("linkImage");
                img.title = "Deezer";
                de.appendChild(img);
                links.appendChild(de);
            }
            if (i.odysee) {
                var os = document.createElement("a");
                os.href = i.odysee;
                os.target = "_blank";
                let img = document.createElement("img");
                img.src = "https://media.zeemly.com/zeemly/product/odysee.png";
                img.classList.add("linkImage");
                img.title = "Odysee";
                os.appendChild(img);
                links.appendChild(os);
            }
            alt.appendChild(links);
            ex.appendChild(alt);
        }
    }
}

function closeSong() {
    document.getElementById("musicView").style.display = "none";
}

function getArtists(x) {
    if (!x) x = "";
    var list = x.split(" ");
    var newList = ["Kingpvz"];
    for (var i of list) {
        switch (i) {
            case "slavmax": newList.push("SLAVMAX"); break;
            case "dogload": newList.push("Dogload"); break;
            case "sozislav": newList.push("SoziSlav"); break;
            case "matejkudlac": newList.push("Matej Kudl&aacute;&ccaron;"); break;
            case "leslovak": newList.push("LeSlovak"); break;
        }
    }
    newList = newList.join(", ");
    return newList;
}

function getAlbums(x) {
    var list = x.split(" ");
    take = 0;
    for (var i of list) {
        list[take] = albums[i].name;
        take++;
    }
    var album = list.join("; ");

    return album;
}

function getGenres(x, y) {
    var z = false;
    var g = document.createElement("div");
    g.classList.add(y === 0 ? "musicViewGenres" : "musicEntryGenres");
    if (y === 0) {
        y = document.createElement("div");
        z = true;
    }
    for (var i of x.split(" ")) {
        var j = document.createElement("p");
        j.classList.add("musicEntryGenre");
        var x;
        switch (i) {
            case "swing": x = "Electro Swing"; y.classList.add(i); break;
            case "hh": x = "Happy Hardcore"; y.classList.add(i); break;
            case "chip": x = "Chiptune"; y.classList.add(i); break;
            case "complextro": x = "Complextro"; y.classList.add(i); break;
            case "erock": x = "E-Rock"; y.classList.add(i); break;
            case "alt": x = "Alternative"; y.classList.add(i); break;
            case "fbass": x = "Future Bass"; y.classList.add(i); break;
            case "hardstyle": x = "Hardstyle"; y.classList.add(i); break;
            case "exp": x = "Experimental"; y.classList.add(i); break;
            case "trap": x = "Trap"; y.classList.add(i); break;
            default:
                if (i.startsWith("hardbass:")) {
                    x = i.substring(9).replaceAll("-", " ").replaceAll("%", "-");
                    y.classList.add("hardbass");
                }
                if (i.startsWith("house:")) {
                    x = i.substring(6).replaceAll("-", " ").replaceAll("%", "-");
                    y.classList.add("house");
                }
                if (i.startsWith("dubstep:")) {
                    x = i.substring(8).replaceAll("-", " ").replaceAll("%", "-");
                    y.classList.add("dubstep");
                }
                if (i.startsWith("other:")) {
                    x = i.substring(6).replaceAll("-", " ").replaceAll("%", "-");
                    y.classList.add("other");
                }
        }
        if (z) delete y;
        j.innerHTML = x;
        j.title = x;
        g.appendChild(j);
    }
    return g;
}

function cleanUp() {
    document.getElementById("searchBar").value = "";
    document.querySelectorAll('.filterUnitBox').forEach(checkbox => {
        checkbox.checked = true;
    });
}

window.onload = function () {
    if (document.title !== "Kingpvz -") {
        cleanUp();
        var id = -1;
        for (const i of database) {
            id++;
            var x = document.createElement("div");
            x.classList.add("musicEntry");
            x.id = i.title.toLowerCase().replaceAll(" ", "-");
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) x.setAttribute("onclick", "launchSong(" + id + ")")
            else x.setAttribute("onclick", "openSong(" + id + ")");
            var cover = document.createElement("img");
            cover.src = i.cover;
            cover.classList.add("musicEntryCover");
            x.appendChild(cover);
            var y = document.createElement("div");
            y.classList.add("musicEntryData");
            var title = document.createElement("h1");
            title.classList.add("musicEntryTitle");
            title.innerHTML = i.title;
            title.title = i.title;
            y.appendChild(title);
            var album = document.createElement("p");
            album.classList.add("musicEntryAlbum");
            album.innerHTML = i.album === "none" ? "Single" : getAlbums(i.album);
            album.title = album.innerHTML;
            y.appendChild(album);
            var lyrs = document.createElement("p");
            lyrs.classList.add("musicEntryLyrics");
            var lyrsx = "";
            if (i.explicit) {
                lyrsx += '<span class="explicitContent" title="Explicit Content">E</span> &nbsp; ';
                x.classList.add("explicit");
            }
            lyrsx += (i.lyrics === "lyric" ? "Lyrics" : "Instrumental");
            x.classList.add("ly" + i.lyrics);
            lyrsx += " | ";
            switch (i.originality) {
                case "original": lyrsx += "Original Song"; x.classList.add("ororiginal"); break;
                case "remix": lyrsx += "Remix"; x.classList.add("orremix"); break;
                case "meme": lyrsx += "Meme Rewind"; x.classList.add("orremix"); break;
                case "bootleg": lyrsx += "Bootleg"; x.classList.add("orbootleg"); break;
            }
            lyrs.innerHTML = lyrsx;
            y.appendChild(lyrs);
            var genres = getGenres(i.genre, x);
            y.appendChild(genres);
            x.appendChild(y);
            x.classList.add("fr" + i.year);
            for (var j of i.album.split(" ")) {
                x.classList.add(j);
            }
            if (i.collab) {
                for (var j of i.collab.split(" ")) {
                    x.classList.add("ar" + j);
                }
            }
            document.getElementById("database").appendChild(x);
        }
        document.getElementById("musicStatTotal").innerHTML = "Total Songs: " + database.length;
        document.getElementById("musicStatCurrent").innerHTML = "Displayed Songs: " + database.length;
    }
    else {
        openSong(songID, false);
        document.title = "Kingpvz - " + database[songID].title;
        if (database[songID].alt) { } else { database[songID].alt = []; }
        if (database[songID].album === 'none' && database[songID].alt.length === 0) document.getElementById("musicExtraButtonExtra").style.display = 'none';
    }
}

function changeView(to) {
    document.querySelectorAll('.musicViewPage').forEach(i => {
        i.classList.remove("selected")
    });
    document.querySelectorAll('.musicExtraButton').forEach(i => {
        i.classList.remove("selected")
    });

    switch (to) {
        case "main":
            document.getElementById("musicViewMain").classList.add("selected");
            document.getElementById("musicExtraButtonMain").classList.add("selected");
            break;
        case "more":
            document.getElementById("extra").classList.add("selected");
            document.getElementById("musicExtraButtonExtra").classList.add("selected");
            break;
    }
}

function search(q) {
    q = q.toLowerCase().trim().replaceAll(" ", "-").replaceAll("á", "&aacute;").replaceAll("ž", "&zcaron;").replaceAll("š", "&scaron;").replaceAll("ď", "&dcaron;").replaceAll("ě", "&ecaron;");
    var total = database.length;
    for (var i of document.getElementById("database").children) {
        i.style.display = "inline-flex";
        if (!i.id.includes(q)) {
            i.style.display = "none";
            total--;
            continue;
        }
        var x = false;
        var y = false;
        var z = {
            o: false,
            l: false,
            e: true,
            f: false,
            c: false
        }
        var check = false
        for (var j of i.classList) {
            if (filt.genre[j]) x = true;
            if (filt.album[j]) y = true;
            if (filt.more[j] && j.startsWith("or")) z.o = true;
            if (filt.more[j] && j.startsWith("ly")) z.l = true;
            if (j === "explicit" && !filt.more.explicit) z.e = false;
            if (filt.more[j] && j.startsWith("fr")) z.f = true;
            if (j.startsWith("ar")) check = true;
            if (filt.more[j] && j.startsWith("ar")) {
                z.c = true;
            }
        }
        if (!check) z.c = true;
        if (!(x&&y&&z.o&&z.l&&z.e&&z.f&&z.c)) {
            i.style.display = "none";
            total--;
            continue;
        }
    }
    document.getElementById("musicStatCurrent").innerHTML = "Displayed Songs: " + total;

}

var albums = {
    dj: {
        name: "Darken Jam",
        type: "EP",
        desc: "Basically I made the song \"Darken\" using some sort of trap song maker app? And this EP is a collection of different versions of that song.",
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02a4b7edd70b90b146b9d96f0a",
        spotify: "https://open.spotify.com/album/3KcoMo0j38iyMDEuvipAzQ?si=PeF-YLasQEyrHEy0BV_f3w",
        itunes: "https://music.apple.com/us/album/darken-jam-single/1518649014"
    },
    uh: {
        name: "Ultimate Hardbass",
        type: "EP",
        desc: "This EP contains two remastered songs - called \"Ultimate Editions\". Also its spotlight song is &#x41F;&#x440;&#x438;&#x432;&#x435;&#x442;.",
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e028f75b3252e8bfa067c90c066",
        spotify: "https://open.spotify.com/album/5IwYZr5ddyv7ZupneM3f7B?si=rmKXU2FcQwyi26KbXSOAsw",
        itunes: "https://music.apple.com/us/album/ultimate-hardbass-single/1540050080",
        deezer: "https://deezer.page.link/2T4ZNTdgFrn8vidy8"
    },
    wyrtb: {
        name: "When You Ride the Bass",
        type: "Album",
        desc: "This album was supposed to be a collection of my songs on SoundCloud, but something went wrong and it's a bit of a mess.",
        cover: "https://i1.sndcdn.com/artworks-Nq8i6W5cUqoNblrM-MRLvog-t500x500.jpg",
        soundcloud: "https://soundcloud.com/kingpvz/tracks"
    },
    aj: {
        name: "Alternative Journey",
        type: "Album",
        desc: "My first <i>real</i> album, with songs from unique genres - see when I made this, I was only producing hardbass, so this album was basically a proof, that I'm capable of producing other stuff.",
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e028d1d528642694a584638da73",
        spotify: "https://open.spotify.com/album/1L46zqahBCXmuosPQ9uMy0?si=kJIWag04R3G0wZC4aC7lzw",
        itunes: "https://music.apple.com/us/album/alternative-journey/1556910206",
        deezer: "https://deezer.page.link/qqXQzh2xrrKAqTa57"
    },
    dda: {
        name: "Double Dip Adventure",
        type: "Album",
        desc: "This album was originally supposed to be a game OST, but the game got cancelled, so have all the songs instead.",
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02c6957215eb236e2fbb205db3",
        youtube: "https://www.youtube.com/playlist?list=PLS6i1BpODObU_kAn-UgOrpS5f6GDSPqrA",
        spotify: "https://open.spotify.com/album/4qDB1vvHkFS2WTdFHl4ud9?si=qmJRpuNrT-S4tTagkFLZ5w",
        itunes: "https://music.apple.com/us/album/double-dip-adventure/1600087960",
        deezer: "https://deezer.page.link/zLQm75D7ja6ijFZQ7"
    },
    gb: {
        name: "Geometry Bass",
        type: "Album",
        desc: "The first collection of my Geometry Dash hardbass remixes - the first 21 levels + the practice mode and the menu song!",
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0292640ff1a639ef80176402b1",
        youtube: "https://www.youtube.com/playlist?list=PLdj_MACtyUjvzBUJ1nyxDvZM6GPHWDyv4",
        spotify: "https://open.spotify.com/album/4wJ6vMrnkK7BGakKC64rNt?si=-b-kKKUqSAKal14N9bj2OQ",
        itunes: "https://music.apple.com/us/album/geometry-bass/1626532804",
        deezer: "https://deezer.page.link/T73C9PuvmNqBkAKF8"
    },
    ritt: {
        name: "Roaring In The 20s",
        type: "Album",
        desc: "This album contains probably the best songs I've made till the date of its release. In fact, I am extremely happy for this album.",
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e027eac873ac84cb7f0eaaddb4e",
        youtube: "https://www.youtube.com/playlist?list=PLS6i1BpODObV_0YMXvcDsM0cK1-nR0NQ5",
        spotify: "https://open.spotify.com/album/2NvpSGYGqQAlKJpkC8qzhK?si=qbPmp-zUSkiaHD9HEA7gkQ",
        itunes: "https://music.apple.com/us/album/roaring-in-the-20s/1776636659",
        deezer: "https://deezer.page.link/CN3R3gZjLY8bgEaP6"
    },
    gb2: {
        name: "Geometry Bass 2",
        type: "Album",
        desc: "Note: This album is unfinished.<br>The second collection of my Geometry Dash hardbass remixes - the spin-off games, Dash remix and bonus tracks!",
        cover: "https://i.scdn.co/image/ab6761670000ecd4be936e4ef9f2f473c44c575d",
        youtube: "https://www.youtube.com/playlist?list=PLdj_MACtyUjvzBUJ1nyxDvZM6GPHWDyv4",
        spotify: "",
        itunes: "",
        deezer: ""
    }
}

var database = [
    /***/
    {
        title: "2021",
        genre: "hh",
        album: "none",
        year: 2021,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e023b6ab5e6bf8714eac65a176e",
        link: {
            base: {
                youtube: "https://youtu.be/TTNeAFW8lPA",
                spotify: "https://open.spotify.com/album/2Z7ZwcFEzSkgH2moupOX75?si=lS3z1tcwSfmMmk-vdiQotw",
                itunes: "https://music.apple.com/us/album/2021-single/1596410888",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-2021-%28happy-hardcore-uk:b"
            }
        }
    },
    /*a*/
    {
        title: "Airborne Robots",
        genre: "hardbass:Hardbass",
        album: "gb2",
        year: 2023,
        originality: "remix",
        originalby: "F-777",
        lyrics: "inst",
        explicit: false,
        cover: "https://i.scdn.co/image/ab6761670000ecd4be936e4ef9f2f473c44c575d",
        link: {
            base: {
                youtube: "https://youtu.be/fYdmkkOKrf8",
                odysee: "https://odysee.com/@kingpvz:4/f-777-airborne-robots-(hardbass-remix-by:b"
            }
        }
    },
    {
        title: "Alter",
        genre: "alt trap",
        album: "aj",
        year: 2021,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e028d1d528642694a584638da73",
        link: {
            base: {
                youtube: "https://youtu.be/R-elL1ZlEyM",
                spotify: "https://open.spotify.com/track/1Ufd2EXzfQpveoOEWDQTU2?si=f1509a0b190b4cb6",
                itunes: "https://music.apple.com/us/album/alter/1556910206?i=1556910208",
                deezer: "https://deezer.page.link/QAYniVnzWWqipMui9",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-alter-%28alternative-trap-dubstep%29:3"
            }
        }
    },
    /*b*/
    {
        title: "Back on Track",
        genre: "hardbass:Hardbass",
        album: "gb",
        year: 2021,
        originality: "remix",
        originalby: "DJVi",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0292640ff1a639ef80176402b1",
        link: {
            base: {
                youtube: "https://youtu.be/pZjC9Vp_htw",
                spotify: "https://open.spotify.com/track/2WPItBbLRPsyJESL5sNg6H?si=fcad9301dc494670",
                itunes: "https://music.apple.com/us/album/back-on-track/1626532804?i=1626533376",
                deezer: "https://deezer.page.link/xEG1aHU95UoKCt9R8",
                odysee: "https://odysee.com/@kingpvz:4/djvi-back-on-track-%28hardbass-remix-by:3"
            }
        }
    },
    {
        title: "Babushka's Kompot",
        genre: "hardbass:Hardbass",
        album: "none",
        year: 2021,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0283b3b0d39980b2ac159178ab",
        link: {
            base: {
                youtube: "https://youtu.be/XHVExjG-fno",
                spotify: "https://open.spotify.com/album/3Jr5bBTchSPdmRJQ1h9GxH?si=eHiVsO1CTmyZZl2r0sf32A",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-babushka%27s-kompot-%28ultimate:c"
            }
        }
    },
    {
        title: "Baguette",
        genre: "hardbass:Hardbass",
        album: "none",
        year: 2021,
        originality: "original",
        lyrics: "lyric",
        language: "English",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0274fa505a4f3a090b243b7db5",
        link: {
            base: {
                youtube: "https://youtu.be/jeKS6Z8pc94",
                spotify: "https://open.spotify.com/album/5wnh5qnkB7bykiHV0iCSMd?si=TirKHBYwTGmeAXvlbMLIGw",
                itunes: "https://music.apple.com/us/album/baguette-single/1558182391",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-baguette-%28some-great-hardbass%29:a"
            },
            alt: [
                {
                    name: "Instrumental Version",
                    youtube: "https://youtu.be/Kg03ajHchjU",
                    odysee: "https://odysee.com/@kingpvz:4/kingpvz-baguette-%28instrumental-hardbass%29:c"
                },
                {
                    name: "8D Version",
                    youtube: "https://youtu.be/CKopDkSmCaE",
                    odysee: "https://odysee.com/@kingpvz:4/kingpvz-baguette-%288d-hardbass%29:f"
                }
            ]
        }
    },
    {
        title: "Base After Base",
        genre: "hardbass:Hardbass",
        album: "gb",
        year: 2021,
        originality: "remix",
        originalby: "DJVi",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0292640ff1a639ef80176402b1",
        link: {
            base: {
                youtube: "https://youtu.be/bKdbsv_FOz8",
                spotify: "https://open.spotify.com/track/4I65eJvCtWHHPqz8Tc6gYy?si=07cc08751cb64c10",
                itunes: "https://music.apple.com/us/album/base-after-base/1626532804?i=1626533379",
                deezer: "https://deezer.page.link/dGZMRLvoEDxgLHJK7",
                odysee: "https://odysee.com/@kingpvz:4/djvi-base-after-base-%28hardbass-remix-by:3"
            }
        }
    },
    {
        title: "Bass #1",
        genre: "trap",
        album: "dj",
        year: 2020,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02a4b7edd70b90b146b9d96f0a",
        link: {
            base: {
                youtube: "https://youtu.be/aKm-aFVCKhM",
                spotify: "https://open.spotify.com/track/0jPyARgKA9mu4zcNYN1CBV?si=f641624946eb4621",
                itunes: "https://music.apple.com/us/album/bass-1/1518649014?i=1518649017"
            }
        }
    },
    {
        title: "Bass Bandicoot",
        genre: "hardbass:Hardbass",
        album: "none",
        year: 2023,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0210e1f640b43815cc297dc088",
        link: {
            base: {
                youtube: "https://youtu.be/o8Eo8jLgvyY",
                spotify: "https://open.spotify.com/album/140bfuQAn8ikLi4UGXe0VS?si=EYEscS8nSUS2QWktuwQZkQ",
                itunes: "https://music.apple.com/us/album/bass-bandicoot-single/1712503714",
                deezer: "https://deezer.page.link/2yZVmaXmDYy1eMq56",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-bass-bandicoot-funky-hardbass:5"
            }
        }
    },
    {
        title: "Be Alone",
        genre: "hardbass:Hardbass hh",
        album: "none",
        year: 2022,
        originality: "bootleg",
        lyrics: "lyric",
        originalby: "Mark Breeze",
        language: "English",
        explicit: false,
        cover: "https://i.scdn.co/image/ab6761670000ecd4be936e4ef9f2f473c44c575d",
        link: {
            base: {
                youtube: "https://www.youtube.com/watch?v=u0ctFBD5vvg",
                odysee: "https://odysee.com/@kingpvz:4/mark-breeze-be-alone-%28kingpvz%27s-donk:3"
            }
        }
    },
    {
        title: "Beast Mode",
        genre: "hardbass:Hardbass",
        album: "gb2",
        year: 2024,
        originality: "remix",
        originalby: "Dex Arson",
        lyrics: "inst",
        explicit: false,
        cover: "https://i.scdn.co/image/ab6761670000ecd4be936e4ef9f2f473c44c575d",
        link: {
            base: {
                youtube: "https://youtu.be/xn28ITLW6EI",
                odysee: "https://odysee.com/@kingpvz:4/dex-arson-beast-mode-(hardbass-remix-by:f"
            }
        }
    },
    {
        title: "Behind You",
        genre: "alt",
        album: "aj",
        year: 2021,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e028d1d528642694a584638da73",
        link: {
            base: {
                youtube: "https://youtu.be/Cr_FjasD6VE",
                spotify: "https://open.spotify.com/track/49VKVWkArliuFNuMXKfI2l?si=89c90604823f420d",
                itunes: "https://music.apple.com/us/album/behind-you/1556910206?i=1556910215",
                deezer: "https://deezer.page.link/J2TLbZvGJooTKfn49",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-behind-you-%28emotional-horror:0"
            }
        }
    },
    {
        title: "Belarus",
        genre: "hardbass:Hardbass",
        album: "wyrtb",
        year: 2021,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02745a71ef3bf4a16390a4adfb",
        link: {
            base: {
                youtube: "https://youtu.be/dKGXt0t9Q6E",
                spotify: "https://open.spotify.com/album/3PIV3hnq0LbfT2Uybvy7Ih?si=gw1LoxvlQwqxGcAHCEWmug",
                soundcloud: "https://soundcloud.com/kingpvz/belarus?si=6425208b88f040d1ac00eb636583e524&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-belarus-4k-hardbass:2"
            }
        }
    },
    {
        title: "Big Shot",
        genre: "hardbass:Hardbass",
        album: "none",
        year: 2022,
        originality: "remix",
        originalby: "Toby Fox",
        lyrics: "lyric",
        language: "Kromer English",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e028c73e0be5c990693b1374cf8",
        link: {
            base: {
                youtube: "https://youtu.be/YwIUOrHHRbM",
                spotify: "https://open.spotify.com/album/59kzQTPjYarTZpCinPHh4g?si=Q7lOSTqJTdyhfp-WxDR2lg",
                itunes: "https://music.apple.com/us/album/big-shot-hardbass-remix-single/1623201301",
                deezer: "https://deezer.page.link/HHyhWf5g3GcC5fyy7",
                odysee: "https://odysee.com/@kingpvz:4/toby-fox-big-shot-%28hardbass-remix-by:7"
            }
        }
    },
    {
        title: "Bitman",
        genre: "chip",
        album: "none",
        year: 2022,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0267e3d3a58ada664b35b7d0de",
        link: {
            base: {
                youtube: "https://youtu.be/9v5jwypRy4s",
                spotify: "https://open.spotify.com/album/2BIIGhskVHzCRRtyJoQJDv?si=0wojX15pQDe8O00BtN1HHg",
                itunes: "https://music.apple.com/us/album/bitman-single/1651262976",
                deezer: "https://deezer.page.link/UCV117ypVRFHtVXv8",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-bitman-chiptune-song-%28a-bit:6"
            }
        }
    },
    {
        title: "Blast Processing",
        genre: "hardbass:Hardbass other:Hard-Rave",
        album: "gb",
        year: 2022,
        originality: "remix",
        originalby: "Waterflame",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0292640ff1a639ef80176402b1",
        link: {
            base: {
                youtube: "https://youtu.be/JVS5KCJwmjo",
                spotify: "https://open.spotify.com/track/6lJ7DReoPn5LOiGYpSmqri?si=a9ce7348d0854295",
                itunes: "https://music.apple.com/us/album/blast-processing/1626532804?i=1626533393",
                deezer: "https://deezer.page.link/WRWUjconQFYEWKBk9",
                odysee: "https://odysee.com/@kingpvz:4/waterflame-blast-processing-%28hardrave:a"
            }
        }
    },
    {
        title: "Blind Hopes",
        genre: "erock",
        album: "none",
        year: 2021,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0232cac54522b4bc6717d8758f",
        link: {
            base: {
                youtube: "https://youtu.be/mo2hx3wYl48",
                spotify: "https://open.spotify.com/album/37NaHrOJdfvEpYw9nUp9jB?si=2XZBH4_9SxKjEviynk61QA",
                itunes: "https://music.apple.com/us/album/blind-hopes-single/1578732763",
                deezer: "https://deezer.page.link/qYKbeiCLC6PQoZHJA",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-blind-hopes-%28metal-e-rock-mobile:4"
            },
            alt: [
                {
                    name: "Speaker Friendly Version",
                    spotify: "https://open.spotify.com/track/3mXv0rg4aAPG1q3JNMpQXh?si=cdb58d18c0144da4",
                    itunes: "https://music.apple.com/us/album/blind-hopes-speaker-friendly-version/1578732763?i=1578732766",
                    deezer: "https://deezer.page.link/ktdENmJjB7ToPR7d8"
                }
            ]
        }
    },
    {
        title: "Brain Damage",
        genre: "hardstyle",
        album: "none",
        year: 2023,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://i.scdn.co/image/ab6761670000ecd4be936e4ef9f2f473c44c575d",
        link: {
            base: {
                youtube: "https://youtu.be/cHSQr-KeBMs",
                odysee: "https://odysee.com/@kingpvz:4/so-i-tried-producing-something:f"
            }
        }
    },
    {
        title: "Brass",
        genre: "trap",
        album: "dj",
        year: 2020,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02a4b7edd70b90b146b9d96f0a",
        link: {
            base: {
                youtube: "https://youtu.be/JjNZzQ0dh_A",
                spotify: "https://open.spotify.com/track/1V4KQLbalqNNQdY93ARqfa?si=455fcc0289694590",
                itunes: "https://music.apple.com/us/album/brass/1518649014?i=1518649018"
            }
        }
    },
    {
        title: "Br&dcaron;okoky",
        genre: "hardbass:Hardbass",
        album: "none",
        year: 2021,
        originality: "remix",
        lyrics: "lyric",
        language: "Slovak",
        originalby: "Hork&yacute;&zcaron;e Sl&iacute;&zcaron;e",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e021ffc9011dc96076f2a21a4c1",
        link: {
            base: {
                youtube: "https://youtu.be/eWL6VyyT0pM",
                spotify: "https://open.spotify.com/album/1HLA2PjyrcBXq3CzGtbpF2?si=jeNwtYOvRt6w1ic2JqmjeA",
                itunes: "https://music.apple.com/us/album/br%C4%8Fokoky-hardbass-remix-single/1584665229",
                deezer: "https://deezer.page.link/jQqDm8mY1NXtR6m6A",
                odysee: "https://odysee.com/@kingpvz:4/hork%C3%BD%C5%BEe-sl%C3%AD%C5%BEe-br%C4%8Fokoky-%28hardbass:8"
            },
            alt: [
                {
                    name: "Instrumental Version",
                    youtube: "https://www.youtube.com/watch?v=2sYT_-B6fkk"
                }
            ]
        }
    },
    /*c*/
    {
        title: "Calming Silence",
        genre: "other:Calming-Music",
        album: "aj wyrtb",
        year: 2020,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02046c2fbe969a9ef6eba6d2c4",
        link: {
            base: {
                youtube: "https://youtu.be/EGVD50UYOCU",
                spotify: "https://open.spotify.com/album/5Ro4RhvP6eaCFoZ2mFh03n?si=-SaPIa83TMaXzgwVDSOZAQ",
                soundcloud: "https://soundcloud.com/kingpvz/calming-silence?si=af0eee40b43f4436b21effb98f3b6664&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
                itunes: "https://music.apple.com/us/album/calming-silence-single/1541776875",
                deezer: "https://deezer.page.link/Gm3eXFUHMhoEUnZFA",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-calming-silence-%28ambient-calming:d"
            }
        }
    },
    {
        title: "Can't Let Go",
        genre: "hardbass:Metalshade",
        album: "gb",
        year: 2021,
        originality: "remix",
        originalby: "DJVi",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0292640ff1a639ef80176402b1",
        link: {
            base: {
                youtube: "https://youtu.be/UDevyzFpWtM",
                spotify: "https://open.spotify.com/track/3ZpSSSeXtek5S8kxOCGIVs?si=703c2ff8a97c4bf8",
                itunes: "https://music.apple.com/us/album/cant-let-go/1626532804?i=1626533380",
                deezer: "https://deezer.page.link/1XzhCKZnRKFnGpNfA",
                odysee: "https://odysee.com/@kingpvz:4/djvi-can%27t-let-go-%28hardbass-metalshade:3"
            }
        }
    },
    {
        title: "Car Go Vroom",
        genre: "hardbass:Hardbass/Metalcord",
        album: "none",
        year: 2022,
        originality: "bootleg",
        lyrics: "lyric",
        originalby: "Uamee",
        language: "English",
        explicit: true,
        cover: "https://i.scdn.co/image/ab6761670000ecd4be936e4ef9f2f473c44c575d",
        link: {
            base: {
                youtube: "https://youtu.be/XQeGHwLzh9g",
                odysee: "https://odysee.com/@kingpvz:4/uamee-car-go-vroom-kingpvz-remix:b"
            }
        }
    },
    {
        title: "Cashky",
        genre: "trap",
        album: "dj",
        year: 2019,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02a4b7edd70b90b146b9d96f0a",
        link: {
            base: {
                youtube: "https://youtu.be/dm6RKXDBJIs",
                spotify: "https://open.spotify.com/track/4kXSM3NHpORzS5Rmg0KLUg?si=f11bc4e978544243",
                itunes: "https://music.apple.com/us/album/cashky/1518649014?i=1518649015"
            }
        }
    },
    {
        title: "Cave Brawl",
        genre: "other:Ambient-Bass",
        album: "dda",
        year: 2022,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02c6957215eb236e2fbb205db3",
        link: {
            base: {
                youtube: "https://www.youtube.com/watch?v=wnSMSLPYvQ4",
                spotify: "https://open.spotify.com/track/03Lv23mQvYatQ5bN544oaE?si=f91138551b1a4d7d",
                itunes: "https://music.apple.com/us/album/cave-brawl/1600087960?i=1600087963",
                deezer: "https://deezer.page.link/8By2PPc8YUR9kNc38"
            },
            alt: [
                {
                    name: "Extended Mix",
                    youtube: "https://www.youtube.com/watch?v=KDZbgxkawq8",
                    spotify: "https://open.spotify.com/track/1BAtKjOeKoFKVzRpGNA46r?si=16135e1344094802",
                    itunes: "https://music.apple.com/us/album/cave-brawl-extended-mix/1600087960?i=1600087976",
                    deezer: "https://deezer.page.link/cPGHwKogzKYGg98x7"
                }
            ]
        }
    },
    {
        title: "Chase",
        genre: "alt complextro house:Bass-House",
        album: "none",
        year: 2023,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0231955ea12948a71876982585",
        link: {
            base: {
                youtube: "https://youtu.be/jZir9AwvDdI",
                spotify: "https://open.spotify.com/album/6IkJdP0plxcX7SSlV3aAX4?si=RbGgt0k9RVeW7LswqnBBTg",
                itunes: "https://music.apple.com/us/album/chase-single/1674870741",
                deezer: "https://deezer.page.link/w6RBWaiYUdojDcyX6",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-chase-%28alternative-complextro:0"
            }
        }
    },
    {
        title: "Chernobyl Monsters",
        genre: "exp hardbass:Hardphonk/Hardbass",
        album: "wyrtb",
        year: 2020,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02c93f2956f5aad9a212feb07b",
        link: {
            base: {
                youtube: "https://youtu.be/auTenGUH7Jo",
                spotify: "https://open.spotify.com/album/46QRKkJZzM7bdGnEb9inSh?si=J8Yuvb67RGOsDR_C5C2NvA",
                soundcloud: "https://soundcloud.com/kingpvz/chernobyl-monsters?si=760d5c0b4c004163af161df25da44bb1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
                itunes: "https://music.apple.com/us/album/chernobyl-monsters-single/1523693702"
            }
        }
    },
    {
        title: "Chernobyl Monsters (Ultimate Edition)",
        genre: "exp hardbass:Hardbass/Hardphonk",
        album: "uh wyrtb",
        year: 2020,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e028f75b3252e8bfa067c90c066",
        link: {
            base: {
                youtube: "https://youtu.be/oLWtSa_wOWE",
                spotify: "https://open.spotify.com/track/0AiOAdkqF4kdhXaSjGEOh3?si=4b052f54c30849a4",
                soundcloud: "https://soundcloud.com/kingpvz/chernobyl-monsters-ultimate?si=41d9b06920754a0dbff70970ad51c3ce&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
                itunes: "https://music.apple.com/us/album/chernobyl-monsters-ultimate-edition/1540050080?i=1540050083",
                deezer: "https://deezer.page.link/6UHfAp1W5Aw1SZNo9",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-chernobyl-monsters-%28ultimate:6"
            }
        }
    },
    {
        title: "Chipping Over",
        genre: "chip",
        album: "dda",
        year: 2022,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02c6957215eb236e2fbb205db3",
        link: {
            base: {
                youtube: "https://www.youtube.com/watch?v=62sakTUDj_U",
                spotify: "https://open.spotify.com/track/3Sf8LxIMUfLznTIui2Ehcq?si=8352f1aa3afb4729",
                itunes: "https://music.apple.com/us/album/chipping-over/1600087960?i=1600087974",
                deezer: "https://deezer.page.link/mcNzuVHWirP4FmPS7"
            },
            alt: [
                {
                    name: "Extended Mix",
                    youtube: "https://www.youtube.com/watch?v=Xb3jxzlMLNc",
                    spotify: "https://open.spotify.com/track/0KU9iMundIkUom84u5gWJG?si=2349024e7cea43be",
                    itunes: "https://music.apple.com/us/album/chipping-over-extended-mix/1600087960?i=1600087975",
                    deezer: "https://deezer.page.link/T4jZmD4fiPyntDz38"
                }
            ]
        }
    },
    {
        title: "Chocolate Kvass",
        genre: "hardbass:Hardbass",
        album: "none",
        year: 2021,
        originality: "original",
        lyrics: "lyric",
        language: "English",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e027200fffd21fbd83ebdf10608",
        link: {
            base: {
                youtube: "https://youtu.be/DvAi7nWcrXQ",
                spotify: "https://open.spotify.com/album/4BFNFwiOmEvB5lBRaHGGIC?si=yrFmfj_QR_-Pq8Jr9lDVUg",
                itunes: "https://music.apple.com/us/album/chocolate-kvass-single/1575384066",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-chocolate-kvass-%28oldschool:0"
            },
            alt: [
                {
                    name: "Instrumental Version",
                    youtube: "https://www.youtube.com/watch?v=thrYpXEgoJU"
                }
            ]
        }
    },
    {
        title: "Chomper",
        genre: "exp house:Bass-House dubstep:Riddim",
        album: "none",
        year: 2024,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02ec2fd0df090899bcc354ae57",
        link: {
            base: {
                youtube: "https://youtu.be/UzIevtKTYR0",
                spotify: "https://open.spotify.com/album/1COQnIqdHLfBtg349PRxar?si=ExBSEJd3QzqPYj-FgActfA",
                itunes: "https://music.apple.com/us/album/chomper-single/1756126427",
                deezer: "https://deezer.page.link/ARNPtjZQEJYmvPQq9",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-chomper-bass-house-riddim:c",
                bili: "https://www.bilibili.com/video/BV1yn4y1o7DT/"
            }
        }
    },
    {
        title: "Christmas... I guess...",
        genre: "hardbass:Hardbass",
        album: "wyrtb",
        year: 2020,
        originality: "meme",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e028d7f69079d8f995b8a3b262a",
        link: {
            base: {
                youtube: "https://youtu.be/2ogVHRqUraQ",
                spotify: "https://open.spotify.com/album/175Q8qDiysEZ8CbsNrg8kO?si=2L0BFl3gTqaej5tm3lfPfQ",
                soundcloud: "https://soundcloud.com/kingpvz/christmas-i-guess?si=1795b491eda04fad9a6da878394985bc&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
                deezer: "https://deezer.page.link/uWYkkqusvyEw6njF6",
                odysee: "https://odysee.com/@kingpvz:4/christmas...-i-guess...:7"
            }
        }
    },
    {
        title: "Clouds Over The Sky",
        genre: "exp",
        album: "dda",
        year: 2022,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02c6957215eb236e2fbb205db3",
        link: {
            base: {
                youtube: "https://www.youtube.com/watch?v=JQ6k31gB4Gw",
                spotify: "https://open.spotify.com/track/4eaWcr3A56BXb6bvMy4GHs?si=a13a9cafdcad4110",
                itunes: "https://music.apple.com/us/album/clouds-over-the-sky/1600087960?i=1600087965",
                deezer: "https://deezer.page.link/89EcUJW8s2T2G5Kg8"
            }
        }
    },
    {
        title: "Clubstep",
        genre: "hardbass:Hardbass",
        album: "gb",
        year: 2022,
        originality: "remix",
        originalby: "DJ Nate",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0292640ff1a639ef80176402b1",
        link: {
            base: {
                youtube: "https://youtu.be/bvHcoeeFx_8",
                spotify: "https://open.spotify.com/track/73xO7fqxUfLOIfzP7KsNX4?si=de79d9697b004125",
                itunes: "https://music.apple.com/us/album/clubstep/1626532804?i=1626533390",
                deezer: "https://deezer.page.link/fhsNGLGqezc2xvKU9",
                odysee: "https://odysee.com/@kingpvz:4/dj-nate-clubstep-%28hardbass-remix-by:a"
            }
        }
    },
    {
        title: "Clutterfunk",
        genre: "hardbass:Hardbass",
        album: "gb",
        year: 2021,
        originality: "remix",
        originalby: "Waterflame",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0292640ff1a639ef80176402b1",
        link: {
            base: {
                youtube: "https://youtu.be/kEYug8vS-_g",
                spotify: "https://open.spotify.com/track/5I4Y6KtSCz3ROLP8shf2GE?si=4f78e740f41a4c4b",
                itunes: "https://music.apple.com/us/album/clutterfunk/1626532804?i=1626533387",
                deezer: "https://deezer.page.link/uv98orbKbgXQ2R7K7",
                odysee: "https://odysee.com/@kingpvz:4/waterflame-clutterfunk-%28hardbass-remix:2"
            }
        }
    },
    {
        title: "Controversy",
        genre: "exp house:Bass-House",
        album: "none",
        year: 2021,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e024ddf3114de4a7812a9f9c07e",
        link: {
            base: {
                youtube: "https://youtu.be/wIC4Ting-Pk",
                spotify: "https://open.spotify.com/album/1FOSS21JyFhOBJvnuOgyu2?si=9ZMg-LcgRAGw-ZZ5jV3oxg",
                itunes: "https://music.apple.com/us/album/controversy-single/1596410650",
                deezer: "https://deezer.page.link/WiVtfvpzDXaNwZrF7",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-controversy-%28experimental-bassy:f"
            }
        }
    },
    {
        title: "Cries of the Past",
        genre: "exp other:Chipped-Dark-Ambient",
        album: "none",
        year: 2022,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02a3007aa457d932b91ff81a3b",
        link: {
            base: {
                youtube: "https://youtu.be/gbYgYHvl9w8",
                spotify: "https://open.spotify.com/album/2s8Ykhbz553mQTABaCzet7?si=GTx9t98bRnWKMtErDmBTuA",
                itunes: "https://music.apple.com/us/album/cries-of-the-past-single/1651436671",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-cries-of-the-past-emotional:f"
            }
        }
    },
    {
        title: "Cycles",
        genre: "hardbass:Hardbass/Metalcord",
        album: "gb",
        year: 2021,
        originality: "remix",
        originalby: "DJVi",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0292640ff1a639ef80176402b1",
        link: {
            base: {
                youtube: "https://youtu.be/GswwlMy0XGk",
                spotify: "https://open.spotify.com/track/3yBfWkoCCV7wBkxaViLWkn?si=8ca6f991711a4432",
                itunes: "https://music.apple.com/us/album/cycles/1626532804?i=1626533383",
                deezer: "https://deezer.page.link/QXTEHwusbbqMs3pS6",
                odysee: "https://odysee.com/@kingpvz:4/djvi-cycles-%28hardbass-remake-remix-by:d"
            }
        }
    },
    {
        title: "Cymaticum",
        genre: "house:House",
        album: "dda",
        year: 2022,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02c6957215eb236e2fbb205db3",
        link: {
            base: {
                youtube: "https://www.youtube.com/watch?v=gKXJHWKao2g",
                spotify: "https://open.spotify.com/track/3tAIGfOE5TWlZ8FjXrGRNO?si=57634b8bad91438b",
                itunes: "https://music.apple.com/us/album/cymaticum/1600087960?i=1600087970",
                deezer: "https://deezer.page.link/isuEvo7Wo9uHBGsC9"
            }
        }
    },
    /*d*/
    {
        title: "D from Maths",
        genre: "house:Electro-House",
        album: "none",
        year: 2022,
        originality: "original",
        lyrics: "lyric",
        language: "English",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e022f087c63b0756fdda8aaffb1",
        link: {
            base: {
                youtube: "https://youtu.be/1MOodiTEwh0",
                spotify: "https://open.spotify.com/album/4GoIikgHneHVkFlP3b9FD8?si=4FUHkmDFQxSZGUbcP9eabw",
                itunes: "https://music.apple.com/us/album/d-from-maths-single/1616524163",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-d-from-maths-%28electrohouse-lyric:c"
            },
            alt: [
                {
                    name: "Instrumental Version",
                    youtube: "https://www.youtube.com/watch?v=CX5z5JxafNo",
                    spotify: "https://open.spotify.com/track/4FagdeVzHYKZI2c831AasI?si=ea0bee30cb304bda",
                    itunes: "https://music.apple.com/us/album/d-from-maths-instrumental/1616524163?i=1616524165"
                }
            ]
        }
    },
    {
        title: "Darken",
        genre: "trap",
        album: "none",
        year: 2019,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e021c9fccdda93cd6119ff91742",
        link: {
            base: {
                youtube: "https://youtu.be/XPZa77PJ1ok",
                spotify: "https://open.spotify.com/album/3y8SQEmVzt6eh7I3FXq0z6?si=WhuPui-xRk-pPFyKVwY16g",
                itunes: "https://music.apple.com/us/album/darken-single/1517427884"
            }
        }
    },
    {
        title: "Dash",
        genre: "hardbass:Hardbass/Metalcord",
        album: "gb2",
        year: 2024,
        originality: "remix",
        originalby: "MDK",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02828949539dabafd13cf691bf",
        link: {
            base: {
                youtube: "https://youtu.be/G_1jQvWlvxw",
                spotify: "https://open.spotify.com/album/0aEUjyZbVYzFw4cQ0NtQhj?si=HtT-4qAcRQKfTG-PQsV--g",
                itunes: "https://music.apple.com/us/album/dash-single/1743997548",
                odysee: "https://odysee.com/@kingpvz:4/mdk-dash-%28hardbass-metalcord-remix-by:5"
            }
        }
    },
    {
        title: "Davai (Давай)",
        genre: "hardbass:Hardbass",
        album: "wyrtb",
        year: 2020,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02d0b037227f08146e8736c9dc",
        link: {
            base: {
                youtube: "https://youtu.be/wxWwumgt7C0",
                spotify: "https://open.spotify.com/album/2LrjL3a0aMfpRbOYgyl84O?si=QF9mb1u7QaKRrj2hrzgLJQ",
                soundcloud: "https://soundcloud.com/kingpvz/davai?si=1968ad40a21f48d4bd26e2cad91c0018&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
                itunes: "https://music.apple.com/us/album/%D0%B4%D0%B0%D0%B2%D0%B0%D0%B9-single/1538527102",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-%D0%B4%D0%B0%D0%B2%D0%B0%D0%B9-davai-%28hardbass-song%29:c"
            }
        }
    },
    {
        title: "Deadlocked",
        genre: "hardbass:Hardbass",
        album: "gb",
        year: 2022,
        originality: "remix",
        originalby: "F-777",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0292640ff1a639ef80176402b1",
        link: {
            base: {
                youtube: "https://youtu.be/dlljg_JCNB0",
                spotify: "https://open.spotify.com/track/2uo5eI9kz8GMMfrB9CFN7I?si=7a4712cd76974347",
                itunes: "https://music.apple.com/us/album/deadlocked/1626532804?i=1626533396",
                deezer: "https://deezer.page.link/5LiSkHWzk6ukTnU47",
                odysee: "https://odysee.com/@kingpvz:4/f-777-deadlocked-%28hardbass-remix-by:c"
            }
        }
    },
    {
        title: "Dedoles",
        genre: "hardbass:Hardbass",
        album: "wyrtb",
        year: 2020,
        originality: "remix",
        lyrics: "inst",
        originalby: "Terrific Hamster Crew",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0246bf7e3bf0ece381c7f867f4",
        link: {
            base: {
                youtube: "https://youtu.be/obQpUIsd5ZU",
                spotify: "https://open.spotify.com/album/65BfnFOQVeZNjyujikDxTn?si=EKdnrRO7SXKo6Er6uzNYfA",
                soundcloud: "https://soundcloud.com/kingpvz/dedoles-hardbass-remix?si=ca68c248a7e14fa6b3e9fd0923d4479e&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
                itunes: "https://music.apple.com/us/album/dedoles-hardbass-remix-single/1516646394",
                deezer: "https://deezer.page.link/gVttgs8og8Ho7xTr6"
            }
        }
    },
    {
        title: "Dedoles (Remastered)",
        genre: "hardbass:Hardbass",
        album: "wyrtb",
        year: 2021,
        originality: "remix",
        lyrics: "lyric",
        originalby: "Terrific Hamster Crew",
        language: "Slovak",
        explicit: false,
        cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0230429b229b27fbba073b8d3f",
        link: {
            base: {
                youtube: "https://youtu.be/MQvJFtZfpxk",
                spotify: "https://open.spotify.com/album/5Q25g2hGhz6lk4zloktdhj?si=PaRj240AQLKaRanC6xPm1g",
                soundcloud: "https://soundcloud.com/kingpvz/dedoles-2021-ultimate-remake?si=5d042e961f9d44fe8dfc0f114bb97023&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
                deezer: "https://deezer.page.link/TQbcmbSAQBVXJoBt9",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-dedoles-%28hardbass-remix%29-2021:1"
            }
        }
    },
    {
        title: "Delete It",
        genre: "swing",
        album: "ritt",
        year: 2024,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e027eac873ac84cb7f0eaaddb4e",
        link: {
            base: {
                youtube: "https://www.youtube.com/watch?v=Mh9CTrUIKdc",
                spotify: "https://open.spotify.com/track/33pXXL4k8IsdWHDFEpU7Vn?si=37ef4469a01f4da4",
                itunes: "https://music.apple.com/us/album/delete-it/1776636659?i=1776636799",
                deezer: "https://deezer.page.link/oEn2rGwJMuNs11NZ7"
            }
        }
    },
    {
        title: "Dirty Lada",
        genre: "hardbass:Hardbass/Metalcord",
        album: "none",
        year: 2021,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e024f1387e61cb57d0a49622bcf",
        link: {
            base: {
                youtube: "https://youtu.be/ok_W5Qc8VIQ",
                spotify: "https://open.spotify.com/album/1eN44bxjPvxGsB5eBqiZrg?si=B-xWMIWFSUOoURKeOv-RUA",
                itunes: "https://music.apple.com/us/album/dirty-lada-single/1589282984",
                deezer: "https://deezer.page.link/7QGgPeYenzc1j7Er5",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-dirty-lada-%28old-school-metalcord:b"
            }
        }
    },
    {
        title: "Disrupt",
        genre: "hardbass:Hardbass",
        album: "none",
        year: 2024,
        originality: "original",
        lyrics: "lyric",
        collab: "sozislav",
        language: "English",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02e612c7ee6248167a23ccf853",
        link: {
            base: {
                youtube: "https://youtu.be/IqaQATnNQao",
                spotify: "https://open.spotify.com/album/2Hqk6fWUbFAyiNDBf452cf?si=MVsjQnOcSk2Rf7HCv6GMqg",
                itunes: "https://music.apple.com/us/album/disrupt-single/1745747986",
                deezer: "https://deezer.page.link/srnk4fTpxSWAuj72A",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-x-sozislav-disrupt-old-school:9"
            }
        }
    },
    {
        title: "Doggy (Hafo)",
        genre: "hh",
        album: "none",
        year: 2024,
        originality: "bootleg",
        lyrics: "inst",
        originalby: "Frank Wild",
        explicit: false,
        cover: "https://i.scdn.co/image/ab6761670000ecd4be936e4ef9f2f473c44c575d",
        link: {
            base: {
                youtube: "https://youtu.be/VvmlFyYlhDA",
                odysee: "https://odysee.com/@kingpvz:4/doggy-but-it's-wholesome-(happy-hardcore:0"
            }
        }
    },
    {
        title: "Donk",
        genre: "hardbass:Hardbass",
        album: "wyrtb",
        year: 2020,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e020174c2c43e270ce2264e49fa",
        link: {
            base: {
                youtube: "https://youtu.be/DrqkpUilETY",
                spotify: "https://open.spotify.com/album/19Ghtwby4Srp0katJUGNbb?si=B8BQs3J6TSOhHytDYQt3EA",
                soundcloud: "https://soundcloud.com/kingpvz/donk?si=5ede0bee03074ce680986c1979db136d&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
                itunes: "https://music.apple.com/us/album/donk-single/1519835566"
            }
        }
    },
    {
        title: "Doop",
        genre: "hardbass:Hardbass",
        album: "wyrtb",
        year: 2020,
        originality: "remix",
        lyrics: "inst",
        originalby: "Doop",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e023d6135273112cdcea67bfc3f",
        link: {
            base: {
                youtube: "https://youtu.be/H3w8Z-A95w4",
                spotify: "https://open.spotify.com/album/2eolovJ6k0XMdSSGLaiGIY?si=Ke8EpR3bQleGCNXCE4M-2A",
                soundcloud: "https://soundcloud.com/kingpvz/doop-hardbass-remix?si=37a83b9fac3545b68ca47c3d637b4942&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
                itunes: "https://music.apple.com/us/album/doop-hardbass-remix-single/1518287944",
                deezer: "https://deezer.page.link/NcPAJGj6ZHY36euf9"
            }
        }
    },
    {
        title: "Dry Out",
        genre: "hardbass:Hardbass",
        album: "gb",
        year: 2021,
        originality: "remix",
        originalby: "DJVi",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0292640ff1a639ef80176402b1",
        link: {
            base: {
                youtube: "https://youtu.be/-zNNsEloEv4",
                spotify: "https://open.spotify.com/track/2zeDMPRYmQhdZJTKI4Bp6u?si=02c1eb97425e47a7",
                itunes: "https://music.apple.com/us/album/dry-out/1626532804?i=1626533378",
                deezer: "https://deezer.page.link/qfDJjEdnu5nZysBt9",
                odysee: "https://odysee.com/@kingpvz:4/djvi-dry-out-%28hardbass-remix-by-kingpvz%29:c"
            }
        }
    },
    {
        title: "Dutch",
        genre: "swing",
        album: "ritt",
        year: 2024,
        originality: "remix",
        originalby: "SharaX",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e027eac873ac84cb7f0eaaddb4e",
        link: {
            base: {
                youtube: "https://www.youtube.com/watch?v=iI4VhkBrWhE",
                spotify: "https://open.spotify.com/track/5diMSaP5cgM2MPcOiTeP79?si=2c5c3bc0cd2e419f",
                itunes: "https://music.apple.com/us/album/dutch/1776636659?i=1776636813",
                deezer: "https://deezer.page.link/BxRHyLjsNvsyWMqTA"
            }
        }
    },
    /*e*/
    {
        title: "Echoes of the Stars",
        genre: "hardbass:Hardbass",
        album: "none",
        year: 2022,
        originality: "remix",
        originalby: "Rusteraser",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02609c5ad1824fcf6261f652e5",
        link: {
            base: {
                youtube: "https://youtu.be/9meT1JqYO4w",
                spotify: "https://open.spotify.com/album/7FReRuljYmmsR5FVAPoZra?si=ItFc1bK2S3-B4Q7yh-PZqg",
                itunes: "https://music.apple.com/us/album/echoes-of-the-stars-hardbass-remix-single/1622859786",
                deezer: "https://deezer.page.link/uqsKuFABkGHiKZ3D9",
                odysee: "https://odysee.com/@kingpvz:4/rusteraser-echoes-of-the-stars-%28kingpvz:6"
            }
        }
    },
    {
        title: "eepee",
        genre: "hardbass:Hardbass",
        album: "wyrtb",
        year: 2020,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e025a90fc514b8dcfdf0f183036",
        link: {
            base: {
                youtube: "https://youtu.be/Ljeb9FVUHB8",
                spotify: "https://open.spotify.com/album/6piGaoFc7XasgGErkAWDEl?si=hY2rh4ogSHyB4o0FXU-IkQ",
                soundcloud: "https://soundcloud.com/kingpvz/eepee?si=7ad91df7751a44d89d277af0a34260ee&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
                itunes: "https://music.apple.com/us/album/eepee-and-2-other-songs-single/1522526285",
                deezer: "https://deezer.page.link/XCtZkp58Gaf9uiNN6"
            }
        }
    },
    {
        title: "Electrodynamix",
        genre: "hardbass:Hardbass",
        album: "gb",
        year: 2022,
        originality: "remix",
        originalby: "DJ Nate",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0292640ff1a639ef80176402b1",
        link: {
            base: {
                youtube: "https://youtu.be/KborqVsit9I",
                spotify: "https://open.spotify.com/track/4fnMHJKXHJnQpNBfV86AdM?si=e48f40ebf4e94ffc",
                itunes: "https://music.apple.com/us/album/electrodynamix/1626532804?i=1626533391",
                deezer: "https://deezer.page.link/c8HG8xxwGqBEmCcj8",
                odysee: "https://odysee.com/@kingpvz:4/dj-nate-electrodynamix-%28hardbass-remix:b"
            }
        }
    },
    {
        title: "Electroman Adventures",
        genre: "hardbass:Hardbass/Metalcord",
        album: "gb",
        year: 2022,
        originality: "remix",
        originalby: "Waterflame",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0292640ff1a639ef80176402b1",
        link: {
            base: {
                youtube: "https://youtu.be/qMmozfhgrqQ",
                spotify: "https://open.spotify.com/track/26Xwz8UpcMc1lpWw2dTgoW?si=68e375bef7644fcd",
                itunes: "https://music.apple.com/us/album/electroman-adventures/1626532804?i=1626533389",
                deezer: "https://deezer.page.link/yiF2vc2sfsCaRBds6",
                odysee: "https://odysee.com/@kingpvz:4/waterflame-electroman-adventures:e"
            }
        }
    },
    {
        title: "Enemy Retreating",
        genre: "chip dubstep:Chillstep",
        album: "none",
        year: 2024,
        originality: "remix",
        lyrics: "inst",
        originalby: "MyNewSoundtrack/MasterSwordRemix",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e028ca227b174b1e4cf750d81e0",
        link: {
            base: {
                youtube: "https://youtu.be/lGUC9PTKgNU",
                spotify: "https://open.spotify.com/album/5dZupShOWQu5AONsOFK1Bt?si=fmKQjZW_Rpmu8dX9fGH-CQ",
                itunes: "https://music.apple.com/us/album/enemy-retreating-kingpvz-remix-single/1756753882",
                odysee: "https://odysee.com/@kingpvz:4/undertale-yellow-enemy-retreating:1"
            }
        }
    },
    {
        title: "Extra-Ordinary",
        genre: "hardbass:Hardbass?",
        album: "none",
        year: 2023,
        originality: "original",
        lyrics: "lyric",
        language: "idk if these should be considered",
        explicit: false,
        cover: "https://i.scdn.co/image/ab6761670000ecd4be936e4ef9f2f473c44c575d",
        link: {
            base: {
                youtube: "https://youtu.be/CMvDdjKDnS0",
                odysee: "https://odysee.com/@kingpvz:4/the-best-hardbass-track-i've-ever-made:3"
            }
        }
    },
    {
        title: "Exuberant Winter",
        genre: "swing",
        album: "none",
        year: 2024,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://i.scdn.co/image/ab6761670000ecd4be936e4ef9f2f473c44c575d",
        link: {
            base: {
                youtube: "https://youtu.be/iHTWmGS7_Qo"
            }
        }
    },
    /*f*/
    {
        title: "Feels Like Tomorrow",
        genre: "exp other:Future-Electronica",
        album: "dda",
        year: 2022,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02c6957215eb236e2fbb205db3",
        link: {
            base: {
                youtube: "https://www.youtube.com/watch?v=rxwdB_R6QqU",
                spotify: "https://open.spotify.com/track/7yAKqJbthaQ8JY8l5gpUga?si=ac46c6fcf08e4eac",
                itunes: "https://music.apple.com/us/album/feels-like-tomorrow/1600087960?i=1600087966",
                deezer: "https://deezer.page.link/pVZybA1oEev5ZRVN7"
            }
        }
    },
    {
        title: "Final Battle",
        genre: "chip",
        album: "none",
        year: 2022,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e029888b8fbbc3d25e5f802a407",
        link: {
            base: {
                youtube: "https://youtu.be/VaNaW0K5-n8",
                spotify: "https://open.spotify.com/album/7G0vZLe7pfpTdZPYZAjQVj?si=clfrcWw6QhSe7m4ayfbeow",
                itunes: "https://music.apple.com/us/album/final-battle-single/1651459812",
                odysee: "https://odysee.com/@kingpvz:4/final-battle-%28deltarune-chapter-2-fan:7"
            }
        }
    },
    {
        title: "Fingerdash",
        genre: "hardbass:Hardbass/Metalcord",
        album: "gb",
        year: 2022,
        originality: "remix",
        originalby: "MDK",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0292640ff1a639ef80176402b1",
        link: {
            base: {
                youtube: "https://youtu.be/K_0j2JwplSE",
                spotify: "https://open.spotify.com/track/7D1XjPzNQLie5yUGZRS3hy?si=6d7c550ffd444b2a",
                itunes: "https://music.apple.com/us/album/fingerdash/1626532804?i=1626533397",
                deezer: "https://deezer.page.link/WgZZhpWkQrveUa728",
                odysee: "https://odysee.com/@kingpvz:4/mdk-fingerbang-%28hardbass-metalcord-remix:5"
            }
        }
    },
    {
        title: "Flexible Milk",
        genre: "alt erock",
        album: "none",
        year: 2023,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02b5c6ff6215e8289003e30d25",
        link: {
            base: {
                youtube: "https://youtu.be/nZHI5H1wmzE",
                spotify: "https://open.spotify.com/album/4GOIuj9waoMZ9WDNg9U0vU?si=O8DVzMjoQkaQ_UKblUh9YQ",
                itunes: "https://music.apple.com/us/album/flexible-milk-single/1713204188",
                deezer: "https://deezer.page.link/tzbWfuRdnVyaZCkn9",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-flexible-milk-alternative-e-rock:2",
                bili: "https://www.bilibili.com/video/BV1VM4m1Z7og/",
                ng: "https://www.newgrounds.com/audio/listen/1257547"
            }
        }
    },
    {
        title: "Friday",
        genre: "hardbass:Hardbass",
        album: "wyrtb",
        year: 2020,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0206552576e69b1a4220ec3b96",
        link: {
            base: {
                youtube: "https://youtu.be/jQB0eLqnJpU",
                spotify: "https://open.spotify.com/album/12MdeC993OPqQr1bKZCkzH?si=SJdkHG7GSfyCzDhwycaj4A",
                soundcloud: "https://soundcloud.com/kingpvz/friday?si=b0db31ff73fe4c7491a6f605b49ae251&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
                itunes: "https://music.apple.com/us/album/friday-single/1532476127",
                odysee: "https://odysee.com/@kingpvz:4/friday-%28hardbass-song%29-kingpvz:9"
            }
        }
    },
    {
        title: "Friday (Ultimate Edition)",
        genre: "hardbass:Hardbass",
        album: "uh wyrtb",
        year: 2020,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e028f75b3252e8bfa067c90c066",
        link: {
            base: {
                youtube: "https://youtu.be/enrneuElPh0",
                spotify: "https://open.spotify.com/track/0AiOAdkqF4kdhXaSjGEOh3?si=b279c0e7aa2e4f0b",
                soundcloud: "https://soundcloud.com/kingpvz/friday-ultimate-edition?si=68ac1814395d4a49bf6d739db9c2c3d9&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
                itunes: "https://music.apple.com/us/album/friday-ultimate-edition/1540050080?i=1540050081",
                deezer: "https://deezer.page.link/rrcbvTVJujeZCRUB8",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-friday-ultimate-edition:5"
            }
        }
    },
    {
        title: "Funk You",
        genre: "house:Funk-House",
        album: "wyrtb",
        year: 2020,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02dccd48e48c0edd89a2122345",
        link: {
            base: {
                youtube: "https://youtu.be/j12-IEirY5U",
                spotify: "https://open.spotify.com/album/5kF0BR0mUH0gn28kmVIy3J?si=xOttopGdTKyO9GJM1EgCXA",
                soundcloud: "https://soundcloud.com/kingpvz/funk-you?si=3db4d5ba470f40de933cc5690c0d3fe4&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
                itunes: "https://music.apple.com/us/album/funk-you-single/1544132001",
                deezer: "https://deezer.page.link/1Y8RP6qtbSJnqMi7A",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-funk-you-%28some-type-of-song%29:f"
            },
            alt: [
                {
                    name: "Extended Version",
                    youtube: "https://youtu.be/sdQns6Pido8",
                    spotify: "https://open.spotify.com/track/2HcKRjfFoTafK3pB8ua3IJ?si=edbbb75d17a744cc",
                    itunes: "https://music.apple.com/us/album/funk-you-extended-version/1544132001?i=1544132003",
                    deezer: "https://deezer.page.link/JMS9osXNtcz1H3F6A",
                    odysee: "https://odysee.com/@kingpvz:4/kingpvz-funk-you-%28extended-improved:9"
                }
            ]
        }
    },
    /*g*/
    {
        title: "Gatsby's Bass",
        genre: "swing",
        album: "ritt",
        year: 2024,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e029005fb5d96412acfb9582763",
        link: {
            base: {
                youtube: "https://youtu.be/Kiv0tpA4Jsw",
                spotify: "https://open.spotify.com/album/13OgOvIiQSNCDNBkwBMsP4?si=4aW1eFhPQvi8qA936BWYtw",
                itunes: "https://music.apple.com/us/album/gatsbys-bass-single/1771448325",
                deezer: "https://deezer.page.link/tXPFzKapFKGrB4nG6",
                bili: "https://www.bilibili.com/video/BV1pZp7eqEAC/"
            }
        }
    },
    {
        title: "Geometrical Dominator",
        genre: "hardbass:Hardbass",
        album: "gb",
        year: 2022,
        originality: "remix",
        originalby: "Waterflame",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0292640ff1a639ef80176402b1",
        link: {
            base: {
                youtube: "https://youtu.be/wpBxzNzgUV0",
                spotify: "https://open.spotify.com/track/1YMDr9x4012wa3RKojV7Sz?si=8c9f3b7da80a4735",
                itunes: "https://music.apple.com/us/album/geometrical-dominator/1626532804?i=1626533395",
                deezer: "https://deezer.page.link/inCW5zMcLj9EkapT8",
                odysee: "https://odysee.com/@kingpvz:4/waterflame-geometrical-dominator:0"
            }
        }
    },
    {
        title: "Geometry Dash",
        genre: "hardbass:Hardbass",
        album: "gb",
        year: 2022,
        originality: "remix",
        originalby: "RobTop/Matstubs/DJ Snake/Lil Jon",
        lyrics: "lyric",
        language: "Turn down for what",
        explicit: false,
        cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0292640ff1a639ef80176402b1",
        link: {
            base: {
                youtube: "https://youtu.be/_wQcJEavZW8",
                spotify: "https://open.spotify.com/track/4ozgC2YY2kDm4w75MjoUkK?si=a42c98adc7174d03",
                itunes: "https://music.apple.com/us/album/geometry-dash/1626532804?i=1626533399",
                deezer: "https://deezer.page.link/JZKdq9R33wwmVV2W9",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-geometry-dash-hardbass-geometry:3"
            }
        }
    },
    {
        title: "Graze the Roof",
        genre: "house:Electro-House",
        album: "none",
        year: 2022,
        originality: "remix",
        originalby: "8A/Laura Shigihara",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02f4f16f31374b65d67907fd63",
        link: {
            base: {
                youtube: "https://youtu.be/J78cxeahY08",
                spotify: "https://open.spotify.com/album/7HEiAXi2SoXwKnTmEK4mkO?si=Q_LB0l1bQReRaaZfWLEKEg",
                itunes: "https://music.apple.com/us/album/graze-the-roof-feat-8a-ultimate-remix-single/1632639804",
                deezer: "https://deezer.page.link/VRsgf1ZyWc9Dg4Lv5",
                odysee: "https://odysee.com/@kingpvz:4/8a-graze-the-roof-plants-vs-zombies-roof:a"
            }
        }
    },
    {
        title: "Graze the Roof",
        genre: "house:Club-House",
        album: "none",
        year: 2023,
        originality: "remix",
        originalby: "Laura Shigihara",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e027e19948c32b0a34389baae81",
        link: {
            base: {
                youtube: "https://youtu.be/IEtsBce1i04",
                spotify: "https://open.spotify.com/album/1CMXBPn3zmYOHNqMiVgdxX?si=gL4PRmf-QbSN7KIl7O-8JA",
                itunes: "https://music.apple.com/us/album/graze-the-roof-clubhouse-remix-single/1667328534",
                deezer: "https://deezer.page.link/ZjGkiavV6XorY8ci6",
                odysee: "https://odysee.com/@kingpvz:4/graze-the-roof-%28clubhouse-remix-by:1",
                bili: "https://www.bilibili.com/video/BV1Ap421y7qo/"
            }
        }
    },
    {
        title: "Groove",
        genre: "swing dubstep:Dubstep",
        album: "none",
        year: 2022,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e020abd6610926c80494c550201",
        link: {
            base: {
                youtube: "https://youtu.be/7y2z68UXLTM",
                spotify: "https://open.spotify.com/album/46RKdUZf4F9JUX5WXNo6nq?si=EDbL8sQ6QBS04hwJmAqO-Q",
                itunes: "https://music.apple.com/us/album/groove-single/1643177537",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-groove-electro-swing-jazz:d"
            }
        }
    },
    {
        title: "Guns Blazing",
        genre: "complextro other:Upbeat",
        album: "none",
        year: 2024,
        originality: "remix",
        lyrics: "lyric",
        originalby: "MyNewSoundtrack/MasterSwordRemix",
        language: "Right Now",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02dfdb67dd7f20af9e3d06e02b",
        link: {
            base: {
                youtube: "https://youtu.be/IDQJV14e4oE",
                spotify: "https://open.spotify.com/album/65zUQeoNYYb6lmJA4hyW1X?si=xnC3C3YLTaOEkO7C_r5DnQ",
                itunes: "https://music.apple.com/us/album/guns-blazing-kingpvz-remix-single/1747918309",
                deezer: "https://deezer.page.link/oazpqwXzvh88CCCb7",
                odysee: "https://odysee.com/@kingpvz:4/undertale-yellow-guns-blazing-%28upbeat:1"
            }
        }
    },
    /*h*/
    {
        title: "Hardbass Cat",
        genre: "hardbass:Hardbass",
        album: "none",
        year: 2022,
        originality: "original",
        lyrics: "lyric",
        language: "Slavic Stanovian/Japanese/German",
        explicit: false,
        cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02d5b6e36815a229c0fe8ecc0d",
        link: {
            base: {
                youtube: "https://youtu.be/ioRwZvJ7OSg",
                spotify: "https://open.spotify.com/album/1ForM2SHZvrAWyQ9dLmO9e?si=LsT0SnCFSzyuJjnqOiVwtQ",
                itunes: "https://music.apple.com/us/album/hardbass-cat-single/1648709825",
                deezer: "https://deezer.page.link/emdojiSFJq9GjFQ4A",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-hardbass-cat-hardbass-music:f"
            },
            alt: [
                {
                    name: "Instrumental Version",
                    youtube: "https://www.youtube.com/watch?v=EOyzL1LAIzI"
                }
            ]
        }
    },
    {
        title: "Hardbass ili Adidas (Хардбасс или Адидас)",
        genre: "hardbass:Hardbass",
        album: "none",
        year: 2021,
        originality: "original",
        lyrics: "lyric",
        language: "English/Russian",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02a933b2df18a2448cec721a1c",
        link: {
            base: {
                youtube: "https://youtu.be/vzN5FH58QdQ",
                spotify: "https://open.spotify.com/album/3l95fEMTMC7JmoetvHGpCi?si=6PEJV4J9TaybTPfSq_AcTw",
                itunes: "https://music.apple.com/us/album/hardbass-ili-adidas-single/1591247172",
                deezer: "https://deezer.page.link/95BN8TNfCoF4u7D48",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-hardbass-ili-adidas:7"
            },
            alt: [
                {
                    name: "Instrumental Version",
                    youtube: "https://www.youtube.com/watch?v=0P0BUsMZJfc",
                    spotify: "https://open.spotify.com/track/1eVbIPSoGA93LRC7SFhoMf?si=cca7ae720f6c47ce",
                    itunes: "https://music.apple.com/us/album/hardbass-ili-adidas-instrumental/1591247172?i=1591247176",
                    deezer: "https://deezer.page.link/NDd54j4zqns4NAXV8"
                }
            ]
        }
    },
    {
        title: "Hardbass Revolution",
        genre: "hardbass:Hardbass",
        album: "none",
        year: 2021,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02a37d932fcb385d1b6ad7e9aa",
        link: {
            base: {
                youtube: "https://youtu.be/-7kgbpJQa3E",
                spotify: "https://open.spotify.com/album/3hoGUHzG6xyIpjGJjSMyrO?si=sM9aq5OZSWekdWPUj1o5tg",
                itunes: "https://music.apple.com/us/album/hardbass-revolution-single/1600852045",
                deezer: "https://deezer.page.link/7EGYyZfyLiRwW2tJA",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-hardbass-revolution-hardbass:1"
            }
        }
    },
    {
        title: "Hazard",
        genre: "hardbass:Hardbass",
        album: "none",
        year: 2021,
        originality: "remix",
        lyrics: "lyric",
        language: "Slovak",
        originalby: "Hork&yacute;&zcaron;e Sl&iacute;&zcaron;e",
        explicit: true,
        cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e026087157dbeb94656dbc0883c",
        link: {
            base: {
                youtube: "https://youtu.be/nAGNvd4hLTE",
                spotify: "https://open.spotify.com/album/0GHWC6ZdjsAeqR12u9EpK4?si=pSrywj8NRYWg2RKf0k-Ddw",
                itunes: "https://music.apple.com/us/album/hazard-hardbass-remix-single/1583966206",
                deezer: "https://deezer.page.link/Bhusda7pMxACw7T88",
                odysee: "https://odysee.com/@kingpvz:4/hork%C3%BD%C5%BEe-sl%C3%AD%C5%BEe-hazard-%28hardbass-remix:8"
            },
            alt: [
                {
                    name: "Instrumental Version",
                    youtube: "https://www.youtube.com/watch?v=7xuxnQOXI7I"
                }
            ]
        }
    },
    {
        title: "Heart Bays",
        genre: "hardbass:Hardbass/Metalcord",
        album: "none",
        year: 2024,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e026d0e715e1f6f66436e81f163",
        link: {
            base: {
                youtube: "https://youtu.be/3DfiAIppebo",
                spotify: "https://open.spotify.com/album/5pRY8noHH1Gau3TdDf0ilM?si=ctpkQx1TSZCiEhthS0D7mg",
                itunes: "https://music.apple.com/us/album/heart-bays-single/1745747923",
                deezer: "https://deezer.page.link/QN8MfXMK1QbXtoAj6",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-heart-bays-hardbass-metalcord:1"
            }
        }
    },
    {
        title: "Hexagon Force",
        genre: "hardbass:Hardbass",
        album: "gb",
        year: 2022,
        originality: "remix",
        originalby: "Waterflame",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0292640ff1a639ef80176402b1",
        link: {
            base: {
                youtube: "https://youtu.be/phN3UEATY0k",
                spotify: "https://open.spotify.com/track/5Fr4wTdt6UVTn3UhU4uCOR?si=aa07fcccfe834c36",
                itunes: "https://music.apple.com/us/album/hexagon-force/1626532804?i=1626533392",
                deezer: "https://deezer.page.link/KQSiNGDbacCWhyoF6",
                odysee: "https://odysee.com/@kingpvz:4/waterflame-hexagon-force-%28hardbass-remix:9"
            }
        }
    },
    {
        title: "Hillz",
        genre: "exp other:Breakcore",
        album: "none",
        year: 2022,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e021f328ef8f475ff900afcb001",
        link: {
            base: {
                youtube: "https://youtu.be/6VSoVbprGf0",
                spotify: "https://open.spotify.com/album/5bG9kfS3FZLP1OSY1Ynwz1?si=sCELrhdwSKqPAMPX6DzffA",
                itunes: "https://music.apple.com/us/album/hillz-single/1604556735",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-hillz-%28breakcore-song%29:2"
            }
        }
    },
    {
        title: "Hoover Base",
        genre: "exp other:Acid-Bass",
        album: "dda",
        year: 2022,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02c6957215eb236e2fbb205db3",
        link: {
            base: {
                youtube: "https://www.youtube.com/watch?v=58B3bZIzoBE",
                spotify: "https://open.spotify.com/track/1aaNDCyV6IuGBIGd1HQd3Y?si=aba97a49d2754006",
                itunes: "https://music.apple.com/us/album/hoover-base/1600087960?i=1600087967",
                deezer: "https://deezer.page.link/3yY6TzzeJFJrw4be9"
            }
        }
    },
    {
        title: "Hopeful Menu",
        genre: "complextro house:Bass-House",
        album: "dda",
        year: 2022,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02c6957215eb236e2fbb205db3",
        link: {
            base: {
                youtube: "https://www.youtube.com/watch?v=NPpW7OrywyE",
                spotify: "https://open.spotify.com/track/1HBxSMnz9sCzHlrUzxQnEw?si=612d9b371f37474b",
                itunes: "https://music.apple.com/us/album/hopeful-menu/1600087960?i=1600087973",
                deezer: "https://deezer.page.link/fVuVD5gir3Nk9GCq7"
            }
        }
    },
    {
        title: "Hug",
        genre: "hh",
        album: "none",
        year: 2023,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e026d07075ce55585dabe1d1beb",
        link: {
            base: {
                youtube: "https://youtu.be/PAADm0me-aM",
                spotify: "https://open.spotify.com/album/6y1gYWFUsuAWIYI4Sh82mO?si=QnmIo2zRTOOJTe3vqwblNA",
                itunes: "https://music.apple.com/us/album/hug-single/1696377840",
                deezer: "https://deezer.page.link/M7s9hABmKCVWCscj8",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-hug-happy-hardcore:1",
                bili: "https://www.bilibili.com/video/BV1LC411s7P4/"
            }
        }
    },
    /*i*/
    {
        title: "I SAID",
        genre: "hardbass:Hardphonk",
        album: "none",
        year: 2023,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e028a0a0bc0775e7ec186ba6e7b",
        link: {
            base: {
                youtube: "https://youtu.be/CZ2GN9afj1Y",
                spotify: "https://open.spotify.com/album/3YqjXE34YwcDhMK9ArmR7M?si=IuCnTzKwTpqtRgU0Plmd7A",
                itunes: "https://music.apple.com/us/album/i-said-single/1689789911",
                deezer: "https://deezer.page.link/GNyg3La8yZ6EsF3v9",
                odysee: "https://odysee.com/@kingpvz:4/i-said-hardphonk-hardbass-x-phonk-made:2"
            }
        }
    },
    {
        title: "I Saw A Thing",
        genre: "exp dubstep:Dubstep hardbass:Hardbass",
        album: "none",
        year: 2021,
        originality: "original",
        lyrics: "lyric",
        language: "English",
        explicit: false,
        cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02c5dfcc3023f70481c460a603",
        link: {
            base: {
                youtube: "https://youtu.be/5VF7tO6Xung",
                spotify: "https://open.spotify.com/album/6mRfioZuNicCCJ74xguhLB?si=G5SLhM2CRvuLMgJqOnb7hA",
                itunes: "https://music.apple.com/us/album/i-saw-a-thing-single/1588283769",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-i-saw-a-thing-%28experimental:3"
            }
        }
    },
    {
        title: "Intermission",
        genre: "swing",
        album: "ritt",
        year: 2024,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e023b63e463b5e5bbc70c52d63e",
        link: {
            base: {
                youtube: "https://youtu.be/RquEKwbxw8M",
                spotify: "https://open.spotify.com/album/04UvNnFMur4vZ1EBWZVmd0?si=0tSQChlUT1SAi2X7rRUU7Q",
                itunes: "https://music.apple.com/us/album/intermission-single/1740137052",
                deezer: "https://deezer.page.link/VUm1Y5edjwC2hrr4A",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-intermission-electro-swing:d",
                bili: "https://www.bilibili.com/video/BV1AW421N75c/"
            }
        }
    },
    {
        title: "Intro",
        genre: "swing",
        album: "ritt",
        year: 2024,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e027eac873ac84cb7f0eaaddb4e",
        link: {
            base: {
                youtube: "https://www.youtube.com/watch?v=-Mr6DVdpf_A",
                spotify: "https://open.spotify.com/track/4gb74pOdUzqgviWSj1r34V?si=5f6f5a4906e24075",
                itunes: "https://music.apple.com/us/album/intro/1776636659?i=1776636669",
                deezer: "https://deezer.page.link/xNXmANPvf7hXHkq78"
            }
        }
    },
    {
        title: "It's just a burning memory",
        genre: "other:Dark-Emotional-Piano-Composition",
        album: "none",
        year: 2023,
        originality: "bootleg",
        originalby: "A1",
        lyrics: "inst",
        explicit: false,
        cover: "https://i1.sndcdn.com/artworks-ZKis51zOhNCEmSjP-lCLIOQ-t500x500.jpg",
        link: {
            base: {
                youtube: "https://youtu.be/_EM3RD0vCIA",
                odysee: "https://odysee.com/@kingpvz:4/it's-just-a-burning-memory-but-with-the:9"
            }
        }
    },
    /*j*/
    {
        title: "Journey",
        genre: "alt",
        album: "aj",
        year: 2021,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e028d1d528642694a584638da73",
        link: {
            base: {
                youtube: "https://youtu.be/4gBnq8Xb77o",
                spotify: "https://open.spotify.com/track/4YWRIMM8hAexLlnhhBf0ni?si=14e98b1268c74033",
                itunes: "https://music.apple.com/us/album/journey/1556910206?i=1556910210",
                deezer: "https://deezer.page.link/iP5YNuqQ4x2XMwWY6",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-journey-%28some-very-strange-edm:3"
            }
        }
    },
    {
        title: "Jo&zcaron;in",
        genre: "other:Uptempo",
        album: "aj",
        year: 2021,
        originality: "remix",
        lyrics: "lyric",
        originalby: "Ivan Ml&aacute;dek",
        language: "Czech",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e028d1d528642694a584638da73",
        link: {
            base: {
                youtube: "https://youtu.be/KMFUx5c7KU0",
                spotify: "https://open.spotify.com/track/5zmgLlSNWjXCMhEoaa08gv?si=33d2d4aa1e524779",
                itunes: "https://music.apple.com/us/album/jo%C5%BEin-feat-ivan-ml%C3%A1dek/1556910206?i=1556910214",
                deezer: "https://deezer.page.link/HJv689hy9a8vfdL77",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-jo%C5%BEin-feat.-ivan-ml%C3%A1dek:a"
            },
            alt: [
                {
                    name: "Instrumental Version",
                    youtube: "https://youtu.be/2DE10h3EllE",
                    spotify: "https://open.spotify.com/track/7uI2KGgH2HXeRUtlYWlwsY?si=665889f49d8e42ca",
                    itunes: "https://music.apple.com/us/album/jo%C5%BEin-instrumental/1556910206?i=1556910396",
                    deezer: "https://deezer.page.link/oSNWoFzf1qdJrkcc8",
                    odysee: "https://odysee.com/@kingpvz:4/kingpvz-jo%C5%BEin-%28instrumental-version%29:4"
                }
            ]
        }
    },
    {
        title: "Jumper",
        genre: "hardbass:Hardbass",
        album: "gb",
        year: 2021,
        originality: "remix",
        originalby: "Waterflame",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0292640ff1a639ef80176402b1",
        link: {
            base: {
                youtube: "https://youtu.be/2aSoDq7Khts",
                spotify: "https://open.spotify.com/track/2P4CGGgLSH4bwzf512DP50?si=9a1ebbbc5df04604",
                itunes: "https://music.apple.com/us/album/jumper/1626532804?i=1626533381",
                deezer: "https://deezer.page.link/cTUEFnJH8SkuqYHh6",
                odysee: "https://odysee.com/@kingpvz:4/waterflame-jumper-%28hardbass-remake-by:e"
            }
        }
    },
    /*k*/
    {
        title: "KFL",
        genre: "hardbass:Hardphonk",
        album: "none",
        year: 2023,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02abf405390f25c31556b86216",
        link: {
            base: {
                youtube: "https://youtu.be/1vgpaRSiR0c",
                spotify: "https://open.spotify.com/album/184ejQ516wMlSRMQXX2xNp?si=t__ah1P_TqGcnefZRW-iXg",
                itunes: "https://music.apple.com/us/album/kfl-single/1683157354",
                deezer: "https://deezer.page.link/dZsjd5LyPsVJctfh8",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-kfl-hardphonk-hardbass-x-phonk:0",
                bili: "https://www.bilibili.com/video/BV1iZ42187Bz/"
            }
        }
    },
    {
        title: "kudu&scaron;",
        genre: "hardbass:Hardbass",
        album: "none",
        year: 2021,
        originality: "original",
        lyrics: "lyric",
        language: "Slovak/English",
        explicit: true,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02cd164752fec7368eaeb6e1bc",
        link: {
            base: {
                youtube: "https://youtu.be/pgJSaV0R9lU",
                spotify: "https://open.spotify.com/album/5pIYLsFicbeWW71sDHdzXk?si=DfR74M53Q3OLGfkvzUfqHA",
                deezer: "https://deezer.page.link/CUj6Qg9b1mpN1Nii7",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-kudu%C5%A1-%28diss-track-hardbass%29:2"
            },
            alt: [
                {
                    name: "Instrumental Version",
                    youtube: "https://www.youtube.com/watch?v=3a3KSsAPDVg",
                    spotify: "https://open.spotify.com/track/419Whbki0J1AYMUneGuE1G?si=d157087bfb854e65",
                    deezer: "https://deezer.page.link/bUWUg4aRAvWtzTCJ8"
                }
            ]
        }
    },
    /*l*/
    {
        title: "Logick&aacute; H&aacute;danka",
        genre: "hardbass:Hardbass",
        album: "none",
        year: 2021,
        originality: "remix",
        lyrics: "lyric",
        language: "Slovak",
        originalby: "Hork&yacute;&zcaron;e Sl&iacute;&zcaron;e",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02621de9d4516149c4ad282c7b",
        link: {
            base: {
                youtube: "https://youtu.be/tkzZ8fbtNDI",
                spotify: "https://open.spotify.com/album/6qzlzwdy4QE06OhOj6ZR6v?si=DmqtsEGbTqKmDmgtkAwZ2g",
                itunes: "https://music.apple.com/us/album/logick%C3%A1-h%C3%A1danka-hardbass-remix-single/1564713252",
                deezer: "https://deezer.page.link/wvk4fvTZek5Lpnz49",
                odysee: "https://odysee.com/@kingpvz:4/hork%C3%BD%C5%BEe-sl%C3%AD%C5%BEe-logick%C3%A1-h%C3%A1danka:f"
            },
            alt: [
                {
                    name: "Instrumental Version",
                    youtube: "https://www.youtube.com/watch?v=09P6KEgGRpk"
                },
                {
                    name: "Extended Version",
                    youtube: "https://www.youtube.com/watch?v=ngrrKh4j1eI",
                    odysee: "https://odysee.com/@kingpvz:4/hork%C3%BD%C5%BEe-sl%C3%AD%C5%BEe-logick%C3%A1-h%C3%A1danka-%28:3"
                },
                {
                    name: "Hyper Extended Version",
                    youtube: "https://www.youtube.com/watch?v=kVfCDE-K268"
                }
            ]
        }
    },
    {
        title: "Lower",
        genre: "house:Deep-House",
        album: "none",
        year: 2024,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02cc52fc27e32c6c6699cec524",
        link: {
            base: {
                youtube: "https://youtu.be/Kg6ZWU_ybf4",
                spotify: "https://open.spotify.com/album/5kBancecJxVGIjaWkKXVoJ?si=c0wFYlDTTb2g1FjXu-Pbvw",
                itunes: "https://music.apple.com/us/album/lower-single/1756127088",
                deezer: "https://deezer.page.link/5uTihchksCprTVTB6",
                bili: "https://www.bilibili.com/video/BV1e63KeFEY9/"
            }
        }
    },
    {
        title: "Lucid",
        genre: "hardbass:Hardbass",
        album: "none",
        year: 2021,
        originality: "original",
        lyrics: "lyric",
        language: "English",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02eb50a195c7e53234c28c5d39",
        link: {
            base: {
                youtube: "https://youtu.be/mTC1n4vmyQk",
                spotify: "https://open.spotify.com/album/6VNUqMshkUSwLmPGLtLog5?si=AAnWt6xoTKSMBd_zxvLRBQ",
                itunes: "https://music.apple.com/us/album/lucid-single/1553848124",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-lucid-%28modern-vocal-hardbass%29:d"
            },
            alt: [
                {
                    name: "Instrumental Version",
                    youtube: "https://youtu.be/iCIv7CFUOr4",
                    odysee: "https://odysee.com/@kingpvz:4/kingpvz-lucid-%28instrumental-hardbass%29:d"
                }
            ]
        }
    },
    /*m*/
    {
        title: "Machina",
        genre: "hardbass:Hardbass",
        album: "gb2",
        year: 2024,
        originality: "remix",
        originalby: "Dex Arson",
        lyrics: "inst",
        explicit: false,
        cover: "https://i.scdn.co/image/ab6761670000ecd4be936e4ef9f2f473c44c575d",
        link: {
            base: {
                youtube: "https://youtu.be/l39BYembwJE",
                ng: "https://www.newgrounds.com/audio/listen/1363142"
            }
        }
    },
    {
        title: "M&aacute;m v P... na Leh&aacute;tku",
        genre: "hardbass:Hardbass",
        album: "wyrtb",
        year: 2020,
        originality: "remix",
        lyrics: "lyric",
        language: "Slovak",
        originalby: "Hork&yacute;&zcaron;e Sl&iacute;&zcaron;e",
        explicit: true,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02e6766239fe245ce862049773",
        link: {
            base: {
                youtube: "https://youtu.be/S2kdGw3fmpI",
                spotify: "https://open.spotify.com/album/5216wnj38Oe7rNini3FW08?si=a0ZJV45pTXyULIBSYmTDYA",
                soundcloud: "https://soundcloud.com/kingpvz/mam-v-p-na-lehatku-hardbass?si=7d119799b92e47ba8c0f301ff20fd82f&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
                itunes: "https://music.apple.com/us/album/m%C3%A1m-v-p-na-leh%C3%A1tku-kingpvz-hardbass-remix-single/1534598190",
                odysee: "https://odysee.com/@kingpvz:4/hork%C3%BD%C5%BEe-sl%C3%AD%C5%BEe-m%C3%A1m-v-p...-na:f"
            }
        }
    },
    {
        title: "Megalovania",
        genre: "hardbass:Hardbass",
        album: "wyrtb",
        year: 2020,
        originality: "remix",
        lyrics: "inst",
        originalby: "Toby Fox",
        explicit: false,
        cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e020cfb81b58dbf989bc442c5ba",
        link: {
            base: {
                youtube: "https://youtu.be/EDgnu2FVoyc",
                spotify: "https://open.spotify.com/album/6NUWxSAhPdDlKVwDRnn1iQ?si=CqxSjaq6RViM646x2NjwQQ",
                soundcloud: "https://soundcloud.com/kingpvz/megalovania-hardbass-remix?si=e24ed6433c164ea28153b125d8a08ea7&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
                deezer: "https://deezer.page.link/yH7oM4HitCGHpTn98",
                odysee: "https://odysee.com/@kingpvz:4/toby-fox-megalovania-%28hardbass-remix%29:5"
            }
        }
    },
    {
        title: "Meme Rewind 2021",
        genre: "house:Bass-House",
        album: "none",
        year: 2021,
        originality: "meme",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02479950e67da361303fcfe14a",
        link: {
            base: {
                youtube: "https://youtu.be/MEq3wdoA5lo",
                spotify: "https://open.spotify.com/album/3FrlnsYFUfH3598KLKurtB?si=TtMnrzfhQ4KnEOgoxKbrpQ",
                itunes: "https://music.apple.com/us/album/meme-rewind-2021-single/1594673420",
                deezer: "https://deezer.page.link/nxuHeiBfHdpgtBJcA",
                odysee: "https://odysee.com/@kingpvz:4/meme-music-rewind-2021:3"
            }
        }
    },
    {
        title: "Meme Rewind 2022",
        genre: "other:Phonk house:Bass-House",
        album: "none",
        year: 2022,
        originality: "meme",
        lyrics: "lyric",
        explicit: true,
        language: "English",
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02fca44cfc6f5132dae5dd0097",
        link: {
            base: {
                youtube: "https://youtu.be/J7zlpZz2Y8A",
                spotify: "https://open.spotify.com/album/2feL6o3KJHyyu7tpI9Cmws?si=dPxS6WIGRqS5U7QdM6uVAQ",
                itunes: "https://music.apple.com/us/album/meme-rewind-2022-single/1661344832",
                deezer: "https://deezer.page.link/mMpuRUsnbLtyvrzK8",
                odysee: "https://odysee.com/@kingpvz:4/meme-music-rewind-2022:a"
            }
        }
    },
    {
        title: "Meme Rewind 2023",
        genre: "complextro fbass other:Drift-Phonk",
        album: "none",
        year: 2023,
        originality: "meme",
        lyrics: "lyric",
        explicit: true,
        language: "Polish/Mr Beast/Skibidi/French",
        cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02b0e85af538c15ca88eb86e26",
        link: {
            base: {
                youtube: "https://youtu.be/Mw1MgPPenME",
                spotify: "https://open.spotify.com/album/2D8l1LhENYLZuGoOTX4avx?si=rWYocG04Rc-rqfSNYDcpKw",
                itunes: "https://music.apple.com/us/album/meme-rewind-2023-single/1724417989",
                deezer: "https://deezer.page.link/RZbvReQoVrWJiPTY6",
                odysee: "https://odysee.com/@kingpvz:4/meme-rewind-2023:c"
            }
        }
    },
    {
        title: "Metalcord",
        genre: "hardbass:Metalcord",
        album: "none",
        year: 2021,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0214cd7cca75ae779300489696",
        link: {
            base: {
                youtube: "https://youtu.be/fABSPdBdEtE",
                spotify: "https://open.spotify.com/album/5LmBNBsn1I5350EXDM1mQI?si=OZqzgSIxRDWnuaTy4rlLIw",
                itunes: "https://music.apple.com/us/album/metalcord-single/1576614987",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-metalcord-%28metalcord-hardbass:0"
            }
        }
    },
    {
        title: "MF",
        genre: "dubstep:Brostep",
        album: "none",
        year: 2022,
        originality: "original",
        lyrics: "lyric",
        language: "English",
        collab: "slavmax",
        explicit: true,
        cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02ac9c6c323bc2de8d29e35b7f",
        link: {
            base: {
                youtube: "https://youtu.be/zj1Rade3UiQ",
                spotify: "https://open.spotify.com/album/7c77q4Tq8fUaIWdGbePUS3?si=4xAWruVSRq6AcOeDj8cOBQ",
                itunes: "https://music.apple.com/us/album/mf-single/1608204526",
                deezer: "https://deezer.page.link/dPC4AJdjjBfdpvWd9",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-x-slavmax-mf-ultimate-brostep:a"
            }
        }
    },
    /*n*/
    {
        title: "Native",
        genre: "alt other:Downtempo",
        album: "aj",
        year: 2021,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e028d1d528642694a584638da73",
        link: {
            base: {
                youtube: "https://youtu.be/Tpmp_RScSUw",
                spotify: "https://open.spotify.com/track/3AK2gLRYlwOPifPhmKT2wM?si=163adc20da7144e8",
                itunes: "https://music.apple.com/us/album/native/1556910206?i=1556910209",
                deezer: "https://deezer.page.link/Z11DxjYtzMdkh7wQ7",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-native-%28i-truly-have-no-idea:4"
            }
        }
    },
    {
        title: "Nerob !!!",
        genre: "hardbass:Hardbass",
        album: "wyrtb",
        year: 2020,
        originality: "remix",
        lyrics: "inst",
        originalby: "Hork&yacute;&zcaron;e Sl&iacute;&zcaron;e",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e029a16e8e7abf9a67ade32ecaa",
        link: {
            base: {
                youtube: "https://youtu.be/w4fGrY3grj8",
                spotify: "https://open.spotify.com/album/4KZbgWRw1T6CFCZkN8Mg5k?si=btiuOYO8Sd6x3qRaG5cggg",
                soundcloud: "https://soundcloud.com/kingpvz/nerob-hardbass-remix?si=cf36c455981d4d8bbf45b8e0ba741921&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
                itunes: "https://music.apple.com/us/album/nerob-feat-hork%C3%BD%C5%BEe-sl%C3%AD%C5%BEe-hard-bass-remix-single/1528775966",
                deezer: "https://deezer.page.link/QccReZdyaK1hVv3U7"
            }
        }
    },
    {
        title: "Never Gonna Give You Up",
        genre: "house:Electro-House",
        album: "none",
        year: 2022,
        originality: "remix",
        lyrics: "inst",
        originalby: "Rick Astley",
        explicit: false,
        cover: "https://i.scdn.co/image/ab6761670000ecd4be936e4ef9f2f473c44c575d",
        link: {
            base: {
                youtube: "https://youtu.be/RTH75KtYao4",
                odysee: "https://odysee.com/@kingpvz:4/ultimate-patriotic-remix-of-the-american:5"
            }
        }
    },
    {
        title: "New Day",
        genre: "other:Electronica",
        album: "none",
        year: 2022,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02290287a78f30753fe2c642df",
        link: {
            base: {
                youtube: "https://youtu.be/AoEkcGYKyAk",
                spotify: "https://open.spotify.com/album/2j1HppppU6AEJMpqerdDLf?si=pLWXj5L0QI-p-IXJTKhNLw",
                itunes: "https://music.apple.com/us/album/new-day-single/1656422457",
                deezer: "https://deezer.page.link/Jqp8RSmyiNWUsNda6",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-new-day-%2890s-styled-electronica%29:0"
            }
        }
    },
    /*o*/
    {
        title: "Oh No!",
        genre: "hardbass:Hardbass",
        album: "none",
        year: 2020,
        originality: "original",
        lyrics: "lyric",
        language: "Slovak",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02c7ecd5a41c76799e46b61ea3",
        link: {
            base: {
                youtube: "https://youtu.be/jh7BietsDsQ",
                spotify: "https://open.spotify.com/album/0YD5TecCM3LdW0YGJ5MWJi?si=BpTT6_niSHqIPMlIJd6hBw",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-oh-no!-feat.-igor-matovi%C4%8D:e"
            }
        }
    },
    /*p*/
    {
        title: "Pancake",
        genre: "other:Uptempo hardbass:Hardbass",
        album: "none",
        year: 2021,
        originality: "original",
        lyrics: "lyric",
        language: "English/Slovak",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02b677f3186e5c13a52e23dfb4",
        link: {
            base: {
                youtube: "https://youtu.be/rSw3rwn34Yg",
                spotify: "https://open.spotify.com/album/4IgdBWuM40UM1PkMX1Kdsj?si=dRlDm8jGQX69tW0t2pg7Ow",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-pancake-%28ultimate-fast-hardbass:f"
            },
            alt: [
                {
                    name: "Instrumental Version",
                    youtube: "https://youtu.be/O8hRfpDmjOI",
                    odysee: "https://odysee.com/@kingpvz:4/kingpvz-pancake-%28fast-instrumental:3"
                }
            ]
        }
    },
    {
        title: "Parkovi&scaron;t&ecaron;",
        genre: "house:Screech-Bass-House",
        album: "none",
        year: 2022,
        originality: "remix",
        lyrics: "lyric",
        language: "Czech",
        originalby: "Hork&yacute;&zcaron;e Sl&iacute;&zcaron;e",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e026d5436f7e70996e9fcec9d26",
        link: {
            base: {
                youtube: "https://youtu.be/UdRwnW2KAA4",
                spotify: "https://open.spotify.com/album/7KE7IL0AZlSS4nNM5MaYho?si=YrMFmHh-SXOXxo74yE0J2A",
                itunes: "https://music.apple.com/us/album/parkovi%C5%A1t%C4%9B-single/1608042517",
                odysee: "https://odysee.com/@kingpvz:4/hork%C3%BD%C5%BEe-sl%C3%AD%C5%BEe-parkovi%C5%A1t%C4%9B:b"
            }
        }
    },
    {
        title: "Party Time",
        genre: "house:Bass-House",
        album: "none",
        year: 2024,
        originality: "remix",
        originalby: "Chikara",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02cc1908f293c86350e4d2499f",
        link: {
            base: {
                youtube: "https://youtu.be/fyvHWfA6me8",
                spotify: "https://open.spotify.com/album/0ECGMzDRycvYTem8w6bon6?si=xFvq5KvVSv6y9YhSCmMqYQ",
                itunes: "https://music.apple.com/us/album/party-time-single/1771448779",
                deezer: "https://deezer.page.link/XhNt8KiQooVgfCU39"
            }
        }
    },
    {
        title: "Patriot",
        genre: "hardbass:Hardbass",
        album: "none",
        year: 2021,
        originality: "original",
        lyrics: "lyric",
        language: "English/Slovak",
        explicit: false,
        collab: "leslovak",
        cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e028d08033b84c598493df3b162",
        link: {
            base: {
                youtube: "https://youtu.be/fiMzEhU6eyg?si=R5mvjYD49m-oSHPp",
                spotify: "https://open.spotify.com/album/2DwTM1E30CcKjm2o1DqfVi?si=D6suAYe2S8q7q0z04-2FRA",
                itunes: "https://music.apple.com/us/album/patriot-feat-kingpvz-single/1572971892",
                deezer: "https://deezer.page.link/xKT92rcWzk62BZg59"
            }
        }
    },
    {
        title: "Patron (Патрон)",
        genre: "hardbass:Hardbass",
        album: "none",
        year: 2021,
        originality: "original",
        lyrics: "lyric",
        language: "Cheeki Breeki i v Damke",
        explicit: false,
        collab: "slavmax",
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02602e279e4bd58d60cafca524",
        link: {
            base: {
                youtube: "https://youtu.be/rMgMRigT--A",
                spotify: "https://open.spotify.com/album/0nVYDeh1wYaLVyzquRczpz?si=56dV4M0yQle0CUPLZAM3BQ",
                itunes: "https://music.apple.com/us/album/%D0%BF%D0%B0%D1%82%D1%80%D0%BE%D0%BD-single/1562184713",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-x-slavmax-%D0%BF%D0%B0%D1%82%D1%80%D0%BE%D0%BD-%28ultimate:6"
            },
            alt: [
                {
                    name: "8D Version",
                    youtube: "https://youtu.be/DGY4l6l6udQ",
                    odysee: "https://odysee.com/@kingpvz:4/kingpvz-x-slavmax-patron-(8d-hardbass):1"
                }
            ]
        }
    },
    {
        title: "Paused Dreams",
        genre: "other:Calming-Music",
        album: "dda",
        year: 2022,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02c6957215eb236e2fbb205db3",
        link: {
            base: {
                youtube: "https://www.youtube.com/watch?v=Ze8kdsKlZo0",
                spotify: "https://open.spotify.com/track/136d8q7KtYaBJidILm4iwP?si=70f0455c70f14612",
                itunes: "https://music.apple.com/us/album/paused-dreams/1600087960?i=1600087972",
                deezer: "https://deezer.page.link/HFNSWxJ4kGZoRUzP7"
            }
        }
    },
    {
        title: "Payload",
        genre: "hardbass:Hardbass",
        album: "gb2",
        year: 2023,
        originality: "remix",
        originalby: "Dex Arson",
        lyrics: "inst",
        explicit: false,
        cover: "https://i.scdn.co/image/ab6761670000ecd4be936e4ef9f2f473c44c575d",
        link: {
            base: {
                youtube: "https://youtu.be/eChwi3E2-fI",
                odysee: "https://odysee.com/@kingpvz:4/dex-arson-payload-(hardbass-remix-by:1"
            }
        }
    },
    {
        title: "Pears",
        genre: "hardbass:Hardbass",
        album: "none",
        year: 2023,
        originality: "original",
        lyrics: "lyric",
        language: "Slavic Stanovian",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e021f5e14a11ec71cf97c4d3417",
        link: {
            base: {
                youtube: "https://youtu.be/gjG2Wo63Vxw",
                spotify: "https://open.spotify.com/album/0xklYFtcU4dahUgjqMr69P?si=c70XWVcZQRWlKqqdrFdA8w",
                itunes: "https://music.apple.com/us/album/pears-single/1690396153",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-pears-ultimate-hardbass:f"
            },
            alt: [
                {
                    name: "Instrumental Version",
                    youtube: "https://www.youtube.com/watch?v=cRgnpH7aTxU",
                    spotify: "https://open.spotify.com/track/2pSRfpwSfZ7Fukyi3qaLF6?si=805786c5a11d4278",
                    itunes: "https://music.apple.com/us/album/pears-instrumental/1690396153?i=1690396155"
                }
            ]
        }
    },
    {
        title: "Pelle Coat (Euphoria Power)",
        genre: "fbass trap",
        album: "none",
        year: 2023,
        originality: "remix",
        lyrics: "lyric",
        language: "English",
        originalby: "Lil Durk",
        explicit: true,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02fda6c407d6a147c0c8e65863",
        link: {
            base: {
                youtube: "https://youtu.be/2GOAuhAu-aw",
                odysee: "https://odysee.com/@kingpvz:4/lildurk-pelle-coat-(future-bass-remix-by:3"
            },
            alt: [
                {
                    name: "Instrumental Version (Euphoria Power)",
                    youtube: "https://www.youtube.com/watch?v=BE9l-if5f1A",
                    spotify: "https://open.spotify.com/album/1INdoXb6AHBgouqgVQnd52?si=7GjVZEKVR1yK56ME5600Fw",
                    itunes: "https://music.apple.com/us/album/euphoria-power-single/1735342385",
                    deezer: "https://deezer.page.link/b4aieagogSRe47p99"
                }
            ]
        }
    },
    {
        title: "Planetone",
        genre: "exp house:Future-House",
        album: "dda",
        year: 2022,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02c6957215eb236e2fbb205db3",
        link: {
            base: {
                youtube: "https://www.youtube.com/watch?v=ZNuinUvK7vw",
                spotify: "https://open.spotify.com/track/685ANjcp5G7CiOBcalInSG?si=518e7bdbae4746ae",
                itunes: "https://music.apple.com/us/album/planetone/1600087960?i=1600087968",
                deezer: "https://deezer.page.link/n52V8g5pwJbeDmqC7"
            }
        }
    },
    {
        title: "Po Schodoch",
        genre: "house:Bass-House",
        album: "none",
        year: 2023,
        originality: "remix",
        lyrics: "lyric",
        language: "Slovak",
        originalby: "Richard M&uuml;ller",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02a823e99023529c9f6cb56f23",
        link: {
            base: {
                youtube: "https://youtu.be/JndFkX9sxqo",
                spotify: "https://open.spotify.com/album/7H0P2Nx2hHzX5sKzE69sSE?si=5nv6pKElQB-wOt1XDlWg6g",
                itunes: "https://music.apple.com/us/album/po-schodoch-kingpvz-bass-house-remix-single/1689526572",
                deezer: "https://deezer.page.link/Ngm2xXBCc2zf2iR76",
                odysee: "https://odysee.com/@kingpvz:4/richard-m%C3%BCller-po-schodoch-%28bass-house:f"
            }
        }
    },
    {
        title: "Polargeist",
        genre: "hardbass:Hardbass",
        album: "gb",
        year: 2021,
        originality: "remix",
        originalby: "Step",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0292640ff1a639ef80176402b1",
        link: {
            base: {
                youtube: "https://youtu.be/5naIg-v8meY",
                spotify: "https://open.spotify.com/track/3G9Nzlrh9yXiLeTUsl5pHg?si=adb36a2dfa6b4730",
                itunes: "https://music.apple.com/us/album/polargeist/1626532804?i=1626533377",
                deezer: "https://deezer.page.link/5JQQ3s6qZnfCjgRg6",
                odysee: "https://odysee.com/@kingpvz:4/step-polargeist-%28hardbass-remix-by:e"
            }
        }
    },
    {
        title: "Polish Uprise (Mashup)",
        genre: "house:House",
        album: "none",
        year: 2021,
        originality: "remix",
        lyrics: "lyric",
        originalby: "EnV/Cypis",
        language: "Polish",
        explicit: true,
        cover: "https://i.imgflip.com/4tdvei.png",
        link: {
            base: {
                youtube: "https://www.youtube.com/watch?v=hmaPOSo_fco",
                odysee: "https://odysee.com/@kingpvz:4/polish-uprise-%28polish-cow-x-uprise-by:f"
            }
        }
    },
    {
        title: "Pozri",
        genre: "hardbass:Hardbass other:Rock",
        album: "none",
        year: 2022,
        originality: "bootleg",
        lyrics: "lyric",
        originalby: "BijouTerrier",
        language: "Slovak",
        explicit: true,
        cover: "https://i.scdn.co/image/ab6761670000ecd4be936e4ef9f2f473c44c575d",
        link: {
            base: {
                youtube: "https://youtu.be/4KgtDqDa6KE",
                odysee: "https://odysee.com/@kingpvz:4/bijouterrier-pozri-(kingpvz's-hardbass:b"
            }
        }
    },
    {
        title: "Privet (Привет)",
        genre: "hardbass:Hardbass",
        album: "uh wyrtb",
        year: 2020,
        originality: "original",
        lyrics: "lyric",
        language: "(Sung by Hbkn, Lyrics from Gopnitsa 2 by Uamee)<br>Russian/English",
        explicit: true,
        cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e028f75b3252e8bfa067c90c066",
        link: {
            base: {
                youtube: "https://youtu.be/gKK_M89agFY",
                spotify: "https://open.spotify.com/track/1nxESPavw1iNkW1lUGjs2y?si=7973d2084d3040de",
                soundcloud: "https://soundcloud.com/kingpvz/privet?si=0f54e3b9e2c64a4b887e36232604d3b2&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
                itunes: "https://music.apple.com/us/album/%D0%BF%D1%80%D0%B8%D0%B2%D0%B5%D1%82-feat-hbkn/1540050080?i=1540050082",
                deezer: "https://deezer.page.link/R2JkUpUeJMdWxxC6A",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-%D0%BF%D1%80%D0%B8%D0%B2%D0%B5%D1%82-%28privet%29-feat.-hbkn:1"
            },
            alt: [
                {
                    name: "Instrumental Version",
                    youtube: "https://youtu.be/itkiQ-V7IUA",
                    odysee: "https://odysee.com/@kingpvz:4/kingpvz-%D0%BF%D1%80%D0%B8%D0%B2%D0%B5%D1%82-%28privet%29-feat.-2:1"
                }
            ]
        }
    },
    {
        title: "Privet (Привет) - Remastered",
        genre: "hardbass:Hardbass",
        album: "none",
        year: 2021,
        originality: "original",
        lyrics: "lyric",
        language: "(Sung by Hbkn, Lyrics from Gopnitsa 2 by Uamee)<br>Russian/English",
        explicit: true,
        cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02d27ba07ad019c1c7bfa9fdbc",
        link: {
            base: {
                youtube: "https://youtu.be/iZK_VGDpLxw",
                spotify: "https://open.spotify.com/album/6JqSLUTXeXRfhiLbh0HNaZ?si=B0XqeCKcRfKOEOSA8_bQiw",
                itunes: "https://music.apple.com/us/album/%D0%BF%D1%80%D0%B8%D0%B2%D0%B5%D1%82-feat-hbkn-remastered-version-single/1593424831",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-%D0%BF%D1%80%D0%B8%D0%B2%D0%B5%D1%82-%28privet%29-remastered:a"
            },
            alt: [
                {
                    name: "Instrumental Version",
                    youtube: "https://www.youtube.com/watch?v=35-z9Nb4AzY"
                }
            ]
        }
    },
    {
        title: "Protocol",
        genre: "complextro",
        album: "none",
        year: 2024,
        originality: "remix",
        lyrics: "inst",
        originalby: "MyNewSoundtrack/MasterSwordRemix",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02146d376930ca760f5dd33818",
        link: {
            base: {
                youtube: "https://youtu.be/sPeCroOnuRs",
                spotify: "https://open.spotify.com/album/1RL4ofTZ9koPNdfIcNzVy8?si=i4Kg_LsmQG6blqLjjEsMwQ",
                itunes: "https://music.apple.com/us/album/protocol-remix-single/1723882980",
                deezer: "https://deezer.page.link/RgKchJSA9rufaFjx8",
                odysee: "https://odysee.com/@kingpvz:4/undertale-yellow-protocol-%28complextro:9"
            }
        }
    },
    /*q*/

    /*r*/
    {
        title: "Radar",
        genre: "hardbass:Hardbass/Metalcord",
        album: "none",
        year: 2021,
        originality: "original",
        lyrics: "lyric",
        language: "English/Russian",
        collab: "slavmax dogload",
        explicit: true,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0250ffadfc960c1edea9650628",
        link: {
            base: {
                youtube: "https://youtu.be/gYOBKEu8q1k",
                spotify: "https://open.spotify.com/album/2G9gZ1C64q5DNtP2im26oH?si=VEvyDcoUQIGd4qZpLdUVAQ",
                itunes: "https://music.apple.com/us/album/radar-single/1580556668",
                deezer: "https://deezer.page.link/uQJ3R2eWMyWC5JVE8"
            },
            alt: [
                {
                    name: "Instrumental Version",
                    youtube: "https://youtu.be/UNaFBwZXG-A",
                    spotify: "https://open.spotify.com/track/4pR6qsEz7Oh5b2g3hoiN2T?si=938f5d7518d94f43",
                    itunes: "https://music.apple.com/us/album/radar-instrumental/1580556668?i=1580556671",
                    deezer: "https://deezer.page.link/ei4M68U29ZFyvMLu5",
                    odysee: "https://odysee.com/@kingpvz:4/kingpvz%2C-dogload%2C-slavmax-radar:3"
                }
            ]
        }
    },
    {
        title: "Razor",
        genre: "house:Bass-House",
        album: "none",
        year: 2021,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0262a5e9e76f0ed96f0b6a78f9",
        link: {
            base: {
                youtube: "https://youtu.be/8TmFcgvtAAM",
                spotify: "https://open.spotify.com/album/3gPUy34K18bbD9djErM5Q8?si=smsN6_Z5Ry-WVRg9At9dhQ",
                itunes: "https://music.apple.com/us/album/razor-single/1580409181",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-razor-%28bass-house-ultimate-song%29:2"
            }
        }
    },
    {
        title: "Rivalry",
        genre: "alt house:Brass-House",
        album: "none",
        year: 2023,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0274c011dbcd1aa921a85d6259",
        link: {
            base: {
                youtube: "https://youtu.be/r5GNxTwq9No",
                spotify: "https://open.spotify.com/album/3U7eepw33pJXR5C1xxtZOe?si=I6gwmYkEQOmpYWDR-tbYUA",
                itunes: "https://music.apple.com/us/album/rivalry-single/1675905012",
                deezer: "https://deezer.page.link/HfpCjQzP45D25iY98",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-rivalry-%28alternative-trap-house%29:e"
            }
        }
    },
    {
        title: "Roaring in the 20s",
        genre: "swing",
        album: "ritt",
        year: 2024,
        originality: "remix",
        originalby: "Max Coveri",
        lyrics: "lyric",
        language: "English",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e027eac873ac84cb7f0eaaddb4e",
        link: {
            base: {
                youtube: "https://youtu.be/WrNOHhO1RUc",
                spotify: "https://open.spotify.com/track/7fEwH6Yz4pDkLXxy7A9C0E?si=364dca3fee1e4dcf",
                itunes: "https://music.apple.com/us/album/roaring-in-the-20s/1776636659?i=1776636672",
                deezer: "https://deezer.page.link/LrERJktkoY57t17s5"
            }
        }
    },
    {
        title: "Rush B",
        genre: "alt hardbass:Hardbass",
        album: "none",
        year: 2021,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e022b6e4ba0486e7f6ed1147da4",
        link: {
            base: {
                youtube: "https://youtu.be/-2BcQ047qVM",
                spotify: "https://open.spotify.com/album/3UaNAyisnEsvcIf9fsdoTO?si=T3NbKQ9IRxe8YwQ3e8M8eA",
                itunes: "https://music.apple.com/us/album/rush-b-single/1558897429",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-rush-b-%28unique-hardbass%29:4"
            }
        }
    },
    {
        title: "Rush E",
        genre: "hardbass:Hardbass",
        album: "none",
        year: 2021,
        originality: "remix",
        originalby: "Sheet Music Boss",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02d2d9a01b8929af2b42eb03da",
        link: {
            base: {
                youtube: "https://youtu.be/_328IxGbB38",
                spotify: "https://open.spotify.com/album/3Z1Tx1u1l95aBKepGFcLZ0?si=Ws6oJ-iyQ6KRBe3y1e4TFQ",
                itunes: "https://music.apple.com/us/album/rush-e-hardbass-remix-single/1580768712",
                deezer: "https://deezer.page.link/c5r2mMgVVM6awF1P9",
                odysee: "https://odysee.com/@kingpvz:4/rush-e...-but-it%27s-even-more-russian:1"
            }
        }
    },
    /*s*/
    {
        title: "sans engineer",
        genre: "other:Megalovania",
        album: "none",
        year: 2022,
        originality: "remix",
        lyrics: "lyric",
        originalby: "Toby Fox",
        language: "English",
        explicit: false,
        cover: "https://i.scdn.co/image/ab6761670000ecd4be936e4ef9f2f473c44c575d",
        link: {
            base: {
                youtube: "https://youtu.be/gmwzWcoXuIg",
                odysee: "https://odysee.com/@kingpvz:4/sans-engineer-(full-version)-megalovania:d"
            }
        }
    },
    {
        title: "Sharpington",
        genre: "house:Bass-House",
        album: "dda",
        year: 2022,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02c6957215eb236e2fbb205db3",
        link: {
            base: {
                youtube: "https://www.youtube.com/watch?v=YiDGhg-VbCg",
                spotify: "https://open.spotify.com/track/7EaOZB91OUtgjynN1mOrVc?si=d0e228f420094502",
                itunes: "https://music.apple.com/us/album/paused-dreams/1600087960?i=1600087972",
                deezer: "https://deezer.page.link/6CB4isRzFXxP49Aj6"
            }
        }
    },
    {
        title: "SKIBIDI",
        genre: "hardbass:Hardbass",
        album: "none",
        year: 2023,
        originality: "bootleg",
        lyrics: "lyric",
        originalby: "Little Big",
        language: "Skibidi",
        explicit: false,
        cover: "https://i.scdn.co/image/ab6761670000ecd4be936e4ef9f2f473c44c575d",
        link: {
            base: {
                youtube: "https://youtu.be/xcwb0wYveoQ",
                odysee: "https://odysee.com/@kingpvz:4/little-big-skibidi-hardbass-bootleg-by:8"
            }
        }
    },
    {
        title: "Skibidi Toilet",
        genre: "house:Deep-House dubstep:Riddim",
        album: "none",
        year: 2023,
        originality: "remix",
        lyrics: "lyric",
        originalby: "Timbaland/Biser King",
        language: "English/Skibidi",
        explicit: false,
        cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0200ee9d5d874ec20255031153",
        link: {
            base: {
                youtube: "https://youtu.be/EzJJCZuycEs",
                odysee: "https://odysee.com/@kingpvz:4/skibidi-toilet-song-house-remix-by:b"
            },
            alt: [
                {
                    name: "Instrumental Version",
                    youtube: "https://www.youtube.com/watch?v=Mn-fYUnNm6E",
                    spotify: "https://open.spotify.com/album/2ln9uyrqZ9sXrAZpJsFLFH?si=qYaQtAo9T0mz7Z7TQ7ksEg",
                    itunes: "https://music.apple.com/us/album/skibidi-toilet-instrumental-single/1719683624",
                    deezer: "https://deezer.page.link/B8NikVEuwcambSNb7"
                }
            ]
        }
    },
    {
        title: "Soy Yo",
        genre: "hardbass:Hardbass",
        album: "none",
        year: 2021,
        originality: "remix",
        originalby: "Bomba Est&eacute;ro",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02772210107df919489d8f285e",
        link: {
            base: {
                youtube: "https://youtu.be/jZ28D51MqEc",
                spotify: "https://open.spotify.com/album/4D7kHby6FIsWqrp98el8pp?si=BzzyTcLvTDOcVfgrq0k05w",
                deezer: "https://deezer.page.link/oD6pmr2sGZ3SHamE7",
                odysee: "https://odysee.com/@kingpvz:4/bomba-est%C3%A9reo-soy-yo-%28hardbass-remix-by:0"
            }
        }
    },
    {
        title: "Spider Dance",
        genre: "hardbass:Hardbass",
        album: "none",
        year: 2021,
        originality: "remix",
        originalby: "Toby Fox",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e020ed59375c480606668511b14",
        link: {
            base: {
                youtube: "https://youtu.be/WsKbVNAcLo4",
                spotify: "https://open.spotify.com/album/7CGJAXHqTtxyZDLDqFAnCs?si=1HtrI3oATJmSFzlcKhvAbg",
                itunes: "https://music.apple.com/us/album/spider-dance-hardbass-remix-single/1579363602",
                deezer: "https://deezer.page.link/BM5EzmpibM4gCLC5A",
                odysee: "https://odysee.com/@kingpvz:4/toby-fox-spider-dance-%28hardbass-remix-by:b"
            }
        }
    },
    {
        title: "Stay Inside Me",
        genre: "hardbass:Hardbass",
        album: "gb",
        year: 2022,
        originality: "remix",
        originalby: "Ocular Nebula",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0292640ff1a639ef80176402b1",
        link: {
            base: {
                youtube: "https://youtu.be/N4rlXY0UdXc",
                spotify: "https://open.spotify.com/track/34m0zDGBALwbpEYbkylTxd?si=f48cce18df5942f2",
                itunes: "https://music.apple.com/us/album/stay-inside-me/1626532804?i=1626533398",
                deezer: "https://deezer.page.link/MwtpEksXfRapMDi86",
                odysee: "https://odysee.com/@kingpvz:4/ocular-nebula-stay-inside-me-%28hardbass:4"
            }
        }
    },
    {
        title: "Steppin' Sides",
        genre: "swing",
        album: "ritt",
        year: 2024,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0288405daa39016b1ad3a9e0b0",
        link: {
            base: {
                youtube: "https://youtu.be/EASoSVyVfI4",
                spotify: "https://open.spotify.com/album/1snKNqfjMB8Vak094LlnLb?si=c1C4RcOeSJOgZ4qudcOvdQ",
                itunes: "https://music.apple.com/us/album/steppin-sides-single/1732303926",
                deezer: "https://deezer.page.link/v8NpjqA5JNcoCUtk9",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-steppin%27-sides-electro-swing:5",
                bili: "https://www.bilibili.com/video/BV1Vv421y7BQ/"
            }
        }
    },
    {
        title: "Stereo Madness",
        genre: "hardbass:Hardbass",
        album: "gb",
        year: 2020,
        originality: "remix",
        originalby: "Forever Bound",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0292640ff1a639ef80176402b1",
        link: {
            base: {
                youtube: "https://youtu.be/jcdR0zK8kTk",
                spotify: "https://open.spotify.com/track/6n2mXH7LL6nm7pmQaB9bnk?si=326969e5755642b0",
                itunes: "https://music.apple.com/us/album/stereo-madness/1626532804?i=1626532805",
                deezer: "https://deezer.page.link/vHqne8jB68aJLyfx7",
                odysee: "https://odysee.com/@kingpvz:4/forever-bound-stereo-madness-%28hardbass:5"
            }
        }
    },
    {
        title: "Stormstep",
        genre: "dubstep:Minimal-Dubstep",
        album: "dda",
        year: 2022,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02c6957215eb236e2fbb205db3",
        link: {
            base: {
                youtube: "https://www.youtube.com/watch?v=bX_H3JC2fhs",
                spotify: "https://open.spotify.com/track/1BCjl5rdQ1KqjrE2mz0Xsw?si=09b954a68c0b4aaf",
                itunes: "https://music.apple.com/us/album/stormstep/1600087960?i=1600087962",
                deezer: "https://deezer.page.link/oNwXDgJ1ccFv4SYP6"
            }
        }
    },
    {
        title: "Stroke",
        genre: "exp hardbass:Metalcord",
        album: "none",
        year: 2022,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02eb9bca3c2762dad84da4a71a",
        link: {
            base: {
                youtube: "https://youtu.be/B_4kgZzbEhI",
                spotify: "https://open.spotify.com/album/3wi9V29INSZx2JMysp7VQa?si=ZzY2AhubTaeZRcV6FeFCyw",
                itunes: "https://music.apple.com/us/album/stroke-single/1652007595",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-stroke-metalcord-hardbass:b"
            }
        }
    },
    {
        title: "Swingibass",
        genre: "hardbass:Hardbass",
        album: "wyrtb",
        year: 2020,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e029e3a4531c41149e6c2974f8b",
        link: {
            base: {
                youtube: "https://youtu.be/M3-1yjd_9bA",
                spotify: "https://open.spotify.com/album/69v8zpSynpN6wx8KGpkOc5?si=z21adcmaQhqhhxdNjILHSA",
                soundcloud: "https://soundcloud.com/kingpvz/swingibass?si=87cabe6ac4c54f59b9e6aef597c6aa72&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
                itunes: "https://music.apple.com/us/album/swingibass-single/1552257496",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-swingibass-%28hardbass-swing%29-4k:9"
            }
        }
    },
    {
        title: "Synthesis",
        genre: "house:Deep-House trap",
        album: "none",
        year: 2023,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e024e0ebc0d43c3c6b0e8717abe",
        link: {
            base: {
                youtube: "https://youtu.be/eEx2XxBPVvs",
                spotify: "https://open.spotify.com/album/4b8XpQkVC6xftcppcNrdKG?si=sb66my1uRrSoKvaaTMSJbg",
                itunes: "https://music.apple.com/us/album/synthesis-single/1712321641",
                deezer: "https://deezer.page.link/FE7bivsBBPSMu9sg8",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-synthesis-deep-house:e"
            }
        }
    },
    /*t*/
    {
        title: "Take It To The Max",
        genre: "hardbass:Hardbass",
        album: "none",
        year: 2021,
        originality: "remix",
        lyrics: "lyric",
        language: "English",
        originalby: "Phil Swift",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0259ac70c9203f94ca5b14b9bc",
        link: {
            base: {
                youtube: "https://youtu.be/41m8A9z-NsY",
                spotify: "https://open.spotify.com/album/2mTNVYIGkO6v9IbJOzpVZH?si=a4hsu7omRJu5dcTPhbCVBA",
                itunes: "https://music.apple.com/us/album/take-it-to-the-max-feat-phil-swift-hardbass-remix-single/1593424609",
                deezer: "https://deezer.page.link/kZvAu8WEkjt3oxZt9",
                odysee: "https://odysee.com/@kingpvz:4/phil-swift-and-the-sealers-take-it-to:6"
            },
            alt: [
                {
                    name: "Instrumental Version",
                    youtube: "https://www.youtube.com/watch?v=hB2dJW-Wx7s"
                }
            ]
        }
    },
    {
        title: "Tear it Up",
        genre: "swing",
        album: "ritt",
        year: 2024,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0291c20961271093b9b96a893d",
        link: {
            base: {
                youtube: "https://youtu.be/YEfAOCmFPZ0",
                spotify: "https://open.spotify.com/album/4pkhKXeoDn8Z07Do1mWV6c?si=8dAOTOauTYy2D4_L6ZKIlg",
                itunes: "https://music.apple.com/us/album/tear-it-up-single/1732525341",
                deezer: "https://deezer.page.link/Ww2CxpvZouFjidzKA",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-tear-it-up-electro-swing:3",
                bili: "https://www.bilibili.com/video/BV1ex4y1y7nF/"
            },
            alt: [
                {
                    name: "Extended Version",
                    youtube: "https://www.youtube.com/watch?v=3HKCVNXBOcg",
                    spotify: "https://open.spotify.com/track/35eM6O10jw1oLWYAjdyYi7?si=3c9dccc2fa3d4d0b",
                    itunes: "https://music.apple.com/us/album/tear-it-up-extended-version/1776636659?i=1776636819",
                    deezer: "https://deezer.page.link/2KJrGnpRcq9jKan26"
                }
            ]
        }
    },
    {
        title: "The 8th Seas",
        genre: "hardbass:Hardbass",
        album: "gb2",
        year: 2023,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://i.scdn.co/image/ab6761670000ecd4be936e4ef9f2f473c44c575d",
        link: {
            base: {
                youtube: "https://youtu.be/g8g0fLM46RE",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-the-8th-sea-geometry-bass-2:2"
            }
        }
    },
    {
        title: "The City of No Dip",
        genre: "chip complextro",
        album: "dda",
        year: 2022,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02c6957215eb236e2fbb205db3",
        link: {
            base: {
                youtube: "https://www.youtube.com/watch?v=sHDdoyQBCqk",
                spotify: "https://open.spotify.com/track/2ZFbhkFQ9x549ACrvOo5n8?si=03129d7b456e420f",
                itunes: "https://music.apple.com/us/album/the-city-of-no-dip/1600087960?i=1600087961",
                deezer: "https://deezer.page.link/MRQHFWCNu3rgGWiS7"
            },
            alt: [
                {
                    name: "Extended Mix",
                    youtube: "https://www.youtube.com/watch?v=xrLUQLzxdEw",
                    spotify: "https://open.spotify.com/track/2F3o9pRHhfB1Z51a02v0sX?si=3fccb282d97d4942",
                    itunes: "https://music.apple.com/us/album/the-city-of-no-dip-extended-mix/1600087960?i=1600087977",
                    deezer: "https://deezer.page.link/4P6XuhzkrDhJf5UC8"
                }
            ]
        }
    },
    {
        title: "The Feeling When You Squat",
        genre: "hardbass:Hardbass",
        album: "none",
        year: 2021,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0239067f8fb6b06980782c6421",
        link: {
            base: {
                youtube: "https://youtu.be/AeQoI-M2TQA",
                spotify: "https://open.spotify.com/album/5XdQoD0t4Hlds7GYjzcEIS?si=b3Euw0AUTOSClaiVnHty8w",
                itunes: "https://music.apple.com/us/album/the-feeling-when-you-squat-single/1567944313",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-the-feeling-when-you-squat:8"
            }
        }
    },
    {
        title: "The Field of Hopes and Dreams",
        genre: "complextro",
        album: "none",
        year: 2023,
        originality: "remix",
        originalby: "Toby Fox",
        lyrics: "inst",
        explicit: false,
        cover: "https://supraphonline.cz/cover/200/9/6/e/785511.jpg",
        link: {
            base: {
                youtube: "https://youtu.be/cl8GJGfcvI8",
                odysee: "https://odysee.com/@kingpvz:4/toby-fox-the-field-of-hopes-and-dreams:c",
                ng: "https://www.newgrounds.com/audio/listen/1254156"
            }
        }
    },
    {
        title: "The Grace of the Dip",
        genre: "chip complextro",
        album: "dda",
        year: 2022,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02c6957215eb236e2fbb205db3",
        link: {
            base: {
                youtube: "https://www.youtube.com/watch?v=WmNNioimPG8",
                spotify: "https://open.spotify.com/track/3xN7eLNSB6YtGkEZkKql5D?si=a858295962434d8d",
                itunes: "https://music.apple.com/us/album/the-grace-of-the-dip/1600087960?i=1600087969",
                deezer: "https://deezer.page.link/4gb9R3Nx5JAvTwrX7"
            }
        }
    },
    {
        title: "The Seven Seas",
        genre: "hardbass:Shanty-Hardbass",
        album: "gb2",
        year: 2023,
        originality: "remix",
        originalby: "F-777",
        lyrics: "inst",
        explicit: false,
        cover: "https://i.scdn.co/image/ab6761670000ecd4be936e4ef9f2f473c44c575d",
        link: {
            base: {
                youtube: "https://youtu.be/BhdVmQwpOoU",
                odysee: "https://odysee.com/@kingpvz:4/f-777-the-seven-seas-%28hardbass-shanty:a",
                ng: "https://www.newgrounds.com/audio/listen/1363147"
            }
        }
    },
    {
        title: "The World Under Us",
        genre: "house:Dark-House other:Ambient-Bass",
        album: "dda",
        year: 2022,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02c6957215eb236e2fbb205db3",
        link: {
            base: {
                youtube: "https://www.youtube.com/watch?v=1FrZ4jbVkts",
                spotify: "https://open.spotify.com/track/3J7tfiefH7o6GsLKy1DnUd?si=04084b55ed6c40bf",
                itunes: "https://music.apple.com/us/album/the-world-under-us/1600087960?i=1600087964",
                deezer: "https://deezer.page.link/siJTFLhHn4D5Dep69"
            }
        }
    },
    {
        title: "Theory of Everything",
        genre: "exp hardbass:Hardbass",
        album: "gb",
        year: 2021,
        originality: "remix",
        originalby: "DJ Nate",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0292640ff1a639ef80176402b1",
        link: {
            base: {
                youtube: "https://youtu.be/UaYjECakyAY",
                spotify: "https://open.spotify.com/track/1NnViy33sl3IZyBjH6pWk6?si=07887c89a62143c5",
                itunes: "https://music.apple.com/us/album/theory-of-everything/1626532804?i=1626533388",
                deezer: "https://deezer.page.link/JbQ6oEEPeQ5Ym6ct8",
                odysee: "https://odysee.com/@kingpvz:4/dj-nate-theory-of-everything-%28hardbass:8"
            }
        }
    },
    {
        title: "Theory of Everything 2",
        genre: "alt exp hardbass:Hardbass",
        album: "gb",
        year: 2022,
        originality: "remix",
        originalby: "DJ Nate",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0292640ff1a639ef80176402b1",
        link: {
            base: {
                youtube: "https://youtu.be/xUS7FVIQTlk",
                spotify: "https://open.spotify.com/track/00nb9FoBEXqmCBONIYqFI4?si=200611811b344d6b",
                itunes: "https://music.apple.com/us/album/theory-of-everything-2/1626532804?i=1626533394",
                deezer: "https://deezer.page.link/zyGPa7XkDPrPJwNJ8",
                odysee: "https://odysee.com/@kingpvz:4/dj-nate-theory-of-everything-2-%28hardbass:4"
            }
        }
    },
    {
        title: "Thirty Dollar Daw Music",
        genre: "exp house:Bass-House other:Thirty-Dollar-Website",
        album: "none",
        year: 2022,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://i.scdn.co/image/ab6761670000ecd4be936e4ef9f2f473c44c575d",
        link: {
            base: {
                youtube: "https://youtu.be/Tu3xo3STYSA",
                odysee: "https://odysee.com/@kingpvz:4/my-song-thirtydollarwebsite:5"
            }
        }
    },
    {
        title: "This thing I made in ableton.",
        genre: "hardbass:Hardbass",
        album: "none",
        year: 2021,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://i.scdn.co/image/ab6761670000ecd4be936e4ef9f2f473c44c575d",
        link: {
            base: {
                youtube: "https://www.youtube.com/watch?v=eI3KGNrBMYA",
                odysee: "https://odysee.com/@kingpvz:4/this-thing-i-made-in-ableton.:2"
            }
        }
    },
    {
        title: "Time Machine",
        genre: "hardbass:Hardbass",
        album: "gb",
        year: 2021,
        originality: "remix",
        originalby: "Waterflame",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0292640ff1a639ef80176402b1",
        link: {
            base: {
                youtube: "https://youtu.be/wYbkNkm8xNI",
                spotify: "https://open.spotify.com/track/4qEOV6SQYtaVkNWNSfFBuT?si=5e5ea1ad477241b0",
                itunes: "https://music.apple.com/us/album/time-machine/1626532804?i=1626533382",
                deezer: "https://deezer.page.link/3skXmhy5GJUd3p9z9",
                odysee: "https://odysee.com/@kingpvz:4/waterflame-time-machine-%28hardbass-remix:c"
            }
        }
    },
    {
        title: "Tomorrow It Will Be Yesterday",
        genre: "exp other:Epictronica",
        album: "aj",
        year: 2021,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02ccf426cee542ac22c0586d01",
        link: {
            base: {
                youtube: "https://youtu.be/nqmgfGYTDPQ",
                spotify: "https://open.spotify.com/album/7woegtV8MRHeRKtjE2QkGq?si=X0Jfk7d2Rim-OMvSVK9zUw",
                itunes: "https://music.apple.com/us/album/tomorrow-it-will-be-yesterday-single/1553394919",
                deezer: "https://deezer.page.link/e4z5TekbXU1VNj48A",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-tomorrow-it-will-be-yesterday:a"
            },
            alt: [
                {
                    name: "Hardbass Edit",
                    youtube: "https://youtu.be/nqmgfGYTDPQ",
                    odysee: "https://odysee.com/@kingpvz:4/kingpvz-tomorrow-it-will-be-yesterday-2:8"
                }
            ]
        }
    },
    {
        title: "Trousle Bones",
        genre: "complextro",
        album: "none",
        year: 2023,
        originality: "bootleg",
        originalby: "Toby Fox",
        lyrics: "inst",
        explicit: false,
        cover: "https://i.scdn.co/image/ab6761670000ecd4be936e4ef9f2f473c44c575d",
        link: {
            base: {
                youtube: "https://youtu.be/Dxbsa2Ynl80",
                odysee: "https://odysee.com/@kingpvz:4/bonetrousle-but-every-other-half-of-2:5",
                bili: "https://www.bilibili.com/video/BV17m411f74v/"
            }
        }
    },
    {
        title: "Twentyfive",
        genre: "alt house:Club-House",
        album: "none",
        year: 2021,
        originality: "remix",
        originalby: "R&aacute;dio Expres",
        lyrics: "lyric",
        language: "English",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0298ab700b9e3cf24e018f20af",
        link: {
            base: {
                youtube: "https://youtu.be/6JVd1DLfsD4",
                spotify: "https://open.spotify.com/album/68xFsThsLZximQLbATbKDr?si=jXAJr9rXQBWcAAGuFgzDHQ",
                itunes: "https://music.apple.com/us/album/twentyfive-feat-r%C3%A1dio-expres-single/1573041099",
                deezer: "https://deezer.page.link/ZzHeuCryUJtUN6e98",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-twentyfive-%28ultimate-remix-of:c"
            },
            alt: [
                {
                    name: "Instrumental Version",
                    youtube: "https://www.youtube.com/watch?v=NiC3gjlavkA"
                }
            ]
        }
    },
    /*u*/
    {
        title: "Untitled",
        genre: "hardbass:Hardbass",
        album: "none",
        year: 2022,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e021e3cc6ff7a938ee9b3e25bc2",
        link: {
            base: {
                youtube: "https://youtu.be/mwltgga_Vis",
                spotify: "https://open.spotify.com/album/23kHwWmIAmL63PSuN59Nzu?si=B0MchBLrRi2Lu4xl0q6TYw",
                itunes: "https://music.apple.com/us/album/untitled-single/1643177020",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-untitled-%28untitled-hardbass-2020:5"
            }
        }
    },
    {
        title: "Untitled 2",
        genre: "house:Hardbass",
        album: "none",
        year: 2023,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e021374c60cebea0b7ffa6eebe9",
        link: {
            base: {
                youtube: "https://youtu.be/-pk17lWyAc0",
                spotify: "https://open.spotify.com/album/6PHlZZPZRc0NJbnLJ7nFS3?si=Vz9TN10_SvWFnWuXgXIC2Q",
                itunes: "https://music.apple.com/us/album/untitled-2-single/1716753939",
                deezer: "https://deezer.page.link/BkTLYqX6syLU3xMC7",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-untitled-2-%28untitled-2022-styled:f"
            }
        }
    },
    /*v*/
    {
        title: "Viking Arena",
        genre: "hardbass:Hardbass",
        album: "gb2",
        year: 2023,
        originality: "remix",
        originalby: "F-777",
        lyrics: "inst",
        explicit: false,
        cover: "https://i.scdn.co/image/ab6761670000ecd4be936e4ef9f2f473c44c575d",
        link: {
            base: {
                youtube: "https://youtu.be/O_dz9bEznfw",
                odysee: "https://odysee.com/@kingpvz:4/f-777-viking-arena-(hardbass-remix-by:0",
                ng: "https://www.newgrounds.com/audio/listen/1254137"
            }
        }
    },
    /*w*/
    {
        title: "Wrap Out",
        genre: "other:Unknown",
        album: "none",
        year: 2019,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://i.scdn.co/image/ab6761670000ecd4be936e4ef9f2f473c44c575d",
        link: {
            base: {
                youtube: "https://youtu.be/PPKAmhWNCzQ"
            }
        }
    },
    {
        title: "Wrap Out (Remastered)",
        genre: "alt house:Funk-House",
        album: "aj",
        year: 2021,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e028d1d528642694a584638da73",
        link: {
            base: {
                youtube: "https://youtu.be/kiAciZkFR0g",
                spotify: "https://open.spotify.com/track/70Aja0RT2nPW4bP2WPkLoA?si=2dd13f3dbc5446e4",
                itunes: "https://music.apple.com/us/album/wrap-out/1556910206?i=1556910212",
                deezer: "https://deezer.page.link/e92ywy29X5hX2Xb78",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-wrap-out-%28remastered-version%29:2"
            }
        }
    },
    /*x*/
    {
        title: "xStep",
        genre: "hardbass:Hardbass/Metalcord",
        album: "gb",
        year: 2021,
        originality: "remix",
        originalby: "DJVi",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0292640ff1a639ef80176402b1",
        link: {
            base: {
                youtube: "https://youtu.be/AQLy0o9ufx0",
                spotify: "https://open.spotify.com/track/62HIAsnjEBXBSft9azydln?si=9d748f53a2764777",
                itunes: "https://music.apple.com/us/album/xstep/1626532804?i=1626533386",
                deezer: "https://deezer.page.link/squBxv3k8i8CUdRk9",
                odysee: "https://odysee.com/@kingpvz:4/djvi-xstep-%28hardbass-remix-by-kingpvz%29:b"
            }
        }
    },
    /*y*/
    {
        title: "Years",
        genre: "hardbass:Hardbass",
        album: "gb2",
        year: 2024,
        originality: "remix",
        originalby: "Dex Arson",
        lyrics: "inst",
        explicit: false,
        cover: "https://i.scdn.co/image/ab6761670000ecd4be936e4ef9f2f473c44c575d",
        link: {
            base: {
                youtube: "https://youtu.be/1-9I1wTxbX8"
            }
        }
    },
    {
        title: "You Lose",
        genre: "hardbass:Hardbass",
        album: "none",
        year: 2021,
        originality: "original",
        lyrics: "lyric",
        collab: "matejkudlac",
        language: "Slovak",
        explicit: false,
        cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02fd56c1ef9f8cf32fccb5eaf2",
        link: {
            base: {
                youtube: "https://youtu.be/kV5GSTYsojI",
                spotify: "https://open.spotify.com/album/365sGsx2pbHHR6VXwdvDA3?si=QsspNEroTTWLqO_h_utKIQ",
                itunes: "https://music.apple.com/us/album/you-lose-feat-matej-kudl%C3%A1%C4%8D-single/1551191195",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-you-lose-feat.-matej-kudl%C3%A1%C4%8D:5"
            },
            alt: [
                {
                    name: "Instrumental Version",
                    youtube: "https://youtu.be/fQRHQbPjc9Y",
                    odysee: "https://odysee.com/@kingpvz:4/kingpvz-you-lose-%284k-instrumental:2"
                }
            ]
        }
    },
    /*z*/
    {
        title: "Zombie Tsunami",
        genre: "dubstep:Drum'n'Bass",
        album: "none",
        year: 2024,
        originality: "bootleg",
        lyrics: "lyric",
        originalby: "Zombie Tsunami",
        language: "Ho ho ho",
        explicit: false,
        cover: "https://i.scdn.co/image/ab6761670000ecd4be936e4ef9f2f473c44c575d",
        link: {
            base: {
                youtube: "https://youtu.be/qacCRLqOITw",
                odysee: "https://odysee.com/@kingpvz:4/zombie-tsunami-theme-christmas-bootleg:4"
            }
        }
    }
];
