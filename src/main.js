let imagen = document.getElementById('imagen');
let hi = document.getElementById('hi');
let name = document.getElementById('name');
const apicall = () => {
    let randomNumber = Math.floor((Math.random() * randomMovieArray.length - 1) + 1);
    let randomMovie = randomMovieArray[randomNumber];
    fetch('http://www.omdbapi.com/?t=' + encodeURI(randomMovie) + '&apikey=691b66e1')
        .then(res => {
            return res.json();
        })
        .then(data => {
            let image = data.Poster;
            if (image !== 'N/A') {
                imagen.src = image;
            }
            hi.innerHTML=data.Plot;
            name.innerHTML=data.Title;
        })
};

const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    apicall();
});