var main = document.querySelector(".main")
var searchinp = document.querySelector(".searchinp")
var left = document.querySelector(".left")
var list = document.querySelector(".list")
var listicons = document.querySelector(".listicons")
var righthand = document.querySelector(".righthand")

async function searchData(a) {
    var res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${a}&type=video&key=AIzaSyA2YZKo5xi7ONczJP8MGGl2a98QQn-nC5o`)
    var data = await res.json()
    createEle(data.items)
}

async function search() {
    var res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${searchinp.value}&type=video&key=AIzaSyA2YZKo5xi7ONczJP8MGGl2a98QQn-nC5o`)
    var data = await res.json()
    createEle(data.items)
}

function createEle(data) {
    main.textContent = ""
    data.forEach(ele => {
        var d1 = document.createElement("div")
        d1.setAttribute("class", "d1")
        var img1 = document.createElement("div")
        var title = document.createElement("div")
        title.setAttribute("class", "title")
        img1.setAttribute("class", "img1")
        img1.innerHTML = `<iframe src="https://www.youtube.com/embed/${ele.id.videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        title.innerHTML = `
        <p><b>${ele.snippet.title}</b></p>
        <p>${ele.snippet.channelTitle}</p>
        `
        d1.append(img1, title)
        main.append(d1)
    });
}

search()