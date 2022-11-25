var html = document.documentElement;
var script = document.createElement("script")
script.src = "fontfaceobserver.js";
script.async = true;

script.onload = function () 
{
    var serif = new FontFaceObserver("serif");
    var geogia = new FontFaceObserver("Geogia");
    var timeout = 2000;

    Promise.all([
        serif.load(null, timeout),
        geogia.load(null, timeout)
    ]).then(function () {
        html.classList.add("fonts-loaded");
    }).catch(function (e) {
        html.classList.add("fonts-failed");
    });
}

document.head.appendChild(script);