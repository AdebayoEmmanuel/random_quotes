console.log("script loaded");
let btn = document.getElementById("btn-click");
let body = document.getElementById("bod");
let bgImage = body.style.backgroundImage;
btn.onclick = function () {
    console.log(bgImage)
if (bgImage === 'url("/random_quotes/images/bg1.jpg")') {
    body.style.backgroundImage = 'url("/random_quotes/images/bg2.jpg")';
    bgImage = body.style.backgroundImage;
}
 else if (bgImage === 'url("/random_quotes/images/bg2.jpg")') {
    body.style.backgroundImage = 'url("/random_quotes/images/bg3.jpg")';
    bgImage = body.style.backgroundImage;
}
else if (bgImage === 'url("/random_quotes/images/bg3.jpg")') {
    body.style.backgroundImage = 'url("/random_quotes/images/bg4.jpg")';
    bgImage = body.style.backgroundImage;
}
else if (bgImage === 'url("/random_quotes/images/bg4.jpg")') {
    body.style.backgroundImage = 'url("/random_quotes/images/bg1.jpg")';
    bgImage = body.style.backgroundImage;
}
}