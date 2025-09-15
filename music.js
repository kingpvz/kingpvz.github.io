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
                img.src = "https://a-v2.sndcdn.com/assets/images/sc-icons/ios-a62dfc8fe7.png";
                img.style.borderRadius = "0.5vw";
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
            if (i.ng) {
                var os = document.createElement("a");
                os.href = i.ng;
                os.target = "_blank";
                let img = document.createElement("img");
                img.src = "https://img.ngfiles.com/wiki/uploads/968000/iu_968880_1.gif";
                img.style.borderRadius = '0.5vw';
                img.classList.add("linkImage");
                img.title = "NewGrounds";
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
        if (!database[songID].link.alt) { database[songID].link.alt = []; }
        if (database[songID].album === 'none' && database[songID].link.alt.length === 0) document.getElementById("musicExtraButtonExtra").style.display = 'none';
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
        spotify: "https://open.spotify.com/album/1blEjULsuPbVc60qgVfHX2?si=bOh6dBg9SzKrNGiHbDDLEw",
        deezer: "https://link.deezer.com/s/30R9pvC9M5uyLoEs2k5Ek"
    },
    uh: {
        name: "Ultimate Hardbass",
        type: "EP",
        desc: "This EP contains two remastered songs - called \"Ultimate Editions\". Also its spotlight song is &#x41F;&#x440;&#x438;&#x432;&#x435;&#x442;.",
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e028f75b3252e8bfa067c90c066",
        spotify: "https://open.spotify.com/album/5IwYZr5ddyv7ZupneM3f7B?si=rmKXU2FcQwyi26KbXSOAsw",
        itunes: "https://music.apple.com/us/album/ultimate-hardbass-single/1833459521",
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
        deezer: "https://deezer.page.link/qqXQzh2xrrKAqTa57"
    },
    dda: {
        name: "Double Dip Adventure",
        type: "Album",
        desc: "This album was originally supposed to be a game OST, but the game got cancelled, so have all the songs instead.",
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02c6957215eb236e2fbb205db3",
        youtube: "https://www.youtube.com/playlist?list=PLS6i1BpODObU_kAn-UgOrpS5f6GDSPqrA",
        spotify: "https://open.spotify.com/album/0Mb4xrQemVzskDLrWIpAzm?si=JpiSvgfmSoKZYFBRvrUHlg",
        deezer: "https://deezer.page.link/zLQm75D7ja6ijFZQ7",
        itunes: "https://music.apple.com/us/album/double-dip-adventure/1832223320"
    },
    gb: {
        name: "Geometry Bass",
        type: "Album",
        desc: "The first collection of my Geometry Dash hardbass remixes - the first 21 levels + the practice mode and the menu song!",
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0292640ff1a639ef80176402b1",
        youtube: "https://www.youtube.com/playlist?list=PLdj_MACtyUjvzBUJ1nyxDvZM6GPHWDyv4",
        spotify: "https://open.spotify.com/album/4LvcKcSdgDAopIbpp4wEi1?si=52GRQnajTwiNsGL6l49hfQ",
        deezer: "https://link.deezer.com/s/30GSNgdffj2gV5Gsnxqx0",
        itunes: "https://music.apple.com/us/album/geometry-bass/1832223401"
    },
    ritt: {
        name: "Roaring In The 20s",
        type: "Album",
        desc: "This album contains probably the best songs I've made till the date of its release. In fact, I am extremely happy for this album.",
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e027eac873ac84cb7f0eaaddb4e",
        youtube: "https://www.youtube.com/playlist?list=PLS6i1BpODObV_0YMXvcDsM0cK1-nR0NQ5",
        spotify: "https://open.spotify.com/album/3t2kFWIzdwWFL2PhOx7FO7?si=ulHApuAuRfGmOjJMD8nNjQ",
        itunes: "https://music.apple.com/us/album/roaring-in-the-20s/1831378553",
        deezer: "https://link.deezer.com/s/30FisHeFcWx0YYzrGEQSh"
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
                spotify: "https://open.spotify.com/album/0x8YZQZuNTTbEtws43i9wx?si=k0VRc0URRxmpTPqjvSvNZQ",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-2021-%28happy-hardcore-uk:b",
                deezer: "https://link.deezer.com/s/30GTyybpJX4DPE2v0OuYi",
                itunes: "https://music.apple.com/us/album/2021-single/1832225537"
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
                spotify: "https://open.spotify.com/track/6XXA60J5rbjfFHkqBCNTPv?si=c259622728334ef2",
                deezer: "https://link.deezer.com/s/30GSS4orDNKb1vITl7C5k",
                odysee: "https://odysee.com/@kingpvz:4/djvi-back-on-track-%28hardbass-remix-by:3",
                itunes: "https://music.apple.com/us/song/back-on-track/1832223403"
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
                spotify: "https://open.spotify.com/album/3CWpMBVuhRgeDyk5Kbt48k?si=zXIN9tK5SGyy8MafpU0gDA",
                itunes: "https://music.apple.com/us/album/baguette-single/1558182391",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-baguette-%28some-great-hardbass%29:a",
                deezer: "https://link.deezer.com/s/30R9ae9XDSHISd9qqJ7yG"
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
                spotify: "https://open.spotify.com/track/7fceG0SYdX4TOmU6PSZhfM?si=8a39dbb900754646",
                deezer: "https://link.deezer.com/s/30GSUAFnCrkENSoXJRqhu",
                odysee: "https://odysee.com/@kingpvz:4/djvi-base-after-base-%28hardbass-remix-by:3",
                itunes: "https://music.apple.com/us/song/base-after-base/1832223406"
            }
        }
    },
    {
        title: "Bass #1 (First Bass Jam)",
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
                spotify: "https://open.spotify.com/track/1HVnSbmJQ1kn5GU0dOAKKs?si=ffef6d25b925411b",
                deezer: "https://link.deezer.com/s/30R9rGAJfnWw6XYAYFA0j"
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
                spotify: "https://open.spotify.com/album/0j4xxi6pBdvkQlToHpaxUl?si=mht0_AdSR8eAWTpTF-M7YQ",
                itunes: "https://music.apple.com/us/album/bass-bandicoot-single/1831450246",
                deezer: "https://www.deezer.com/us/album/799609471",
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
            },
            alt: [
                {
                    name: "Instrumental Version", 
                    spotify: "https://open.spotify.com/album/51tbvsKYmqJm4LoErwXAnn?si=obMG3rwgSRqLse7gsaBQhw",
                    deezer: "https://link.deezer.com/s/30R95nopn23BgiyvvsS0X"
                }
            ]
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
                spotify: "https://open.spotify.com/album/2BIIGhskVHzCRRtyJoQJDv?si=Khbli8jaSi6aFEPCwJ3Osw",
                itunes: "https://music.apple.com/us/album/bitman-single/1831446337",
                deezer: "https://link.deezer.com/s/30GSCKXqvrdF32O4MW7cF",
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
                spotify: "https://open.spotify.com/track/1crQFTkgLm0dA8zgcP88jk?si=e7d21bd9877847a6",
                deezer: "https://link.deezer.com/s/30GT2ZBX5g5h4lQQzPPcb",
                odysee: "https://odysee.com/@kingpvz:4/waterflame-blast-processing-%28hardrave:a",
                itunes: "https://music.apple.com/us/song/blast-processing/1832223418"
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
                spotify: "https://open.spotify.com/album/4kJCEB4PGOCmrjZvc6LpI2?si=GATVmSxVS8CThCqqxGNIuw",
                itunes: "https://music.apple.com/us/album/blind-hopes-single/1578732763",
                deezer: "https://deezer.page.link/qYKbeiCLC6PQoZHJA",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-blind-hopes-%28metal-e-rock-mobile:4"
            },
            alt: [
                {
                    name: "Speaker Friendly Version",
                    spotify: "https://open.spotify.com/track/59zThqxTZ8NhF7u9mVd71P?si=15f5428c00c54cd7",
                    itunes: "https://music.apple.com/us/album/blind-hopes-speaker-friendly-version/1578732763?i=1578732766",
                    deezer: "https://deezer.page.link/ktdENmJjB7ToPR7d8"
                }
            ]
        }
    },
    {
        title: "Born Survivor",
        genre: "chip",
        album: "none",
        year: 2025,
        originality: "remix",
        originalby: "Shirobon",
        lyrics: "lyric",
        language: "English", 
        explicit: false,
        cover: "https://i.scdn.co/image/ab67616d0000b273652904f47e528d1e2b177093",
        link: {
            base: {
                youtube: "https://www.youtube.com/watch?v=aJ00LgSuLSs",
                ng: "https://www.newgrounds.com/audio/listen/1422093",
                odysee: "https://odysee.com/@kingpvz:4/bornsurvivor:d"
            },
            alt: [
                {
                    name: "Instrumental Version",
                    youtube: "https://www.youtube.com/watch?v=26Mmu_anOls&t=9s",
                    spotify: "https://open.spotify.com/album/6CMvT7qc0A2tCRdhJyLoBM?si=o5yl7c57SmKuTEljD1iK_g",
                    deezer: "https://link.deezer.com/s/30R8YGsD6KgOef4KRNmUa"
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
        title: "(Darken) Brass",
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
                spotify: "https://open.spotify.com/track/44WEyuCuY2fCZIJtwMDPHV?si=64004cf64f074e4b",
                deezer: "https://link.deezer.com/s/30R9sxZ9GwVZKyQmq19t5"
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
                spotify: "https://open.spotify.com/track/3YZTU7Jb5ZUKH1821VhAKP?si=a7f055f6b7ea4294",
                deezer: "https://link.deezer.com/s/30GSV6rKob4Wh8OrqeZ81",
                odysee: "https://odysee.com/@kingpvz:4/djvi-can%27t-let-go-%28hardbass-metalshade:3",
                itunes: "https://music.apple.com/us/song/cant-let-go/1832223407"
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
                spotify: "https://open.spotify.com/track/6qk6VqYYQiVzVxTTLezt6C?si=092178f0bf444764",
                deezer: "https://link.deezer.com/s/30R9qBJo8LBJEegppHYXv"
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
                spotify: "https://open.spotify.com/track/5wCPeHvobxiRzCsZmprOH9?si=57a3b91deff24c8a",
                deezer: "https://link.deezer.com/s/30GTgxW37jlfxLFuET6uO",
                ng: "https://www.newgrounds.com/audio/listen/1413447",
                itunes: "https://music.apple.com/us/song/cave-brawl/1832223323"
            },
            alt: [
                {
                    name: "Extended Mix",
                    youtube: "https://www.youtube.com/watch?v=KDZbgxkawq8",
                    spotify: "https://open.spotify.com/track/4cvl1oqgsLqy2H5GyUHq3J?si=c4e0e4dfbba24aac",
                    deezer: "https://link.deezer.com/s/30GTgPaJ5PMWuxtUnH9Xb",
                    ng: "https://www.newgrounds.com/audio/listen/1413464",
                    itunes: "https://music.apple.com/us/song/cave-brawl-extended-mix/1832223456"
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
                spotify: "https://open.spotify.com/album/4BEJ2V0RGX3vMTIOGUq8HB?si=7JUYXJwJRfG70gR6m7nBdA",
                itunes: "https://music.apple.com/us/album/chase-single/1831445441",
                deezer: "https://link.deezer.com/s/30GSrUAfznwqMUlJVSafR",
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
                spotify: "https://open.spotify.com/track/1naxACxElZwLWKTMF5Z3yy?si=410cf93dca92449e",
                deezer: "https://link.deezer.com/s/30GTpjVue5WNXfy1Lxi0W",
                ng: "https://www.newgrounds.com/audio/listen/1413459",
                itunes: "https://music.apple.com/us/song/chipping-over/1832223334"
            },
            alt: [
                {
                    name: "Extended Mix",
                    youtube: "https://www.youtube.com/watch?v=Xb3jxzlMLNc",
                    spotify: "https://open.spotify.com/track/2dQJkHqGzdFRUmyKCsl1C6?si=4d6d9ec374b942cc",
                    deezer: "https://link.deezer.com/s/30GTpBZD1mmbomc0WXVtl",
                    ng: "https://www.newgrounds.com/audio/listen/1413462",
                    itunes: "https://music.apple.com/us/song/chipping-over-extended-mix/1832223335"
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
                itunes: "https://music.apple.com/us/album/chocolate-kvass-single/1833460713",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-chocolate-kvass-%28oldschool:0",
                deezer: "https://link.deezer.com/s/30R9jG5cas5L1W7okfzh2"
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
                spotify: "https://open.spotify.com/track/1mJNbbWY3fjrXwwXgBoZO4?si=7b9cf7c10e6944dd",
                itunes: "https://music.apple.com/us/album/chomper-single/1831452564",
                deezer: "https://link.deezer.com/s/30GRmL2W7GpHgfZWMBvp5",
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
                spotify: "https://open.spotify.com/track/6dNlQDOseIdIhq0o3MSsXz?si=000ee36d5ce344b8",
                deezer: "https://link.deezer.com/s/30GTiqJgrFVhSrATAsM3f",
                ng: "https://www.newgrounds.com/audio/listen/1413449",
                itunes: "https://music.apple.com/us/song/clouds-over-the-sky/1832223325"
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
                spotify: "https://open.spotify.com/track/7GLsxyBksFJwuLufpBTY1j?si=c0fcb3fc872f4868",
                deezer: "https://link.deezer.com/s/30GT0evoeyMCoKbSTbvHH",
                odysee: "https://odysee.com/@kingpvz:4/dj-nate-clubstep-%28hardbass-remix-by:a",
                itunes: "https://music.apple.com/us/song/clubstep/1832223415"
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
                spotify: "https://open.spotify.com/track/2CPRFfmerTz55WpJMC2Zl2?si=835307e066a646bb",
                deezer: "https://link.deezer.com/s/30GSYpHu8VIa4rNeK52mD",
                odysee: "https://odysee.com/@kingpvz:4/waterflame-clutterfunk-%28hardbass-remix:2",
                itunes: "https://music.apple.com/us/song/clutterfunk/1832223412"
            }
        }
    },
    {
        title: "Concussion",
        genre: "hardbass:Metalcord",
        album: "none",
        year: 2025,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02c754e236bd7540c06560bf3e",
        link: {
            base: {
                spotify: "https://open.spotify.com/track/5zGfLuOndELIB952YV4BgP?si=4e54f758519e4f49",
                youtube: "https://youtu.be/2gL89sbABng",
                ng: "https://www.newgrounds.com/audio/listen/1400628",
                itunes: "https://music.apple.com/us/album/concussion-single/1831379085",
                deezer: "https://link.deezer.com/s/30FiIn1mtI2WWWHtaDCzy"
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
                spotify: "https://open.spotify.com/album/1FOSS21JyFhOBJvnuOgyu2?si=Xc_KdKG6SHqa60ARoRRiHw",
                deezer: "https://link.deezer.com/s/30GTCv4qSPtkbOVGn8y7z",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-controversy-%28experimental-bassy:f",
                itunes: "https://music.apple.com/us/album/controversy-single/1832225440"
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
                spotify: "https://open.spotify.com/album/4kkIsXs0tSMY7UGX7knQOL?si=F8P5Dp1dSia7_V35flQRwQ",
                itunes: "https://music.apple.com/us/album/cries-of-the-past-single/1831444939",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-cries-of-the-past-emotional:f",
                deezer: "https://link.deezer.com/s/30GSzY9G4ivvEZlzRt4pU"
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
                spotify: "https://open.spotify.com/track/0kojIM9wnxCn98w9wsZBg9?si=3a4d0d2870694268",
                deezer: "https://link.deezer.com/s/30GSX6FEkGrcbircZOG9N",
                odysee: "https://odysee.com/@kingpvz:4/djvi-cycles-%28hardbass-remake-remix-by:d",
                itunes: "https://music.apple.com/us/song/cycles/1832223410"
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
                spotify: "https://open.spotify.com/track/5hY4iovKxUjuuZJuYrYzbC?si=acf317a5a4cd4d23",
                deezer: "https://link.deezer.com/s/30GTm6uqxy4DSq0Jf9UQt",
                ng: "https://www.newgrounds.com/audio/listen/1413460",
                itunes: "https://music.apple.com/us/song/cymaticum/1832223330"
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
                spotify: "https://open.spotify.com/album/49sAAChZ8NYdXiZ8KLn5mi?si=LZHusB5rSBKbxOv6DC8ilw",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-d-from-maths-%28electrohouse-lyric:c",
                deezer: "https://link.deezer.com/s/30GT8LWs2LhyV6NZrlUhR",
                itunes: "https://music.apple.com/us/album/d-from-maths-single/1832223136"
            },
            alt: [
                {
                    name: "Instrumental Version",
                    youtube: "https://www.youtube.com/watch?v=CX5z5JxafNo",
                    spotify: "https://open.spotify.com/track/53Ii4lCp6EiWr6fF4ektN0?si=a895956938034db6",
                    deezer: "https://link.deezer.com/s/30GT9eb5ZqBEDh0ZD7fJd",
                    itunes: "https://music.apple.com/us/song/d-from-maths-instrumental/1832223138"
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
                itunes: "https://music.apple.com/us/album/darken-single/1517427884",
                deezer: "https://link.deezer.com/s/30R9oAoR5mU9cDgOl5vdE"
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
                spotify: "https://open.spotify.com/track/1PP3kOdYpIcKtrdlCnOdKS?si=eedc6060072842ea",
                itunes: "https://music.apple.com/us/album/dash-single/1831451911",
                odysee: "https://odysee.com/@kingpvz:4/mdk-dash-%28hardbass-metalcord-remix-by:5",
                deezer: "https://link.deezer.com/s/30GRqL6z8Thn4LIZhzV9L"
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
                spotify: "https://open.spotify.com/album/23gobmqfcK6xqAnW3DNB4K?si=C8NPMhyGRGiTBZC2gHZMOw",
                soundcloud: "https://soundcloud.com/kingpvz/davai?si=1968ad40a21f48d4bd26e2cad91c0018&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
                itunes: "https://music.apple.com/us/album/%D0%B4%D0%B0%D0%B2%D0%B0%D0%B9-single/1538527102",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-%D0%B4%D0%B0%D0%B2%D0%B0%D0%B9-davai-%28hardbass-song%29:c",
                deezer: "https://link.deezer.com/s/30R9iKzz0oG9z8eEfSRPV"
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
                spotify: "https://open.spotify.com/track/1grUzrlwt15aggVzGcJaAm?si=b64892131aab43b4",
                deezer: "https://link.deezer.com/s/30GT4TlamRW6jXiGQMTgv",
                odysee: "https://odysee.com/@kingpvz:4/f-777-deadlocked-%28hardbass-remix-by:c",
                itunes: "https://music.apple.com/us/song/deadlocked/1832223421"
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
                spotify: "https://open.spotify.com/track/2eGn27CLoefdi92GxEQtGV?si=bc68043cf75a4725",
                itunes: "https://music.apple.com/us/song/delete-it/1831378557",
                deezer: "https://link.deezer.com/s/30FiLiOAZnHs3tdvJnuTY"
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
                spotify: "https://open.spotify.com/album/1eN44bxjPvxGsB5eBqiZrg?si=WetfXZC9Q6KH-ZborgDgQg",
                deezer: "https://link.deezer.com/s/30GTFCjjRyKu3liGoXGhy",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-dirty-lada-%28old-school-metalcord:b",
                itunes: "https://music.apple.com/us/album/dirty-lada-single/1832225969"
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
                spotify: "https://open.spotify.com/track/4nvVaOkE8fGKxwCGS4Qp1h?si=7b1342a624184b99",
                itunes: "https://music.apple.com/us/album/disrupt-single/1745747986",
                deezer: "https://link.deezer.com/s/30FiEODLG4A0vtMTJxOt7",
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
                spotify: "https://open.spotify.com/track/5bhbHhUIPTUaWb2Bij8kpL?si=e4c310d7770c4cd6",
                deezer: "https://link.deezer.com/s/30GSTPvyVUHBG369J5L1u",
                odysee: "https://odysee.com/@kingpvz:4/djvi-dry-out-%28hardbass-remix-by-kingpvz%29:c",
                itunes: "https://music.apple.com/us/song/dry-out/1832223405"
            }
        }
    },
    {
        title: "Dummy!",
        genre: "swing",
        album: "none",
        year: 2025,
        originality: "remix",
        originalby: "Toby Fox",
        lyrics: "inst",
        explicit: false,
        cover: "https://i.scdn.co/image/ab6761670000ecd4be936e4ef9f2f473c44c575d",
        link: {
            base: {
                youtube: "https://youtu.be/0i_synnxtVM",
                odysee: "https://odysee.com/@kingpvz:4/dummy_swingremix:e",
                ng: "https://www.newgrounds.com/audio/listen/1394824"
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
                spotify: "https://open.spotify.com/track/76MGqid9ZvqxBk5R2gCJTO?si=6945cdfefca34325",
                itunes: "https://music.apple.com/us/song/dutch/1831378561",
                deezer: "https://link.deezer.com/s/30FiKDOTLLYmoJWPZtKhk"
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
                spotify: "https://open.spotify.com/album/2aFzOdrRwgmOZc8RldW0VB?si=XIEkFnD6QbO3JRnEfYwYFQ",
                itunes: "https://music.apple.com/us/album/echoes-of-the-stars-hardbass-remix-single/1622859786",
                deezer: "https://link.deezer.com/s/30JaBCDbTfCmNAK6PC5V2",
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
                spotify: "https://open.spotify.com/track/32ULi909N1j4dTiBRqRPJI?si=c5c4eceba13a4702",
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
                spotify: "https://open.spotify.com/track/6qRcZY1WZGHhfwou8i6puL?si=aa7b6b70adca4c05",
                deezer: "https://link.deezer.com/s/30GT0YklSE2NmLsPwRWyf",
                odysee: "https://odysee.com/@kingpvz:4/dj-nate-electrodynamix-%28hardbass-remix:b",
                itunes: "https://music.apple.com/us/song/electrodynamix/1832223416",
                newgrounds: "https://www.newgrounds.com/audio/listen/1465047"
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
                spotify: "https://open.spotify.com/track/2SFghpZIXi7Xc6bHgMiXXB?si=d6ec0d9e39034bb8",
                deezer: "https://link.deezer.com/s/30GSZGhDpsAhx7MU1vrPL",
                odysee: "https://odysee.com/@kingpvz:4/waterflame-electroman-adventures:e",
                itunes: "https://music.apple.com/us/song/electroman-adventures/1832223414"
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
                spotify: "https://open.spotify.com/album/786y1vMglX4p74BMFzjoQ0?si=exrxagdlRraZz2Ab83FUSQ",
                itunes: "https://music.apple.com/us/album/enemy-retreating-single/1831452309",
                odysee: "https://odysee.com/@kingpvz:4/undertale-yellow-enemy-retreating:1",
                deezer: "https://link.deezer.com/s/30GvHb1X0D6Fo4yQZWRia"
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
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02f4647b60414fc64c54bd08f8",
        link: {
            base: {
                youtube: "https://youtu.be/iHTWmGS7_Qo",
                spotify: "https://open.spotify.com/track/7L2q1kjNYbPmL6vjT1XSKQ?si=93d91134b02a4b42",
                deezer: "https://link.deezer.com/s/30FiJ0lf6YG0ksFJ2pTdR",
                itunes: "https://music.apple.com/us/album/exuberant-winter-single/1831378536"
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
                spotify: "https://open.spotify.com/track/3zleZejMHODcdEm6mYRXhS?si=42210c38f1644626",
                deezer: "https://link.deezer.com/s/30GTj8lagNt2utVXj8rvK",
                ng: "https://www.newgrounds.com/audio/listen/1413451",
                itunes: "https://music.apple.com/us/song/feels-like-tomorrow/1832223326"
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
                spotify: "https://open.spotify.com/album/0HOtmD0NyF6dWf5saVirQR?si=z0ciM4paSRWByFfRFeChYQ",
                itunes: "https://music.apple.com/us/album/final-battle-single/1831446273",
                odysee: "https://odysee.com/@kingpvz:4/final-battle-%28deltarune-chapter-2-fan:7",
                deezer: "https://link.deezer.com/s/30GSyIpLVGr9zSLgShuIN"
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
                spotify: "https://open.spotify.com/track/2mUnVSdALqpkxamfDmtJqW?si=c61712a8db014977",
                deezer: "https://link.deezer.com/s/30GT5wAyVvLpGINciamdz",
                odysee: "https://odysee.com/@kingpvz:4/mdk-fingerbang-%28hardbass-metalcord-remix:5",
                itunes: "https://music.apple.com/us/song/fingerdash/1832223422",
                newgrounds: "https://www.newgrounds.com/audio/listen/1465045"
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
                spotify: "https://open.spotify.com/album/3AeBhst5Z2kOPEHXUxyBc0?si=oo3cFAmrT7Wie5AyoA2izg",
                itunes: "https://music.apple.com/us/album/flexible-milk-single/1831450257",
                deezer: "https://link.deezer.com/s/30GSk9Z7mEEDMGgOkpg26",
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
        title: "Frontlines",
        genre: "hardbass:Hardbass",
        album: "gb2",
        year: 2025,
        originality: "remix",
        originalby: "Dex Arson",
        lyrics: "inst",
        explicit: false,
        cover: "https://i.scdn.co/image/ab6761670000ecd4be936e4ef9f2f473c44c575d",
        link: {
            base: {
                youtube: "https://youtu.be/3ZjROFwTMRI",
                ng: "https://www.newgrounds.com/audio/listen/1409580"
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
                    odysee: "https://odysee.com/@kingpvz:4/kingpvz-funk-you-%28extended-improved:9",
                    newgrounds: "https://www.newgrounds.com/audio/listen/1465048"
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
                spotify: "https://open.spotify.com/track/6ViaEXLnCH59sUleqhXccX?si=93577cb3b27f47fd",
                itunes: "https://music.apple.com/us/album/gatsbys-bass-single/1831378049",
                deezer: "https://link.deezer.com/s/30FiHalxEGb4H3lJxnbo8",
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
                spotify: "https://open.spotify.com/track/3Jz9ravLxdF6ykZ5Ome2Tp?si=f3baee9c5ea44341",
                deezer: "https://link.deezer.com/s/30GT4i2y04rlwRH25oP3c",
                odysee: "https://odysee.com/@kingpvz:4/waterflame-geometrical-dominator:0",
                itunes: "https://music.apple.com/us/song/geometrical-dominator/1832223420",
                newgrounds: "https://www.newgrounds.com/audio/listen/1465046"
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
                spotify: "https://open.spotify.com/track/5zSo36PNrewY7ia81TrINi?si=24dfad8981e2408e",
                deezer: "https://link.deezer.com/s/30GT7amE2RDuTpLXpCyGL",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-geometry-dash-hardbass-geometry:3",
                itunes: "https://music.apple.com/us/song/geometry-dash/1832223424"
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
                deezer: "https://link.deezer.com/s/30R9d2izc7C03dBSCVj3i",
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
                spotify: "https://open.spotify.com/album/2Q03zrTIrVtMhObYNeVgT2?si=dSCLQzqMT_6R0u57_erCMg",
                itunes: "https://music.apple.com/us/album/groove-single/1831446131",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-groove-electro-swing-jazz:d",
                groove: "https://link.deezer.com/s/30GSDIOouNU9hSiUJw5HE"
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
                spotify: "https://open.spotify.com/track/4sclJ6YM0PPqCzY70apkCn?si=00e1f6a2baec420b",
                itunes: "https://music.apple.com/us/album/guns-blazing-kingpvz-remix-single/1747918309",
                deezer: "https://link.deezer.com/s/30GRCMxxN48NT1UPS92Oa",
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
                spotify: "https://open.spotify.com/album/0W38S19gMeh0SJFPfnX88E?si=0ORYLc4YSKaeHVqBroFaVw",
                itunes: "https://music.apple.com/us/album/hardbass-cat-single/1831445976",
                deezer: "https://link.deezer.com/s/30GSBvFGYQsGGHjtEGNjx",
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
                spotify: "https://open.spotify.com/album/3l95fEMTMC7JmoetvHGpCi?si=43gVSbeOSeG2FM5PbH6RIQ",
                deezer: "https://link.deezer.com/s/30GTDMClayEPUyeCl8vBZ",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-hardbass-ili-adidas:7",
                itunes: "https://music.apple.com/us/album/hardbass-ili-adidas-single/1832225711"
            },
            alt: [
                {
                    name: "Instrumental Version",
                    youtube: "https://www.youtube.com/watch?v=0P0BUsMZJfc",
                    spotify: "https://open.spotify.com/track/1eVbIPSoGA93LRC7SFhoMf?si=fc6ad705deec4c2b",
                    deezer: "https://link.deezer.com/s/30GTEktRKEbMOcw3kkLOf",
                    itunes: "https://music.apple.com/us/song/hardbass-ili-adidas-instrumental/1832225713"
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
                spotify: "https://open.spotify.com/album/3hoGUHzG6xyIpjGJjSMyrO?si=C2F2Sw9YTsSfNsptJuhryQ",
                deezer: "https://link.deezer.com/s/30GTAnmqza03xVhdiVcsu",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-hardbass-revolution-hardbass:1",
                itunes: "https://music.apple.com/us/album/hardbass-revolution-single/1832223307"
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
                spotify: "https://open.spotify.com/album/5HRPFtFFFsElNfn8L5sVLi?si=fSC85Vh2SbOn7lLW8c53FA",
                itunes: "https://music.apple.com/us/album/hazard-hardbass-remix-single/1583966206",
                deezer: "https://link.deezer.com/s/30JaMx6YRnKIeTZnwjdui",
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
                spotify: "https://open.spotify.com/track/5VRdffgNaMUaNba0wUgaql?si=80209b2f9fc54738",
                itunes: "https://music.apple.com/us/album/heart-bays-single/1745747923",
                deezer: "https://link.deezer.com/s/30FiznuORubVYgi1ItBEB",
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
                spotify: "https://open.spotify.com/track/18RlpfcJiHONNN9WDVRtBP?si=bdbca14106af41aa",
                deezer: "https://link.deezer.com/s/30GT20VjYbz7oaRlylcmJ",
                odysee: "https://odysee.com/@kingpvz:4/waterflame-hexagon-force-%28hardbass-remix:9",
                itunes: "https://music.apple.com/us/song/hexagon-force/1832223417"
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
                spotify: "https://open.spotify.com/track/2bXda0Rgnx87ZWnMzUMM0n?si=00346fd8796444bd",
                deezer: "https://link.deezer.com/s/30GTxtuNxbhzYGrIMOgdR",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-hillz-%28breakcore-song%29:2",
                itunes: "https://music.apple.com/us/album/hillz-single/1832223142"
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
                spotify: "https://open.spotify.com/track/6eHscZLU8GDJxydjjFXOSc?si=346ed34b12ee4425",
                deezer: "https://link.deezer.com/s/30GTjN9aplXTIuCyjYrq1",
                ng: "https://www.newgrounds.com/audio/listen/1413452", 
                itunes: "https://music.apple.com/us/song/hoover-base/1832223327"
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
                spotify: "https://open.spotify.com/track/6QYkJkGhJtaWkfTgyOQROh?si=62381e26d371414b",
                deezer: "https://link.deezer.com/s/30GTolQhHoRBZ6El9ywbO",
                ng: "https://www.newgrounds.com/audio/listen/1413458",
                itunes: "https://music.apple.com/us/song/hopeful-menu/1832223333"
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
                spotify: "https://open.spotify.com/track/78hN1wdVTWFRgUr5hb4Srj?si=047c10192ce2450f",
                itunes: "https://music.apple.com/us/album/hug-single/1831449896",
                deezer: "https://link.deezer.com/s/30GSouBoCuCaNtanLIWFO",
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
                spotify: "https://open.spotify.com/album/33ZWBMzm5ij60beUiQrmiP?si=C2JFDbhRT9-6BAxnb93aCg",
                itunes: "https://music.apple.com/us/album/i-said-single/1831449799",
                deezer: "https://link.deezer.com/s/30GSq100pBcdAIcbavoW4",
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
                spotify: "https://open.spotify.com/album/4lsemf4wHRdMMnVAxy1qeG?si=Tafq3aJ5TvOk51DIXgbvbw",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-i-saw-a-thing-%28experimental:3",
                deezer: "https://link.deezer.com/s/30GTGxdC53uWU1zHbpbCX",
                itunes: "https://music.apple.com/us/album/i-saw-a-thing-single/1832225812"
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
                spotify: "https://open.spotify.com/album/04UvNnFMur4vZ1EBWZVmd0?si=onywG8VQSBquAjntR_TTWw",
                itunes: "https://music.apple.com/us/album/intermission-single/1831452005",
                deezer: "https://link.deezer.com/s/30GRoJDstg8Tl3m231wP0",
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
                spotify: "https://open.spotify.com/track/0napL0OsZOCfm2hz5Ja94o?si=22dde99686134174",
                itunes: "https://music.apple.com/us/song/intro/1831378554",
                deezer: "https://link.deezer.com/s/30FiLVQVNvPocSPlmVJZq"
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
    {
        title: "It's TV Time!",
        genre: "complextro",
        album: "none",
        year: 2025,
        originality: "remix",
        originalby: "Toby Fox",
        lyrics: "lyric",
        language: "English",
        explicit: false,
        cover: "https://cdn2.pixelcut.app/temp/upscale/ad364168-2c35-4454-ac15-18cecc38ad3c.jpg",
        link: {
            base: {
                youtube: "https://youtu.be/OBe_GGn6biQ",
                spotify: "https://open.spotify.com/album/5PVZoJN4D3OiGHrdDayGGk?si=bPTlm9ubR1O6MO9Xqb1_Mg",
                deezer: "https://www.deezer.com/us/album/806625111",
                ng: "https://www.newgrounds.com/audio/listen/1443900"
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
                spotify: "https://open.spotify.com/track/1GpjRnYf4dJpmgKSnoYmQb?si=169ed97f1890449a",
                deezer: "https://link.deezer.com/s/30GSVIMpBhlB5VWOB5kTI",
                odysee: "https://odysee.com/@kingpvz:4/waterflame-jumper-%28hardbass-remake-by:e",
                ng: "https://www.newgrounds.com/audio/listen/1452621",
                itunes: "https://music.apple.com/us/song/jumper/1832223408"
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
                spotify: "https://open.spotify.com/album/184ejQ516wMlSRMQXX2xNp?si=UXGwdHeZQvyYdFaGsF6Mbw",
                itunes: "https://music.apple.com/us/album/kfl-single/1831444929",
                deezer: "https://link.deezer.com/s/30GSqEN8iQtwjNkmQztCf",
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
                    youtube: "https://www.youtube.com/watch?v=09P6KEgGRpk",
                    spotify: "https://open.spotify.com/album/1C86h7jUN8IOjQl2tx2tqh?si=WbYbMs9jSPS9ISVOLQuM4w",
                    deezer: "https://link.deezer.com/s/30ZiqoZ3y4CwI93i1y3Ni"
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
                spotify: "https://open.spotify.com/track/1p7tXsB7BIWFMcIEKtqVA8?si=b493c3ed71ad4d16",
                itunes: "https://music.apple.com/us/album/lower-single/1831452958",
                deezer: "https://link.deezer.com/s/30GusxDpiY2cAJsxbvGYM",
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
                soundcloud: "https://soundcloud.com/kingpvz/mam-v-p-na-lehatku-hardbass?si=7d119799b92e47ba8c0f301ff20fd82f&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
                odysee: "https://odysee.com/@kingpvz:4/hork%C3%BD%C5%BEe-sl%C3%AD%C5%BEe-m%C3%A1m-v-p...-na:f",
                spotify: "https://open.spotify.com/album/5216wnj38Oe7rNini3FW08?si=N-2RBKqmQtud2itewWyN9Q"
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
                spotify: "https://open.spotify.com/album/3FrlnsYFUfH3598KLKurtB?si=djMM3ZD4S1i31mATWswoNw",
                deezer: "https://link.deezer.com/s/30GTzHUgDtVV9wC4pKuoP",
                odysee: "https://odysee.com/@kingpvz:4/meme-music-rewind-2021:3",
                itunes: "https://music.apple.com/us/album/meme-rewind-2021-single/1832225599"
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
                spotify: "https://open.spotify.com/album/3XseZnynx5NiNURy6iAU7U?si=1TdAZw6YRQGc8qTAOfx6cg",
                itunes: "https://music.apple.com/us/album/metalcord-single/1576614987",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-metalcord-%28metalcord-hardbass:0",
                deezer: "https://link.deezer.com/s/30R98jIAPwcYlNQjcucwj"
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
                spotify: "https://open.spotify.com/album/6CwM0NuDRvBa4Wo1hfTNcw?si=Yapu6J7RTsKv99fjR4S2tw",
                deezer: "https://link.deezer.com/s/30GTa8AGdBC1cbvTvLsUA",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-x-slavmax-mf-ultimate-brostep:a",
                itunes: "https://music.apple.com/us/album/mf-single/1832223311"
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
                spotify: "https://open.spotify.com/album/2d9V0IYLhKtGtuXQH0GfdZ?si=HK6-rRAvQvCKr807my1neg",
                soundcloud: "https://soundcloud.com/kingpvz/nerob-hardbass-remix?si=cf36c455981d4d8bbf45b8e0ba741921&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
                itunes: "https://music.apple.com/us/album/nerob-feat-hork%C3%BD%C5%BEe-sl%C3%AD%C5%BEe-hard-bass-remix-single/1528775966",
                deezer: "https://deezer.page.link/QccReZdyaK1hVv3U7"
            }
        }
    },
    {
        title: "Neuropathic",
        genre: "hardstyle",
        album: "none",
        year: 2025,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02681eadf1fa8b7e634681f4ba",
        link: {
            base: {
                youtube: "https://www.youtube.com/watch?v=LHkEat2lqBg",
                odysee: "https://odysee.com/@kingpvz:4/neuropathic:7",
                ng: "https://www.newgrounds.com/audio/listen/1403264",
                spotify: "https://open.spotify.com/track/50WjojlI5ffmDxkyQrpl6l?si=f769ae1053be45b2",
                itunes: "https://music.apple.com/us/album/neuropathic-single/1831379230",
                deezer: "https://link.deezer.com/s/30FiHJx3bWM1ahkiENQbA"
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
                spotify: "https://open.spotify.com/album/2j1HppppU6AEJMpqerdDLf?si=Xn-EZ1W0S9SUsncbTm57Iw",
                itunes: "https://music.apple.com/us/album/new-day-single/1831445690",
                deezer: "https://link.deezer.com/s/30GSwC85wwhAucTZ3KAl1",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-new-day-%2890s-styled-electronica%29:0"
            }
        }
    },
    /*o*/
    {
        title: "Obstacles",
        genre: "chip",
        album: "none",
        year: 2025,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e028854c9cb4b0ec4743cdd09ea",
        link: {
            base: {
                youtube: "https://youtu.be/eGdaEXvzWMY",
                ng: "https://www.newgrounds.com/audio/listen/1414944",
                bili: "https://www.bilibili.com/video/BV1uRfTYxErD/",
                spotify: "https://open.spotify.com/track/0GUpMrgk3bTB0ejNhiXN03?si=237bbdf8272d48d9",
                deezer: "https://link.deezer.com/s/30Fiu67jDFp9ViS0aXOx8",
                itunes: "https://music.apple.com/us/album/obstacles-single/1831338305"
            }
        }
    },
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
                spotify: "https://open.spotify.com/album/0MhZObhybiCLGurWR5yqQF?si=YvWlhRb3TO20mUDt4YWKGg",
                odysee: "https://odysee.com/@kingpvz:4/hork%C3%BD%C5%BEe-sl%C3%AD%C5%BEe-parkovi%C5%A1t%C4%9B:b",
                deezer: "https://link.deezer.com/s/30GTbxyNrTqQ2HQGCYUiz",
                itunes: "https://music.apple.com/us/album/parkovi%C5%A1t%C4%9B-single/1832223284"
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
                spotify: "https://open.spotify.com/track/3OYtJESJf9doDodFMdfAt2?si=3544b35efb59486b",
                itunes: "https://music.apple.com/us/album/party-time-single/1831378273",
                deezer: "https://link.deezer.com/s/30FiGp8ZAXMiVPDZ8uISJ"
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
                spotify: "https://open.spotify.com/track/7myrSq2JMQ68PBXnaBcVRz?si=4134ed75647740e5",
                itunes: "https://music.apple.com/us/album/patriot-single/1831346067",
                deezer: "https://link.deezer.com/s/30FiCIhiSJ3BMbsmwoKug"
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
                spotify: "https://open.spotify.com/track/3FzdRroHCvjkQqUbMaTMjO?si=bdeeb0542b704150",
                deezer: "https://link.deezer.com/s/30GTnKNahb9Ly3V6F3WJ8",
                ng: "https://www.newgrounds.com/audio/listen/1413457",
                itunes: "https://music.apple.com/us/song/paused-dreams/1832223332"
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
                itunes: "https://music.apple.com/us/album/pears-single/1832227749",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-pears-ultimate-hardbass:f"
            },
            alt: [
                {
                    name: "Instrumental Version",
                    youtube: "https://www.youtube.com/watch?v=cRgnpH7aTxU",
                    spotify: "https://open.spotify.com/track/2pSRfpwSfZ7Fukyi3qaLF6?si=805786c5a11d4278",
                    itunes: "https://music.apple.com/us/song/pears-instrumental/1832227752"
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
                    spotify: "https://open.spotify.com/track/6nJtWD6jjVAHcFpurEaIM1?si=4510e02c44e24edf",
                    itunes: "https://music.apple.com/us/album/euphoria-power-single/1831451869",
                    deezer: "https://link.deezer.com/s/30GRtYxeVQtAuSYafNNvZ"
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
                spotify: "https://open.spotify.com/track/6cjMiYnbiKiRXDRl0wOXr1?si=41d769e6ac8a4f3d",
                deezer: "https://link.deezer.com/s/30GTkCbyXjUsvFF1uItDG",
                ng: "https://www.newgrounds.com/audio/listen/1413455",
                itunes: "https://music.apple.com/us/song/planetone/1832223328"
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
            },
            alt: [
                {
                    name: "Instrumental Version", 
                    spotify: "https://open.spotify.com/album/5nZphwtLlJTIaoeMrsjxiv?si=WE5AThKCQ9O8CX5rKvzflw"
                }
            ]
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
                spotify: "https://open.spotify.com/track/2ouHJGkcQyNUKKP9ZkuPrT?si=842d29d32d2b45ec",
                deezer: "https://link.deezer.com/s/30GSTaWbPiIJEFW85W24g",
                odysee: "https://odysee.com/@kingpvz:4/step-polargeist-%28hardbass-remix-by:e",
                itunes: "https://music.apple.com/us/song/polargeist/1832223404"
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
                deezer: "https://deezer.page.link/R2JkUpUeJMdWxxC6A",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-%D0%BF%D1%80%D0%B8%D0%B2%D0%B5%D1%82-%28privet%29-feat.-hbkn:1"
            },
            alt: [
                {
                    name: "Instrumental Version",
                    youtube: "https://youtu.be/itkiQ-V7IUA",
                    odysee: "https://odysee.com/@kingpvz:4/kingpvz-%D0%BF%D1%80%D0%B8%D0%B2%D0%B5%D1%82-%28privet%29-feat.-2:1",
                    spotify: "https://open.spotify.com/track/0xfxSDuPsuUWi2rClDhOxE?si=48471dc1fba14a2a",
                    itunes: "https://music.apple.com/us/song/%D0%BF%D1%80%D0%B8%D0%B2%D0%B5%D1%82-instrumental-version/1833459523"
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
                spotify: "https://open.spotify.com/album/2fcfmTztW4l2D1a8ju6jsx?si=P3W0zu_aQ1aodFw9cdFevQ",
                itunes: "https://music.apple.com/us/album/protocol-single/1831455827",
                deezer: "https://link.deezer.com/s/30GRCh0A2qM9yp7yx5xvR",
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
                spotify: "https://open.spotify.com/album/3gPUy34K18bbD9djErM5Q8?si=pSvf4NkWQ6qdFGkwdaXFcg",
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
                spotify: "https://open.spotify.com/album/3U7eepw33pJXR5C1xxtZOe?si=eL1S0hlOQE2NmoK_-9Lw5w",
                deezer: "https://link.deezer.com/s/30GSuNEgbxgKnmrjQUpB8",
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
                spotify: "https://open.spotify.com/track/71qLW7KY4OTOUDgIfS0dLi?si=24516a87d9c448af",
                itunes: "https://music.apple.com/us/song/roaring-in-the-20s/1831378555",
                deezer: "https://link.deezer.com/s/30FiMKU6S2wuJML8chhvp"
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
                spotify: "https://open.spotify.com/track/687FfKEw5lSgKtMDdgX1gm?si=f60a8c7bb91f4f95",
                deezer: "https://link.deezer.com/s/30GTnatnlKhZ1A3YRINEY",
                ng: "https://www.newgrounds.com/audio/listen/1413461",
                itunes: "https://music.apple.com/us/song/sharpington/1832223331"
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
                    spotify: "https://open.spotify.com/album/5GHpaBwC5ctC6O6fMEn7zA?si=V4aO875GQLCUzUx7k38cWg",
                    itunes: "https://music.apple.com/us/album/skibidi-toilet-single/1832227755",
                    deezer: "https://link.deezer.com/s/30R920p9MUPBUv6qehnuK"
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
                spotify: "https://open.spotify.com/album/05aouHgfZSTSqJbpA5qHSe?si=4P_iPm4OT9Cr-gm0kBpb9Q",
                itunes: "https://music.apple.com/us/album/spider-dance-hardbass-remix-single/1579363602",
                deezer: "https://link.deezer.com/s/30R974Nnw8eB07ahLpoBX",
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
                spotify: "https://open.spotify.com/track/125i1F4wQAXfKiTQIvJWeh?si=90f0f528829d4c9a",
                deezer: "https://link.deezer.com/s/30GT6fuT4tgsQ9Sux3iWH",
                odysee: "https://odysee.com/@kingpvz:4/ocular-nebula-stay-inside-me-%28hardbass:4",
                itunes: "https://music.apple.com/us/song/stay-inside-me/1832223423"
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
                spotify: "https://open.spotify.com/album/1snKNqfjMB8Vak094LlnLb?si=1SNMvuDNTCuSghC6T9XpNw",
                itunes: "https://music.apple.com/us/album/steppin-sides-single/1831450924",
                deezer: "https://link.deezer.com/s/30GRxGrEPLKUogZpJkT2L",
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
                spotify: "https://open.spotify.com/track/7b0cauiVUg2Uuf9MNkWERj?si=fdbef149bfe14863",
                deezer: "https://link.deezer.com/s/30GSR8iysjc9JYy5iXH5B",
                odysee: "https://odysee.com/@kingpvz:4/forever-bound-stereo-madness-%28hardbass:5",
                ng: "https://www.newgrounds.com/audio/listen/1458166",
                itunes: "https://music.apple.com/us/song/stereo-madness/1832223402"
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
                spotify: "https://open.spotify.com/track/52YrFi5UtNx96alLszsglO?si=fa7c8db74eca45fd",
                deezer: "https://link.deezer.com/s/30GTfnRsT4ayQWJ8UXV5S",
                ng: "https://www.newgrounds.com/audio/listen/1413446",
                itunes: "https://music.apple.com/us/song/stormstep/1832223322"
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
                spotify: "https://open.spotify.com/album/3wi9V29INSZx2JMysp7VQa?si=3cNssvQuQo2Ou5Ds831ATw",
                itunes: "https://music.apple.com/us/album/stroke-single/1831445492",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-stroke-metalcord-hardbass:b",
                deezer: "https://link.deezer.com/s/30GSxmCLxbvqGA4e1lAK9"
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
                spotify: "https://open.spotify.com/album/0cYBoDaCAbutc7IMZcWpTd?si=Qm5qpjCuQ9SXQHES_f0pUA",
                soundcloud: "https://soundcloud.com/kingpvz/swingibass?si=87cabe6ac4c54f59b9e6aef597c6aa72&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
                itunes: "https://music.apple.com/us/album/swingibass-single/1552257496",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-swingibass-%28hardbass-swing%29-4k:9",
                deezer: "https://link.deezer.com/s/30R9dPyIEoyE1pnphON2O"
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
                spotify: "https://open.spotify.com/album/2ElHWKHjyoJLhWg1VXVBgD?si=eCgR7tBHT76lljaEIwJW_g",
                itunes: "https://music.apple.com/us/album/synthesis-single/1831449954",
                deezer: "https://link.deezer.com/s/30GSnNRNhTvcfX7QpEIFV",
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
                spotify: "https://open.spotify.com/album/3JaKL7DNKv8DoGeHPakSQC?si=xWy2eci9S7aMDnGp5A825g",
                itunes: "https://music.apple.com/us/album/tear-it-up-single/1831451311",
                deezer: "https://link.deezer.com/s/30GRvZHD1iLzt65v3Fmfc",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-tear-it-up-electro-swing:3",
                bili: "https://www.bilibili.com/video/BV1ex4y1y7nF/"
            },
            alt: [
                {
                    name: "Extended Version",
                    youtube: "https://www.youtube.com/watch?v=3HKCVNXBOcg",
                    spotify: "https://open.spotify.com/track/3ltOLP8a18RIHt2NWRkP9d?si=e1cd7436cc634a1b",
                    itunes: "https://music.apple.com/us/song/tear-it-up-extended-version/1831378563",
                    deezer: "https://link.deezer.com/s/30FiJMlvaT3KZRTaMSFuI"
                }
            ]
        }
    },
    {
        title: "The 8th Sea",
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
                spotify: "https://open.spotify.com/track/3nATdyQhUP1J0bSFi2okrT?si=2e74622f88d844d3",
                deezer: "https://link.deezer.com/s/30GTdWc4H3UViVCR8sWNc",
                ng: "https://www.newgrounds.com/audio/listen/1413445",
                itunes: "https://music.apple.com/us/song/the-city-of-no-dip/1832223321"
            },
            alt: [
                {
                    name: "Extended Mix",
                    youtube: "https://www.youtube.com/watch?v=xrLUQLzxdEw",
                    spotify: "https://open.spotify.com/track/1l8gTVuTbdAzf9Glxp5nHS?si=cbc37d6422324a4d",
                    deezer: "https://link.deezer.com/s/30GTefMG8strodR9APhwm",
                    ng: "https://www.newgrounds.com/audio/listen/1413465",
                    itunes: "https://music.apple.com/us/song/the-city-of-no-dip-extended-mix/1832223457"
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
                spotify: "https://open.spotify.com/album/44nftMeFFSBoOf2pTd2Mwp?si=fxFGYmi5Q-q84HKJue7gHw",
                itunes: "https://music.apple.com/us/album/the-feeling-when-you-squat-single/1567944313",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-the-feeling-when-you-squat:8",
                deezer: "https://link.deezer.com/s/30R99cSYzwIHwcAda5znH"
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
                ng: "https://www.newgrounds.com/audio/listen/1254156",
                spotify: "https://open.spotify.com/album/1aZQp2AykaYOT5aPndvrCV?si=OyCwWPL7SF6eG7KScV_lhw",
                deezer: "https://link.deezer.com/s/30GShkiiLjDTmXxDZLYzL",
                itunes: "https://music.apple.com/us/album/the-field-of-hopes-and-dreams-single/1831453281"
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
                spotify: "https://open.spotify.com/track/3mhP6V8WMPY44Vabt3tbPE?si=e93fd9c759b7433c",
                deezer: "https://link.deezer.com/s/30GTlimXoTIhw8gA2b5dp",
                ng: "https://www.newgrounds.com/audio/listen/1413456",
                itunes: "https://music.apple.com/us/song/the-grace-of-the-dip/1832223329"
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
                spotify: "https://open.spotify.com/track/2zXmxCAJfO4WGjryciQf6z?si=cfa400d939e74a81",
                deezer: "https://link.deezer.com/s/30GThFB6gVfi3Hi9ASk4e",
                ng: "https://www.newgrounds.com/audio/listen/1413448",
                itunes: "https://music.apple.com/us/song/the-world-under-us/1832223324"
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
                spotify: "https://open.spotify.com/track/1PscuLsNCbOur2Gcj3UtjC?si=820a621312d540a3",
                deezer: "https://link.deezer.com/s/30GSZ65lKvR43tx2wLaLQ",
                odysee: "https://odysee.com/@kingpvz:4/dj-nate-theory-of-everything-%28hardbass:8",
                itunes: "https://music.apple.com/us/song/theory-of-everything/1832223413"
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
                spotify: "https://open.spotify.com/track/60YF7QAXjcel7p7UsKGjan?si=04a84771986342e9",
                deezer: "https://link.deezer.com/s/30GT3IDAyStjCOl0iPK7G",
                odysee: "https://odysee.com/@kingpvz:4/dj-nate-theory-of-everything-2-%28hardbass:4",
                itunes: "https://music.apple.com/us/song/theory-of-everything-ii/1832223419"
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
                spotify: "https://open.spotify.com/track/7nPZ5gq6OP580sauN0iJrL?si=7a886336facd4a61",
                deezer: "https://link.deezer.com/s/30GSWnJ5rVc5vU6SAIhmJ",
                odysee: "https://odysee.com/@kingpvz:4/waterflame-time-machine-%28hardbass-remix:c",
                itunes: "https://music.apple.com/us/song/time-machine/1832223409"
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
                spotify: "https://open.spotify.com/album/3XGd0j3CEoG1t1i7lbQzZw?si=_nw9TPPuSqSZMWQm5zeVvQ",
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
                spotify: "https://open.spotify.com/album/6e4HDel5TXkZCOnR7e9l6B?si=O-keAjliR6e2_I8TM6pPiA",
                itunes: "https://music.apple.com/us/album/untitled-single/1831444876",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-untitled-%28untitled-hardbass-2020:5",
                deezer: "https://link.deezer.com/s/30GSEvioa2BknhrQzeS7o"
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
                spotify: "https://open.spotify.com/album/6LBrQbdrnkfxR7OteXhp9A?si=2AouGy1gQIOysaPuLKuwKw",
                itunes: "https://music.apple.com/us/album/untitled-2-single/1831450621",
                deezer: "https://link.deezer.com/s/30GSjlfeTdLtTGqQ7GXTo",
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
    {
        title: "Vodka",
        genre: "hardbass:Hardbass",
        album: "none",
        year: 2021,
        originality: "original",
        lyrics: "inst",
        explicit: false,
        cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02c7e8b4426d8ba417f9c2e05c",
        link: {
            base: {
                spotify: "https://open.spotify.com/album/2OdyYf60jxUfGJNoiGC1Wb?si=atSdZsehQtqI5rRj3BURrA",
                youtube: "https://youtu.be/72jaMnTPo1k",
                itunes: "https://music.apple.com/us/album/vodka-single/1561236066",
                odysee: "https://odysee.com/@kingpvz:4/kingpvz-vodka-%28kingpvz-styled-hardbass%29:e"
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
                spotify: "https://open.spotify.com/track/7d4eEz8y9OUBF2liBUOAzC?si=a16a01b651b94fd2",
                deezer: "https://link.deezer.com/s/30GSXGGIU9l1lZbuwTrXB",
                odysee: "https://odysee.com/@kingpvz:4/djvi-xstep-%28hardbass-remix-by-kingpvz%29:b",
                itunes: "https://music.apple.com/us/song/xstep/1832223411",
                newgrounds: "https://www.newgrounds.com/audio/listen/1465044"
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
